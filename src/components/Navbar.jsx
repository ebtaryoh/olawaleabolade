import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-8 md:px-16 w-full bg-[#fcfbf9]">
      <div className="text-base font-bold uppercase tracking-wider font-sans text-gray-900">
        OLAWALE ABOLADE
      </div>
      <div className="hidden md:flex space-x-16 text-sm font-medium uppercase tracking-wide text-gray-900">
        <a href="#work" className="hover:text-gray-500 transition-colors">WORK</a>
        <a href="#about" className="hover:text-gray-500 transition-colors">ABOUT</a>
        <a href="#resume" className="hover:text-gray-500 transition-colors">EXPERIENCE</a>
        <a href="#contact" className="hover:text-gray-500 transition-colors">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
