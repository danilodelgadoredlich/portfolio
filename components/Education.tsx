import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.EDUCATION} className="py-20 bg-[#1a1c23]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Academic */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-dark-800 flex items-center justify-center rounded-lg text-accent">
                        <BookOpen />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white">{t.education.title}</h3>
                </div>
                
                <div className="space-y-8">
                    <div className="border-l-2 border-dark-700 pl-6 relative">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-dark-900"></span>
                        <h4 className="text-white font-bold text-lg">{t.education.items.ds.degree}</h4>
                        <p className="text-accent">{t.education.items.ds.inst}</p>
                        <p className="text-gray-500 text-sm">{t.education.items.ds.year}</p>
                    </div>
                     <div className="border-l-2 border-dark-700 pl-6 relative">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-dark-900"></span>
                        <h4 className="text-white font-bold text-lg">{t.education.items.ai.degree}</h4>
                        <p className="text-accent">{t.education.items.ai.inst}</p>
                        <p className="text-gray-500 text-sm">{t.education.items.ai.year}</p>
                    </div>
                    <div className="border-l-2 border-dark-700 pl-6 relative">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-dark-900"></span>
                        <h4 className="text-white font-bold text-lg">{t.education.items.eng.degree}</h4>
                        <p className="text-accent">{t.education.items.eng.inst}</p>
                        <p className="text-gray-500 text-sm">{t.education.items.eng.year}</p>
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-dark-800 flex items-center justify-center rounded-lg text-accent">
                        <Award />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white">{t.education.certifications}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-accent transition-colors">
                        <h5 className="text-white font-bold mb-2">Scrum Master Professional</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{t.education.certs.scrum}</p>
                    </div>
                     <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-accent transition-colors">
                        <h5 className="text-white font-bold mb-2">Google AI Essentials</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{t.education.certs.google}</p>
                    </div>
                     <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-accent transition-colors">
                        <h5 className="text-white font-bold mb-2">Python I: Programación</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{t.education.certs.python}</p>
                    </div>
                     <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-accent transition-colors">
                        <h5 className="text-white font-bold mb-2">AWS Cloud Practitioner</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{t.education.certs.aws}</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};