from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import permissions, status
from rest_framework import status, viewsets
from .serializers import UserListSerializer, MovieSerializer, PlanSerializer, SubscriptionSerializer, UserRegisterSerializer, ShortVideoSerializer, PaymentSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Plan, Subscription, Movie, ShortVideo, Payment
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from django.utils import timezone
from datetime import timedelta
from django.http import JsonResponse
import razorpay
from django.conf import settings
import datetime




# Create your views here.

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def Register(request):
    # Validate the input data
    serializer = UserRegisterSerializer(data=request.data)

    if serializer.is_valid():
        # Check if the user already exists
        username = serializer.validated_data.get('email')
        email = serializer.validated_data.get('email')
        if User.objects.filter(username=username).exists():
            return Response({"error": "This username already exists."}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(email=email).exists():
            return Response({"error": "An account with this email already exists."}, status=status.HTTP_400_BAD_REQUEST)

        # Save the user if validation passes
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        # Create notification
        return Response({
            "message": "Signup successful!",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

    # Return errors if validation fails
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')  # Use username instead of email
    password = request.data.get('password')

    # Authenticate the user
    user = authenticate(request, username=username, password=password)

    if user is not None:
        # If authentication is successful, generate a token
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user_id': user.id,
            'email': user.email,
        }, status=status.HTTP_200_OK)
    else:
        # If authentication fails
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    parser_classes = (MultiPartParser, FormParser) 


@api_view(['GET'])
def user_list(request):
    # Fetch all users
    users = User.objects.all()

    # Serialize the users
    serializer = UserListSerializer(users, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


# For blocking and deleting users
@api_view(['POST'])
def user_action(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    action = request.data.get('action', None)
    
    if action == 'block':
        user.profile.status = 'blocked'  # Assuming a status field in Profile model
        user.save()
        return Response({"message": "User blocked"}, status=status.HTTP_200_OK)

    elif action == 'delete':
        user.delete()
        return Response({"message": "User deleted"}, status=status.HTTP_200_OK)

    else:
        return Response({"error": "Invalid action"}, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET'])
def user_detail(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        profile = user.profile  # assuming a related Profile model for additional user info

        user_data = {
            "profile_info": {
                "name": user.username,
                "email": user.email,
                "phone_number": profile.phone_number,
            },
            "subscription_details": {
                "plan": profile.subscription_plan.name,  # assuming plan exists in Profile
                "renewal_date": profile.renewal_date,
                "payment_history": profile.payment_history,  # assuming stored as a list or related model
            },
            "watch_history": profile.watch_history,  # assuming stored as a list
            "engagement_stats": profile.engagement_stats,  # assuming stored as a list
        }

        return Response(user_data, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


class PlanViewSet(ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
    
class SubscriptionViewSet(viewsets.ModelViewSet):
    serializer_class = SubscriptionSerializer

    def get_queryset(self):
        return Subscription.objects.filter(user=self.request.user)

    @action(detail=True, methods=['post'])
    def subscribe(self, request, pk=None):
        user = request.user
        plan = Plan.objects.get(pk=pk)
        start_date = timezone.now().date()
        end_date = start_date + timedelta(days=plan.duration)
        
        # Create the subscription
        subscription = Subscription.objects.create(
            user=user,
            plan=plan,
            start_date=start_date,
            end_date=end_date,
            is_active=True  # Mark it as active
        )
        
        return Response({'message': 'Subscription created'}, status=status.HTTP_201_CREATED)

# ----------payment===
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

    @action(detail=True, methods=['post'])
    def process_payment(self, request, pk=None):
        subscription = Subscription.objects.get(pk=pk)
        payment_method = request.data.get('payment_method')
        payment = Payment.objects.create(
            subscription=subscription, 
            amount=subscription.plan.price, 
            payment_method=payment_method, 
            payment_status='success'
        )
        subscription.is_active = True
        subscription.save()
        return Response({'message': 'Payment successful'}, status=status.HTTP_200_OK)
# Upload short video
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def upload_short_video(request):
    serializer = ShortVideoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# List all short videos of a user
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def list_user_videos(request):
    videos = ShortVideo.objects.filter(user=request.user)
    serializer = ShortVideoSerializer(videos, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Delete short video
@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated])
def delete_short_video(request, video_id):
    try:
        video = ShortVideo.objects.get(id=video_id, user=request.user)
        video.delete()
        return Response({"message": "Video deleted successfully."}, status=status.HTTP_200_OK)
    except ShortVideo.DoesNotExist:
        return Response({"error": "Video not found or you don't have permission to delete this video."}, status=status.HTTP_404_NOT_FOUND)
    
    
    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

# def create_order(request, plan_id):
#     if request.method == 'POST':
#         # Get the plan
#         plan = Plan.objects.get(id=plan_id)
#         # Create a new subscription for the user
#         subscription = Subscription.objects.create(
#             user=request.user,
#             plan=plan,
#             start_date=datetime.now(),
#             is_active=False
#         )
#         # Create a Razorpay order
#         order_amount = int(plan.price * 100)  # Amount in paise
#         order_currency = 'INR'
#         order_receipt = f'order_rcptid_{subscription.id}'
#         razorpay_order = client.order.create({
#             'amount': order_amount,
#             'currency': order_currency,
#             'receipt': order_receipt,
#             'payment_capture': '1'
#         })
#         # Save the Razorpay order ID
#         payment = Payment.objects.create(
#             subscription=subscription,
#             amount=plan.price,
#             payment_method=request.POST.get('payment_method'),
#             razorpay_order_id=razorpay_order['id'],
#             payment_status='pending'
#         )

#         # Return order details to frontend
#         return JsonResponse({
#             'razorpay_order_id': razorpay_order['id'],
#             'amount': order_amount,
#             'currency': order_currency,
#             'key': settings.RAZORPAY_KEY_ID,
#             'subscription_id': subscription.id
#         })
# @csrf_exempt
# def verify_payment(request):
#     if request.method == "POST":
#         data = request.POST
#         try:
#             # Verify the payment signature
#             client.utility.verify_payment_signature({
#                 'razorpay_order_id': data['razorpay_order_id'],
#                 'razorpay_payment_id': data['razorpay_payment_id'],
#                 'razorpay_signature': data['razorpay_signature']
#             })
            
#             # Update payment and subscription status
#             payment = Payment.objects.get(razorpay_order_id=data['razorpay_order_id'])
#             payment.razorpay_payment_id = data['razorpay_payment_id']
#             payment.razorpay_signature = data['razorpay_signature']
#             payment.payment_status = 'success'
#             payment.save()
            
#             # Activate the subscription
#             payment.subscription.is_active = True
#             payment.subscription.save()
            
#             return JsonResponse({'status': 'Payment verified successfully.'})
#         except razorpay.errors.SignatureVerificationError:
#             return JsonResponse({'status': 'Payment verification failed.'}, status=400)