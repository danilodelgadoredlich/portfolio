import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-white font-sans selection:bg-accent selection:text-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;