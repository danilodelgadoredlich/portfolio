import React from 'react';
import { ExperienceItem, SectionId } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: 'ACL',
    role: 'Ingeniero de datos',
    period: 'Oct 2023 - Presente',
    description: 'Desarrollo y fortalecimiento de competencias en proyectos de Data Engineering y Analytics.',
    achievements: [
        'Desarrollo en SQL Server, Python, PySpark y C.',
        'Diseño e implementación de procesos ETL hacia Data Warehouses.',
        'Orquestación de flujos con Azure Data Factory.',
        'Programación en notebooks de Azure Databricks.'
    ]
  },
  {
    company: 'Talana',
    role: 'Consultor de integración / BA Senior',
    period: 'May 2022 - Sep 2023',
    description: 'Liderazgo en integraciones y Business Analysis.',
    achievements: [
        'Reemplazo exitoso del Product Owner durante periodo crítico.',
        'Generación de Historias de Usuario y requisitos funcionales.',
        'Documentación y mantenimiento del conocimiento en el área de integraciones.'
    ]
  },
  {
    company: 'ACL Tecnología',
    role: 'Data Engineer (CENCOSUD)',
    period: 'Ago 2021 - May 2022',
    description: 'Análisis y desarrollo de soluciones ETL para CENCOSUD.',
    achievements: [
        'Dominio de Apache NiFi para flujos de datos eficientes.',
        'Ingestión de datos real-time en Teradata y Athena.',
        'Optimización de lecturas de buckets AWS S3.'
    ]
  },
  {
    company: 'iNegocios',
    role: 'Ingeniero de datos',
    period: 'Oct 2019 - Ago 2021',
    description: 'Profesional independiente enfocado en soluciones ETL y liderazgo estratégico.',
    achievements: [
        'Desarrollo ODI versión 11 para DIPRES.',
        'Gestión ágil de proyectos (Scrum).'
    ]
  },
  {
    company: 'Seidor Chile',
    role: 'Analista Funcional | Consultor Senior',
    period: 'Abr 2016 - Oct 2019',
    description: 'Análisis de integraciones VTEX para Supermercados Jumbo y Wong Perú.',
    achievements: [
        'Integración TCP entre OSB y POS.',
        'Análisis PLSQL para Contraloría General.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-20 bg-dark-900 border-t border-dark-800">
        <div className="container mx-auto px-6">
            <div className="mb-16">
                <h2 className="text-accent font-medium tracking-widest uppercase mb-2">Trayectoria</h2>
                <h3 className="font-display text-4xl font-bold text-white">Experiencia Profesional.</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                {experiences.map((exp, index) => (
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
                <p className="text-gray-500 text-sm">Experiencia previa incluye roles en Aligare, Global Hitss, everis y VTR.</p>
            </div>
        </div>
    </section>
  );
};