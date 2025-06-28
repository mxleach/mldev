import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const sections = {
    background: {
      title: "Background",
      content: "I received my Bachelor's degree in Music Business from MTSU, where I hosted a live radio show and worked as an editor for the university newspaper and site. My creative background — from music to media — still shapes how I approach development today: blending structure, storytelling, and design.\n\nBy day, I work in the music industry, performing royalty data entry tasks, while building real-world apps, expanding into open-source contributions, and growing as a full-stack developer. When I'm not coding, you'll find me playing music (drums, bass, piano), exploring gluten-free spots, golfing, learning Spanish, or catching Braves games."
    },
    achievements: {
      title: "Achievements",
      items: [
        "Bachelor's of Science in Recording Industry, Music Business concentration",
        "Earned Professional Certificate in Full Stack w/ MERN from MIT xPRO",
        "Building a growing portfolio of full-stack applications"
      ]
    },
    update: {
      title: "2025 Professional Update",
      content: "While I've had professional and personal setbacks due to health, I've spent 2025 thus far refreshing my skills, building real world apps, and expanding into open-source and developer meet ups. I'm focused on leveling up technically and preparing to thrive in a collaborative, team-driven environment-- something I haven't yet experienced as a developer."
    }
  };
  
  const expandSection = (section) => {
    setExpandedSection(section);
  };
  
  const closeExpandedSection = () => {
    setExpandedSection(null);
  };

  return (
    <motion.section
     className="p-6 bg-soft-green dark:bg-warm-gray rounded-lg shadow-md w-full font-sans max-h-[calc(100vh-260px)] overflow-y-auto">
      <h2 className="text-3xl font-light text-soft-blue dark:text-peach mb-4">ABOUT ME</h2>
      <p className="text-gray-700 dark:text-gray-300 font-normal">
        Aspiring full-stack web developer with a music-industry background and a passion for building intuitive, creative digital experiences. 
      </p>

      {/* Skills Section */}
      <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mb-4 tracking-wide">What I Do:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
             onClick={() => expandSection('webDev')}>
          <h4 className="font-medium text-lg text-light-orange dark:text-soft-blue tracking-tight">Web Development & Software</h4>
          <p className="text-gray-600 dark:text-gray-400 font-light">
            I create scalable web applications with React, Next.js, Tailwind, and Node.js. Always experimenting with new technologies, custom themes, and captivating user experiences.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
             onClick={() => expandSection('appDev')}>
          <h4 className="font-medium text-lg text-light-orange dark:text-soft-blue tracking-tight">App & Tool Building</h4>
          <p className="text-gray-600 dark:text-gray-400 font-light">
            From productivity tools to wellness trackers and creative apps, I love designing software that solves real problems and tells a story through thoughtful design.
          </p>
        </div>
      </div>

      {/* Background Section */}
      <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mt-8 mb-4 tracking-wide">
        {sections.background.title}
      </h3>
      <div 
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => expandSection('background')}
      >
        <h4 className="font-medium text-lg text-light-orange dark:text-soft-blue tracking-tight mb-2">My Journey</h4>
        <p className="text-gray-600 dark:text-gray-400 font-light">
          {sections.background.content.split('\n\n')[0]}
        </p>
      </div>

      {/* Achievements Section */}
      <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mt-8 mb-4 tracking-wide">
        {sections.achievements.title}
      </h3>
      <div 
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => expandSection('achievements')}
      >
        <h4 className="font-medium text-lg text-light-orange dark:text-soft-blue tracking-tight mb-2">Education & Certifications</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 font-light ml-4">
          {sections.achievements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Professional Update Section */}
      <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mt-8 mb-4 tracking-wide">
        {sections.update.title}
      </h3>
      <div 
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer mb-4"
        onClick={() => expandSection('update')}
      >
        <h4 className="font-medium text-lg text-light-orange dark:text-soft-blue tracking-tight mb-2">Current Focus</h4>
        <p className="text-gray-600 dark:text-gray-400 font-light">
          {sections.update.content}
        </p>
      </div>
      
      {/* Expandable Overlay for Sections */}
      <AnimatePresence>
        {expandedSection && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeExpandedSection}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 max-w-2xl w-full rounded-lg p-6 relative max-h-[80vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeExpandedSection}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {expandedSection === 'background' && (
                <>
                  <h3 className="text-2xl font-bold text-light-orange dark:text-soft-blue mb-4">{sections.background.title}</h3>
                  <div className="prose prose-lg dark:prose-invert">
                    {sections.background.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">My Creative Approach:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      I believe that great development comes from the intersection of technical skill and creative thinking.
                      My background in music and media has taught me to approach problems from multiple angles,
                      looking for elegant solutions that balance functionality, user experience, and visual design.
                    </p>
                  </div>
                </>
              )}
              
              {expandedSection === 'achievements' && (
                <>
                  <h3 className="text-2xl font-bold text-light-orange dark:text-soft-blue mb-4">{sections.achievements.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-soft-blue dark:text-peach mb-3">Education & Certifications</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4 ml-4">
                      {sections.achievements.items.map((item, index) => (
                        <li key={index} className="font-medium">{item}
                          <p className="ml-6 mt-1 text-gray-600 dark:text-gray-400 font-light">
                            {index === 0 ? 'Focused on music business, copyright law, and digital media distribution.' : 
                             index === 1 ? 'Developed full-stack applications using MongoDB, Express, React, and Node.js.' :
                             'Created projects demonstrating proficiency in modern web development techniques.'}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Continuous Learning:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      I believe in lifelong learning and constantly expanding my skillset. Currently, I'm focused on
                      deepening my knowledge of modern JavaScript frameworks and exploring best practices in UI/UX design.
                    </p>
                  </div>
                </>
              )}
              
              {expandedSection === 'update' && (
                <>
                  <h3 className="text-2xl font-bold text-light-orange dark:text-soft-blue mb-4">{sections.update.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {sections.update.content}
                  </p>
                  
                  <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Moving Forward:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      My goal is to join a collaborative development team where I can contribute my frontend skills
                      while continuing to grow as a developer. I'm particularly interested in working on projects that
                      have a positive impact on users' lives and solve meaningful problems.
                    </p>
                  </div>
                </>
              )}
              
              {expandedSection === 'webDev' && (
                <>
                  <h3 className="text-2xl font-bold text-light-orange dark:text-soft-blue mb-4">Web Development & Software</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    I create scalable web applications with React, Next.js, Tailwind, and Node.js. Always experimenting with new technologies, custom themes, and captivating user experiences.
                  </p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Frontend:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 ml-2">
                        <li>React & Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript/TypeScript</li>
                        <li>Responsive Design</li>
                        <li>Animation Libraries</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Backend:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 ml-2">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>RESTful APIs</li>
                        <li>Authentication</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              
              {expandedSection === 'appDev' && (
                <>
                  <h3 className="text-2xl font-bold text-light-orange dark:text-soft-blue mb-4">App & Tool Building</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    From productivity tools to wellness trackers and creative apps, I love designing software that solves real problems and tells a story through thoughtful design.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">My Approach:</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        I believe that great applications start with understanding the user's needs and pain points.
                        I take a user-centered approach to design, focusing on creating intuitive interfaces that make complex tasks simple.
                      </p>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Recent Projects:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-2">
                        <li><span className="font-medium">Flourish</span> - A gluten-free recipe converter that swaps ingredients intelligently</li>
                        <li><span className="font-medium">MLC Toolkit</span> - A suite of tools for music rights metadata verification</li>
                        <li><span className="font-medium">Personal Portfolio</span> - This website, built with React and Tailwind CSS</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default About;