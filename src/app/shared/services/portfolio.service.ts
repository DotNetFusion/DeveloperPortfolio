import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import {
  Developer,
  Skill,
  Project,
  Experience,
  Certification
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private developer: Developer = {
    name: 'Sunkolu Shiva Kumar',
    tagline: '.NET Full Stack Developer | Angular | Azure | Building scalable enterprise applications',
    summary: 'Software Engineer with 4+ years of experience building scalable enterprise applications using .NET Core, ASP.NET Core, Angular, and SQL Server. Experienced in developing secure APIs, full-stack web applications, and cloud-enabled solutions using Azure. Proven ability to work in large enterprise environments, collaborate across teams, and deliver reliable production-ready systems.',
    email: 'shivasunke1006@gmail.com',
    phone: '+91 8247090916',
    github: 'https://github.com/DotNetFusion',
    linkedin: 'https://linkedin.com/in/shivasunke/',
    profileImage: '/img/shivaPic.jpeg'
  };

  private skills: Skill[] = [
    {
      category: 'Programming',
      skills: ['C#', 'TypeScript', 'JavaScript']
    },
    {
      category: 'Backend',
      skills: ['.NET', '.NET Core', 'ASP.NET Core', 'Web API', 'Entity Framework', 'ADO.NET']
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      category: 'Database',
      skills: ['SQL Server']
    },
    {
      category: 'Cloud',
      skills: ['Microsoft Azure', 'Azure App Services']
    },
    {
      category: 'Mobile',
      skills: ['.NET MAUI']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Visual Studio', 'VS Code']
    }
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'EMI Calculator',
      description: 'A financial utility web application that helps users calculate loan EMIs and analyze repayment schedules.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/DotNetFusion/EMI_Calculation',
      liveUrl: 'https://dotnetfusion.github.io/EMI_Calculation/'
    },
    {
      id: 2,
      title: 'NavigateTo',
      description: 'A productivity tool designed to simplify quick navigation between frequently used resources.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/DotNetFusion/NavigateTo',
      liveUrl: 'https://dotnetfusion.github.io/NavigateTo/'
    },
    {
      id: 3,
      title: 'Developer Portfolio',
      description: 'A responsive personal portfolio website showcasing technical skills, projects, and professional experience.',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'SSR'],
      github: 'https://github.com/DotNetFusion/DeveloperPortfolio',
      liveUrl: 'https://agent-69a98f91435a5172ebb7bc--starlit-elf-b00abf.netlify.app/'
    }
  ];

  private experience: Experience[] = [
    {
      id: 1,
      company: 'HSBC',
      position: 'Software Engineer – .NET Developer (Cyber Security)',
      startDate: 'Jan 2024',
      endDate: 'Present',
      current: true,
      location: 'Hyderabad, India',
      responsibilities: [
        'Level 3 production support',
        'Incident investigation',
        'Bug fixing and application stability improvements'
      ]
    },
    {
      id: 2,
      company: 'LTIMindtree',
      position: 'Software Engineer – .NET Full Stack Developer',
      startDate: 'Oct 2021',
      endDate: 'Jan 2024',
      current: false,
      location: 'Hyderabad, India',
      responsibilities: [
        'Developed enterprise onboarding applications',
        'Built applications using .NET Core, Angular and SQL Server',
        'Built ASP.NET Core Web APIs and Blazor applications',
        'Worked with Azure and DevOps pipelines',
        'Followed Agile development methodology'
      ]
    }
  ];

  private certifications: Certification[] = [
    {
      id: 1,
      title: 'Microsoft Azure AZ-900 Certified',
      issuer: 'Microsoft'
    },
    {
      id: 2,
      title: 'ASP.NET Core MVC',
      issuer: 'Microsoft'
    },
    {
      id: 3,
      title: 'ASP.NET Core Web API',
      issuer: 'Microsoft'
    },
    {
      id: 4,
      title: 'Secure Delivery for .NET Developer',
      issuer: 'Microsoft'
    },
    {
      id: 5,
      title: 'Software Testing Course',
      issuer: 'Udemy'
    }
  ];

  getDeveloper = signal(this.developer);
  getSkills = signal(this.skills);
  getProjects = signal(this.projects);
  getExperience = signal(this.experience);
  getCertifications = signal(this.certifications);

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
