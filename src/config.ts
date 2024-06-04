import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  MusicalProjectPageContent,
  ProgrammingProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Iñaki Goyeneche",
  logo: "/logo.png",
  email: "igoyeneche.98@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Música",
    url: "/musical-projects",
  },
  {
    title: "Programación",
    url: "/programming-projects",
  },
  {
    title: "Sobre Mí",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/inagoy",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:igoyeneche.98@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Iñaki Goyeneche",
    description:
      "Productor musical y programador",
    image: identity.logo,
  },
  role: "Productor Musical | Programador",
  description:
    "Obrero del audio. Desarrollador de herramientas de audio",
  socialLinks: socialLinks,
  links: [
    {
      title: "Proyectos de programación",
      url: "/musical-projects",
    },
    {
      title: "Proyectos musicales",
      url: "/programming-projects",
    },
    {
      title: "Sobre Mí",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Sobre Mí | Iñaki Goyeneche",
    description:
      "Productor Musical | Programador",
    image: identity.logo,
  },
  subtitle: "Un poco de data sobre mí",
  about: {
    description: `
I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.png",
          url: "https://github.com/TimWitzdam",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.png",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/musical-projects)
export const musicalProjectsPageContent: MusicalProjectPageContent = {
  seo: {
    title: "Proyectos | Iñaki Goyeneche",
    description: "Algunos proyectos en los que trabajé.",
    image: identity.logo,
  },
  subtitle: "Algunos proyectos en los que trabajé.",
  projects: [
    {
      title: "El Azar | William Campbell",
      description: "Producción Musical, Edición.",
      image: "https://img.youtube.com/vi/FZ8_0mR61XQ/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=FZ8_0mR61XQ",
      socio: "Santiago Monroy y Nicolás Carlino"
    },
    {
      title: "Calisto I (En Vivo) | Calisto",
      description: "Edición, Mezcla y Master.",
      image: "https://i.scdn.co/image/ab67616d0000b2730365a2fbbbf6f54c06b260a3",
      year: "2024",
      url: "https://open.spotify.com/intl-es/album/1zgMN1cBvOGP8DuGdMPQOV?si=GKPNwWRHS3-0IWpqDSwIFQ",
    },
    {
      title: "Ella (Short Film)",
      description: "Edición, Foley y Diseño Sonoro.",
      image: "https://img.youtube.com/vi/Sdn0tO06pts/hqdefault.jpg",
      year: "2023",
      url: "https://youtu.be/Sdn0tO06pts",
    },
    {
      title: "La Nostalgia del Abandono (Short Film)",
      description: "Producción Musical y Mezcla.",
      image: "https://img.youtube.com/vi/otk4bo-59fg/hqdefault.jpg",
      year: "2022",
      url: "https://youtu.be/otk4bo-59fg",
      socio: "Alejo Ávila y Mauro Cigliuti"
    },
    {
      title: "Living Session | William Cambell",
      description: "Edición, Mezcla y Mastering.",
      image: "https://img.youtube.com/vi/oL4fy55xHiA/hqdefault.jpg",
      year: "2021",
      url: "https://youtu.be/oL4fy55xHiA",
    },
    {
      title: "Nuevo Protagonista (Album) | William Cambell",
      description: "Producción Musical, Edición y Mezcla.",
      image: "https://i.scdn.co/image/ab67616d00001e02c3ff32a171372ec984542598",
      year: "2019",
      url: "https://open.spotify.com/intl-es/album/3QNumfCFJRBvHEuKA3A4HU?si=dQu_QvnkQGmH02g0s_vX8g",
      socio:"Sebastián Medina"
    },
  ],
};
// Projects (/programming-projects)
export const programmingProjectsPageContent: ProgrammingProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Algunos proyectos en los que trabajé.",
    image: identity.logo,
  },
  subtitle: "Algunos proyectos en los que trabajé.",
  projects: [
    {
      title: "SimpleEQ VST Plugin",
      description: "EQ Paramétrico con C++ Juce con 3 filtros: Low, High y Band Pass. Incluye visualización de espectro",
      image: "/simple-eq.png",
      year: "2024",
      url: "https://github.com/inagoy/simpleEQ",
    },
    {
      title: "CIDEPINT Web App",
      description: "Aplicación web hecha con Flask (Python) y Vue.js. Incluye sitio privado para administración y sitio público para clientes.",
      image: "/cidepint.png",
      year: "2023",
      url: "https://github.com/inagoy/CIDEPINT-App",
    },
    {
      title: "Chq.to Web App",
      description: "Aplicación web hecha con Ruby on Rails para acortamiento de links. Cuenta con usuarios y distintos tipos de links (privados, públicos, temporales, etc)",
      image: "/chqto.png",
      year: "2023",
      url: "https://github.com/inagoy/chq.to/",
    },
    {
      title: "DRUMSEP",
      description: "Implementación de un Modelo de Separación de Baterías Acústicas con Python a partir del entrenamiento de la arquitectura de deep learning 'Hybrid Demucs'",
      image: "/drumsep.png",
      year: "2022",
      url: "https://github.com/inagoy/drumsep/",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
