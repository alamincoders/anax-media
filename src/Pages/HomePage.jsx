import React from 'react';

// components
import Navbar from '../Shared/Navbar.jsx'
import Footer from '../Shared/Footer.jsx'
import Hero from '../Components/Home/Hero.jsx'
import Company from '../Components/Home/Company.jsx'
import Overview from '../Components/Home/Overview.jsx'
import Aboutus from '../Components/Home/Aboutus.jsx'
import OurService from '../Components/Home/OurService.jsx'
import Showcase from '../Components/Home/Showcase.jsx'
import Team from '../Components/Home/Team.jsx'
import WhyChooseUs from '../Components/Home/WhyChooseUs.jsx'
import Testimonials from '../Components/Home/Testimonials.jsx'
import NewsLetter from '../Components/Home/NewsLetter.jsx'

const HomePage = () => {
    return (
        <>
            <Navbar active={1}/>
            <Hero/>
            <Company/>
            <Overview/>
            <Aboutus/>
            <OurService/>
            <Showcase/>
            <Team/>
            <WhyChooseUs/>
            <Testimonials/>
            <NewsLetter/>
            <Footer/>
        </>
    );
};

export default HomePage;