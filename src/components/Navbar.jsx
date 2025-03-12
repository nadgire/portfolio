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

// Array for nav menu items
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [activeSection, setActiveSection] = useState('home'); // State for active section

  // Function to toggle the hamburger menu
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Intersection Observer callback to update the active section based on visibility
  const handleSectionIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target.id);
        setActiveSection(entry.target.id);
      }
    });
  };

  // UseEffect hook to setup IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(handleSectionIntersection, {
      threshold: 0.30, // The section must be at least 30% in view
      rootMargin: '0px 0px -50% 0px',
    });

    // Observing all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Cleanup observer
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to render menu items
  const renderMenuItems = () =>
    navMenuArr.map(({ title, href, menuIcon: MenuIcon }) => (
      <li
        key={title}
        className={`hover:scale-125 transition-all duration-500 hover:text-blue-400 lg:hover:text-blue-900 relative ${activeSection === href.replace('#', '') ? 'text-orange-400 font-bold' : ''}`}
      >
        <a href={href} className='flex gap-2'>
          <MenuIcon className='text-lg' />
          {title}
        </a>
        <span
          className={`absolute bottom-0 left-0 h-[1px] bg-orange-400 transition-all duration-500 ease-in-out ${activeSection === href.replace('#', '') ? 'lg:w-[calc(100%+2px)]' : 'w-0'}`}
        />
      </li>
    ));

  return (
    <section className='shadow-sm w-full fixed bg-white whitespace-nowrap z-50'>
      <div className='flex justify-between items-center mx-auto w-full max-w-[80%] h-16 lg:pr-0'>
        <a href='/#' className='w-16 h-5 flex flex-col items-center justify-center lg:ms-0'>
          <img src={logoImage} alt="Logo" className='w-16 h-5' />
          <span className='font-bold text-xl tracking-widest'>ABHISHEK</span>
        </a>

        <nav className='lg:block relative mr-5'>
          {/* Toggle hamburger or close icon */}
          {isMenuOpen ? (
            <FaTimes
              className='text-2xl lg:hidden cursor-pointer'
              onClick={handleMenuToggle}
              aria-label="Close Navigation Menu"
            />
          ) : (
            <RxHamburgerMenu
              className='text-2xl lg:hidden cursor-pointer'
              onClick={handleMenuToggle}
              aria-label="Toggle Navigation Menu"
            />
          )}

          <ul
            className={`px-12 lg:px-0 space-y-6 lg:space-y-0 lg:flex flex-col lg:flex-row lg:justify-between gap-4 xl:gap-6 py-5 lg:bg-transparent bg-[rgba(0,0,0,0.9)] absolute lg:relative top-11 lg:top-0 -right-5 w-[300px] sm:w-[400px] lg:w-auto transition-all duration-300 h-[100vh] lg:h-auto ${isMenuOpen ? 'block' : 'hidden'} text-white lg:text-black`}
          >
            {renderMenuItems()}
          </ul>
        </nav>
      </div>
    </section>
  );
}; 

export default Navbar;
