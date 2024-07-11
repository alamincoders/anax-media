import React, { useState, useEffect } from 'react';

// react icons
import { CiSearch } from "react-icons/ci";

// utils
import { styles } from "../Utils/Styles.js";

// react router dom
import { Link } from "react-router-dom";

const Navbar = () => {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`flex items-center justify-between px-12 py-4 sticky top-0 bg-white transition-shadow ${shadow ? 'shadow-lg' : ''}`}>
            <img src="/logo.png" alt="logo" className='w-[120px]' />
            <ul className='flex items-center gap-[50px]'>
                <li className='navItem'>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className='navItem'>
                    <Link to='/about'>
                        About Us
                    </Link>
                </li>
                <li className='navItem'>
                    <Link to='/services'>
                        Our Services
                    </Link>
                </li>
                <li className='navItem'>
                    <Link to='/contact'>
                        Contact Us
                    </Link>
                </li>
            </ul>

            <div className='flex items-center gap-[20px]'>
                <CiSearch className='text-[1.5rem] cursor-pointer' />
                <button className={`${styles.buttonPrimary}`}>Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
