import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
    return (
        <div className="py-16 bg-[#EDF2F4] relative px-3">

            <div className='flex items-center justify-center gap-3 sm:gap-5 text-shadow-sm text-black'>
                <FaGraduationCap className='text-5xl' />
                <span className='h-full text-center text-4xl font-bold'>
                    Educational <span className='text-shadow-sm text-blue-800'>Qualification</span>
                </span>
            </div>
        </div>
    )
}

export default Education
