import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Earnest',
    shortDescription: 'A time tracking and budgeting tool designed to help users manage their time and money effectively.',
    thumbnail: '/images/earnest-thumb.png',
    demo: 'https://earnest-xi.vercel.app/',
    repo: 'https://github.com/mxleach/earnest',
  },
  {
    id: 2,
    title: 'Cappsule',
    shortDescription: 'A digital scrapbook designed for couples to capture and share their memories together.',
    thumbnail: '/images/cappsule-thumb.png',
    demo: 'https://mlc-tools.vercel.app',
    repo: 'https://github.com/your/mlc-toolkit',
  },
  {
    id: 3,
    title: 'Yoga Posies',
    shortDescription: 'A website designed for my mom\'s yoga business, featuring class schedules. ',
    thumbnail: '/images/yogaposies-thumb.png',
    demo: 'https://mlc-tools.vercel.app',
    repo: 'https://github.com/your/mlc-toolkit',
  },
  {
    id: 4,
    title: 'VitalSync',
    shortDescription: 'A suite of tools used internally for music rights metadata verification.',
    thumbnail: '/images/vitalsync-thumb.png',
    demo: 'https://mlc-tools.vercel.app',
    repo: 'https://github.com/your/mlc-toolkit',
  },
  {
    id: 5,
    title: 'MLC Mastertool',
    shortDescription: 'A suite of tools used internally for music rights metadata verification and formatting.',
    thumbnail: '/images/mlc-toolkit-thumb.png',
    demo: 'https://mlc-tools.vercel.app',
    repo: 'https://github.com/your/mlc-toolkit',
  },
  {
    id: 6,
    title: 'Flourish',
    shortDescription: 'A tool that helps users convert regular recipes to gluten-friendly versions.',
    thumbnail: '/images/flourish-thumb.png',
    demo: 'https://mlc-tools.vercel.app',
    repo: 'https://github.com/your/mlc-toolkit',
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - visibleCount : prevIndex - 1
    );
  };

  const visibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <motion.section 
      className="p-6 bg-soft-green dark:bg-warm-gray rounded-lg shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-3xl font-light text-soft-blue dark:text-peach mb-6">WORK</h2>

      <div className="relative">
        {/* Navigation */}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" aria-label="Previous project">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" aria-label="Next project">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleProjects().map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-soft-blue dark:text-peach">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{project.shortDescription}</p>
                    <div className="mt-4 flex gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-soft-blue text-white rounded hover:bg-blue-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Repository
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: projects.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-soft-blue dark:bg-peach' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="bg-white dark:bg-gray-800 max-w-2xl rounded-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-soft-blue dark:text-peach mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.thumbnail} alt={selectedProject.title} className="w-full h-64 object-cover rounded mb-4" />
              <p className="text-gray-700 dark:text-gray-300">{selectedProject.shortDescription}</p>
              <div className="mt-6 flex gap-4">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-soft-blue text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  Repository
                </a>
                <button onClick={() => setSelectedProject(null)} className="ml-auto px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Work;
