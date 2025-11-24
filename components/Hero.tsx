import React from 'react';
import { ArrowRight, Linkedin, Mail, Smartphone } from 'lucide-react';
import { SectionId } from '../types'; 
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.HOME} className="hero-section">
        {/* Background Decorative Elements */}
        <div className="hero-bg-accent"></div>
        <div style={{ position: 'absolute', bottom: '5rem', left: '2.5rem', width: '5rem', height: '5rem', border: '2px solid rgba(252, 163, 17, 0.2)', borderRadius: '50%' }}></div>

      <div className="container flex flex-col items-center justify-between gap-8 lg-flex-row">
        
        <div className="lg-w-half" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <div className="hero-divider"></div>
                <h2 className="text-accent uppercase tracking-widest" style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{t.hero.role}</h2>
                <h1 className="hero-title">
                    Danilo <br />
                    <span className="text-white">Redlich.</span>
                </h1>
                <p className="text-gray text-lg" style={{ maxWidth: '28rem', lineHeight: '1.625' }}>
                    {t.hero.description}
                </p>
            </div>

            <div className="flex" style={{ flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                <a href="#contact" className="btn-link">
                    {t.hero.cta} <ArrowRight size={16} />
                </a>
                <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--color-dark-700)' }}></div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/danilo-redlich-ml" target="_blank" rel="noopener noreferrer" className="text-gray" style={{ transition: 'color 0.3s' }}>
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:danilo.delgado.redlich@gmail.com" className="text-gray" style={{ transition: 'color 0.3s' }}>
                        <Mail size={20} />
                    </a>
                </div>
            </div>
            
            <div className="hero-stats">
                 <div>
                    <span className="stat-number">16+</span>
                    <span className="text-sm text-gray uppercase tracking-widest">{t.hero.yearsExp}</span>
                 </div>
                 <div>
                    <span className="stat-number">10+</span>
                    <span className="text-sm text-gray uppercase tracking-widest">{t.hero.cloudProjects}</span>
                 </div>
            </div>
        </div>

        <div className="lg-w-half" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
                 <div className="image-card">
                    <img 
                        src="components/images/yo.jpeg" 
                        alt="Danilo Redlich"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-dark-900), transparent)', opacity: 0.6 }}></div>
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="floating-badge">
                    <div style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-dark-900)' }}>
                        <Smartphone size={20} />
                    </div>
                    <div>
                        <p className="text-gray" style={{ fontSize: '0.75rem' }}>{t.hero.available}</p>
                        <p className="text-white font-bold text-sm">+56 9 9445 5994</p>
                    </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};