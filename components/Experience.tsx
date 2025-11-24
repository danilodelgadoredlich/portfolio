import React from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.EXPERIENCE} className="py-20 bg-dark-900 border-t border-dark-800">
        <div className="container mx-auto px-6">
            <div className="mb-16">
                <h2 className="text-accent font-medium tracking-widest uppercase mb-2">{t.experience.title}</h2>
                <h3 className="font-display text-4xl font-bold text-white">{t.experience.subtitle}</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                {t.experience.items.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-dark-700 bg-dark-900 group-hover:bg-accent group-hover:border-accent transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <div className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-dark-900"></div>
                        </div>
                        
                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-accent/50 transition-all shadow-lg">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                <h4 className="font-display font-bold text-xl text-white">{exp.company}</h4>
                                <span className="text-accent text-sm font-medium px-3 py-1 bg-accent/10 rounded-full w-fit mt-2 sm:mt-0">{exp.period}</span>
                            </div>
                            <h5 className="text-gray-300 font-medium mb-3">{exp.role}</h5>
                            <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                            {exp.achievements && (
                                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                    {exp.achievements.map((ach, i) => (
                                        <li key={i}>{ach}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">{t.experience.footer}</p>
            </div>
        </div>
    </section>
  );
};