import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddReview = () => {

    const [user] = useAuthState(auth);

    const handleAddReview = (e) => {
        e.preventDefault();
        const ratings = e.target.ratings.value;
        const description = e.target.description.value;
        const img = user?.photoURL;
        const name = user?.displayName;
        const review = { review: ratings, description, img, name }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Yay! Review Added Success')
            })
        e.target.reset()
    }

    return (
        <div>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-accent'>Add Review</span></h3>
            <form
                onSubmit={handleAddReview}
                className='grid grid-cols-1 gap-3 justify-items-center mt-2 text-white'>
                <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                <input type="number" name="ratings" placeholder="Give Ratings Between 1-5" className="input input-bordered w-full max-w-xs" />
                <textarea name='description' className="textarea w-full max-w-xs" placeholder="Description"></textarea>
                <input type="submit" value="Add Review" className="btn btn-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;