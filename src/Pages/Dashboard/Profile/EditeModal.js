import React from 'react';
import { toast } from 'react-toastify';

const OrderModal = ({ profile, refetch, setModalClose }) => {

    const { email, name } = profile;

    const handleUpdate = (e) => {
        e.preventDefault();

        const education = e.target.education.value;
        const location = e.target.location.value;
        const phone = e.target.phone.value;
        const linkedin = e.target.linkedin.value;
        const profile = { education, location, phone, linkedin }

        fetch(`https://powerful-fjord-17237.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                setModalClose('')
                toast.success('Yay! edit Success')
            })
    }

    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Profile Update</span></h3>

                    <form
                        onSubmit={handleUpdate}
                        className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={name} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={email} className="input input-bordered w-full max-w-xs" />

                        <input required type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name="location" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                        <input required type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name="linkedin" placeholder="Linkedin" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Update" className="btn btn-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default OrderModal;