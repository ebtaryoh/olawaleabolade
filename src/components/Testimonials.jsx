import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "I had the pleasure of collaborating with Wale during our HNG Internship, and continued working with him afterward. As a UI/UX designer, he consistently delivered creative, user-focused designs and translated ideas into clean, intuitive interfaces. His responsiveness and openness to feedback stood out, always refining designs quickly without losing quality. His collaborative approach and strong sense of responsibility made working with him both productive and enjoyable, and I highly recommend him for any UI/UX design project.",
    author: "Tolulope Ojo",
    role: "Frontend Developer, HNG"
  },
  {
    id: 2,
    quote: "I worked with Olawale across multiple projects, and what stands out immediately is how intentional he is with his design decisions. He doesn't just make things look good, he thinks deeply about how users interact with a product and ensures every screen has a clear purpose.",
    author: "Olabode Richard",
    role: "Lead Strategist, vecs pr"
  },
  {
    id: 3,
    quote: "Olawale is reliable, detail-focused, and understands how to design for real users, not just visuals. Any team looking for someone who can combine thinking, execution, and collaboration will find him a solid addition.",
    author: "Favour Ben",
    role: "Founder, Roots and Radiance Network"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-8 md:px-16 w-full max-w-7xl mx-auto border-t border-gray-200">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium">Kind Words</h2>
        <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-500">
          WHAT COLLEAGUES SAY
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-gray-50 p-10 flex flex-col justify-between">
            <p className="text-sm text-gray-800 leading-relaxed font-sans font-light mb-12">
              "{t.quote}"
            </p>
            <div>
              <p className="text-sm font-bold font-sans">{t.author}</p>
              <p className="text-xs text-gray-500 font-sans mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
