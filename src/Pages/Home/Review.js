import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from '../Shared/Loading';
import "./sweperstyle.css";

const Review = () => {

    const { data: reviews, isLoading, error } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    return (
        <div className='mt-24 pb-36 bg-white container mx-auto'>
            <h3 className='text-2xl text-center font-bold my-12'><span className=' border-b-2 border-accent'>Customer Reviews</span></h3>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-2/4">
                {
                    reviews?.slice(0, 20)?.reverse()?.map(({ _id, name, img, description, review }) => (
                        <SwiperSlide key={_id}>
                            <div className="card w-96 bg-gradient-to-r from-accent to-[#2b0a37] text-white">
                                <figure className="px-10 pt-10">
                                    <img src={img} alt="customer" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{name}</h2>
                                    <h3 className='card-title'>Ratings: {review}</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Review;