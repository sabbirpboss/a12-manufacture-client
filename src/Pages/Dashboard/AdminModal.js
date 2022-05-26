import React from 'react';
import { toast } from 'react-toastify';

const DeleverdModal = ({ setModalClose, _id, name, refetch }) => {

    const handleAdmin = () => {
        const role = { role: 'admin' }
        fetch(`https://powerful-fjord-17237.herokuapp.com/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(role)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                setModalClose(null)
                toast.success('Admin make Success')
            })
    }

    return (
        <div>
            <input type="checkbox" id="admin-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="admin-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-lg my-4 text-red-500'>Are you sure? for make admin {name}</p>
                    <button
                        onClick={handleAdmin}
                        className='btn btn-xs btn-success'>Make admin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleverdModal;