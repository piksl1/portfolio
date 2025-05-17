import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-1.webp',
    title: 'MusicaBuy',
    description:
      'An e-commerce platform for musical instruments with product filtering, cart functionality, and responsive UI. Features product categories and detailed product pages.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Radix UI',
      'Supabase',
      'Zod Schema',
    ],
    links: {
      preview: 'https://musicabuy.vercel.app',
      github: 'https://github.com/piksl1/musicabuy',
      githubApi: 'https://api.github.com/repos/piksl1/musicabuy',
    },
  },
  {
    image: '/images/project-2.webp',
    title: 'Country Explorer',
    description:
      'An interactive application that allows users to explore countries around the world, view details about each country, and filter by region. Features dark mode and responsive design.',
    technologies: [
      'React',
      'Tailwind CSS',
      'REST API',
      'Radix UI',
      'TypeScript',
      'Zod Schema',
      'framer-motion',
      '...',
    ],
    links: {
      preview: 'https://country-explorer-app.vercel.app',
      github: 'https://github.com/piksl1/country-explorer',
      githubApi: 'https://api.github.com/repos/piksl1/country-explorer',
    },
  },
  {
    image: '/images/project-3.webp',
    title: 'BeTube',
    description:
      'A YouTube clone with video playback, search functionality, and channel pages. Features a modern UI with responsive design and video recommendations.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Radix UI',
      'Tailwind CSS',
      'REST API',
      '...',
    ],
    links: {
      preview: 'https://betube-v2.vercel.app',
      github: 'https://github.com/piksl1/BeTube-v2',
      githubApi: 'https://api.github.com/repos/piksl1/BeTube-v2',
    },
  },
  {
    image: '/images/project-4.webp',
    title: 'Finance Dashboard',
    description:
      'A Next.js finance dashboard application with authentication, data visualization, and responsive design. Tracks expenses and income.',
    technologies: [
      'Next.js',
      'json-server',
      'Tailwind CSS',
      'Zod Schema',
      'supabase',
    ],
    links: {
      preview: 'https://nextjs-finance-app.vercel.app',
      github: 'https://github.com/piksl1/nextjs-finance-app-main',
      githubApi: 'https://api.github.com/repos/piksl1/nextjs-finance-app-main',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Personal Projects',
    description:
      'Created several frontend projects including responsive web applications and UI components. Worked with JavaScript and React/Nextjs to build interactive user interfaces. Focused on creating clean, maintainable code and responsive designs that work across different devices.',
    period: '2023 - 2025',
  },
  {
    title: 'Self-taught Web Development',
    location: 'Online Learning Platforms',
    description:
      'Mastered the fundamentals of web development through online courses, tutorials, and documentation. Built several projects to practice HTML, CSS, and JavaScript concepts.',
    period: '2023 - 2025',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
] as const;
