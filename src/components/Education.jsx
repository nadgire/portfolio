import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import bitcode from '../assets/images/bitcode.png';
import essp from '../assets/images/essp.jpg';
import ghrcem from '../assets/images/ghrcem.AVIF';
import ssmv from '../assets/images/ssmv.jpg';
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            id: 4,
            title: "Full Stack Web Development",
            college: "Bitcode Technologies",
            duration: "2024-2025",
            status: "Pursuing",
            image: bitcode,
            percentage: "",
        },
        {
            id: 1,
            title: "B.E. in Computer Science and Engineering",
            college: "G. H. Raisoni College, Pune | SPPU",
            duration: "2013-2017",
            status: "Completed",
            image: ghrcem,
            percentage: "64% | First Class",
        },
        {
            id: 2,
            title: "Diploma in Computer Science and Technology",
            college: "Eklavya Shikshan Sanstha's Polytechnic, Pune | MSBTE",
            duration: "2008-2013",
            status: "Completed",
            image: essp,
            percentage: "53% | Second Class",
        },
        {
            id: 3,
            title: "SSC | 10th ",
            college: "Shri. Siddheshwar Madhyamik Vidyalaya, Majalgaon | SSC Maharashtra Board",
            duration: "2007-2008",
            status: "Completed",
            image: ssmv,
            percentage: "79.07% | First Class",
        }
    ];

    // Motion animation settings
    const animationSettings = {
        initial: { opacity: 0, y: 80 },
        whileInView: {
            opacity: 1,
            y: [80, -20, 15, -10, 5, 0],
        },
        viewport: { once: false, amount: 0.7 },
        transition: {
            opacity: { duration: 0.5 },
            y: { duration: 1, ease: "easeOut" },
        }
    };

    return (
        <section id="education" className="py-16 bg-[#EDF2F4] relative px-3">
            <div className="flex items-center justify-center gap-3 sm:gap-5 text-shadow-sm text-black">
                <FaGraduationCap className="text-5xl" />
                <span className="h-full text-center text-4xl font-bold">
                    Educational <span className="text-shadow-sm text-blue-800">Qualification</span>
                </span>
            </div>

            <div className="flex flex-wrap max-w-[80%] mx-auto pt-14 justify-around gap-y-5">
                {educationData.map((x) => (
                    <motion.article
                        key={x.id}
                        {...animationSettings}
                        className="flex flex-col md:flex-row gap-2 md:gap-0 bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl border"
                    >
                        <img
                            src={x.image}
                            alt={x.college}
                            className="w-full md:w-1/3 h-36 rounded-l-lg object-fill"
                        />
                        <div className="ml-4 flex flex-col justify-center py-2 md:py-0">
                            <h2 className="text-xl font-bold text-blue-900">{x.title}</h2>
                            <p className="text-gray-600">{x.college}</p>
                            <p className="text-green-600 font-semibold mt-1">
                                {x.duration} | {x.status}
                            </p>
                            <p className="text-orange-400 font-semibold mt-1">{x.percentage}</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Education;
