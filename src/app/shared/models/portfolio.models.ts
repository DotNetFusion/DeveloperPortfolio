export interface Developer {
  name: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  profileImage: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  liveUrl: string;
  image?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  location: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date?: string;
}
