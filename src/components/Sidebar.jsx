import React from 'react';

const Sidebar = ({ isOpen, closeSidebar }) => (
  <aside
    className={`fixed top-0 left-0 h-full z-40 bg-soft-green dark:bg-warm-gray p-6 transition-transform duration-700 border-r border-black dark:border-gray-200 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    <div className="flex flex-col items-center">
    <img
  src="/images/me.jpg"
  alt="Max Leach"
  className="w-28 h-28 mb-4 border-2 border-white object-cover rounded-md shadow"
  style={{ objectPosition: 'center 10%' }}
/>





      <h2 className="text-2xl font-semibold text-soft-blue dark:text-peach">
        Max Leach
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Full-Stack Developer</p>
      <a
  href="/resume.pdf"
  download
  className="px-6 py-2 bg-light-orange text-white font-semibold rounded-full hover:bg-orange-600 dark:bg-peach dark:hover:bg-soft-blue"
>
  Download Resume
</a>
    </div>
  </aside>
);

export default Sidebar;