"use client";
import React, { useState } from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from 'emailjs-com';
import Alert from './Alert';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  });

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('Full name is required')
      .matches(/^[a-zA-Z\s]+$/, 'Full name must contain only letters and spaces')
      .min(3, 'Full name must be at least 3 characters long'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Phone number must be digits only')
      .min(10, 'Phone number must be 10 digits long')
      .max(10, 'Phone number must be 10 digits long'),
    email: Yup.string()
      .required('Email address is required')
      .email('Email address is not valid'),
    message: Yup.string()
      .required('Message is required')
      .min(20, 'Message must be at least 20 characters long')
      .max(200, 'Message must be at most 200 characters long')
  });

  const handleSubmit = async (values) => {
    console.log(values);
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

        <Formik initialValues={{ fullname: '', phone: '', email: '', message: '' }} validationSchema={validationSchema} onSubmit={(values) => { handleSubmit(values) }}>
          {({ handleSubmit, handleChange, handleBlur, values }) => (
            <form className="my-8 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid">
                <label htmlFor="fullname" className="text-white">Full name</label>
                <Field
                  id="fullname"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  type="text"
                  className="bg-white px-3 py-2 rounded-md"
                  aria-label="Full name"
                />
              </div>
              <ErrorMessage name="fullname" component="div" className="error text-red-600" />


              <div className="grid">
                <label htmlFor="phone" className="text-white">Phone</label>
                <Field
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="08888888888"
                  type="text"
                  className="bg-white px-3 py-2 rounded-md"
                  aria-label="Phone number"
                />
              </div>
              <ErrorMessage name="phone" component="div" className="error text-red-600" />

              <div className="grid">
                <label htmlFor="email" className="text-white">Email address</label>
                <Field
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="yourid@email.com"
                  type="email"
                  className="bg-white px-3 py-2 rounded-md"
                  aria-label="Email address"
                />
              </div>
              <ErrorMessage name="email" component="div" className="error text-red-600" />

              <div className="grid">
                <label htmlFor="message" className="text-white">Your message</label>
                <Field
                  rows="4"
                  maxLength={200}
                  id="message"
                  name="message"
                  as="textarea"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Looking for a proficient software developer skilled in React and Next.js for a specific project"
                  className="bg-white px-3 py-2 rounded-md"
                  aria-label="Message"
                />
              </div>
              <ErrorMessage name="message" component="div" className="error text-red-600" />

              <button
                className="bg-gradient-to-br relative group/btn from-black to-neutral-700 block w-full text-white rounded-md h-10 font-medium hover:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                type="submit"
              >
                Submit <FaTelegramPlane className="inline" />
              </button>
            </form>
          )}


        </Formik>

        <Alert isOpen={isModalOpen} onClose={handleCloseModal} message={modalMessage} />
      </div>
    </section>
  );
}
