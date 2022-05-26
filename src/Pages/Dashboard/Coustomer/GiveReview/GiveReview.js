import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../../Hoocks/useAuth';
import defaultUser from '../../../Images/userDefault2.png';


const GiveReview = () => {
    const { user } = useAuth();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');
    const [error, setError] = useState(``);


    const handleFromSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }



    const handleReview = e => {
        setReview(e.target.value);
    }

    const handleStars = e => {
        const starValue = e.target.value;
        if (starValue <= 0 || starValue > 5) {
            setError(`Enter Value 1 T0 5`);
        }
        else {
            setStars(starValue);
        }
    }

    const image = user.photoURL;
    const name = user.displayName;

    const data = { name, review, stars, image };




    const handleReviewSubmit = () => {

        if (name === '' || review === '') {
            setError(`You Can't Empty Any Feild`)
        }
        else if (stars === '') {
            setError(`Enter Value 1 T0 5`);
        }
        else {
            axios.post('https://calm-dusk-84501.herokuapp.com/Reviews', data)
                .then(res => {
                    // console.log(res);
                })
            setError(``);
            setStars('');
            setReview('');
        }
    }






    return (
        <main style={{ width: '80%' }}>

            <div className="mt-5">

                <h1 className='text-center'>Submit Your Review</h1>
                <br />
                <div className='text-center'>
                    {
                        user.photoURL ?
                            <img src={user.photoURL} alt="" style={{ width: '150px', borderRadius: '50%' }} />
                            :
                            <img src={defaultUser} alt="" style={{ width: '150px', borderRadius: '50%' }} />
                    }
                </div>

                <form onSubmit={handleFromSubmit}>
                    <label className="fs-5 fw-bold text-secondary">Name</label>
                    <input className="form-control" placeholder={user.displayName} required name="name" disabled />
                    <br />
                    <label className="fs-5 fw-bold text-secondary">Review</label>
                    <textarea style={{ height: '100px' }} onBlur={handleReview} className="form-control" placeholder="Review is required" required name="review" />
                    <br />
                    <label className="fs-5 fw-bold text-secondary">Give Start Number 1 to 5</label>
                    <input type='number' onBlur={handleStars} className="form-control" placeholder="Start Number is required" required name="name" step='0.1' min="1" max="5" />
                    <br />
                    <p>{error}</p>
                    <button type="submit" onClick={handleReviewSubmit} className="brandBtn">SUBMIT</button>
                </form>
            </div>
        </main>
    );
};

export default GiveReview;