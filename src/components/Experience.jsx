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
        <div className="py-16 bg-blue-900 relative px-3">

            <div className='flex items-center justify-center gap-3 sm:gap-5 text-shadow-sm text-white'>
                <MdWork className='text-5xl' />
                <span className='h-full text-center text-4xl font-bold text-shadow-sm'>
                    Experience
                </span>
            </div>
            <Timeline data={experiences} />
            {/* <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto mt-16">

                <div className="absolute w-1 bg-gray-800 h-[106%] left-1/2 transform -translate-x-1/2 -top-10"></div>
                {experiences.map((exp, index) => (
                    <div key={index} className={`flex w-full items-center mb-8 ${index % 2 === 0 ? "justify-start mr-2 md:ml-10 lg:ml-16" : "justify-end ml-2 md:mr-10 lg:mr-16"}`}>
                        <div className="absolute left-1/2 -translate-y-12 md:-translate-y-5">
                            <div className="w-8 h-8 bg-white rounded-full -translate-x-1/2">
                                <FaBriefcase className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>

                        <div className="bg-orange-500 text-white p-4 rounded-lg shadow-2xl w-5/12 relative space-y-2">
                            <h3 className="font-bold">{exp.company}</h3>
                            <p className="text-sm font-semibold">{exp.role}</p>
                            <p className="text-xs">{exp.period}</p>
                            <div className={`absolute top-5 ${index % 2 === 0 ? "-right-4" : "-left-4"}`}>
                                <VscTriangleRight className={`text-2xl text-orange-500 ${index % 2 === 0 ? "" : "hidden"}`} />
                                <VscTriangleLeft className={`text-2xl text-orange-500 ${index % 2 === 0 ? "hidden" : ""}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="text-center">
                <button className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-blue-800 text-white px-8 py-3 rounded-full cursor-pointer -translate-y-1">
                    View in Detail
                </button>
            </div>
        </div>
    );
};

export default Experience;
