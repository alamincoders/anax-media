import React from 'react';

// components
import Navbar from '../Shared/Navbar.jsx'
import Footer from '../Shared/Footer.jsx'
import Hero from '../Components/Home/Hero.jsx'

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Footer/>
        </>
    );
};

export default HomePage;