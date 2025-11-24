import React from 'react';
import { Database, Cloud, Server, BarChart, Code, Settings } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

const SkillCard: React.FC<{ title: string; icon: React.ReactNode; items: string[]; highlighted?: boolean }> = ({ title, icon, items, highlighted }) => (
  <div className={`p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${highlighted ? 'bg-accent text-dark-900' : 'bg-dark-800 text-white hover:bg-dark-700'}`}>
    <div className="relative z-10">
        <div className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center ${highlighted ? 'bg-dark-900 text-accent' : 'bg-dark-900/50 text-accent'}`}>
            {icon}
        </div>
        <h3 className={`text-xl font-display font-bold mb-4 ${highlighted ? 'text-dark-900' : 'text-white'}`}>{title}</h3>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className={`text-sm ${highlighted ? 'text-dark-900/80 font-medium' : 'text-gray-400'}`}>
                    • {item}
                </li>
            ))}
        </ul>
    </div>
    {/* Hover effect decoration */}
    {!highlighted && <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>}
  </div>
);

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.ABOUT} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <h2 className="text-accent font-medium tracking-widest uppercase mb-2">{t.services.title}</h2>
                <h3 className="font-display text-4xl font-bold text-white">{t.services.subtitle}</h3>
            </div>
            <p className="text-gray-400 max-w-md mt-6 md:mt-0">
                {t.services.description}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
                title={t.services.cards.cloud}
                icon={<Cloud />}
                items={['Azure Data Lake Storage', 'Azure Databricks', 'Azure Data Factory', 'AWS Glue & S3', 'AWS Redshift']}
                highlighted={true} // Yellow card styling from inspiration
            />
            <SkillCard 
                title={t.services.cards.data}
                icon={<Database />}
                items={['SQL Server (T-SQL)', 'PostgreSQL', 'Teradata', 'Data Warehousing', 'Delta Lake']}
            />
            <SkillCard 
                title={t.services.cards.etl}
                icon={<Settings />}
                items={['Apache Airflow', 'Apache NiFi', 'SSIS', 'Automated Pipelines', 'Python & PySpark']}
            />
             <SkillCard 
                title={t.services.cards.viz}
                icon={<BarChart />}
                items={['Power BI', 'Tableau', 'Microstrategy', 'Executive Reporting', 'KPIs']}
            />
            <SkillCard 
                title={t.services.cards.dev}
                icon={<Code />}
                items={['Python', 'C', 'Notebooks', 'Stored Procedures', 'APIs']}
            />
            <SkillCard 
                title={t.services.cards.method}
                icon={<Server />}
                items={['Scrum Master', 'Agile', 'Team Leadership', 'DevOps CI/CD', 'Project Management']}
            />
        </div>
      </div>
    </section>
  );
};