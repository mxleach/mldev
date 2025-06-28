import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import DarkModeToggle from './components/DarkModeToggle';
import About from './pages/About';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [activePage, setActivePage] = useState('About');
  const [darkMode, setDarkMode] = useState(false);
  const [direction, setDirection] = useState(0);

  const sectionOrder = ['About', 'Resume', 'Work', 'Contact'];

  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changePage = (page) => {
    const currentIndex = sectionOrder.indexOf(activePage);
    const newIndex = sectionOrder.indexOf(page);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActivePage(page);
  };

  const pages = {
    About: <About />,
    Resume: <Resume />,
    Work: <Work />,
    Contact: <Contact />
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* 🟡 Gradient Background */}
      <div
        className="absolute inset-0 -z-10 transition-transform duration-700 ease-out"
        style={{
          background: 'linear-gradient(90deg, hsla(54, 62%, 85%, 1) 0%, hsla(196, 80%, 79%, 1) 50%, hsla(6, 81%, 70%, 1) 100%)',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

      {/* Main content */}
      <main
        className={`flex flex-col items-center transition-all duration-700 ease-in-out ${
          isSidebarOpen ? 'ml-[300px]' : 'ml-0'
        }`}
      >
        {/* Navbar */}
        <div className="w-full flex justify-center px-4">
          <NavBar
            isOpen={isNavOpen}
            setIsOpen={setIsNavOpen}
            activePage={activePage}
            setActivePage={changePage}
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex justify-center my-6">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <AnimatePresence mode="wait">
  <div className="relative w-full px-6 flex justify-center items-start mt-6">
    <motion.div
      key={activePage}
      initial={{ x: direction >= 0 ? '100%' : '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: direction >= 0 ? '-100%' : '100%' }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className="w-full max-w-4xl flex justify-center"
    >
      <div className="w-full bg-soft-blue border border-gray-800 dark:border-gray-200 rounded-lg shadow-xl h-full overflow-y-auto">
        {pages[activePage]}
      </div>
    </motion.div>
  </div>
</AnimatePresence>
      

        {/* Sidebar Toggle */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl text-soft-blue dark:text-peach transition-all duration-700"
          >
            {isSidebarOpen ? '<<' : '>>'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
