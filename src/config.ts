import type {
  NavBarLink,
  SocialLink,
  Identity,
  ContactPageContent,
  MusicProjectPageContent,
  ProgrammingProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Iñaki Goyeneche",
  logo: "/logo.png",
  email: "igoyeneche.98@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Música|Audio",
    url: "/music-projects",
  },
  {
    title: "Programación",
    url: "/programming-projects",
  },
  {
    title: "Contacto",
    url: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  { 
    title: "Instagram",
    url: "https://instagram.com/inagoy",
    icon: "mdi:instagram",
    external: true, 
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/i%C3%B1aki-goyeneche-49809624a/",
    icon: "mdi:linkedin",
    external: true,
  },
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
      "Productor musical y programador para audio",
    image: identity.logo,
  },
  role: "Productor Musical | Programador para audio",
  description:
    "Siempre estoy dando vueltas entre el hacer musical y el aprendizaje y desarrollo de herramientas de audio ",
  socialLinks: socialLinks,
  links: [
    {
      title: "Portfolio de Audio",
      url: "/music-projects/",
    },
    {
      title: "Portfolio de Programación",
      url: "/programming-projects/",
    },
  ],
};

// Contact (/contact)
export const contactPageContent: ContactPageContent = {
  seo: {
    title: "Contacto | Iñaki Goyeneche",
    description:
      "Productor Musical | Programador",
    image: identity.logo,
  },
  subtitle: "Cómo contactarme",
  links: socialLinks,
};

// Projects (/music-projects)
export const musicProjectsPageContent: MusicProjectPageContent = {
  seo: {
    title: "Música | Iñaki Goyeneche",
    description: "Algunos proyectos en los que trabajé",
    image: identity.logo,
  },
  subtitle: "Algunos proyectos en los que trabajé",
  projects: [
    {
      title: "Los Ángeles | William Campbell",
      description: "Producción Musical, Edición.",
      image: "https://img.youtube.com/vi/wFfDda5opSU/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=wFfDda5opSU",
      socio: "Santiago Monroy y Nicolás Carlino"
    },
    {
      title: "El Azar | William Campbell",
      description: "Producción Musical, Edición.",
      image: "https://img.youtube.com/vi/FZ8_0mR61XQ/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=FZ8_0mR61XQ",
      socio: "Santiago Monroy y Nicolás Carlino"
    },
    {
      title: "Calisto I (En Vivo en C.C. Richards) | Calisto",
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
    title: "Programación de Audio | Iñaki Goyeneche",
    description: "Algunos proyectos en los que trabajé",
    image: identity.logo,
  },
  subtitle: "Algunos proyectos en los que trabajé",
  projects: [
/*     {
      title: "Portal Web DiqueUNO",
      description: "Sitio web para la Residencia Estudiantil DiqueUNO hecho con SvelteKit y Tailwind.",
      image: "/diqueuno.png",
      year: "2024",
      url: "https://github.com/inagoy/diqueuno",
    }, */
    {
      title: "SimpleEQ VST Plugin",
      description: "EQ Paramétrico con C++ Juce con 3 filtros: Low, High y Band Pass. Incluye visualización de espectro.",
      image: "/simple-eq.png",
      year: "2024",
      url: "https://github.com/inagoy/simpleEQ",
    },
/*     {
      title: "CIDEPINT Web App",
      description: "Aplicación web hecha con Flask (Python) y Vue.js. Incluye sitio privado para administración y sitio público para clientes.",
      image: "/cidepint.png",
      year: "2023",
      url: "https://github.com/inagoy/CIDEPINT-App",
    },
    {
      title: "Chq.to Web App",
      description: "Aplicación web hecha con Ruby on Rails para acortamiento de links. Cuenta con usuarios y distintos tipos de links (privados, públicos, temporales, etc).",
      image: "/chqto.png",
      year: "2023",
      url: "https://github.com/inagoy/chq.to/",
    }, */
    {
      title: "DRUMSEP",
      description: "Implementación de un Modelo de Separación de Baterías Acústicas con Python a partir del entrenamiento de la arquitectura de deep learning 'Hybrid Demucs'.",
      image: "/drumsep.png",
      year: "2022",
      url: "https://github.com/inagoy/drumsep/",
    },
  ],
};
