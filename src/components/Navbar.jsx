import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-8 px-8 md:px-16 w-full bg-[#fcfbf9] relative z-50">
      <div className="text-base font-bold uppercase tracking-wider font-sans text-gray-900 z-50">
        OLAWALE ABOLADE
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-16 text-sm font-medium uppercase tracking-wide text-gray-900">
        <a href="#work" className="hover:text-gray-500 transition-colors">WORK</a>
        <a href="#about" className="hover:text-gray-500 transition-colors">ABOUT</a>
        <a href="#resume" className="hover:text-gray-500 transition-colors">EXPERIENCE</a>
        <a href="#contact" className="hover:text-gray-500 transition-colors">CONTACT</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden z-50 text-gray-900 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#fcfbf9] z-40 flex flex-col items-center justify-center space-y-8 pt-16 md:hidden">
          <a href="#work" onClick={() => setIsOpen(false)} className="text-xl font-medium uppercase tracking-wide text-gray-900 hover:text-gray-500 transition-colors">WORK</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-medium uppercase tracking-wide text-gray-900 hover:text-gray-500 transition-colors">ABOUT</a>
          <a href="#resume" onClick={() => setIsOpen(false)} className="text-xl font-medium uppercase tracking-wide text-gray-900 hover:text-gray-500 transition-colors">EXPERIENCE</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-medium uppercase tracking-wide text-gray-900 hover:text-gray-500 transition-colors">CONTACT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
