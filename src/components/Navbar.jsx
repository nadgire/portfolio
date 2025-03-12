import React from 'react'
import logoImage from '../assets/images/logo.png'
import { IoHome } from "react-icons/io5"; // Make sure you import the icons
import { BsPersonHeart } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {

   const navMenuArr = [
   { title: "Home", href: "/#home", menuIcon: IoHome },
   { title: "About Me", href: "/#about-me", menuIcon: BsPersonHeart },
   { title: "Skills", href: "/#skills", menuIcon: GiSkills },
   { title: "Projects", href: "/#projects", menuIcon: LiaLaptopCodeSolid },
   { title: "Experience", href: "/#experience", menuIcon: MdWork },
   { title: "Education", href: "/#education", menuIcon: FaGraduationCap },
   { title: "Contact", href: "/#contact", menuIcon: MdEmail },
   ]

   return (
      <section className='shadow-sm w-full fixed bg-white whitespace-nowrap z-50 '>
         <div className='flex justify-between items-center mx-auto max-w-[80%] h-16 pr-5 lg:pr-0'>
            <a href='/#' className='w-16 h-5 flex flex-col items-center justify-center'>
               <img src={logoImage} alt="" className='w-16 h-5' />
               <span className='font-bold text-xl tracking-widest'>ABHISHEK</span>
            </a>

            <nav className='lg:block relative'>
               <RxHamburgerMenu className='text-3xl hidden lg:hidden' />
               <ul className='hidden lg:flex flex-col lg:flex-row justify-between gap-4 xl:gap-6 py-5 lg:bg-transparent bg-[rgba(0,0,0,0.7)] absolute lg:relative top-12 lg:top-0 right-0 w-[320px] sm:w-[400px] lg:w-auto'>
                  {
                     navMenuArr.map((x) => {
                        return (
                           <li key={x.title} className='hover:scale-125 transition-all duration-500 hover:text-blue-900'>
                              <a href={x.href} className='flex gap-2' >
                                 {/* style={({ isActive }) => ({
                                 color: isActive ? "red" : "black",
                                 fontWeight: isActive ? "bold" : "normal",
                                 textDecoration: "none",
                                 marginRight: "15px",
                                 textDecorationLine: isActive ? 'blink' : 'none'
                              })} */}
                                 <x.menuIcon className='text-lg' />
                                 {x.title}
                              </a>
                           </li>
                        )
                     })
                  }
               </ul>
            </nav>
         </div>
      </section>
   )
}

export default Navbar


