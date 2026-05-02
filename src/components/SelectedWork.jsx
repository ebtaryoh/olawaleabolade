import React from 'react';
import leftaImg from '../assets/lefta.jpg';
import neugenImg from '../assets/neugen.png';
import benfaImg from '../assets/benfa.png';
import handiworkImg from '../assets/handiwork.png';

const projects = [
  {
    id: 'lefta',
    title: 'Lefta Wealth',
    description: 'Lefta is a Tasked with designing a Smart Investment ISA app for a new generation of both new and experienced users, with a strong emphasis on accessibility. The role focused on creating a seamless, user-friendly experience that empowers users to make informed investment decisions.',
    image: leftaImg,
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'neugen',
    title: 'NeuGenPower',
    description: 'NeuGenPower is a Designed a future-facing digital platform for NeuGen Power to make clean hydrogen energy easier for everyday users to access and manage. Focused on creating a simple, intuitive experience for purchasing, tracking, and controlling energy use, enabling users to confidently adopt cleaner energy solutions.',
    image: neugenImg,
    bgColor: 'bg-emerald-50'
  },
  {
    id: 'benfa',
    title: 'Benfa',
    description: 'Benfa is a This project builds an affective computing based study companion that detects students’ emotions and adapts support in real time across voice, text, and facial inputs, using large language models to deliver tailored explanations.',
    image: benfaImg,
    bgColor: 'bg-blue-50'
  },
  {
    id: 'handiwork',
    title: 'Handiwork',
    description: 'Handiwork is a This project builds a mobile and web platform that connects users with skilled artisans such as plumbers, electricians, and carpenters, enabling quick access to trusted professionals and a smoother, more efficient way to get tasks done.',
    image: handiworkImg,
    bgColor: 'bg-teal-50'
  }
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 px-8 md:px-16 w-full">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900">Selected Work</h2>
        <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-700">
          4 CASE STUDIES
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <div key={project.id} className={`group cursor-pointer rounded-sm overflow-hidden flex flex-col ${project.bgColor}`}>
            <div className="flex-grow p-8 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto max-h-[400px] object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 bg-white/50 backdrop-blur-sm border-t border-black/5">
              <h3 className="text-xl font-bold font-sans mb-3">{project.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-sans font-light">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
