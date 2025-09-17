import type {
  NavBarLink,
  SocialLink,
  Identity,
  ContactPageContent,
  MusicProjectPageContent,
  ProgrammingProjectPageContent,
  HomePageContent,
} from "./types/config";
import { getStrings, normalizeLang } from './i18n';

export const identity: Identity = {
  name: "iñaki goyeneche",
  logo: "/logo.png",
  email: "igoyeneche.98@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "música | audio",
    url: "/music-projects",
  },
  {
    title: "programación",
    url: "/programming-projects",
  },
  {
    title: "contacto",
    url: "/contact",
  },
];

// New: language-aware getters (non-breaking; pages can switch to these)
export function getNavBarLinks(lang?: string): NavBarLink[] {
  const normalized = normalizeLang(lang);
  const t = getStrings(normalized);
  const prefix = `/${normalized}`;
  return [
    { title: t.nav.music, url: `${prefix}/music-projects` },
    { title: t.nav.programming, url: `${prefix}/programming-projects` },
    { title: t.nav.contact, url: `${prefix}/contact` },
  ];
}

export const socialLinks: SocialLink[] = [
  { 
    title: "instagram",
    url: "https://instagram.com/inagoy",
    icon: "mdi:instagram",
    external: true, 
  },
  {
    title: "linkedIn",
    url: "https://www.linkedin.com/in/i%C3%B1aki-goyeneche-49809624a/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "gitHub",
    url: "https://github.com/inagoy",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "mail",
    url: "mailto:igoyeneche.98@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "iñaki goyeneche",
    description:
      "productor musical y programador para audio",
    image: identity.logo,
  },
  role: "productor musical | programador para audio",
  description:
    "siempre estoy dando vueltas entre el hacer musical y el aprendizaje y desarrollo de herramientas de audio ",
  socialLinks: socialLinks,
  links: [
    {
      title: "portfolio de audio",
      url: "/music-projects/",
    },
    {
      title: "portfolio de programación",
      url: "/programming-projects/",
    },
  ],
};

export function getHomePageContent(lang?: string): HomePageContent {
  const t = getStrings(normalizeLang(lang));
  return {
    seo: {
      title: t.home.seo.title,
      description: t.home.seo.description,
      image: identity.logo,
    },
    role: t.home.role,
    description: t.home.description,
    socialLinks: socialLinks,
    links: [
      { title: t.home.links.music, url: "/music-projects/" },
      { title: t.home.links.programming, url: "/programming-projects/" },
    ],
  };
}

// Contact (/contact)
export const contactPageContent: ContactPageContent = {
  seo: {
    title: "contacto | iñaki goyeneche",
    description:
      "productor musical | programador para audio",
    image: identity.logo,
  },
  subtitle: "cómo contactarme",
  links: socialLinks,
};

export function getContactPageContent(lang?: string): ContactPageContent {
  const t = getStrings(normalizeLang(lang));
  return {
    seo: {
      title: t.contact.seo.title,
      description: t.contact.seo.description,
      image: identity.logo,
    },
    subtitle: t.contact.subtitle,
    links: socialLinks,
  };
}

