import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import Timeline from "./Timeline";
import { Link } from "react-router-dom";

const Experience = () => {
    const [experiences, setExperiences] = useState([
        {
            title: "Aavidsoft, Pune",
            content: "Frontend Developer - Intern",
            period: "Mar 2025 - Present",
        },
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
            period: "Aug 2015 - May 2016",
        },
    ]);

    // Handler to update the period for a specific experience
    const updatePeriod = (index, newPeriod) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].period = newPeriod;
        setExperiences(updatedExperiences);
    };

    return (
        <section id="experience" className="py-16 bg-[#30011E] relative px-6 lg:px-10">
            <div className="flex items-center justify-center gap-3 text-shadow-sm text-white">
                <FaBriefcase className="text-6xl" />
                <span className="text-center text-4xl font-bold">
                    Professional <span className="text-shadow-sm text-orange-400">Experience</span>
                </span>
            </div>

            {/* Pass experiences and update handler to Timeline */}
            <Timeline data={experiences} updatePeriod={updatePeriod} />

            {/* Button to view more details */}
            <Link to="/detailed-experience" className="text-center mt-8 block">
                <button className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-blue-800 text-white px-8 py-3 rounded-full cursor-pointer transform transition-all hover:scale-105 active:scale-95">
                    View in Detail
                </button>
            </Link>
        </section>
    );
};

export default Experience;