export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface Skill {
  name: string;
  category: 'cloud' | 'data' | 'tools' | 'viz';
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CONTACT = 'contact',
}

export type Language = 'es' | 'en';