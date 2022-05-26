import React from 'react';
import ContractUs from '../ContractUs/ContractUs';
import Header from '../Header/Header';
import OurRecentWork from '../OurRecentWork/OurRecentWork';
import OurServices from '../OurService/OurServices';
import Review from '../Reviews/Review';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='headerMain'>
                <Header></Header>
            </div>
            <OurServices></OurServices>
            <OurRecentWork></OurRecentWork>
            <Review></Review>
            <ContractUs></ContractUs>

        </>
    );
};

export default Home;