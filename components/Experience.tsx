import React from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.EXPERIENCE} className="section" style={{ backgroundColor: 'var(--color-dark-900)', borderTop: '1px solid var(--color-dark-800)' }}>
        <div className="container">
            <div style={{ marginBottom: '4rem' }}>
                <h2 className="text-accent uppercase tracking-widest" style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{t.experience.title}</h2>
                <h3 className="font-display font-bold text-white" style={{ fontSize: '2.25rem' }}>{t.experience.subtitle}</h3>
            </div>

            <div className="timeline-container">
                <div className="timeline-line"></div>
                
                {t.experience.items.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        {/* Dot */}
                        <div className="timeline-dot">
                            <div className="timeline-dot-inner"></div>
                        </div>
                        
                        {/* Content Card */}
                        <div className="timeline-content">
                            <div className="flex flex-col md-flex justify-between items-center" style={{ marginBottom: '1rem', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h4 className="font-display font-bold text-white text-xl">{exp.company}</h4>
                                <span className="text-accent text-sm font-medium" style={{ backgroundColor: 'var(--color-accent-light)', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginTop: '0.5rem' }}>{exp.period}</span>
                            </div>
                            <h5 className="text-gray" style={{ fontWeight: 500, marginBottom: '0.75rem' }}>{exp.role}</h5>
                            <p className="text-gray text-sm" style={{ marginBottom: '1rem' }}>{exp.description}</p>
                            {exp.achievements && (
                                <ul style={{ listStyle: 'disc', listStylePosition: 'inside', fontSize: '0.875rem', color: 'var(--color-gray-500)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    {exp.achievements.map((ach, i) => (
                                        <li key={i}>{ach}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center" style={{ marginTop: '3rem' }}>
                <p className="text-gray-500 text-sm">{t.experience.footer}</p>
            </div>
        </div>
    </section>
  );
};