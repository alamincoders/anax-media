import React from 'react';
import {styles} from "../../Utils/Styles.js";

const WhyChooseUs = () => {
    return (
        <section className='py-[40px] w-full flex'>
            <article className='bg-[#FBFBFB] p-[60px] flex flex-col justify-center relative'>

                <img src='/badge.png' alt='badge' className='w-[180px] absolute right-0 top-0'/>

                <h1 className='text-[40px] font-[700] leading-[60px]'>Why Choose Us</h1>
                <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mt-[5px] mb-[30px] w-[80%]'>
                    We’re pretty good at marketing, but what we’re great at is rolling up our sleeves and finding out the most effective ways to help your business grow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>

                <div className='flex flex-col gap-[15px]'>
                    <div className='flex items-center gap-[8px]'>
                        <img src='/Icons/check-circle.png' alt='icon' className='w-[20px]'/>
                        <h3 className='text-[20px] font-[600]'>Supportive</h3>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <img src='/Icons/check-circle.png' alt='icon' className='w-[20px]'/>
                        <h3 className='text-[20px] font-[600]'>Challenging</h3>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <img src='/Icons/check-circle.png' alt='icon' className='w-[20px]'/>
                        <h3 className='text-[20px] font-[600]'>Benefits + Wellness</h3>
                    </div>
                </div>
            </article>
            <img src='/aboutus-2.png' alt='image' className='w-[700px]'/>
        </section>
    );
};

export default WhyChooseUs;
