import React from 'react';
import { toast } from 'react-toastify';

const OrderModal = ({ setModalClose, _id, productName, refetch }) => {

    const handleDelete = () => {

        fetch(`https://powerful-fjord-17237.herokuapp.com/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setModalClose(null);
                toast.success('Delete Success');
                refetch();
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal2" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="delete-modal2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-lg my-4 text-red-500'>Are you sure? for Delete {productName}</p>
                    <button
                        onClick={handleDelete}
                        className='btn btn-xs btn-denger'>Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;