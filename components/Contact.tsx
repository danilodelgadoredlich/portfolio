import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id={SectionId.CONTACT} className="bg-dark-900 pt-20 pb-10 border-t border-dark-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/2">
                <h2 className="text-accent font-medium tracking-widest uppercase mb-2">{t.contact.title}</h2>
                <h3 className="font-display text-4xl font-bold text-white mb-6">{t.contact.subtitle}</h3>
                <p className="text-gray-400 mb-8 text-lg">
                    {t.contact.description}
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{t.contact.phone}</p>
                            <a href="tel:+56994455994" className="text-white font-medium hover:text-accent transition-colors">+56 9 9445 5994</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{t.contact.email}</p>
                            <a href="mailto:danilo.delgado.redlich@gmail.com" className="text-white font-medium hover:text-accent transition-colors">danilo.delgado.redlich@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{t.contact.location}</p>
                            <p className="text-white font-medium">Gran Santiago, Chile</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{t.contact.linkedin}</p>
                            <a href="https://www.linkedin.com/in/danilo-redlich-ml" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-accent transition-colors">/in/danilo-redlich-ml</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2">
                <form className="bg-dark-800 p-8 rounded-2xl border border-dark-700 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-xs text-gray-400 uppercase mb-2">{t.contact.form.name}</label>
                            <input type="text" className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder={t.contact.form.namePH} />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-400 uppercase mb-2">{t.contact.form.email}</label>
                            <input type="email" className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder={t.contact.form.emailPH} />
                        </div>
                    </div>
                    <div className="mb-6">
                         <label className="block text-xs text-gray-400 uppercase mb-2">{t.contact.form.message}</label>
                         <textarea className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors h-32" placeholder={t.contact.form.messagePH}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-accent text-dark-900 font-bold py-4 rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
                        {t.contact.form.submit} <Send size={18} />
                    </button>
                </form>
            </div>
        </div>

        <div className="border-t border-dark-800 mt-16 pt-8 text-center">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Danilo Redlich. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};