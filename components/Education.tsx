import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.EDUCATION} className="section" style={{ backgroundColor: '#1a1c23' }}>
      <div className="container">
        <div className="grid-layout lg-grid-2" style={{ gap: '4rem' }}>
            
            {/* Academic */}
            <div>
                <div className="flex items-center gap-4" style={{ marginBottom: '2rem' }}>
                    <div className="logo-box" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-dark-800)', color: 'var(--color-accent)' }}>
                        <BookOpen />
                    </div>
                    <h3 className="font-display font-bold text-white" style={{ fontSize: '1.875rem' }}>{t.education.title}</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="education-item">
                        <span className="education-dot" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                        <h4 className="text-white font-bold text-lg">{t.education.items.ds.degree}</h4>
                        <p className="text-accent">{t.education.items.ds.inst}</p>
                        <p className="text-gray-500 text-sm">{t.education.items.ds.year}</p>
                    </div>
                     <div className="education-item">
                        <span className="education-dot" style={{ backgroundColor: 'var(--color-gray-500)' }}></span>
                        <h4 className="text-white font-bold text-lg">{t.education.items.ai.degree}</h4>
                        <p className="text-accent">{t.education.items.ai.inst}</p>
                        <p className="text-gray-500 text-sm">{t.education.items.ai.year}</p>
                    </div>
                    <div className="education-item">
                        <span className="education-dot" style={{ backgroundColor: 'var(--color-gray-500)' }}></span>
                        <h4 className="text-white font-bold text-lg">{t.education.items.eng.degree}</h4>
                        <p className="text-accent">{t.education.items.eng.inst}</p>
                        <p className="text-gray-500 text-sm">{t.education.items.eng.year}</p>
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div>
                 <div className="flex items-center gap-4" style={{ marginBottom: '2rem' }}>
                    <div className="logo-box" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-dark-800)', color: 'var(--color-accent)' }}>
                        <Award />
                    </div>
                    <h3 className="font-display font-bold text-white" style={{ fontSize: '1.875rem' }}>{t.education.certifications}</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="cert-card">
                        <h5 className="text-white font-bold" style={{ marginBottom: '0.5rem' }}>Scrum Master Professional</h5>
                        <p className="text-gray text-sm uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>{t.education.certs.scrum}</p>
                    </div>
                     <div className="cert-card">
                        <h5 className="text-white font-bold" style={{ marginBottom: '0.5rem' }}>Google AI Essentials</h5>
                        <p className="text-gray text-sm uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>{t.education.certs.google}</p>
                    </div>
                     <div className="cert-card">
                        <h5 className="text-white font-bold" style={{ marginBottom: '0.5rem' }}>Python I: Programación</h5>
                        <p className="text-gray text-sm uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>{t.education.certs.python}</p>
                    </div>
                     <div className="cert-card">
                        <h5 className="text-white font-bold" style={{ marginBottom: '0.5rem' }}>AWS Cloud Practitioner</h5>
                        <p className="text-gray text-sm uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>{t.education.certs.aws}</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};