import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    try {
      // Replace these with your own EmailJS service, template and user IDs
      const result = await emailjs.sendForm(
        'service_dqqf82t', // Create this at emailjs.com
        'template_dltfsst', // Create this at emailjs.com
        form.current,
        'zO-7z_PpSVmBAwY53' // Get this from your EmailJS account
      );
      
      if (result.text === 'OK') {
        setFormStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" }
        });
        form.current.reset();
      } else {
        throw new Error('Email failed to send');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <motion.section 
      className="p-6 bg-soft-green dark:bg-warm-gray rounded-lg shadow-md max-h-[calc(100vh-260px)] overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-light text-soft-blue dark:text-peach mb-4">
        Contact Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-light-orange dark:text-soft-blue mb-4">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-blue dark:text-peach" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email:</p>
                <a href="mailto:mxwl.dev@gmail.com" className="text-soft-blue dark:text-peach hover:underline">mxwl.dev@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-blue dark:text-peach" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location:</p>
                <p className="text-gray-700 dark:text-gray-300">Atlanta, GA</p>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 flex items-center justify-center hover:bg-soft-blue/30 dark:hover:bg-soft-blue/40 transition-colors">
                <svg className="h-5 w-5 text-soft-blue dark:text-peach" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 flex items-center justify-center hover:bg-soft-blue/30 dark:hover:bg-soft-blue/40 transition-colors">
                <svg className="h-5 w-5 text-soft-blue dark:text-peach" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 flex items-center justify-center hover:bg-soft-blue/30 dark:hover:bg-soft-blue/40 transition-colors">
                <svg className="h-5 w-5 text-soft-blue dark:text-peach" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-light-orange dark:text-soft-blue mb-4">Send Me a Message</h3>
          
          {formStatus.info.error && (
            <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
              <p>{formStatus.info.msg}</p>
            </div>
          )}
          
          {formStatus.submitted ? (
            <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-soft-blue dark:focus:ring-peach"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-soft-blue dark:focus:ring-peach"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-soft-blue dark:focus:ring-peach"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={formStatus.submitting}
                className={`px-6 py-3 bg-light-orange hover:bg-orange-600 text-white rounded-md transition-colors flex items-center justify-center ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {formStatus.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;