// Projects (/music-projects)
export const musicProjectsPageContent: MusicProjectPageContent = {
  seo: {
    title: "música | iñaki goyeneche",
    description: "algunos proyectos de producción musical",
    image: identity.logo,
  },
  subtitle: "algunos proyectos en los que trabajé",
  projects: [
    {
      title: "otro idioma (álbum) | camila inés",
      description: "producción y mezcla",
      image: "https://i.scdn.co/image/ab67616d0000b27343171c055e4e037aaf8d3613",
      year: "2025",
      url: "https://open.spotify.com/intl-es/album/3sgRznpNzqUsa0UV8vPYzc",
      socio: "alejo avila"
    }, 
    {
      title: "2064 + polonio (audiovisual) | estrugamou",
      description: "co-producción, mezcla y master",
      image: "https://img.youtube.com/vi/jntOZoAx9fk/hqdefault.jpg",
      year: "2025",
      url: "https://www.youtube.com/watch?v=jntOZoAx9fk",
      socio: "mauro cigliuti y alejo avila"
    }, 
    {
      title: "amuleto (álbum) | william campbell",
      description: "co-producción, edición",
      image: "https://i.scdn.co/image/ab67616d00001e02262bef791f1b56d5f3c139ef",
      year: "2025",
      url: "https://open.spotify.com/intl-es/album/0hhdU6F6EzirZ1vRdvziLl?si=lJrv_fQcSyqEiOKI-bzktA",
      socio: "santiago monroy y nicolás carlino"
    }, 
    {
      title: "película de acción | william campbell",
      description: "co-producción, edición",
      image: "https://i.scdn.co/image/ab67616d00001e02034120fafbe9a4c46495e48d",
      year: "2025",
      url: "https://open.spotify.com/intl-es/album/07cDDnNsCAZZSNCi1F241l",
      socio: "santiago monroy y nicolás carlino"
    },   
    {
      title: "rolling | william campbell",
      description: "co-producción, edición",
      image: "https://img.youtube.com/vi/aqbNW4f89EQ/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=aqbNW4f89EQ",
      socio: "santiago monroy y nicolás carlino"
    },    
    {
      title: "los ángeles | william campbell",
      description: "co-producción, edición",
      image: "https://img.youtube.com/vi/wFfDda5opSU/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=wFfDda5opSU",
      socio: "santiago monroy y nicolás carlino"
    },
    {
      title: "el azar | william campbell",
      description: "co-producción, edición",
      image: "https://img.youtube.com/vi/FZ8_0mR61XQ/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=FZ8_0mR61XQ",
      socio: "santiago monroy y nicolás carlino"
    },
    {
      title: "calisto I (álbum en vivo en c.c. richards) | calisto",
      description: "edición y mezcla",
      image: "https://i.scdn.co/image/ab67616d0000b2730365a2fbbbf6f54c06b260a3",
      year: "2024",
      url: "https://open.spotify.com/intl-es/album/1zgMN1cBvOGP8DuGdMPQOV?si=GKPNwWRHS3-0IWpqDSwIFQ",
    },
    {
      title: "ella (short film)",
      description: "edición, foley y diseño sonoro",
      image: "https://img.youtube.com/vi/Sdn0tO06pts/hqdefault.jpg",
      year: "2023",
      url: "https://youtu.be/Sdn0tO06pts",
      socio: "renzo leveroni y alejo avila"
    },
    {
      title: "la nostalgia del abandono (short film)",
      description: "co-producción",
      image: "https://img.youtube.com/vi/otk4bo-59fg/hqdefault.jpg",
      year: "2022",
      url: "https://youtu.be/otk4bo-59fg",
      socio: "alejo avila y mauro cigliuti"
    },
    {
      title: "living session | william cambell",
      description: "edición, mezcla y mastering",
      image: "https://img.youtube.com/vi/oL4fy55xHiA/hqdefault.jpg",
      year: "2021",
      url: "https://youtu.be/oL4fy55xHiA",
    },
    {
      title: "nuevo protagonista (álbum) | william campbell",
      description: "co-producción, edición y mezcla",
      image: "https://i.scdn.co/image/ab67616d00001e02c3ff32a171372ec984542598",
      year: "2019",
      url: "https://open.spotify.com/intl-es/album/3QNumfCFJRBvHEuKA3A4HU?si=dQu_QvnkQGmH02g0s_vX8g",
      socio:"sebastián medina"
    },
  ],
};

export function getMusicProjectsPageContent(lang?: string): MusicProjectPageContent {
  const t = getStrings(normalizeLang(lang));
  return {
    seo: {
      title: t.music.seo.title,
      description: t.music.seo.description,
      image: identity.logo,
    },
    subtitle: t.music.subtitle,
    // Do NOT translate project names or descriptions here as requested
    projects: musicProjectsPageContent.projects,
  };
}
// Projects (/programming-projects)
export const programmingProjectsPageContent: ProgrammingProjectPageContent = {
  seo: {
    title: "programación de audio | iñaki goyeneche",
    description: "algunos proyectos de programación de herramientas de audio",
    image: identity.logo,
  },
  subtitle: "algunos proyectos en los que trabajé",
  projects: [
/*     {
      title: "Portal Web DiqueUNO",
      description: "Sitio web para la Residencia Estudiantil DiqueUNO hecho con SvelteKit y Tailwind.",
      image: "/diqueuno.png",
      year: "2024",
      url: "https://github.com/inagoy/diqueuno",
    }, */
    {
      title: "simpleEQ vst plugin",
      description: "eq paramétrico con c++ juce con 3 filtros: low, high y band pass. incluye visualización de espectro.",
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
      title: "drumsep ⭐",
      description: "implementación del primer modelo de separación de baterías con deep learning a partir del entrenamiento de 'hybrid demucs'.",
      image: "/drumsep.png",
      year: "2022",
      url: "https://github.com/inagoy/drumsep/",
    },
  ],
};

export function getProgrammingProjectsPageContent(
  lang?: string
): ProgrammingProjectPageContent {
  const t = getStrings(normalizeLang(lang));
  return {
    seo: {
      title: t.programming.seo.title,
      description: t.programming.seo.description,
      image: identity.logo,
    },
    subtitle: t.programming.subtitle,
    projects: programmingProjectsPageContent.projects,
  };
}
