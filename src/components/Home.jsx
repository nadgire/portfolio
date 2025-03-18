import React, { useEffect, useRef } from 'react'
import profile from '../assets/images/profile-min.png'
import wave from '../assets/images/Waving_Hand_Sign_Emoji_Icon_ios10_medium.avif'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import SkillAnimation from './SkillAnimation';
import VanillaTilt from 'vanilla-tilt';
import { BackgroundBeamsWithCollision } from './BackgroundBeamsWithCollision';

const Home = () => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
                glare: true,
                'max-glare': 0.5,
            });
        }
        // Cleanup function to destroy the VanillaTilt instance when the component unmounts
        return () => {
            if (tiltRef.current && tiltRef.current.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, []);

    return (

        <section id="home" className='h-auto lg:h-screen bg-[#EDF2F4] pt-16 text-shadow-sm whitespace-nowrap relative'>
            <BackgroundBeamsWithCollision className={"absolute bg-transparent z-10"} />
            <div className='w-[80%] flex items-center h-full mx-auto flex-col lg:flex-row'>
                <div className='lg:w-4/7 items-center flex justify-center mt-5 lg:mt-0'>
                    <img ref={tiltRef} src={profile} alt="" className='h-[250px] w-[210px] md:h-[300px] md:w-[260px] lg:h-[450px] lg:w-[380px]' data-tilt />
                </div>
                <div className='lg:w-3/7 text-xl md:text-2xl lg:text-3xl text-[#071287] space-y-5 md:space-y-5 lg:space-y-5'>
                    <div className='space-y-5 md:space-y-2 lg:space-y-5'>
                        <div className='flex space-x-2 items-center mt-5 lg:mt-0'>
                            <p>Hello Folks</p>
                            <img src={wave} alt="" className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-wave' />
                            <p>,</p>
                        </div>
                        <p>{`I'm `}
                            <span className='text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-bold text-orange-400 text-shadow'>
                                {`Abhishek Nadgire`}
                            </span>
                        </p>
                        <div className='space-y-5 md:space-y-2 lg:space-y-5'>
                            <div className='flex items-center relative'>
                                I am a
                                <span className='flex items-center absolute left-16 md:left-20 lg:left-[100px] text-black '>
                                    <SkillAnimation />|
                                </span>
                            </div>
                            <p className='whitespace-break-spaces'>Welcome to my profile, and feel at home!</p>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <a href="https://drive.google.com/file/d/1NXZqoavgir9hAuXovtUIeoCAsMywPIVW/view?usp=drive_link" target='_blank' className='z-10'>
                            <button className='mx-auto md:mx-0 font-semibold text-[14px] md:text-[18px] lg:text-xl bg-gradient-to-r from-blue-500 to-blue-900 text-white flex items-center px-6 py-2 rounded-lg gap-2 cursor-pointer thunder-effect'>
                                Resume
                                <FaArrowAltCircleDown />
                            </button>
                        </a>

                    </div>
                    <div className='flex flex-wrap lg:flex-nowrap lg:space-x-3 lg:flex-row justify-around space-y-5'>
                        <a href="https://www.linkedin.com/in/abhishek-nadgire/" target='_blank' className='w-1/4 sm:w-auto flex justify-center cursor-pointer z-10'>
                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <FaLinkedin className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                        <a href="https://github.com/nadgire" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <FaGithub className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                        <a href="https://leetcode.com/u/nadgire/" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <SiLeetcode className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                        <a href="mailto:abhinadgire@gmail.com" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <MdDrafts className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                        <a href="https://wa.me/+919579318107" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <FaWhatsapp className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                        <a href="https://x.com/abhinadgire" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <FaTwitter className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                        <a href="https://t.me/nadgire" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>

                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <FaTelegramPlane className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/nadgire_" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
                            <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                                <FaInstagram className='mx-auto text-[#01d8ff] text-2xl' />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Home
