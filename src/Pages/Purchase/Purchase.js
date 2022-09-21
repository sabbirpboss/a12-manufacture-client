import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderModal from './OrderModal';

const Purchase = () => {

    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [quantity, setQuantity] = useState(0);
    const [order, setOrder] = useState(null);
    const [price, setPrice] = useState(0);

    const { data: product, isLoading, error } = useQuery('purchase', () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }
    const { name, img, minOrder, stock, unitPrice } = product;

    const handleQuantity = (e) => {
        e.preventDefault();

        const quantity = e.target.quantity.value;

        if (quantity >= minOrder && quantity <= stock) {
            setQuantity(quantity)
            const divide = unitPrice / minOrder;
            const price = divide * quantity;
            setPrice(price);
        }
        else {
            toast.error('Please enter a valid quantity!')
        }
        e.target.reset();
    }

    const handleSetOrder = () => {
        const order = { productName: name, userName: user.displayName, email: user.email, quantity, price, paid: false }
        setOrder(order)
    }

    return (
        <div>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-accent'>Purchase</span></h3>
            <div className='flex justify-center items-center my-7 text-white'>
                <div className="card w-80 bg-base-100 shadow-xl bg-gradient-to-r from-accent to-[#2b0a37]">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h4 className='text-sm font-bold'>Unit Price: ${unitPrice}</h4>
                        <p className='text-xs font-bold'>Stock: {stock}</p>
                        <p className='text-xs font-bold'>Minimum Order: {minOrder}</p>
                        {
                            quantity !== 0 && <p>You order quantity: {quantity} <br /> <small className='text-sky-500'>You can change quantity</small></p>
                        }
                        {
                            price !== 0 && <p className='text-xs font-bold'>Total price: ${price}</p>
                        }
                        <form onSubmit={handleQuantity} className='my-2 flex gap-2'>
                            <input type="number" name='quantity' placeholder="Order Quantity" className="input input-bordered input-sm w-full max-w-xs" />
                            <input type='submit' value='Confirm ?' className="btn btn-sm btn-accent" />
                        </form>
                        <div className="card-actions justify-center">
                            <label
                                for="order-modal"
                                disabled={quantity === 0}
                                onClick={handleSetOrder}
                                className="btn btn-accent"
                            >Place Order</label>
                        </div>
                    </div>
                    {order && <OrderModal
                        order={order}
                        setOrder={setOrder}
                    ></OrderModal>}
                </div>
            </div>
        </div>
    );
};

export default Purchase;