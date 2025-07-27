import React, { useState } from 'react';
import clock from '../assets/images/clock.png';
import wordScramble from '../assets/images/word-scramble.png';
import tictactoe from '../assets/images/ttt.png';
import passwordgenerator from '../assets/images/password-generator.png';
import rps from '../assets/images/rps.png';
import portfolio from '../assets/images/portfolio.png';
import todomanager from '../assets/images/todomanager.png';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import PinEffect from './PinEffect';
import { FaChevronCircleRight } from "react-icons/fa";
import currencyConverter from '../assets/images/currency.png';
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
      HoverDescription: 'React, JavaScript, TailwindCSS, Github, Netlify, Render, JWT Token, Redux, Node, Express, MongoDB',
      ProjImage: todomanager,
      ProjTitle: 'ToDo Manager',
      ProjDescription: 'A task management application that helps users organize, prioritize, and track their to-do lists, improving productivity and time management skills.',
      LiveLink: 'https://simplytodomanager.netlify.app/'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'JavaScript, HTML5, TailwindCSS, Github',
      ProjImage: wordScramble,
      ProjTitle: 'Word Scramble Game',
      ProjDescription: 'A word scramble game challenges players to unscramble mixed-up letters to form a valid word, testing vocabulary and problem-solving skills.',
      LiveLink: 'https://nadgire.github.io/Mini-Projects/WordScrambleGame/scramble.html'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'JavaScript, HTML5, CSS3, TailwindCSS, Github',
      ProjImage: tictactoe,
      ProjTitle: 'Tic Tac Toe',
      ProjDescription: 'Tic Tac Toe is a two-player game where players take turns marking spaces on a 3x3 grid, aiming to get three of their marks in a row horizontally, vertically, or diagonally.',
      LiveLink: 'https://nadgire.github.io/Mini-Projects/TicTacToe/public/'
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
      LiveLink: 'https://nadgire.github.io/Mini-Projects/RockPaperScissors/'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'ReactJS, TailwindCSS, Axios, Vite, ESLint',
      ProjImage: currencyConverter,
      ProjTitle: 'Currency Converter',
      ProjDescription: 'A web application for converting currencies in real-time, built with modern tools for a fast, responsive, and user-friendly experience. Try it out!',
      LiveLink: 'https://switchcurrency.netlify.app/'
    },
    {
      HoverTitle: 'Technologies Used',
      HoverDescription: 'ReactJS, TailwindCSS, MongoDB, AWS, Netlify',
      ProjImage: portfolio,
      ProjTitle: 'Portfolio',
      ProjDescription: 'My portfolio site showcases my projects, skills, and accomplishments, built with modern web technologies for a clean, responsive experience. Explore my work and the tools I use!',
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
