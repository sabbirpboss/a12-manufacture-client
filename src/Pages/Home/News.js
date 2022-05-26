import React from 'react';

const News = () => {
    return (

        <section className='mt-36 bg-white'>
            <h3 className='text-2xl text-center font-bold my-4'><span className=' border-b-2 border-primary'>Latest News</span></h3>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pt-10'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <span className="indicator-item badge badge-primary">new</span>
                    <figure><img className='h-56' src="https://i.ibb.co/mFVVXDh/post-2.jpg" alt="Movie" /></figure>
                    <div className="card-body w-2/4">
                        <h2 className="card-title">Morbi Interdum Velit Quis Magna Placerat Lobortis Eget</h2>
                        <p>Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Nulla vestibulum ipsum risus, vitae maximus nunc bibendum quis.</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <span className="indicator-item badge badge-primary">new</span>
                    <figure><img className='h-56' src="https://i.ibb.co/YdCjqNj/post-1.jpg" alt="Movie" /></figure>
                    <div className="card-body w-2/4">
                        <h2 className="card-title">Morbi Interdum Velit Quis Magna Placerat Lobortis Eget</h2>
                        <p>raesent eu consequat nibh. Quisqueullamcorper, augue eu fringillasodales, leo metus volutpat risus, vel sollicitudin erat ultricies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;