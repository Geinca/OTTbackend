import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './subscriptionplan.module.css';

const SubscriptionPlans = () => {
  const [plans, setPlans] = useState([]); // Plans from backend
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [finalPrice, setFinalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  

  // Fetch subscription plans from the backend
  useEffect(() => {
    const fetchPlans = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
          console.error('No token found. Please log in.');
          return;
      }
   // Retrieve token from local storage

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/plans/', {

          headers: {
            Authorization: `Bearer ${token}`, // Replace yourToken with your actual token
            'Content-Type': 'application/json',
          },
        });
        setPlans(response.data);
        setIsLoading(false); // Mark loading as false once the data is fetched
        setSuccess('Subscription successful!');


      } catch (error) {
        // Check if the error response is available
        if (error.response) {
            console.error('Error fetching plans:', error.response.data);
            // You can also access the status code
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error fetching plans: No response received', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error fetching plans:', error.message);
        }
    }
    };
    fetchPlans();
  }, []);

  const handleCouponApply = () => {
    if (couponCode === 'DISCOUNT100') {
      setFinalPrice(finalPrice - 100);
    } else {
      alert('Invalid coupon code');
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setFinalPrice(plan.price);
  };

  const handleSubscribe = async () => {
    if (!selectedPlan) {
      alert('Please select a plan');
      return;
    }
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
          console.error('No token found. Please log in.');
          return;
      }
      // Send selected plan to backend to create a subscription
      const response = await axios.post('http://localhost:8000/api/subscriptions/', 
      {
        plan: selectedPlan.id,  // Assuming your backend expects `plan_id`
        payment_method: 'credit_card',  // You can update this based on the user's selection
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,  // Correctly passing the token in the headers
        },
      });

      if (response.status === 201) {
        alert('Subscription successful! Enjoy your content.');
      }
    } catch (error) {
      console.error('Error subscribing', error);
      alert('Error processing subscription');
    }
};


  if (isLoading) {
    return <div>Loading subscription plans...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.subscriptioncontainer}>
        <div className={style.planssection}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${style.plancard} ${selectedPlan && plan.id === selectedPlan.id ? style.selected : ''}`}
              onClick={() => handlePlanSelect(plan)}
            >
              {plan.isBestValue && <div className={style.bestvalue}>BEST VALUE</div>}
              <div className={style.planname}>{plan.plan_name}</div>
              <div className={style.discount}>Duration: {plan.duration}</div>
              <div className={style.originalprice}>Price: ${plan.price}</div> {/* Displaying price */}
              <div className={style.discountedprice}>
  Features: {Array.isArray(plan.features) ? plan.features.join(', ') : plan.features || 'No features available'}
</div>
            </div>
          ))}
        </div>

        <div className={style.couponsection}>
          <input
            type="text"
            placeholder="Apply coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={handleCouponApply}>Apply</button>
        </div>

        <div className={style.paymentsection}>
          <div className={style.finalprice}>Applicable Price: ₹{finalPrice}</div>
          <button className={style.paybtn} onClick={handleSubscribe}>
            Pay ₹{finalPrice}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
