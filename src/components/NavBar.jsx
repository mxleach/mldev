import React from 'react';

const NavBar = ({ activePage, setActivePage }) => {
  const handlePageClick = (pageName) => {
    setActivePage(pageName);  // Pass the page name instead of index
  };

  return (
    <nav className="sticky top-4 z-50 max-w-4xl mx-auto mt-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-lg p-4 transition-transform duration-700">
      <div className="flex justify-center space-x-4">
        {['About', 'Resume', 'Work', 'Contact'].map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 rounded-full transition font-medium ${
              activePage === page
                ? 'bg-light-orange text-white border-2 border-black'
                : 'bg-opacity-50 bg-soft-green dark:bg-warm-gray text-gray-600 dark:text-gray-400 hover:bg-orange-300 hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
