import React from 'react';
import bg from '../../Assests/banner-1.jpg';
import { GiSellCard, GiRevolt } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';

const BSummery = () => {
    return (
        <div className='m-6 z-0'>
            <h3 className='text-2xl text-center font-bold mb-8'><span className=' border-b-2 border-accent'>Business Summary</span></h3>
            <div className="card w-full h-full bg-gray-100 shadow-xl image-full">
                <figure><img src={bg} alt="" /></figure>
                <div className="card-body">
                    <div className="stats bg-transparent text-accent-content">

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            <div className="stat flex flex-col items-center justify-center">
                                <span className='stat-value text-accent text-6xl mb-4'><GiSellCard /></span>
                                <span className="stat-value">500+ </span>
                            </div>
                            <div className="stat flex flex-col items-center justify-center">
                                <span className='stat-value text-accent text-6xl mb-4'><GiRevolt /></span>
                                <span className="stat-value">170M+</span>
                            </div>
                            <div className="stat flex flex-col items-center justify-center">
                                <span className='stat-value text-accent text-6xl mb-4'><MdReviews /></span>
                                <span className="stat-value">77k+</span>
                            </div>
                            <div className="stat flex flex-col items-center justify-center">
                                <span className='stat-value text-accent text-6xl mb-4'><BsTools /></span>
                                <span className="stat-value">50+</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSummery;