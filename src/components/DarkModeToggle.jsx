import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
    <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
  </button>
);

export default DarkModeToggle;
