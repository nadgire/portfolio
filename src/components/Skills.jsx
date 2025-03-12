import React from 'react'
import { GiSkills } from "react-icons/gi";
import css from '../assets/images/css-3.svg'

// Import images
import nodeJS from '../assets/images/nodejs-ar21.svg'
import expressJS from '../assets/images/expressjs-icon.svg'
import reactJS from '../assets/images/react-2.svg'
import reduxJS from '../assets/images/redux.svg'
import nextJS from '../assets/images/next-js.svg'
import javascript from '../assets/images/javascript-1.svg'
import typescript from '../assets/images/typescript-2.svg'
import html5 from '../assets/images/html-1.svg'
import mysql from '../assets/images/mysql-logo-svgrepo-com.svg'
import postgresql from '../assets/images/postgresql.svg'
import bootstrap from '../assets/images/bootstrap-5-1.svg'
import tailwindCSS from '../assets/images/tailwind-css-2.svg'
import git from '../assets/images/github-icon-1.svg'
import aws from '../assets/images/amazon-web-services-2.svg'
import netlify from '../assets/images/netlify.svg'
import jquery from '../assets/images/jquery-1.svg'
import mongodb from '../assets/images/mongodb.svg'
import jira from '../assets/images/jira-3.svg'
import snow from '../assets/images/snow.svg'

const Skills = () => {

    let skillsArr = [
        { skillName: "NodeJS", skillImage: nodeJS },
        { skillName: "ExpressJS", skillImage: expressJS },
        { skillName: "ReactJS", skillImage: reactJS },
        { skillName: "ReduxJS", skillImage: reduxJS },
        { skillName: "Netlify", skillImage: netlify },
        { skillName: "JavaScript", skillImage: javascript },
        { skillName: "TypeScript", skillImage: typescript },
        { skillName: "HTML5", skillImage: html5 },
        { skillName: "CSS3", skillImage: css },
        { skillName: "MySQL", skillImage: mysql },
        { skillName: "PostgreSQL", skillImage: postgresql },
        { skillName: "Bootstrap", skillImage: bootstrap },
        { skillName: "TailwindCSS", skillImage: tailwindCSS },
        { skillName: "Git", skillImage: git },
        { skillName: "AWS", skillImage: aws },
        { skillName: "Next.js", skillImage: nextJS },
        { skillName: "JQuery", skillImage: jquery },
        { skillName: "MongoDB", skillImage: mongodb },
        { skillName: "Jira", skillImage: jira },
        { skillName: "Service Now", skillImage: snow },

    ];

    return (
        <section id="skills" className='py-16 bg-[#02081f]'>
            <div className='flex items-center justify-center gap-3 sm:gap-5 text-shadow-sm text-white'>
                <GiSkills className='text-5xl' />
                <span className='h-full text-center text-4xl font-bold'>
                    Skills & <span className='text-orange-400 text-shadow-sm'>Abilities</span>
                </span>
            </div>
            <div className='bg-[rgba(255,255,255,0.2)] w-[100%] lg:max-w-[80%] mx-auto mt-16 py-16 md:p-16 flex flex-wrap justify-center gap-3 md:justify-between'>
                {
                    skillsArr.map((x) => {
                        return (
                            <div key={x.skillName} className="flex flex-col items-center justify-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 gap-3 bg-[#02081f] text-white p-5 rounded-3xl hover:bg-[#02082f] hover:vibrate hover:shadow-sky-950 shadow-lg tracking-widest">
                                <img src={x.skillImage} alt={x.skillImage} className='w-16 h-16 object-contain' />
                                <span className='whitespace-nowrap'>{x.skillName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills
