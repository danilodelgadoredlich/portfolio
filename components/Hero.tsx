import React from 'react';
import { ArrowRight, Linkedin, Mail, Smartphone } from 'lucide-react';
import { SectionId } from '../types'; 
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-800/30 -skew-x-12 translate-x-20 -z-10"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 border-2 border-accent/20 rounded-full"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <h2 className="text-accent font-medium tracking-widest uppercase">{t.hero.role}</h2>
                <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                    Danilo <br />
                    <span className="text-white">Redlich.</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                    {t.hero.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
                <a href="#contact" className="group flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors">
                    {t.hero.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </a>
                <div className="h-px w-12 bg-gray-700"></div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/danilo-redlich-ml" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:danilo.delgado.redlich@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
            
            <div className="pt-8 flex gap-12">
                 <div>
                    <span className="block font-display text-4xl font-bold text-white">16+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">{t.hero.yearsExp}</span>
                 </div>
                 <div>
                    <span className="block font-display text-4xl font-bold text-white">10+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">{t.hero.cloudProjects}</span>
                 </div>
            </div>
        </div>

        <div className="lg:w-1/2 relative">
            <div className="relative z-10">
                 <div className="aspect-[3/4] w-72 md:w-96 mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-dark-700 relative group">
                    <img 
                        src="components/images/yo.jpeg" 
                        alt="Danilo Redlich"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -right-4 md:right-10 bg-dark-800 p-4 rounded-lg shadow-xl border border-dark-700 flex items-center gap-3 animate-bounce-slow">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-dark-900">
                        <Smartphone size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">{t.hero.available}</p>
                        <p className="text-sm font-bold text-white">+56 9 9445 5994</p>
                    </div>
                 </div>
            </div>
            
            {/* Background graphical element */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

      </div>
    </section>
  );
};