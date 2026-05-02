import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-32 px-8 md:px-16 w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 text-gray-900">Let’s Work Together</h2>
      <p className="text-base md:text-lg text-gray-800 font-sans font-light mb-16 text-center max-w-xl">
        Currently open to new opportunities. Feel free to reach out for collaborations or just a friendly hello.
      </p>
      
      <div className="flex space-x-12 md:space-x-16 mb-24">
        <a href="#" className="text-sm font-medium uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-2 hover:text-gray-500 hover:border-gray-500 transition-colors">
          EMAIL
        </a>
        <a href="#" className="text-sm font-medium uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-2 hover:text-gray-500 hover:border-gray-500 transition-colors">
          LINKEDIN
        </a>
        <a href="/resume.pdf" className="text-sm font-medium uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-2 hover:text-gray-500 hover:border-gray-500 transition-colors flex items-center">
          RESUME <span className="ml-1 font-light">↓</span>
        </a>
      </div>

      <p className="text-sm text-gray-800 font-sans font-medium">
        © 2026 Olawale Abolade — Designed with care.
      </p>
    </footer>
  );
};

export default Footer;
