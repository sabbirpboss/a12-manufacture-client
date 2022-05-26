import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderModal = ({ order, setOrder }) => {

    const { productName, userName, email, quantity, price } = order;
    const navigate = useNavigate();

    const handleOrder = (e) => {
        e.preventDefault();
        setOrder()

        const address = e.target.address.value;
        const country = e.target.country.value;
        const phone = e.target.phone.value;
        const order = { userName, email, country, address, phone, productName, quantity, price, paid: false }

        fetch('https://powerful-fjord-17237.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Yay! Order Success')
                navigate('/products')
            })
    }

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Order for: {productName}</span></h3>

                    <form
                        onSubmit={handleOrder}
                        className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={userName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="country" placeholder="Country" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Order" className="btn btn-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default OrderModal;