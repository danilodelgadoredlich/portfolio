import { ExperienceItem } from '../types';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      role: 'Ingeniero de Datos',
      description: 'Especialista en arquitectura, diseño e implementación de soluciones robustas de Data Engineering y Analytics con más de 16 años de trayectoria.',
      cta: 'Contáctame',
      yearsExp: 'Años Experiencia',
      cloudProjects: 'Proyectos Cloud',
      available: 'Disponible',
    },
    services: {
      title: 'Aptitudes Principales',
      subtitle: 'Tecnologías y Dominio Técnico.',
      description: 'Consolidada experiencia en Cloud Computing, ETL/ELT y visualización de datos para generar valor de negocio.',
      cards: {
        cloud: 'Arquitectura Cloud',
        data: 'Big Data & Bases de Datos',
        etl: 'Orquestación & ETL',
        viz: 'Visualización de Datos (BI)',
        dev: 'Desarrollo',
        method: 'Metodologías'
      }
    },
    experience: {
      title: 'Trayectoria',
      subtitle: 'Experiencia Profesional.',
      footer: 'Experiencia previa incluye roles en Aligare, Global Hitss, everis y VTR.',
      items: [
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
      ] as ExperienceItem[]
    },
    education: {
      title: 'Educación',
      certifications: 'Certificaciones',
      items: {
        ds: {
          degree: 'Diplomado en Python and Data Science',
          inst: 'Universidad Autónoma de Chile',
          year: 'Dic 2024 - Jun 2025'
        },
        ai: {
          degree: 'Diplomado en IA, Inteligencia Artificial',
          inst: 'Universidad Autónoma de Chile',
          year: 'Ene 2024 - Jun 2024'
        },
        eng: {
          degree: 'Ingeniería Informática',
          inst: 'INACAP',
          year: '2001 - 2006'
        }
      },
      certs: {
        scrum: 'Certificate SMPC',
        google: 'Google',
        python: 'Fundamentos',
        aws: 'ACL Academy'
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Hablemos de tu próximo proyecto de datos.',
      description: 'Disponible para oportunidades en Data Engineering, Arquitectura de Datos e Inteligencia de Negocios.',
      phone: 'Teléfono / WhatsApp',
      email: 'Email',
      location: 'Ubicación',
      linkedin: 'LinkedIn',
      form: {
        name: 'Nombre',
        namePH: 'Tu nombre',
        email: 'Email',
        emailPH: 'tu@email.com',
        message: 'Mensaje',
        messagePH: '¿En qué puedo ayudarte?',
        submit: 'Enviar Mensaje'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      role: 'Data Engineer',
      description: 'Specialist in architecture, design, and implementation of robust Data Engineering and Analytics solutions with over 16 years of experience.',
      cta: 'Contact Me',
      yearsExp: 'Years Experience',
      cloudProjects: 'Cloud Projects',
      available: 'Available',
    },
    services: {
      title: 'Key Skills',
      subtitle: 'Technologies and Technical Domain.',
      description: 'Consolidated experience in Cloud Computing, ETL/ELT, and data visualization to generate business value.',
      cards: {
        cloud: 'Cloud Architecture',
        data: 'Big Data & Databases',
        etl: 'Orchestration & ETL',
        viz: 'Data Visualization (BI)',
        dev: 'Development',
        method: 'Methodologies'
      }
    },
    experience: {
      title: 'Career',
      subtitle: 'Professional Experience.',
      footer: 'Previous experience includes roles at Aligare, Global Hitss, everis, and VTR.',
      items: [
        {
          company: 'ACL',
          role: 'Data Engineer',
          period: 'Oct 2023 - Present',
          description: 'Development and strengthening of competencies in Data Engineering and Analytics projects.',
          achievements: [
            'Development in SQL Server, Python, PySpark, and C.',
            'Design and implementation of ETL processes towards Data Warehouses.',
            'Orchestration of flows with Azure Data Factory.',
            'Programming in Azure Databricks notebooks.'
          ]
        },
        {
          company: 'Talana',
          role: 'Integration Consultant / Senior BA',
          period: 'May 2022 - Sep 2023',
          description: 'Leadership in integrations and Business Analysis.',
          achievements: [
            'Successful replacement of the Product Owner during a critical period.',
            'Generation of User Stories and functional requirements.',
            'Documentation and maintenance of knowledge in the integration area.'
          ]
        },
        {
          company: 'ACL Tecnología',
          role: 'Data Engineer (CENCOSUD)',
          period: 'Aug 2021 - May 2022',
          description: 'Analysis and development of ETL solutions for CENCOSUD.',
          achievements: [
            'Mastery of Apache NiFi for efficient data flows.',
            'Real-time data ingestion in Teradata and Athena.',
            'Optimization of AWS S3 bucket readings.'
          ]
        },
        {
          company: 'iNegocios',
          role: 'Data Engineer',
          period: 'Oct 2019 - Aug 2021',
          description: 'Independent professional focused on ETL solutions and strategic leadership.',
          achievements: [
            'ODI version 11 development for DIPRES.',
            'Agile project management (Scrum).'
          ]
        },
        {
          company: 'Seidor Chile',
          role: 'Functional Analyst | Senior Consultant',
          period: 'Apr 2016 - Oct 2019',
          description: 'Analysis of VTEX integrations for Jumbo Supermarkets and Wong Peru.',
          achievements: [
            'TCP integration between OSB and POS.',
            'PLSQL analysis for Comptroller General.'
          ]
        }
      ] as ExperienceItem[]
    },
    education: {
      title: 'Education',
      certifications: 'Certifications',
      items: {
        ds: {
          degree: 'Diploma in Python and Data Science',
          inst: 'Universidad Autónoma de Chile',
          year: 'Dec 2024 - Jun 2025'
        },
        ai: {
          degree: 'Diploma in AI, Artificial Intelligence',
          inst: 'Universidad Autónoma de Chile',
          year: 'Jan 2024 - Jun 2024'
        },
        eng: {
          degree: 'Computer Engineering',
          inst: 'INACAP',
          year: '2001 - 2006'
        }
      },
      certs: {
        scrum: 'SMPC Certificate',
        google: 'Google',
        python: 'Fundamentals',
        aws: 'ACL Academy'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s talk about your next data project.',
      description: 'Available for opportunities in Data Engineering, Data Architecture, and Business Intelligence.',
      phone: 'Phone / WhatsApp',
      email: 'Email',
      location: 'Location',
      linkedin: 'LinkedIn',
      form: {
        name: 'Name',
        namePH: 'Your name',
        email: 'Email',
        emailPH: 'your@email.com',
        message: 'Message',
        messagePH: 'How can I help you?',
        submit: 'Send Message'
      }
    }
  }
};