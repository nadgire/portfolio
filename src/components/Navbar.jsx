import React, { useState, useEffect } from 'react';
import logoImage from '../assets/images/logo.png';
import { IoHome } from 'react-icons/io5';
import { BsPersonHeart } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { MdWork, MdEmail } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const navMenuArr = [
  { title: 'Home', href: '#home', menuIcon: IoHome },
  { title: 'About Me', href: '#about-me', menuIcon: BsPersonHeart },
  { title: 'Skills', href: '#skills', menuIcon: GiSkills },
  { title: 'Projects', href: '#projects', menuIcon: LiaLaptopCodeSolid },
  { title: 'Experience', href: '#experience', menuIcon: MdWork },
  { title: 'Education', href: '#education', menuIcon: FaGraduationCap },
  { title: 'Contact', href: '#contact', menuIcon: MdEmail },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState(''); 

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section'); 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); 
          }
        });
      },
      { 
        threshold: 0.50, 
        rootMargin: '0px 0px -70px 0px' 
      }
    );

    sections.forEach((section) => {
      observer.observe(section); 
    });

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <section className='shadow-sm w-full fixed bg-white whitespace-nowrap z-50'>
      <div className='flex justify-between items-center mx-auto w-full lg:max-w-[80%] h-16 lg:pr-0'>
        <a href='/#' className='w-16 h-5 flex flex-col items-center justify-center mx-10 lg:ms-0'>
          <img src={logoImage} alt='Logo' className='w-16 h-5' />
          <span className='font-bold text-xl tracking-widest'>ABHISHEK</span>
        </a>

        <nav className='lg:block relative mr-5'>
          {isMenuOpen ? (
            <FaTimes
              className='text-2xl lg:hidden cursor-pointer mr-10'
              onClick={handleMenuToggle}
              aria-label='Close Navigation Menu'
            />
          ) : (
            <RxHamburgerMenu
              className='text-2xl lg:hidden cursor-pointer mr-10'
              onClick={handleMenuToggle}
              aria-label='Toggle Navigation Menu'
            />
          )}

          <ul
            className={`px-12 lg:px-0 space-y-10 lg:space-y-0 lg:flex flex-col lg:flex-row lg:justify-between gap-4 xl:gap-6 py-10 lg:bg-transparent bg-[rgba(0,0,0,0.9)] absolute lg:relative top-11 lg:top-0 -right-5 w-[300px] sm:w-[400px] lg:w-auto transition-all duration-300 h-[100vh] lg:h-auto ${isMenuOpen ? 'block' : 'hidden'} text-white lg:text-black`}
          >
            {navMenuArr.map(({ title, href, menuIcon: MenuIcon }) => (
              <li
                key={title}
                className={`hover:scale-125 transition-all duration-500 hover:text-blue-400 lg:hover:text-blue-900 ${
                  activeSection === href.slice(1) ? 'text-orange-400 font-semibold' : ''
                }`} 
              >
                <a href={href} className='flex gap-2'>
                  <MenuIcon className='text-lg' />
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
