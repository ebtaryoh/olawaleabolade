import React from 'react';

const experiences = [
  {
    id: 1,
    date: 'Sept 2025 - Present',
    role: 'UI/UX Designer',
    company: 'Roots and Radiance Network CIC, United Kingdom',
    description: [
      'Led UI/UX strategy and execution, overseeing design decisions, user flows, and ongoing optimisation to improve usability and align with the organisation’s mission.'
    ]
  },
  {
    id: 2,
    date: 'Dec 2023 - Aug 2025',
    role: 'Lead UI/UX Designer',
    company: 'Zozzah, Lagos, Nigeria',
    description: [
      'Optimized user interfaces for over 30 websites, increasing user engagement by 25% and reducing page load time by 40%.',
      'Created e-commerce interfaces that helped reduce cart abandonment and improved conversion rates.'
    ]
  },
  {
    id: 3,
    date: 'Jan 2024 - Dec 2024',
    role: 'Product Design Specialist',
    company: 'Tech Studio Academy, Lagos, Nigeria',
    description: [
      'Collaborated with cross-functional teams, increasing project success rates by 10%.',
      'Introduced design systems that helped streamline development and improve workflow efficiency.'
    ]
  },
  {
    id: 4,
    date: 'Feb 2017 - Dec 2023',
    role: 'Visual Narrative Designer',
    company: 'Ondo State Government, Nigeria',
    description: [
      'Worked as Official Photographer to the Governor of Ondo State, transforming governance and public leadership into compelling visual narratives for a state of over 5.4 million people.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="resume" className="py-24 px-8 md:px-16 w-full max-w-7xl mx-auto border-t border-gray-200">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium">Experience</h2>
        <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-500">
          Professional Background
        </span>
      </div>

      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-10 ${index !== experiences.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <div className="md:col-span-1">
              <span className="text-base text-gray-800 font-sans">{exp.date}</span>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-bold font-sans mb-1">{exp.role}</h3>
              <p className="text-base text-gray-800 font-sans mb-4">{exp.company}</p>
              <div className="flex flex-col space-y-4">
                {exp.description.map((desc, i) => (
                  <p key={i} className="text-base text-gray-800 leading-relaxed font-sans font-light max-w-3xl">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
