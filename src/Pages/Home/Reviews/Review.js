import React, { useEffect, useState } from 'react';
import './Review.css';
import defaultUser from '../../Images/userDefault2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as star } from '@fortawesome/free-regular-svg-icons'
const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://calm-dusk-84501.herokuapp.com/Reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])









    return (
        <section className="container my-5">
            <div>
                <h1 className="text-center">Reviews</h1>
            </div>
            <div className="row">
                {
                    reviews.map(review => <div className="col-md-4 p-3">
                        <div className="shadow p-3 review-card">
                            <div className="d-flex justify-content-around align-items-center">
                                {
                                    review.image ?
                                        <img style={{ width: '80px', borderRadius: '50%' }} src={review.image} alt="" />
                                        :
                                        <img style={{ width: '80px', borderRadius: '50%' }} src={defaultUser} alt="" />
                                }
                                <div>
                                    <h3>{review.name}</h3>
                                </div>
                            </div>
                            <div className="mt-3 reviews">
                                <p>{review.review}</p>
                            </div>
                            <div>

                                {
                                    review.stars == 1 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }

                                {
                                    review.stars > 1 && review.stars <= 1.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }
                                {
                                    review.stars == 2 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }
                                {
                                    review.stars > 2 && review.stars <= 2.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }
                                {
                                    review.stars == 3 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }
                                {
                                    review.stars > 3 && review.stars <= 3.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }
                                {
                                    review.stars == 4 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }
                                {
                                    review.stars > 4 && review.stars <= 4.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }
                                {
                                    review.stars == 5 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>{review.stars}</span>
                                    </div>
                                }

                            </div>

                        </div>
                    </div>)
                }
            </div>
        </section >
    );
};

export default Review;