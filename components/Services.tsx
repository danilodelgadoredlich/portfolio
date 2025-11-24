import React from 'react';
import { Database, Cloud, Server, BarChart, Code, Settings } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

const SkillCard: React.FC<{ title: string; icon: React.ReactNode; items: string[]; highlighted?: boolean }> = ({ title, icon, items, highlighted }) => (
  <div className={`skill-card ${highlighted ? 'highlight' : 'dark'}`}>
    <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="skill-icon-box">
            {icon}
        </div>
        <h3 className="font-display font-bold" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {items.map((item, i) => (
                <li key={i} className="text-sm" style={{ opacity: highlighted ? 0.9 : 0.7, fontWeight: highlighted ? 500 : 400 }}>
                    • {item}
                </li>
            ))}
        </ul>
    </div>
    {/* Hover effect decoration */}
    {!highlighted && <div style={{ position: 'absolute', bottom: '-2.5rem', right: '-2.5rem', width: '8rem', height: '8rem', backgroundColor: 'var(--color-accent-light)', borderRadius: '50%' }}></div>}
  </div>
);

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.ABOUT} className="section" style={{ backgroundColor: 'var(--color-dark-900)' }}>
      <div className="container">
        <div className="flex flex-col md-flex justify-between items-center" style={{ alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div style={{ maxWidth: '42rem' }}>
                <h2 className="text-accent uppercase tracking-widest" style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{t.services.title}</h2>
                <h3 className="font-display text-white font-bold" style={{ fontSize: '2.25rem' }}>{t.services.subtitle}</h3>
            </div>
            <p className="text-gray" style={{ maxWidth: '28rem', marginTop: '1.5rem' }}>
                {t.services.description}
            </p>
        </div>

        <div className="grid-layout">
            <SkillCard 
                title={t.services.cards.cloud}
                icon={<Cloud />}
                items={['Azure Data Lake Storage', 'Azure Databricks', 'Azure Data Factory', 'AWS Glue & S3', 'AWS Redshift']}
                highlighted={true}
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