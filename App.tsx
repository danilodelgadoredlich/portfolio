import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: 'var(--color-dark-900)', minHeight: '100vh', color: 'var(--color-white)' }}>
        <Navbar />
        <main>
          <Hero /> 
          <Services />
          <Experience />
          <Education />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;