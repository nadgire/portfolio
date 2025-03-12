import React, { useState } from 'react';
import logoImage from '../assets/images/logo.png';
import { IoHome } from 'react-icons/io5';
import { BsPersonHeart } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { MdWork, MdEmail } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';

// Array for nav menu items
const navMenuArr = [
  { title: 'Home', href: '/#home', menuIcon: IoHome },
  { title: 'About Me', href: '/#about-me', menuIcon: BsPersonHeart },
  { title: 'Skills', href: '/#skills', menuIcon: GiSkills },
  { title: 'Projects', href: '/#projects', menuIcon: LiaLaptopCodeSolid },
  { title: 'Experience', href: '/#experience', menuIcon: MdWork },
  { title: 'Education', href: '/#education', menuIcon: FaGraduationCap },
  { title: 'Contact', href: '/#contact', menuIcon: MdEmail },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  // Function to toggle the hamburger menu
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Function to render menu items
  const renderMenuItems = () =>
    navMenuArr.map(({ title, href, menuIcon: MenuIcon }) => (
      <li key={title} className='hover:scale-125 transition-all duration-500 hover:text-blue-900'>
        <a href={href} className='flex gap-2'>
          <MenuIcon className='text-lg' />
          {title}
        </a>
      </li>
    ));

  return (
    <section className='shadow-sm w-full fixed bg-white whitespace-nowrap z-50'>
      <div className='flex justify-between items-center mx-auto max-w-[80%] h-16 pr-5 lg:pr-0'>
        <a href='/#' className='w-16 h-5 flex flex-col items-center justify-center'>
          <img src={logoImage} alt="Logo" className='w-16 h-5' />
          <span className='font-bold text-xl tracking-widest'>ABHISHEK</span>
        </a>

        <nav className='lg:block relative'>
          <RxHamburgerMenu
            className='text-3xl lg:hidden cursor-pointer'
            onClick={handleMenuToggle}
            aria-label="Toggle Navigation Menu"
          />
          <ul
            className={`lg:flex flex-col lg:flex-row justify-between gap-4 xl:gap-6 py-5 lg:bg-transparent bg-[rgba(0,0,0,0.7)] absolute lg:relative top-12 lg:top-0 right-0 w-[320px] sm:w-[400px] lg:w-auto transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            {renderMenuItems()}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
