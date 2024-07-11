import React from 'react';

// components
import Navbar from '../Shared/Navbar.jsx'
import Footer from '../Shared/Footer.jsx'
import Hero from '../Components/Home/Hero.jsx'
import Company from '../Components/Home/Company.jsx'
import Overview from '../Components/Home/Overview.jsx'
import Aboutus from '../Components/Home/Aboutus.jsx'
import OurService from '../Components/Home/OurService.jsx'

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Company/>
            <Overview/>
            <Aboutus/>
            <OurService/>
            <Footer/>
        </>
    );
};

export default HomePage;