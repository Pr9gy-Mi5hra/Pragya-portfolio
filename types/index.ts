export interface PersonalInfo {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  roles: string[];
  headline: string;
  yearsOfExperience: string;
  currentRole: string;
  summary: string;
  strengths: string[];
}

export interface Experience {
  company: string;
  designation: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Deployment";
  skills: string[];
}

export interface Project {
  name: string;
  slug: string;
  description?: string;
  features?: string[];
  technologies: string[];
  challenges?: string[];
  impact?: string[];
  githubUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  achievements?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export interface NavLink {
  label: string;
  href: string;
}
