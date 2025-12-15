import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import axios from 'axios'
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
            <p>payment success</p>
        </div>
    );
};

export default PaymentSuccess;