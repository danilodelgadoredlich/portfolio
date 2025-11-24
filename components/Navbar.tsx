import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.nav.home, id: SectionId.HOME },
    { label: t.nav.about, id: SectionId.ABOUT },
    { label: t.nav.experience, id: SectionId.EXPERIENCE },
    { label: t.nav.education, id: SectionId.EDUCATION },
    { label: t.nav.contact, id: SectionId.CONTACT },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-br-lg rounded-tl-lg flex items-center justify-center">
                <span className="font-display font-bold text-dark-900 text-lg">D</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wide">Danilo Redlich<span className="text-accent">.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-gray-300 hover:text-accent transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-dark-700 bg-dark-800 text-xs font-bold text-gray-300 hover:border-accent hover:text-white transition-all ml-4"
          >
            <Globe size={14} />
            <span>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded-full border border-dark-700 bg-dark-800 text-xs font-bold text-gray-300"
            >
                <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-t border-dark-800 p-6 flex flex-col gap-4 shadow-xl">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-gray-300 hover:text-accent py-2 text-lg"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};