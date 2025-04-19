export const PERSON = {
  name: 'Oliver Lewandowski',
  title: 'Software Developer',
  location: 'Gdańsk, 🇵🇱',
  description:
    'Passionate about the React ecosystem. Focused on building efficient and performant web apps. Up-to-date with modern development tools, with a keen interest in exploring new technologies',
  email: 'oliver.lewandowski1@gmail.com',
  github: 'https://github.com/olewandowski1',
  linkedin: 'https://www.linkedin.com/in/oleelewandowski/',
  instagram: '',
  twitter: '',
};

export const CURRENT_COMPANY = {
  name: 'SolDevelo',
  subtitle: 'Technology Solutions Provider',
  description:
    'SolDevelo is a dynamic software development and information technology outsourcing company, focused on delivering high quality software and innovative solutions.',
  website: 'https://soldevelo.com/',
  logo: '/soldevelo.jpg',
};

export const PROJECTS = [
  {
    title: 'OpenIMIS',
    subtitle: 'Health financing solution for low-income countries',
    description:
      'Worked on the UI, implementing new features, fixing bugs, estimating tasks and improving scalability.',
    techStack: ['React', 'JavaScript', 'Material UI', 'GraphQL', 'Redux'],
    imageUrl: '/openimis.png',
    githubUrl: 'https://github.com/openimis',
    websiteUrl: '',
  },
  {
    title: 'OpenLMIS',
    subtitle: 'Supply chain management system for health commodities',
    description:
      'Worked on the UI, developing new features, fixing bugs, estimating tasks and feature requests.',
    techStack: [
      'React',
      'AngularJS',
      'JavaScript',
      'RESTful API',
      'Webpack',
      'Karma',
    ],
    imageUrl: '/openlmis.png',
    githubUrl: 'https://github.com/openlmis',
    websiteUrl: '',
    featured: {
      title: 'New OpenLMIS UI PoC',
      subtitle:
        'A proof of concept for a new UI for OpenLMIS demonstrating the performance and scalability of the new architecture.',
      description:
        'Defined the technology stack (e.g., React, TypeScript, etc.), architected the foundational structure, and developed the core component library for this proof-of-concept UI, establishing the technical groundwork for the migration.',
      techStack: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'Tanstack Query',
        'Tanstack Router',
        'Shadcn UI',
        'Zod',
        'React Hook Form',
        'i18n-react',
        'Zustand',
      ],
      githubUrl: 'https://github.com/olewandowski1/openlmis-ui-poc',
      websiteUrl: 'https://openlmis-ui-poc.vercel.app/login',
    },
  },
  {
    title: 'OpenMRS',
    subtitle: 'Open-source platform for electronic medical records',
    description:
      'Worked on the UI, improving the accessibility of the application.',
    techStack: [
      'React',
      'TypeScript',
      'Carbon Design System',
      'Jest',
      'Microfrontend',
    ],
    imageUrl: '/openmrs.webp',
    githubUrl: 'https://github.com/openmrs',
    websiteUrl: '',
  },
  {
    title: 'Freelance Landing Page',
    subtitle:
      'Landing page for a company offering heat pumps and cooling services',
    description:
      'End-to-end development of a landing page, including requirements gathering, design, development and deployment.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'SEO',
      'Resend',
      'Vercel',
    ],
    imageUrl: '/chlodnyklimat.svg',
    websiteUrl: 'https://www.chlodnyklimat.com/',
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    date: 'July 1, 2022 - Sept 30, 2022',
    title: 'Software Development Intern',
    description: 'Internship',
    company: '@SolDevelo',
  },
  {
    id: 2,
    date: 'Oct 1, 2022 - Jan 31, 2023',
    title: 'Junior Software Developer',
    description: 'Part-time',
    company: '@SolDevelo',
  },
  {
    id: 3,
    date: 'Feb 1, 2023 - Sept 30, 2024',
    title: 'Junior Software Developer',
    description: 'Full-time',
    company: '@SolDevelo',
  },
  {
    id: 4,
    date: 'Oct 1, 2024 - Present',
    title: 'Software Developer',
    description: 'Full-time',
    company: '@SolDevelo',
  },
];
