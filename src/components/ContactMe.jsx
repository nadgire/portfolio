"use client";
import React from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { useState } from "react";
import Alert from './Alert'
export default function ContactMe() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oeeuqig', 'template_abky2r9', e.target, 'p6-04IdL7AYTys_2H')
      .then(
        (result) => {
          console.log(result.text);
          setModalMessage('Message sent successfully!');
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
          setModalMessage('Something went wrong, please try again.');
          setIsModalOpen(true);
        }
      );

    // Optionally, reset the form after submission
    setFormData({
      fullname: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  function handleCloseModal(){
    setIsModalOpen(false);
  }

  return (
    <section id="contact" className="py-16 bg-[#13293D] relative px-3">
      <div className='flex items-center justify-center gap-3 sm:gap-5 text-shadow-sm text-white'>
        <RiContactsBook2Fill className='text-5xl' />
        <span className='h-full text-center text-4xl font-bold text-white'>
          Contact <span className='text-shadow-sm text-orange-400'>Me</span>
        </span>
      </div>
      <div className="flex flex-wrap w-[90%] md:max-w-[60%] lg:w-[40%] xl:w-[30%] mx-auto pt-16 justify-around gap-y-5 flex-col">
        <p className="text-center text-orange-400 text-lg">Whether you're looking to learn, create a custom website, or need expert help, I'm here to bring your ideas to life!</p>

        <div>
          <form className="my-8 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid">
              <label htmlFor="fullname" className="text-white">Full name</label>
              <input
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={(e) => {
                  setFormData({ ...formData, fullname: e.target.value })
                }}
                placeholder="Your Name"
                type="text"
                className="bg-white px-3 py-2 rounded-md"
              />
            </div>
            <div className="grid">
              <label htmlFor="phone" className="text-white">Phone</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value })

                }}
                placeholder="08888888888"
                type="text"
                className="bg-white px-3 py-2 rounded-md"
              />
            </div>
            <div className="grid">
              <label htmlFor="email" className="text-white">Email address</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                }}
                placeholder="yourid@email.com"
                type="email"
                className="bg-white px-3 py-2 rounded-md"
              />
            </div>
            <div className="grid">
              <label htmlFor="message" className="text-white">Your message</label>
              <textarea
                rows="4"
                maxLength={200}
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value })
                }}
                placeholder="Looking for a proficient software developer skilled in React and Next.js for a specific project"
                className="bg-white px-3 py-2 rounded-md"
              />
            </div>

            <button
              className="bg-gradient-to-br relative group/btn from-black to-neutral-700 block w-full text-white rounded-md h-10 font-medium hover:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
              type="submit"
            >
              Submit <FaTelegramPlane className="inline" />
            </button>
          </form>
        </div>
      <Alert isOpen={isModalOpen} onClose={handleCloseModal} message={modalMessage} />

      </div>
      
    </section>
  );
}
