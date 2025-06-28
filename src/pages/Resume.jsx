import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample experience data - replace with your actual experience
const experiences = [
  {
    id: 1,
    title: "Music Rights Data Specialist",
    company: "Music Licensing Company",
    period: "2022 - Present",
    description: "Manage royalty data entry and maintain database integrity for music rights management. Collaborate with cross-functional teams to ensure accurate payment processing."
  },
  {
    id: 2,
    title: "Frontend Developer (Freelance)",
    company: "Self-employed",
    period: "2021 - Present",
    description: "Develop custom web applications for small businesses. Implement responsive designs using React, Next.js, and Tailwind CSS."
  },
  {
    id: 3,
    title: "Radio Show Host & Editor",
    company: "MTSU University Media",
    period: "2018 - 2021",
    description: "Hosted weekly radio show and served as editor for university newspaper and website. Created engaging content while maintaining editorial standards."
  }
];

// Sample education data
const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Recording Industry",
    concentration: "Music Business",
    institution: "Middle Tennessee State University (MTSU)",
    year: "2021"
  },
  {
    id: 2,
    degree: "Professional Certificate in Full Stack Development",
    concentration: "MERN Stack",
    institution: "MIT xPRO",
    year: "2022"
  }
];

// Sample skills data
const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "JavaScript/ES6+", "HTML5/CSS3", "Responsive Design"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Authentication"] },
  { category: "Tools & Other", items: ["Git/GitHub", "VS Code", "Figma", "Agile Methodology", "Problem Solving"] }
];

const Resume = () => {
  const [viewMode, setViewMode] = useState('quick'); // 'quick', 'pdf', or 'both'
  
  // Function to download resume
  const downloadResume = () => {
    // Replace with path to your actual resume file
    const link = document.createElement('a');
    link.href = '/assets/your-resume.pdf';
    link.download = 'YourName-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      className="p-6 bg-soft-green dark:bg-warm-gray rounded-lg shadow-md max-h-[calc(100vh-260px)] overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-light text-soft-blue dark:text-peach">RESUME</h2>
        <button 
          onClick={downloadResume}
          className="px-4 py-2 bg-light-orange hover:bg-orange-500 text-white rounded-md transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>
      
      {/* View Mode Selector */}
      <div className="mb-6 flex space-x-2">
        <button 
          onClick={() => setViewMode('quick')} 
          className={`px-3 py-1 rounded-md transition-colors ${viewMode === 'quick' ? 'bg-soft-blue text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Quick View
        </button>
        <button 
          onClick={() => setViewMode('pdf')} 
          className={`px-3 py-1 rounded-md transition-colors ${viewMode === 'pdf' ? 'bg-soft-blue text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          PDF Preview
        </button>
        
      </div>
      
      {/* Quick View Content */}
      {(viewMode === 'quick' || viewMode === 'both') && (
        <div className={viewMode === 'both' ? 'mb-8' : ''}>
          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mb-4">Experience</h3>
            <div className="space-y-6">
              {experiences.map(exp => (
                <div key={exp.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="flex justify-between flex-wrap">
                    <h4 className="font-semibold text-lg text-light-orange dark:text-soft-blue">{exp.title}</h4>
                    <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mb-4">Education</h3>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="flex justify-between flex-wrap">
                    <h4 className="font-semibold text-lg text-light-orange dark:text-soft-blue">{edu.degree}</h4>
                    <span className="text-gray-500 dark:text-gray-400">{edu.year}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.concentration && <span className="font-medium">{edu.concentration}, </span>}
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mb-4">Skills</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg text-light-orange dark:text-soft-blue mb-2">{skillGroup.category}</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* PDF Preview */}
      {(viewMode === 'pdf' || viewMode === 'both') && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-soft-blue dark:text-peach mb-4">Resume Preview</h3>
          <div className="aspect-[8.5/11] w-full border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
            {/* Replace with actual path to your resume image/PDF */}
            <img 
              src="/assets/resume-preview.jpg" 
              alt="Resume Preview" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `/api/placeholder/600/800`;
              }}
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Resume;