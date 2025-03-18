import React, { useState } from 'react';
import clock from '../assets/images/clock.png';
import wordScramble from '../assets/images/word-scramble.png';
import tictactoe from '../assets/images/ttt.png';
import passwordgenerator from '../assets/images/password-generator.png';
import rps from '../assets/images/rps.png';
import portfolio from '../assets/images/portfolio.png';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import PinEffect from './PinEffect';
import { FaChevronCircleRight } from "react-icons/fa";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to manage hover index

  const projectArray = [
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'JavaScript, HTML5, CSS3, TailwindCSS, Github',
      ProjImage: clock,
      ProjTitle: 'D Clock Company',
      ProjDescription: 'An analog clock which shows current system time and helps you to organize and memorize the work using its prime functions like Alarm and Timer.',
      LiveLink: 'https://nadgire.github.io/Mini-Projects/D-Clock-Company/public/'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'JavaScript, HTML5, TailwindCSS, Github',
      ProjImage: wordScramble,
      ProjTitle: 'Word Scramble Game',
      ProjDescription: 'A word scramble game challenges players to unscramble mixed-up letters to form a valid word, testing vocabulary and problem-solving skills.',
      LiveLink: 'https://nadgire.github.io/Mini-Projects/Word%20Scramble%20Game/scramble.html'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'JavaScript, HTML5, CSS3, TailwindCSS, Github',
      ProjImage: tictactoe,
      ProjTitle: 'Tic Tac Toe',
      ProjDescription: 'Tic Tac Toe is a two-player game where players take turns marking spaces on a 3x3 grid, aiming to get three of their marks in a row horizontally, vertically, or diagonally.',
      LiveLink: 'https://nadgire.github.io/Mini-Projects/Tic%20Tac%20Toe/public/'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'JavaScript, HTML5, TailwindCSS, Github',
      ProjImage: passwordgenerator,
      ProjTitle: 'Random Password Generator',
      ProjDescription: 'A random password generator creates secure passwords with a default length of 12 characters, allowing customization between a minimum of 8 and a maximum of 20 characters, ensuring strong and unique combinations.',
      LiveLink: 'https://nadgire.github.io/Mini-Projects/PasswordGenerator/public/'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'JavaScript, HTML5, TailwindCSS, Github',
      ProjImage: rps,
      ProjTitle: 'Rock Paper Scissors',
      ProjDescription: 'Rock, Paper, Scissors is a two-player game where each player simultaneously chooses one of three options (rock, paper, or scissors), with rock beating scissors, scissors beating paper, and paper beating rock.',
      LiveLink: 'https://nadgire.github.io/Mini-Projects/Rock%20Paper%20Scissors/'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'ReactJS, TailwindCSS, MongoDB, AWS, Netlify',
      ProjImage: portfolio,
      ProjTitle: 'Portfolio',
      ProjDescription: 'The one you are looking at!',
      LiveLink: '/'
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="projects" className="pt-16 pb-16 h-auto">
      <div className="flex items-center justify-center gap-3 text-shadow-sm">
        <LiaLaptopCodeSolid className="text-6xl" />
        <span className="h-full text-center text-4xl font-bold">
          Projects <span className="text-shadow-sm text-blue-800">Done</span>
        </span>
      </div>

      <div className="flex flex-wrap max-w-[80%] mx-auto pt-16 justify-around gap-y-28 gap-x-5">
        {projectArray.map((project, index) => {
          return (
            <PinEffect
              key={project.ProjTitle}
              children={
                <div
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 transition-all duration-700 h-[400px]"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <img
                      className="rounded-t-lg"
                      src={project.ProjImage}
                      alt={project.ProjTitle}
                    />
                  </div>
                  <div className="p-5">
                    <span>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {project.ProjTitle}
                      </h5>
                    </span>
                    <p className="mb-3 font-normal text-red-700">
                      {hoveredIndex === index ? project.HoverTitle : ''}
                    </p>
                    <p className="mb-3 font-normal text-gray-700">
                      {hoveredIndex === index
                        ? project.HoverDescription
                        : project.ProjDescription}
                    </p>
                  </div>
                </div>
              }
              title={project.ProjTitle}
              href={project.LiveLink}
            />
          );
        })}
      </div>
      <div className='flex justify-center pt-28'>
      <a href="/allprojects" target="_blank" className="z-10">
  <button className="mx-auto md:mx-0 font-semibold text-[14px] md:text-[18px] lg:text-xl bg-gradient-to-r from-blue-500 to-blue-900 text-white flex items-center px-6 py-2 rounded-lg gap-2 cursor-pointer thunder-effect">
    View All
    <FaChevronCircleRight />
  </button>
</a>

      </div>
    </section>
  );
};

export default Projects;
