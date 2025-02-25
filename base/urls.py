from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MovieViewSet, Register, login, PlanViewSet, SubscriptionViewSet, upload_short_video, list_user_videos, delete_short_video, PaymentViewSet
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


# Create a router and register your viewset
router = DefaultRouter()
router.register(r'movies', MovieViewSet, basename='movie')
router.register(r'plans', PlanViewSet, basename='plan')
router.register(r'subscriptions', SubscriptionViewSet, basename='subscription')
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('register/', Register, name='register'),
    path('login/', login, name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', views.user_list, name='user_list'),  # For the user list
    path('users/<int:user_id>/action/', views.user_action, name='user_action'),  # For blocking 
    path('short_videos/upload/', upload_short_video, name='upload_short_video'),
    path('short_videos/', list_user_videos, name='list_user_videos'),
    path('short_videos/<int:video_id>/delete/', delete_short_video, name='delete_short_video'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Include the router URLs
    path('', include(router.urls)),
]
