import { list, paragraph, strong } from "@lib/html";
import type { SkillName } from "@lib/skill-icons";
import type { WorkProps } from "@sections/work/Work.astro";

export interface Works {
  [key: string]: WorkProps;
}
export interface Skills extends Record<SkillName, string> {}

export const spanish = {
  meta: {
    name: "Español",
    locale: "es",
    code: "es-ES",
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
      name: "Introducción",
      id: "introduccion",
      headline: `¡Hola! Soy Sergio, desarrollador de aplicaciones ${strong("Full Stack")}.`,
      description:
        "Especializado en desarrollo de videojuegos, pero también apasionado por desarrollar cualquier tipo de software. Con más de 6 años de experiencia en programación, actualmente busco aprovechar mis más de 4 años de experiencia profesional para hacer la transición al desarrollo backend.",
    },
    technologies: {
      title: "Stack tecnológico",
      name: "Tecnologías",
      id: "tecnologias",
      frontend: "Frontend",
      backend: "Backend",
      softSkills: "Habilidades",
    },

    experience: {
      title: "Dónde he trabajado",
      name: "Experiencia",
      id: "experiencia",

      showMore: "Ver más",
      showLess: "Ver menos",
      present: "Actualmente",
      jobs: {
        relex: {
          title: "Consultor Fullstack",
          company: "Relex",
          location: "Helsinki, Finlandia",
          startDate: "2024-01-01",
          skills: [
            "comunicación",
            "tailwindcss",
            "css",
            "azure",
            "nodejs",
            "jest",
            "gitlab",
          ],
          description: [
            `En RELEX, mantuve y desarrollé nuevas funcionalidades para su sistema de Gestión de la Fuerza Laboral (WFM). Esto incluyó:`,
            `${list([
              `Backend en Elixir (framework Phoenix).`,
              `Microservicios en NodeJS.`,
              `Aplicaciones frontend con React y Redux.`,
            ])}`,
          ],
        },
        blueprintGenetics: {
          title: "Consultor Fullstack",
          company: "Blueprint Genetics",
          location: "Helsinki, Finlandia",
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
            `Contribuí al sistema Nucleus de Blueprint, enfocándome en su frontend (React) y backends (PHP, Golang). Las tareas incluyeron:`,
            `${list([
              `Migraciones SQL (Flyway) y mejoras en el backend.`,
              `Refactorización del frontend en React y optimización de la obtención de datos.`,
              `Pruebas de integración (Robot framework) y pruebas unitarias para todos los componentes.`,
            ])}`,
            `Logros clave: Entrega de nuevos productos, mejora en la arquitectura del frontend y optimización de la planificación de lanzamientos.`,
          ],
        },
        baronaInternal: {
          title: "Consultor Fullstack",
          company: "Barona",
          location: "Helsinki, Finlandia",
          startDate: "2023-06-01",
          endDate: "2024-01-01",
          skills: ["react", "typescript", "nodejs", "aws", "gitlab"],
          description: [
            `Lideré un proyecto desde cero para Barona, desarrollando una plataforma con NodeJs, React y AWS. Las responsabilidades incluyeron:`,
            `${list([
              `Construcción de APIs RESTful privadas (Koa.js, TypeScript).`,
              `Pruebas de extremo a extremo (Vitest) y documentación de la plataforma.`,
            ])}`,
            `Completé el proyecto a tiempo, recibiendo elogios por la comunicación y el cumplimiento de las expectativas del cliente.`,
          ],
        },
        baronaWeb: {
          title: "Desarrollador Frontend",
          company: "Barona",
          location: "Helsinki, España",
          startDate: "2021-01-01",
          endDate: "2022-08-01",
          skills: ["react", "typescript"],
          description: [
            `Desarrollé aplicaciones web utilizando Next.js y Express. Mis contribuciones incluyeron:`,
            `${list([
              `Creación de frontends responsivos (Tailwind CSS).`,
              `Desarrollo de APIs RESTful (Node.js, Express, ElasticSearch).`,
              `Pruebas con Jest y colaboración estrecha con los clientes.`,
            ])}`,
          ],
        },
        sesame: {
          title: "Desarrollador Frontend",
          company: "Sesame",
          location: "Valencia, España",
          startDate: "2021-01-01",
          endDate: "2022-08-01",
          skills: ["react", "typescript"],
          description: [
            `Lideré el desarrollo del frontend, guiando a un pequeño equipo para mejorar el rendimiento y la arquitectura de la aplicación. Contribuciones clave:`,
            `${list([
              `Optimización de la arquitectura del frontend y colaboración con el equipo de diseño en componentes reutilizables.`,
              `Integración del diseño del sistema y mentoría a desarrolladores junior.`,
            ])}`,
          ],
        },
        sngular: {
          title: "Desarrollador Fullstack",
          company: "Sngular",
          location: "Valencia, España",
          startDate: "2020-01-01",
          endDate: "2021-01-01",
          skills: [],
          description: [
            `Trabajé en múltiples proyectos, incluyendo MSC y AECOC, proporcionando soporte de PMO y desarrollo. Áreas de enfoque:`,
            `${list([
              `Soluciones arquitectónicas utilizando Java y AWS.`,
              `Gestión simultánea de múltiples proyectos y reuniones con clientes.`,
            ])}`,
          ],
        },
        pfs: {
          title: "Desarrollador Backend",
          company: "PFS",
          location: "Valencia, España",
          startDate: "2017-01-01",
          endDate: "2020-01-01",
          skills: ["react", "typescript"],
          description: [
            `Desarrollé soluciones de software para el sector bancario. Responsabilidades clave:`,
            `${list([
              `Resolución de desafíos de big data con Java y OracleDB.`,
              `Implementación de procesos ETL y trabajo con Python para tareas complejas.`,
            ])}`,
          ],
        },
      } as Works,
    },
    about: {
      title: "Sobre mí",
      name: "Sobre mí",
      id: "sobre-mi",
      sections: {
        atWork: {
          title: "En el trabajo",
          description: [
            `${paragraph("With almost 8 years of coding experience, I bring a strong attention to detail and a committed work ethic to every project. I’m skilled in collaborating within teams but also thrive when working independently.")}`,
            `${paragraph("I enjoy collaborating and supporting teammates, and I naturally take on leadership roles when needed, guiding projects forward while encouraging a positive, productive environment. My goal is to create solutions that benefit the team and foster growth for everyone involved.")}`,
          ],
        },
        personal: {
          title: "Mi lado personal",
          description: [
            `Personalmente adoro mi trabajo y siempre me ha gustado aprender y sentir que estoy mejorando siempre intento estar documentado con nuevas tecnologias.`,
            `Algunas cosas que me gustan a parte de la programación son: jugar videojuegos, leer libros, jugar a padel, y disfrutar de la vida.`,
          ],
        },
        contact: {
          title: "Contáctame",
          description: [
            `Si tienes alguna pregunta, , un proyecto en mente, o simplemente quieres saludar, mi correo es:`,
          ],
        },
      },
    },
  },
} as const;
