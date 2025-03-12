import React, { useRef, useState } from 'react';
import { BsPersonHeart } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import me1 from '../assets/images/me2.jpeg';
import mesqr from '../assets/images/me2-sqr.jpeg';
import softdev from '../assets/images/software-developer.jpg';

const Aboutme = () => {
  const tiltRefs = [useRef(null), useRef(null)];
  const [tilt, setTilt] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }]);

  const handleMouseMove = (e, index) => {
    const { clientX, clientY } = e;
    const rect = e.target.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100 - 50;
    const y = ((clientY - rect.top) / rect.height) * 100 - 50;
    setTilt((prev) => {
      const newTilt = [...prev];
      newTilt[index] = { x, y };
      return newTilt;
    });
  };

  const handleMouseOver = (index) => {
    tiltRefs[index].current.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseOut = (index) => {
    tiltRefs[index].current.style.transition = 'transform 0.5s ease-out';
    setTilt((prev) => {
      const newTilt = [...prev];
      newTilt[index] = { x: 0, y: 0 };
      return newTilt;
    });
  };

  return (
    <section className='h-auto bg-[#fff] pt-16 max-w-[80%] mx-auto' id='about-me'>
      <div className='flex justify-center items-center md:gap-5 text-shadow-sm'>
        <BsPersonHeart className='hidden lg:block text-5xl' />
        <div className='lg:hidden lg:w-full'>
          <img src={mesqr} alt="abhishek" className='max-h-32 max-w-32 rounded-full shadow-2xl' />
        </div>
        <span className='h-full text-center text-2xl md:text-4xl font-bold md:w-auto'>
          Get to Know <span className='text-blue-800'>Me Better</span>
        </span>
      </div>
      
      <div className='py-16 gap-10 space-y-8 lg:space-y-16'>
        <div className='flex flex-col md:flex-row'>
          <div className='hidden lg:block w-1/3 h-auto relative image-container'>
            <img 
              ref={tiltRefs[0]}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseOver={() => handleMouseOver(0)}
              onMouseOut={() => handleMouseOut(0)}
              style={{
                transform: `perspective(500px) rotateX(${tilt[0].y}deg) rotateY(${tilt[0].x}deg)`,
              }}
              src={me1} alt="abhishek" className='h-[420px] rounded-4xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-2xl' 
            />
          </div>
          <div className='flex flex-col gap-5 w-full lg:w-2/3 lg:px-5'>
            <div className='space-y-5'>
              <div className='flex items-center gap-3 text-shadow-sm'>
                <GiJourney className='text-4xl' />
                <p className='text-xl md:text-2xl font-semibold'>
                  My Journey
                </p>
              </div>
              <div className='space-y-5 lg:ps-3'>
                <p className='text-lg '>
                  I was born on January 10th, 1993, in Majalgaon, Beed, and completed my 10th grade from the State Board, Maharashtra, with a score of 79%. After relocating to Pune for further education, I pursued a Diploma in Computer Science and Technology, graduating in 2013 with a 53% score. I later earned my Bachelor's degree in Computer Science and Engineering from G.H. Raisoni College of Engineering and Management in 2017, graduating with a 'First Class'.
                </p>
                <p className='text-lg'>
                  In December 2017, I kickstarted my career in the IT industry with IBM India Pvt. Ltd., under third-party payroll with Softenger India Pvt. Ltd., as an Application Support Engineer. Over the years, I gained extensive experience in IT Support, particularly in Incident Management, and earned my ITIL V4 Foundation Certification.
                </p>
                <p className='text-lg'>
                  After nearly seven years in the industry, I decided to shift gears in August 2024 to focus on acquiring new skills. With a passion for coding and problem-solving, I am now fully dedicated to transitioning into a Full-Stack Developer role, ready to take on new challenges and opportunities in the tech field.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='hidden lg:block w-1/3 h-auto relative'>
            <img 
              ref={tiltRefs[1]}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseOver={() => handleMouseOver(1)}
              onMouseOut={() => handleMouseOut(1)}
              style={{
                transform: `perspective(500px) rotateX(${tilt[1].y}deg) rotateY(${tilt[1].x}deg)`,
              }}
              src={softdev} alt="programmer" className='rounded-[48px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-5' 
            />
          </div>
          <div className='lg:w-2/3 space-y-5 lg:px-5'>
            <div className='flex items-center gap-3 text-shadow-sm'>
              <div className='relative'>
                <MdOutlineWorkOutline className='text-4xl' />
                <IoMdHeart className='absolute -bottom-1 -right-1 text-xl text-red-600' />
              </div>
              <p className='text-xl md:text-2xl font-semibold'>
                My Interests
              </p>
            </div>
            <div className='lg:hidden max-w-96 mx-auto'>
              <img src={softdev} alt="programmer" className='rounded-[48px]' />
            </div>
            <div className='space-y-5 lg:ps-3'>
              <p className='text-lg'>
                I’ve always had a curiosity for coding, drawn to the logical thinking and problem-solving aspect of it. The process of breaking down complex problems and finding creative solutions is something I find exciting and intellectually stimulating. This passion for solving problems led me to explore the world of coding more deeply.
              </p>
              <p className='text-lg'>
                A career change into coding was driven by my desire for both personal and professional growth. I’m eager to embrace new challenges and continue learning in this ever-evolving field. Coding allows me to combine my creativity with my analytical skills, as I can build projects and see tangible results from my work, whether it’s a website, app, or tool.
              </p>
              <p className='text-lg'>
                I’m excited to keep learning, growing, and building in the world of technology, and I’m eager to see where this journey takes me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
