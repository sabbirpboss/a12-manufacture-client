import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BSummery from './BSummery';
import Contact from './Contact';
import News from './News';
import Products from './Products';
import Review from './Review';
import Services from './Services/Services';
import Showcase from './Showcase/Showcase';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - FriendsMoto LTD</title>
            </Helmet>
            
            <Banner />
            <Services />
            <Showcase />
            <Products />
            <BSummery />
            <News />
            <Review />
            <Contact />
        </div>
    );
};

export default Home;