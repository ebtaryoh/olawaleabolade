import React from 'react';

const Prototypes = () => {
  return (
    <section className="py-24 px-8 md:px-16 w-full max-w-7xl mx-auto border-t border-gray-200">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium">Prototypes</h2>
        <a href="#prototypes" className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest group border-b border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
          View all prototypes
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>

      <div className="space-y-32">
        {/* Lefta Wealth Prototype */}
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold font-sans mb-4">Lefta Wealth</h3>
            <p className="text-base text-gray-700 leading-relaxed font-sans font-light">
              This prototype showcases the onboarding flow, account creation/login, ISA eligibility confirmation, and a user dashboard displaying key balances such as savings, portfolio, and ISA, and many more.</p>
          </div>
          <div className="w-full h-[600px] bg-[#e8e6df] rounded-sm flex items-center justify-center">
            <span className="text-gray-400 font-sans tracking-widest uppercase text-sm">Interactive Prototype Placeholder</span>
          </div>
        </div>

        {/* Handiwork Prototype */}
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold font-sans mb-4">NueGenPower</h3>
            <p className="text-base text-gray-700 leading-relaxed font-sans font-light">
             This prototype demonstrates a future-facing digital platform for NeuGen Power, showcasing key features such as energy purchasing, usage tracking, and real-time monitoring. It highlights a simple, intuitive experience designed to make clean hydrogen energy accessible and easy to manage for everyday users.</p>
          </div>
          <div className="w-full h-[600px] bg-[#e8e6df] rounded-sm flex items-center justify-center">
            <span className="text-gray-400 font-sans tracking-widest uppercase text-sm">Interactive Prototype Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototypes;
