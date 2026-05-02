import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Prototypes from './components/Prototypes';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <SelectedWork />
        <Prototypes />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
