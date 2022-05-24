import React from 'react';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import Footer from './Shared/Footer';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;