import React from 'react';
import paymentImage from '../../../Images/Payment.svg';
import './Payment.css';

const Payment = () => {
    return (
        <div className='mt-5 text-center'>
            <img style={{ width: '80%' }} src={paymentImage} alt="" />
            <h1 className='payment-text'>Payment Option Comming Soon!</h1>
        </div>
    );
};

export default Payment;