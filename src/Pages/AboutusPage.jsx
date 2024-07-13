import React from 'react';

// components
import Header from "../Shared/Header.jsx";
import Footer from "../Shared/Footer.jsx";
import Team from "../Components/Home/Team.jsx";
import AboutCompany from "../Components/About/AboutCompany.jsx";
import Navbar from "../Shared/Navbar.jsx";

const AboutusPage = () => {
    return (
        <>
            <Navbar active={2}/>
            <Header title='About Us' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores esse temporibus actium quas soluta quis sed rerum.'/>
            <AboutCompany/>
            <Team/>
            <Footer/>
        </>
    );
};

export default AboutusPage;