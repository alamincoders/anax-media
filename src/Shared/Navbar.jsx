import React from 'react';

// react icons
import { CiSearch } from "react-icons/ci";
import {styles} from "../Utils/Styles.js";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`flex items-center justify-between px-12 py-4`}>
            <img src="/logo.png" alt="logo" className='w-[120px]'/>
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
                <CiSearch className='text-[1.5rem] cursor-pointer'/>
                <button className={`${styles.buttonPrimary}`}>Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;