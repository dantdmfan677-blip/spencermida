export interface DocumentItem {
  id: string;
  title: string;
  date?: string;
  summary: string;
  type: 'Assessment' | 'Interview' | 'Resume';
  fileName?: string;
  fullContent?: string | React.ReactNode; 
}

export enum SectionType {
  HOME = 'home',
  ABOUT_ME = 'about-me',
  ABOUT_ISM = 'about-ism',
  RESEARCH = 'research',
  MENTORSHIP = 'mentorship',
  PROJECTS = 'projects',
  BLOG = 'blog',
  CONTACT = 'contact'
}