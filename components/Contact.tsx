import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { SectionId } from '../types';

export const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-dark-900 pt-20 pb-10 border-t border-dark-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/2">
                <h2 className="text-accent font-medium tracking-widest uppercase mb-2">Contacto</h2>
                <h3 className="font-display text-4xl font-bold text-white mb-6">Hablemos de tu próximo proyecto de datos.</h3>
                <p className="text-gray-400 mb-8 text-lg">
                    Disponible para oportunidades en Data Engineering, Arquitectura de Datos e Inteligencia de Negocios.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Teléfono / WhatsApp</p>
                            <a href="tel:+56994455994" className="text-white font-medium hover:text-accent transition-colors">+56 9 9445 5994</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Email</p>
                            <a href="mailto:danilo.delgado.redlich@gmail.com" className="text-white font-medium hover:text-accent transition-colors">danilo.delgado.redlich@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Ubicación</p>
                            <p className="text-white font-medium">Gran Santiago, Chile</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-accent shrink-0">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/danilo-redlich-ml" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-accent transition-colors">/in/danilo-redlich-ml</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2">
                <form className="bg-dark-800 p-8 rounded-2xl border border-dark-700 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-xs text-gray-400 uppercase mb-2">Nombre</label>
                            <input type="text" className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Tu nombre" />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-400 uppercase mb-2">Email</label>
                            <input type="email" className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="tu@email.com" />
                        </div>
                    </div>
                    <div className="mb-6">
                         <label className="block text-xs text-gray-400 uppercase mb-2">Mensaje</label>
                         <textarea className="w-full bg-dark-900 border border-dark-700 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors h-32" placeholder="¿En qué puedo ayudarte?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-accent text-dark-900 font-bold py-4 rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
                        Enviar Mensaje <Send size={18} />
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