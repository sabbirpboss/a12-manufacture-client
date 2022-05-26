import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BSummery from './BSummery';
import Contact from './Contact';
import News from './News';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Industo LTD.</title>
            </Helmet>
            <Banner />
            <Products />
            <BSummery />
            <News />
            <Review />
            <Contact />
        </>
    );
};

export default Home;