import React from 'react';

// components
import Navbar from "../Shared/Navbar.jsx";
import Header from "../Shared/Header.jsx";
import Footer from "../Shared/Footer.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import OfficeLocation from "../Components/Contact/OfficeLocation.jsx";

const ContactPage = () => {
    return (
        <>
            <Navbar active={4}/>
            <Header title='Contact Us' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores esse temporibus actium quas soluta quis sed rerum.'/>
            <Contact/>
            <OfficeLocation/>
            <Footer/>
        </>
    );
};

export default ContactPage;