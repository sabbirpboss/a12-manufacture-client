import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L32XMLrmThrKj6xIRkEAFT3zDLolebbKe6ZSOi4YE14UbXlfMW5i7LVaZuGq4JCakiJqq85A7J7krNZwzZDrxod00NyuKMNeT');

const Payment = () => {

    const { paymentId } = useParams();

    const { data: order, isLoading, error } = useQuery(['orders', paymentId], () => fetch(`http://localhost:5000/orders/${paymentId}`, {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    const { userName, productName, quantity, price } = order;

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-accent'>Payment</span></h3>

            <div className='flex justify-center items-center my-10'>
                <div className="card w-50 max-w-md bg-gray-200 shadow-xl my-12">
                    <div className="card-body">
                        <p className="text-accent text-lg font-bold">Hello! {userName}</p>
                        <h2 className="card-title">Please Pay for {productName}</h2>
                        <p>Quantity: <span className='text-accent font-bold'>{quantity}</span></p>
                        <p className='font-bold'>Please pay: <span className='text-accent '> ${price}</span></p>
                    </div>
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;