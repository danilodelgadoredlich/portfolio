import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id={SectionId.CONTACT} className="section" style={{ paddingBottom: '2.5rem', borderTop: '1px solid var(--color-dark-700)', backgroundColor: 'var(--color-dark-900)' }}>
      <div className="container">
        <div className="contact-grid">
            
            <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-accent uppercase tracking-widest" style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{t.contact.title}</h2>
                  <h3 className="font-display font-bold text-white" style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>{t.contact.subtitle}</h3>
                  <p className="text-gray text-lg" style={{ marginBottom: '2rem' }}>
                      {t.contact.description}
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="flex items-center gap-4">
                        <div className="contact-icon">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-gray text-sm">{t.contact.phone}</p>
                            <a href="tel:+56994455994" className="text-white" style={{ fontWeight: 500 }}>+56 9 9445 5994</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="contact-icon">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-gray text-sm">{t.contact.email}</p>
                            <a href="mailto:danilo.delgado.redlich@gmail.com" className="text-white" style={{ fontWeight: 500 }}>danilo.delgado.redlich@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="contact-icon">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-gray text-sm">{t.contact.location}</p>
                            <p className="text-white" style={{ fontWeight: 500 }}>Gran Santiago, Chile</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                         <div className="contact-icon">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <p className="text-gray text-sm">{t.contact.linkedin}</p>
                            <a href="https://www.linkedin.com/in/danilo-redlich-ml" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontWeight: 500 }}>/in/danilo-redlich-ml</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <form className="contact-form">
                    <div className="grid-layout md-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <label className="text-gray uppercase" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>{t.contact.form.name}</label>
                            <input type="text" className="form-input" placeholder={t.contact.form.namePH} style={{ margin: 0 }} />
                        </div>
                        <div>
                            <label className="text-gray uppercase" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>{t.contact.form.email}</label>
                            <input type="email" className="form-input" placeholder={t.contact.form.emailPH} style={{ margin: 0 }} />
                        </div>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                         <label className="text-gray uppercase" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>{t.contact.form.message}</label>
                         <textarea className="form-textarea" placeholder={t.contact.form.messagePH} style={{ height: '8rem', margin: 0 }}></textarea>
                    </div>
                    <button type="submit" className="btn-primary">
                        {t.contact.form.submit} <Send size={18} />
                    </button>
                </form>
            </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-dark-800)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center' }}>
            <p className="text-gray text-sm">© {new Date().getFullYear()} Danilo Redlich. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};