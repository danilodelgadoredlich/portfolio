import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: 'Inicio', id: SectionId.HOME },
    { label: 'Sobre Mí', id: SectionId.ABOUT },
    { label: 'Experiencia', id: SectionId.EXPERIENCE },
    { label: 'Educación', id: SectionId.EDUCATION },
    { label: 'Contacto', id: SectionId.CONTACT },
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
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-gray-300 hover:text-accent transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
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