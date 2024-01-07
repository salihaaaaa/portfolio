import { PortfolioData } from './definitions';

const portfolioData: PortfolioData = {
  about: {
    name: 'Salihah',
    bio: 'A passionate developer with expertise in web technologies.',
    imageUrl: '/images/profile.jpg',
  },
  skills: [
    {
      id: 1,
      name: 'React'
    },
    {
      id: 2,
      name: 'Next.js'
    },
    {
      id: 3,
      name: 'TypeScript'
    },
    {
      id: 4,
      name: 'C#'
    },
    {
      id: 5,
      name: 'ASP.NET Core'
    },
    {
      id: 6,
      name: 'Entity Framework Core'
    },
    {
      id: 7,
      name: 'MSSQL'
    },
    {
      id: 8,
      name: 'Unit Testing'
    },
    {
      id: 9,
      name: 'Postman'
    },
    {
      id: 10,
      name: 'Git'
    },
    {
      id: 11,
      name: 'Vercel'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Portfolio',
      description: 'A portfolio website that reflects my journey in self-learning. Utilizing the power of Next.js and the simplicity of Tailwind CSS, this website serves as a testament to my dedication to mastering new technologies. Through this project, I honed my skills in building dynamic and responsive web applications while creating an interactive space for presenting my achievements and capabilities.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Vercel'],
      demoLink: 'https://salihah.vercel.app/',
      githubLink: 'https://github.com/salihaaaaa/portfolio.git',
    },
    {
      id: 2,
      title: 'Leave Management System',
      description: 'A Leave Management System developed as part of my self-learning journey with ASP.NET Core Web API. This project allowed me to delve into the world of backend development, where I acquired skills in designing robust APIs and implementing features like user authentication and role-based access control. I thoroughly tested the API endpoints using Postman, ensuring its reliability and functionality. The Leave Management System showcases my ability to tackle real-world problems through self-directed learning and practical application of knowledge.',
      technologies: ['C#', 'ASP.NET Core', 'Web API', 'MSSQL', 'Entity Framework Core', 'Unit Testing', 'Postman'],
      demoLink: '',
      githubLink: 'https://github.com/salihaaaaa/LeaveSystem.git',
    },
  ],
};

export default portfolioData;