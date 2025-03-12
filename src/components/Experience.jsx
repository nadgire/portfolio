import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";
import Timeline from "./Timeline";

const Experience = () => {

    const experiences = [

        {
            title: "Billennium India Pvt. Ltd.",
            content: "PEGA Application Specialist",
            period: "May 2024 - Aug 2024",
        },
        {
            title: "TSYS India LLP.",
            content: "Operations Analyst II",
            period: "Aug 2019 - May 2024",
        },
        {
            title: "Softenger India Pvt. Ltd.",
            content: "Application Support Engineer",
            period: "Dec 2017 - Feb 2019",
        },
        {
            title: "G. H. Raisoni College of Engineering and Management",
            content: "Lab Assistant",
            period: "Aug 2015- May 2016",
        },
    ];

    return (
        <section id="experience" className="py-16 bg-[#30011E] relative px-3">

            <div className='flex items-center justify-center mx-10 gap-3 text-shadow-sm text-white'>
                <FaBriefcase className='text-6xl' />
                <span className='h-full text-center text-4xl font-bold'>
                    Professional <span className='text-shadow-sm text-orange-400'>Experience</span>
                </span>
            </div>
            <Timeline data={experiences} />
            <div className="text-center">
                <button className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-blue-800 text-white px-8 py-3 rounded-full cursor-pointer -translate-y-1">
                    View in Detail
                </button>
            </div>
        </section>
    );
};

export default Experience;
