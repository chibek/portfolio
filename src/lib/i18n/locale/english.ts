import { list, paragraph, strong } from "@lib/html";
import type { Skills, Works } from "./spanish";

export const english = {
  global: {
    scrollToTop: "Scroll to top",
  },
  meta: {
    name: "English",
    locale: "en",
    code: "en-US",
  },
  skills: {
    aws: "AWS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    css: "CSS",
    php: "PHP",
    react: "React",
    nextjs: "Next.js",
    nodejs: "Node.js",
    astro: "Astro",
    tailwindcss: "Tailwind CSS",
    mysql: "MySQL",
    git: "Git",
    docker: "Docker",
    communication: "Comunicación",
    "analytical thinking": "Análisis técnico",
    teamwork: "Trabajo en equipo",
    azure: "Azure",
    gitlab: "GitLab",
    jest: "Jest",
    redux: "Redux",
    postgressql: "PostgreSQL",
    express: "Express",
    html: "HTML",
    scrum: "Scrum",
  } as Skills,
  sections: {
    hero: {
      name: "Introduction",
      id: "introduction",
      headline: `Hey! I'm Sergio, Full Stack application ${strong("developer")}.`,
      description:
        "Specialized in game development, yet also passionate about developing any kind of software. With 6+ years of coding expertise, I am currently seeking to leverage my 4+ years of professional experience to transition into backend development.",
      copied: "Copied!",
    },
    technologies: {
      title: "Main tech stack",
      name: "Technologies",
      id: "technologies",
      frontend: "Frontend",
      backend: "Backend",
      softSkills: "Habilidades",
    },

    experience: {
      title: "Where I've worked",
      name: "Experience",
      id: "experience",

      showMore: "Show more",
      showLess: "Show less",
      present: "Present",
      jobs: {
        relex: {
          title: "Fullstack Consultant",
          company: "Relex",
          location: "Helsinki, Finland",
          startDate: "2024-01-01",
          skills: [
            "communication",
            "tailwindcss",
            "css",
            "azure",
            "nodejs",
            "jest",
            "gitlab",
          ],
          description: [
            `At RELEX, I maintained and developed new features for their Workforce Management (WFM) system. This included:`,
            `${list([
              `Backend in Elixir (Phoenix framework).`,
              `Microservices in NodeJS.`,
              `Frontend applications with React and Redux.`,
            ])}`,
          ],
        },
        blueprintGenetics: {
          title: "Fullstack Consultant",
          company: "Blueprint Genetics",
          location: "Helsinki, Finland",
          startDate: "2023-06-01",
          endDate: "2024-01-01",
          skills: [
            "react",
            "typescript",
            "nodejs",
            "postgressql",
            "aws",
            "php",
            "tailwindcss",
            "jest",
          ],
          description: [
            `Contributed to Blueprint's Nucleus system, focusing on their frontend (React) and backends (PHP, Golang). Tasks included:`,
            `${list([
              `SQL migrations (Flyway) and backend improvements.`,
              `React frontend refactoring and data-fetching optimization.`,
              `Integration tests (Robot framework) and unit testing for all components.`,
            ])}`,
            `Key achievements: Delivered new products, improved frontend architecture, and enhanced release planning.`,
          ],
        },
        baronaInternal: {
          title: "Fullstack Consultant",
          company: "Barona",
          location: "Helsinki, Finland",
          startDate: "2023-06-01",
          endDate: "2024-01-01",
          skills: ["react", "typescript", "nodejs", "aws", "gitlab"],
          description: [
            `Led a greenfield project for Barona, developing a platform with NodeJs, React, and AWS. Responsibilities included:`,
            `${list([
              `Building private RESTful APIs (Koa.js, TypeScript).`,
              `End-to-end testing (Vitest) and platform documentation.`,
            ])}`,
            `Completed the project on time, with commendation for communication and meeting client expectations.`,
          ],
        },
        baronaWeb: {
          title: "Frontend Developer",
          company: "Barona",
          location: "Helsinki, Spain",
          startDate: "2021-01-01",
          endDate: "2022-08-01",
          skills: ["react", "typescript"],
          description: [
            `Developed web applications using Next.js and Express. Contributions included:`,
            `${list([
              `Building responsive frontends (Tailwind CSS).`,
              `Developing RESTful APIs (Node.js, Express, ElasticSearch).`,
              `Testing with Jest and collaborating closely with clients.`,
            ])}`,
          ],
        },
        sesame: {
          title: "Frontend Developer",
          company: "Sesame",
          location: "Valencia, Spain",
          startDate: "2021-01-01",
          endDate: "2022-08-01",
          skills: ["react", "typescript"],
          description: [
            `Led frontend development, guiding a small team to improve app performance and architecture. Key contributions:`,
            `${list([
              `Optimized frontend architecture and collaborated with the design team on reusable components.`,
              `Integrated system design and mentored junior developers.`,
            ])}`,
          ],
        },
        sngular: {
          title: "Fullstack Developer",
          company: "Sngular",
          location: "Valencia, Spain",
          startDate: "2020-01-01",
          endDate: "2021-01-01",
          skills: [],
          description: [
            `Worked on multiple projects, including MSC and AECOC, providing both PMO and development support. Focus areas:`,
            `${list([
              `Architectural solutions using Java and AWS.`,
              `Simultaneously managing multiple projects and client meetings.`,
            ])}`,
          ],
        },
        pfs: {
          title: "Backend Developer",
          company: "PFS",
          location: "Valencia, Spain",
          startDate: "2017-01-01",
          endDate: "2020-01-01",
          skills: ["react", "typescript"],
          description: [
            `Developed software solutions for the banking sector. Key responsibilities:`,
            `${list([
              `Resolved big data challenges with Java and OracleDB.`,
              `Implemented ETL processes and worked with Python for complex tasks.`,
            ])}`,
          ],
        },
      } as Works,
    },
    about: {
      title: "About Me",
      name: "About Me",
      id: "about-me",
      sections: {
        atWork: {
          title: "At Work",
          description: [
            `${paragraph("With almost 8 years of coding experience, I bring a strong attention to detail and a committed work ethic to every project. I’m skilled in collaborating within teams but also thrive when working independently.")}`,
            `${paragraph("I enjoy collaborating and supporting teammates, and I naturally take on leadership roles when needed, guiding projects forward while encouraging a positive, productive environment. My goal is to create solutions that benefit the team and foster growth for everyone involved.")}`,
          ],
        },
        personal: {
          title: "My Personal Side",
          description: [
            `${paragraph("Personally, I love my work and have always enjoyed learning and feeling that I’m improving. I always try to stay informed about new technologies.")}`,
            `${paragraph("Some things I enjoy besides programming are: playing video games, reading books, playing paddle tennis, and enjoying life.")}`,
          ],
        },
        contact: {
          title: "What I'm looking for?",
          description: [
            `I'm looking good environment flexibility and passion to develop some product`,
          ],
        },
        location: {
          title: `Location`,
        },
      },
    },
  },
} as const;
