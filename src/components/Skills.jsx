import React from 'react';

const Skills = () => {
  return (
    <section className="py-24 px-8 md:px-16 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-24">
        {/* Skills */}
        <div>
          <h3 className="text-lg font-bold font-sans mb-8 tracking-wider uppercase">Skills</h3>
          <div className="flex flex-col space-y-4">
            <span className="text-base text-gray-800 font-sans font-light">User Research & Analysis</span>
            <span className="text-base text-gray-800 font-sans font-light">Interaction Design</span>
            <span className="text-base text-gray-800 font-sans font-light">Usability Testing</span>
            <span className="text-base text-gray-800 font-sans font-light">Design Systems</span>
            <span className="text-base text-gray-800 font-sans font-light">Information Architecture</span>
            <span className="text-base text-gray-800 font-sans font-light">Accessibility (WCAG)</span>
            <span className="text-base text-gray-800 font-sans font-light">Collaboration & Communication</span>
            <span className="text-base text-gray-800 font-sans font-light">Problem-Solving</span>
            <span className="text-base text-gray-800 font-sans font-light">Adaptability</span>
            <span className="text-base text-gray-800 font-sans font-light">Empathy</span>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg font-bold font-sans mb-8 tracking-wider uppercase">Tools</h3>
          <div className="flex flex-col space-y-4">
            <span className="text-base text-gray-800 font-sans font-light">Figma</span>
            <span className="text-base text-gray-800 font-sans font-light">Sketch</span>
            <span className="text-base text-gray-800 font-sans font-light">Protopie</span>
            <span className="text-base text-gray-800 font-sans font-light">Miro</span>
            <span className="text-base text-gray-800 font-sans font-light">FigJam</span>
            <span className="text-base text-gray-800 font-sans font-light">Notion</span>
            <span className="text-base text-gray-800 font-sans font-light">Jira</span>
            <span className="text-base text-gray-800 font-sans font-light">Slack</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {/* Education */}
        <div>
          <h3 className="text-lg font-bold font-sans mb-8 tracking-wider uppercase">Education</h3>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <span className="text-base text-gray-800 font-sans font-bold">MSc User Experience and Interaction Design</span>
              <span className="text-base text-gray-800 font-sans font-light mt-1">Glasgow Caledonian University, 2025-2026</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-gray-800 font-sans font-bold">BSc Mass Communication</span>
              <span className="text-base text-gray-800 font-sans font-light mt-1">National Open University of Nigeria, 2019-2025</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-bold font-sans mb-8 tracking-wider uppercase">Location</h3>
          <div className="flex flex-col space-y-4">
            <span className="text-base text-gray-800 font-sans font-medium">London, United Kingdom</span>
            <span className="text-base text-gray-500 font-sans font-light">Open to remote work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
