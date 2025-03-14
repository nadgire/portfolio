import React from 'react'
import { IoHome } from 'react-icons/io5';
import { BsPersonHeart } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { MdWork, MdEmail } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const navMenuArr = [
  { title: 'Home', href: '#home', menuIcon: IoHome },
  { title: 'About Me', href: '#about-me', menuIcon: BsPersonHeart },
  { title: 'Skills', href: '#skills', menuIcon: GiSkills },
  { title: 'Projects', href: '#projects', menuIcon: LiaLaptopCodeSolid },
  { title: 'Experience', href: '#experience', menuIcon: MdWork },
  { title: 'Education', href: '#education', menuIcon: FaGraduationCap },
  { title: 'Contact', href: '#contact', menuIcon: MdEmail },
];
const Footer = () => {
  return (
    <div className='bg-black w-full h-auto text-white'>
      <div className='flex flex-col md:flex-row w-[80%] mx-auto justify-between py-10 md:pt-0 md:pb-10'>
        <div className='md:pt-10 space-y-5 md:space-y-10'>
          <span className='block'>Site Links</span>
          <ul className='space-y-2'>
            {navMenuArr.map(({ title, href, menuIcon: MenuIcon }) => (
              <li
                key={title}
                className={``}
              >
                <a href={href} className='flex gap-2'>
                  <FaChevronRight className='text-lg' />
                  {title}
                </a>
              </li> 
            ))}
          </ul>
        </div>
        <div className='pt-10 space-y-5 md:space-y-10'>
          <span className='block'>Contact Details</span>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <IoLocationSharp className='text-xl' />
              Kothrud, Pune, India.
            </div>
            <div className='flex items-center gap-2'>
              <FaMobileAlt className='text-xl' />
              +91 957 931 8107
            </div>
            <div className='flex items-center gap-2'>
              <MdEmail className='text-xl' />
              abhinadgire@gmail.com
            </div>
          </div>
        </div>
        <div className='pt-10 space-y-5 md:space-y-10'>
          <span className='block'>Follow me on</span>
          <div className='flex flex-col items-start'>
            <a href="https://www.linkedin.com/in/abhishek-nadgire/" target='_blank' className='w-1/4 sm:w-auto flex justify-center cursor-pointer z-10'>
              <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                <FaLinkedin className='mx-auto text-2xl' />
              </div>
            </a>
            <a href="https://github.com/nadgire" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
              <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                <FaGithub className='mx-auto text-2xl' />
              </div>
            </a>
            <a href="https://x.com/abhinadgire" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
              <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                <FaTwitter className='mx-auto text-2xl' />
              </div>
            </a>
            <a href="https://www.instagram.com/nadgire_" target='_blank' className='w-1/4 sm:w-auto flex justify-center z-10'>
              <div className='bg-black w-10 h-10 flex items-center rounded-full'>
                <FaInstagram className='mx-auto text-2xl' />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='w-[80%] mx-auto' style={{borderTop: "0.5px solid gray"}}>

      </div>
      <div className='text-center py-5'>
            Made with <FaHeart className='text-red-500 inline' /> by <strong className='text-yellow-400'>Abhishek Nadgire</strong>.
      </div>
    </div>
  )
}

export default Footer
