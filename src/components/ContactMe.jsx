"use client";
import React, { useState } from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from 'emailjs-com';
import Alert from './Alert';

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
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_oeeuqig',
        'template_abky2r9',
        e.target,
        'p6-04IdL7AYTys_2H'
      );
      console.log(result.text);
      setModalMessage('Message sent successfully!');
    } catch (error) {
      console.error(error.text);
      setModalMessage('Something went wrong, please try again.');
    } finally {
      setIsModalOpen(true);
      setFormData({
        fullname: '',
        phone: '',
        email: '',
        message: ''
      });
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section id="contact" className="py-16 bg-[#13293D] relative px-3">
      <div className="flex items-center justify-center gap-3 sm:gap-5 text-shadow-sm text-white">
        <RiContactsBook2Fill className="text-5xl" />
        <span className="h-full text-center text-4xl font-bold text-white">
          Contact <span className="text-shadow-sm text-orange-400">Me</span>
        </span>
      </div>

      <div className="flex flex-wrap w-[90%] md:max-w-[60%] lg:w-[40%] xl:w-[30%] mx-auto pt-16 justify-around gap-y-5 flex-col">
        <p className="text-center text-orange-400 text-lg">
          Whether you're looking to learn, create a custom website, or need expert help, I'm here to bring your ideas to life!
        </p>

        <form className="my-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid">
            <label htmlFor="fullname" className="text-white">Full name</label>
            <input
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Your Name"
              type="text"
              className="bg-white px-3 py-2 rounded-md"
              aria-label="Full name"
            />
          </div>

          <div className="grid">
            <label htmlFor="phone" className="text-white">Phone</label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="08888888888"
              type="text"
              className="bg-white px-3 py-2 rounded-md"
              aria-label="Phone number"
            />
          </div>

          <div className="grid">
            <label htmlFor="email" className="text-white">Email address</label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourid@email.com"
              type="email"
              className="bg-white px-3 py-2 rounded-md"
              aria-label="Email address"
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
              onChange={handleChange}
              placeholder="Looking for a proficient software developer skilled in React and Next.js for a specific project"
              className="bg-white px-3 py-2 rounded-md"
              aria-label="Message"
            />
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black to-neutral-700 block w-full text-white rounded-md h-10 font-medium hover:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
            type="submit"
          >
            Submit <FaTelegramPlane className="inline" />
          </button>
        </form>

        <Alert isOpen={isModalOpen} onClose={handleCloseModal} message={modalMessage} />
      </div>
    </section>
  );
}
