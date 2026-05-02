import React from 'react';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="py-32 px-8 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-serif font-medium italic mb-20 text-center">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start w-full">
        <div className="w-full">
          <img src={aboutImg} alt="Olawale Abolade" className="w-full h-auto object-cover aspect-[3/4]" />
        </div>
        <div className="flex flex-col space-y-8 pt-4 max-w-lg">
          <p className="text-lg text-gray-800 leading-relaxed font-sans font-light">
Skilled in user experience design, interaction design, visual storytelling, and research, with practical experience delivering digital products across fintech, healthcare, construction, edutech, and related sectors. Backed by a BSc in Mass Communication and an MSc in User Experience and Interaction Design.</p>
          <p className="text-lg text-gray-800 leading-relaxed font-sans font-light">
My work is grounded in a user centered approach, combining research, design thinking, and usability principles to create clear, accessible, and effective solutions. Experience includes collaborating with cross functional teams such as product managers, developers, and stakeholders to translate ideas into functional, user friendly experiences.</p>
          <p className="text-lg text-gray-800 leading-relaxed font-sans font-light">
Driven by solving real user problems, simplifying complexity, and building products that are both intuitive and impactful.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
