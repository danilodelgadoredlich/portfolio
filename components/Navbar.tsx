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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="logo-box">
                <span style={{ fontSize: '1.125rem' }}>D</span>
            </div>
            <span className="font-display font-bold text-lg" style={{ letterSpacing: '0.025em' }}>
              Danilo Redlich<span className="text-accent">.</span>
            </span>
        </div>

        {/* Desktop Nav */}
        <div className="md-flex items-center gap-8 hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="lang-toggle"
            style={{ marginLeft: '1rem' }}
          >
            <Globe size={14} />
            <span>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md-hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="lang-toggle"
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
        <div className="mobile-menu md-hidden">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="nav-link"
              style={{ textAlign: 'left', fontSize: '1.125rem', padding: '0.5rem 0' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};