export interface About {
    name: string;
    bio: string;
    imageUrl: string;
  }
  
  export interface Skill {
    id: number;
    name: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    demoLink: string;
    githubLink: string;
  }
  
  export interface PortfolioData {
    about: About;
    skills: Skill[];
    projects: Project[];
  }
  