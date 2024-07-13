import React from 'react';

// components
import Navbar from "../Shared/Navbar.jsx";
import Header from "../Shared/Header.jsx";
import Footer from "../Shared/Footer.jsx";
import NewsLetter from "../Components/Home/NewsLetter.jsx";
import Service from "../Components/Service/Services.jsx";

const ServicePage = () => {
    return (
        <>
            <Navbar active={3}/>
            <Header title='Our Services' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores esse temporibus actium quas soluta quis sed rerum.'/>
            <Service/>
            <NewsLetter/>
            <Footer/>
        </>
    );
};

export default ServicePage;