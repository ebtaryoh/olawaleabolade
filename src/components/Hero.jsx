import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-8 md:px-16 w-full">
      <div className="flex items-center mb-10">
        <div className="w-12 h-[2px] bg-black mr-4"></div>
        <span className="text-sm font-bold tracking-widest uppercase">UI/UX DESIGNER & RESEARCHER</span>
      </div>
      
      <h1 className="text-5xl md:text-[3.5rem] font-serif leading-[1.1] text-primary mb-10 max-w-5xl tracking-tight">
        I design thoughtful digital experiences <br className="hidden md:block" />
        grounded in <span className="italic text-gray-500">real user insight.</span>
      </h1>

      <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-12 max-w-[46rem] font-sans font-light">
        As a UI/UX designer and researcher, I focus on creating meaningful experiences that blend user-centered design with innovative AI-driven solutions. My work is driven by a passion for understanding user behavior, solving real-world problems, and delivering designs that empower and engage through the power of AI.
      </p>

      <div className="flex items-center space-x-6 mt-16">
        <a href="#work" className="bg-primary text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded flex items-center justify-center">
          VIEW CASE STUDIES
        </a>
        <a href="#contact" className="bg-transparent text-gray-900 border border-gray-400 px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors rounded flex items-center justify-center">
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
};

export default Hero;
