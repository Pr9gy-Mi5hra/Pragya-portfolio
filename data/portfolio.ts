import type {
  Education,
  Experience,
  NavLink,
  PersonalInfo,
  Project,
  SkillCategory,
  SocialLink,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Pragya Mishra",
  email: "pragyamishra0803@gmail.com",
  linkedin: "https://linkedin.com/in/pragya-mishra-4b7a38252",
  github: "https://github.com/Pr9gy-Mi5hra",
  location: "Gurugram, Haryana, India",
  roles: ["MERN Stack Developer", "Full Stack Developer"],
  headline:
    "Software Developer at SustainInsight building climate data and analytics solutions with modern web technologies.",
  yearsOfExperience: "2 years 8 months",
  currentRole: "Software Developer at SustainInsight",
  summary:
    "Software developer with experience building full-stack web applications using the MERN stack and Next.js. Currently contributing at SustainInsight, a climate data and analytics company focused on sustainability and carbon tracking solutions.",
  strengths: ["Software Development", "Leadership", "Full-Stack Web Development"],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const typingRoles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Problem Solver",
  "Software Engineer",
];

export const experiences: Experience[] = [
  {
    company: "SustainInsight",
    designation: "Software Developer",
    duration: "Jun 2024 – Present",
    location: "Gurugram, Haryana, India",
    responsibilities: [
      "Software developer at SustainInsight.com, a climate data and analytics company.",
    ],
    technologies: [],
    companyUrl: "https://www.linkedin.com/company/sustaininsight",
  },
  {
    company: "awpl",
    designation: "Leadership Team",
    duration: "Apr 2021 – Mar 2022",
    responsibilities: [],
    technologies: [],
    companyUrl: "https://www.linkedin.com/company/awpl",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "JWT", "bcrypt", "Razorpay"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "ESLint", "Axios"],
  },
  {
    category: "Deployment",
    skills: ["Vercel"],
  },
];

export const projects: Project[] = [
  {
    name: "Campaign Kart",
    slug: "campaign-kart",
    description:
      "Full-stack e-commerce platform built with Next.js and MongoDB for campaign and product management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Material UI",
      "Tailwind CSS",
      "Redux",
    ],
    githubUrl: "https://github.com/Pr9gy-Mi5hra/campaign-kart",
  },
  {
    name: "OYO Next.js Clone",
    slug: "oyo-nextjs-clone",
    description:
      "Hotel booking platform clone with authentication, payment integration, and MongoDB backend.",
    technologies: [
      "Next.js",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Razorpay",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Pr9gy-Mi5hra/Oyo-NextJs-Clone",
  },
  {
    name: "OYO TypeScript",
    slug: "typescript-oyo",
    description:
      "TypeScript version of the OYO hotel booking application with secure authentication and payments.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Razorpay",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Pr9gy-Mi5hra/typescript-oyo",
  },
  {
    name: "Admin Dashboard",
    slug: "admin",
    description:
      "Admin panel application with authentication, Redux state management, and MongoDB integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Redux Toolkit",
      "Material UI",
    ],
    githubUrl: "https://github.com/Pr9gy-Mi5hra/Admin",
  },
  {
    name: "Todo List CRUD",
    slug: "todo-list-crud",
    description:
      "CRUD todo application built with Next.js and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Pr9gy-Mi5hra/Todo-List-Crud",
  },
  {
    name: "Book Recommendation App",
    slug: "book-recom-app",
    description:
      "React application for book recommendations with client-side routing.",
    technologies: ["React", "React Router", "JavaScript"],
    githubUrl: "https://github.com/Pr9gy-Mi5hra/book-recom-app",
  },
  {
    name: "Task Manager",
    slug: "task-manager",
    description:
      "Todo application with Redux for state management and Bootstrap UI.",
    technologies: ["React", "Redux", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/Pr9gy-Mi5hra/task-manager",
  },
];

export const education: Education[] = [];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:pragyamishra0803@gmail.com",
    icon: "mail",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pragya-mishra-4b7a38252",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Pr9gy-Mi5hra",
    icon: "github",
  },
];

export const siteConfig = {
  url: "https://pragya-mishra.vercel.app",
  title: "Pragya Mishra | MERN Stack Developer",
  description:
    "Portfolio of Pragya Mishra — MERN Stack & Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Software Developer at SustainInsight.",
  keywords: [
    "Pragya Mishra",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MongoDB",
    "Software Developer",
    "Gurugram",
  ],
  author: "Pragya Mishra",
};
