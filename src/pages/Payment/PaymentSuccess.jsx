import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import axios from 'axios'
import { CheckCircle } from 'lucide-react';
const PaymentSuccess = () => {
    const [searchParams]=useSearchParams()
    
    const sessionId= searchParams.get('session_id')
    console.log(sessionId)
    useEffect(()=>{
        if(sessionId){
             axios.post(`${import.meta.env.VITE_API_URL}/payment-success`,{sessionId})
      
        }
    },[sessionId])
    return (
        <div>
          <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-lg p-8 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful 🎉
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your payment has been completed successfully.  
          You can now manage your scholarship from your dashboard.
        </p>

        {/* Button */}
        <Link to="/dashboard/my-orders">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-300">
            Go to My Scholar
          </button>
        </Link>

      </div>
    </div>
        </div>
    );
};

export default PaymentSuccess;