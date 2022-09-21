import React from 'react';

const News = () => {
    return (

        <section className='mt-36 bg-white container mx-auto'>
            <h3 className='text-2xl text-center font-bold my-4'><span className=' border-b-2 border-accent'>Latest News</span></h3>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pt-10 text-white'>
                <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-[#2b0a37] to-accent">
                    <figure><img className='w-44 rounded ml-3' src="https://i.ibb.co/XS79cHt/car3.jpg" alt="newscar" /></figure>
                    <div className="card-body w-2/4">
                        <h2 className="card-title">2023 BMW Alpina XB7 Packs a 630-HP Twin-Turbo 4.4-Liter V-8</h2>
                        <p>A mid-cycle update for BMW’s largest SUV, the X7, earlier this year brought more powerful and efficient engines and a revised front end with squintier headlights sandwiching the vast front grille.</p>
                    </div>
                    <span className="badge badge-[#2b0a37] text-white">new</span>
                </div>
                <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-[#2b0a37] to-accent">
                    <figure><img className='w-44 rounded ml-3' src="https://i.ibb.co/m8krxzL/car.jpg" alt="newscar" /></figure>
                    <div className="card-body w-2/4">
                        <h2 className="card-title">2023 BMW Alpina XB7 Packs a 630-HP Twin-Turbo 4.4-Liter V-8</h2>
                        <p>A mid-cycle update for BMW’s largest SUV, the X7, earlier this year brought more powerful and efficient engines and a revised front end with squintier headlights sandwiching the vast front grille.</p>
                    </div>
                    
                    <span className=" badge badge-[#2b0a37] text-white">new</span>
                </div>
            </div>
        </section>
    );
};

export default News;