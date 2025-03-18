import React, { useState, useEffect } from 'react';
import Home from './Home';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import ContactMe from './ContactMe';
import { FaAngleUp } from "react-icons/fa";

const Hero = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Home />
            <Aboutme />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <ContactMe />

            {showButton && (
                <button onClick={scrollToTop} className='fixed bottom-6 right-6 rounded-full bg-blue-700 p-2 cursor-pointer text-white' >
                    <FaAngleUp className='text-2xl' />
                </button>
            )}
        </div>
    );
};

export default Hero;
