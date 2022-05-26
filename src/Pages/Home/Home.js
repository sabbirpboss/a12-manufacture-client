import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BSummery from './BSummery';
import News from './News';
import Products from './Products';
import Review from './Review';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Digitaz LTD.</title>
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