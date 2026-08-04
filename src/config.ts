import type {
  NavBarLink,
  SocialLink,
  Identity,
  ContactPageContent,
  MusicProjectPageContent,
  ProgrammingProjectPageContent,
  HomePageContent,
  PortfolioContext,
  SoftwareProject,
} from "./types/config";
import { getStrings, normalizeLang } from './i18n';

export const identity: Identity = {
  name: "iñaki goyeneche",
  logo: "/logo.png",
  email: "igoyeneche.98@gmail.com",
};

export function getNavBarLinks(lang?: string, context: PortfolioContext = 'music'): NavBarLink[] {
  const normalized = normalizeLang(lang);
  const prefix = `/${normalized}`;
  const labels = normalized === 'es'
    ? { work: 'trabajos', audio: 'audio dev projects', projects: 'audio dev projects', music: 'música', contact: 'contacto' }
    : { work: 'work', audio: 'audio dev projects', projects: 'audio dev projects', music: 'music', contact: 'contact' };

  if (context === 'audio-dev') {
    return [
      { title: labels.projects, url: '/audio-dev#projects' },
      { title: labels.music, url: '/audio-dev#music' },
      { title: 'github', url: 'https://github.com/inagoy', external: true },
      { title: labels.contact, url: '/audio-dev#contact' },
    ];
  }

  return [
    { title: labels.work, url: `${prefix}/#work` },
    { title: labels.audio, url: `${prefix}/#audio-projects` },
    { title: 'instagram', url: 'https://instagram.com/inagoy', external: true },
    { title: 'audio dev portfolio ↗', url: '/audio-dev' },
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
    title: "linkedin",
    url: "https://www.linkedin.com/in/i%C3%B1aki-goyeneche-49809624a/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "github",
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

export function getHomePageContent(lang?: string): HomePageContent {
  const normalized = normalizeLang(lang);
  const t = getStrings(normalized);
  return {
    seo: {
      title: t.home.seo.title,
      description: t.home.seo.description,
      image: musicProjectsPageContent.projects[0].image,
    },
    role: t.home.role,
    description: t.home.description,
    socialLinks,
    links: [
      { title: t.home.links.music, url: "/music-projects/" },
      { title: t.home.links.programming, url: "/audio-dev/" },
      { title: t.nav.contact, url: "/contact/" },
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
      image: musicProjectsPageContent.projects[0].image,
    },
    subtitle: t.contact.subtitle,
    // Do not include OnlyFans on contact page
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
      title: "la vida en la tierra",
      artist: "la portuaria",
      roles: ["mixingAssistant"],
      image: "https://i.scdn.co/image/ab67616d00001e02032fc3e853c96fe808151080",
      year: "2026",
      url: "https://open.spotify.com/intl-es/album/7wCXVXgszjczlChCc69v0V",
      socio: "mariano bilinkis y julian mahon",
      type: "album",
      source: "kamehouse"
    },
    {
      title: "red bull symphonic",
      artist: "trueno",
      roles: ["editingAssistant", "mixingAssistant"],
      image: "https://i.scdn.co/image/ab67616d00001e02692872973b6ed31153f0d2eb",
      year: "2025",
      url: "https://open.spotify.com/intl-es/album/0Krxs5046iOHKuOXSzEQxL?si=Azcx7PFjRR-nbaumiCM8BA",
      socio: "mariano bilinkis y julian mahon",
      type: "album",
      source: "kamehouse"
    },
    {
      title: "fanático (en vivo)",
      artist: "lali",
      roles: ["editingAssistant", "mixingAssistant"],
      image: "https://i.scdn.co/image/ab67616d00001e02f6ed36ac805c4d231e0537f4",
      year: "2025",
      url: "https://open.spotify.com/intl-es/track/7KJVQS5lPJ7WrQ2nTsIcRT?si=7b56b5d0275647a7",
      socio: "mariano bilinkis",
      type: "single",
      source: "kamehouse"
    },
    {
      title: "no ficción ft. iuio (en vivo)",
      artist: "william campbell",
      roles: ["editing", "mixing", "mastering"],
      artistRoles: ["interpreter"],
      image: "https://img.youtube.com/vi/xaK70wtFhzA/hqdefault.jpg",
      year: "2025",
      url: "https://www.youtube.com/watch?v=xaK70wtFhzA",
      type: "single"
    }, 
    {
      title: "otro idioma",
      artist: "camila inés",
      roles: ["production", "mixing"],
      artistRoles: ["interpreter"],
      image: "https://i.scdn.co/image/ab67616d0000b27343171c055e4e037aaf8d3613",
      year: "2025",
      url: "https://open.spotify.com/intl-es/album/3sgRznpNzqUsa0UV8vPYzc",
      socio: "alejo ávila",
      type: "album"
    }, 
    {
      title: "2064 + polonio",
      artist: "estrugamou",
      roles: ["coProduction", "mixing", "mastering"],
      artistRoles: ["interpreter"],
      image: "https://img.youtube.com/vi/jntOZoAx9fk/hqdefault.jpg",
      year: "2025",
      url: "https://www.youtube.com/watch?v=jntOZoAx9fk",
      socio: "mauro cigliuti y alejo ávila",
      type: "audiovisual"
    }, 
    {
      title: "amuleto",
      artist: "william campbell",
      roles: ["coProduction", "editing"],
      artistRoles: ["interpreter", "coWriter"],
      image: "https://i.scdn.co/image/ab67616d00001e02262bef791f1b56d5f3c139ef",
      year: "2025",
      url: "https://open.spotify.com/intl-es/album/0hhdU6F6EzirZ1vRdvziLl?si=lJrv_fQcSyqEiOKI-bzktA",
      socio: "santiago monroy y nicolás carlino",
      type: "album"
    }, 
    {
      title: "película de acción",
      artist: "william campbell",
      roles: ["coProduction", "editing"],
      artistRoles: ["interpreter", "coWriter"],
      image: "https://i.scdn.co/image/ab67616d00001e02034120fafbe9a4c46495e48d",
      year: "2025",
      url: "https://open.spotify.com/intl-es/album/07cDDnNsCAZZSNCi1F241l",
      socio: "santiago monroy y nicolás carlino",
      type: "single"
    },   
/*     {
      title: "rolling | william campbell",
      roles: ["coProduction", "editing"],
      artistRoles: ["interpreter", "coWriter"],
      image: "https://img.youtube.com/vi/aqbNW4f89EQ/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=aqbNW4f89EQ",
      socio: "santiago monroy y nicolás carlino",
      type: "single"
    },  */   
    {
      title: "los ángeles",
      artist: "william campbell",
      roles: ["coProduction", "editing"],
      artistRoles: ["interpreter", "coWriter"],
      image: "https://img.youtube.com/vi/wFfDda5opSU/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=wFfDda5opSU",
      socio: "santiago monroy y nicolás carlino",
      type: "single"
    },
    {
      title: "el azar",
      artist: "william campbell",
      roles: ["coProduction", "editing"],
      artistRoles: ["interpreter", "coWriter"],
      image: "https://img.youtube.com/vi/FZ8_0mR61XQ/hqdefault.jpg",
      year: "2024",
      url: "https://www.youtube.com/watch?v=FZ8_0mR61XQ",
      socio: "santiago monroy y nicolás carlino",
      type: "single"
    },
    {
      title: "calisto I (en vivo en c.c. richards)",
      artist: "calisto",
      roles: ["editing", "mixing", "mastering"],
      image: "https://i.scdn.co/image/ab67616d0000b2730365a2fbbbf6f54c06b260a3",
      year: "2024",
      url: "https://open.spotify.com/intl-es/album/1zgMN1cBvOGP8DuGdMPQOV?si=GKPNwWRHS3-0IWpqDSwIFQ",
      type: "album"
    },
    {
      title: "ella (short film)",
      roles: ["editing", "foley", "soundDesign"],
      image: "https://img.youtube.com/vi/Sdn0tO06pts/hqdefault.jpg",
      year: "2023",
      url: "https://youtu.be/Sdn0tO06pts",
      socio: "renzo leveroni y alejo avila",
      type: "audiovisual"
    },
    {
      title: "la nostalgia del abandono (short film)",
      roles: ["coProduction"],
      artistRoles: ["interpreter"],
      image: "https://img.youtube.com/vi/otk4bo-59fg/hqdefault.jpg",
      year: "2022",
      url: "https://youtu.be/otk4bo-59fg",
      socio: "alejo ávila y mauro cigliuti",
      type: "audiovisual"
    },
    {
      title: "living session",
      artist: "william campbell",
      roles: ["production", "mixing", "mastering"],
      artistRoles: ["interpreter"],
      image: "https://img.youtube.com/vi/oL4fy55xHiA/hqdefault.jpg",
      year: "2021",
      url: "https://youtu.be/oL4fy55xHiA",
      type: "album"
    },
    {
      title: "nuevo protagonista",
      artist: "william campbell",
      roles: ["coProduction", "editing", "mixing"],
      artistRoles: ["interpreter", "coWriter"],
      image: "https://i.scdn.co/image/ab67616d00001e02c3ff32a171372ec984542598",
      year: "2019",
      url: "https://open.spotify.com/intl-es/album/3QNumfCFJRBvHEuKA3A4HU?si=dQu_QvnkQGmH02g0s_vX8g",
      socio:"sebastián medina",
      type: "album"
    },
  ],
};

export function getMusicProjectsPageContent(lang?: string): MusicProjectPageContent {
  const normalized = normalizeLang(lang);
  const t = getStrings(normalized);

  const translateSocio = (socio?: string) =>
    socio ? socio.replace(/\by\b/g, '&') : socio;

  const projects = musicProjectsPageContent.projects.map((p) =>
    normalized === 'en'
      ? {
          ...p,
          socio: translateSocio(p.socio),
        }
      : p
  );

  return {
    seo: {
      title: t.music.seo.title,
      description: t.music.seo.description,
      image: musicProjectsPageContent.projects[0].image,
    },
    subtitle: t.music.subtitle,
    projects,
  };
}
export const audioSoftwareProjects: SoftwareProject[] = [
  {
    name: "Kit Velo",
    summary: "Plugin de audio para realzar o reducir fuentes de batería individuales mediante separación local.",
    image: "/drumse-app-thumbnail.png",
    role: "diseño y desarrollo",
    technologies: ["C++", "JUCE", "ARA", "Python"],
    status: "en desarrollo",
    demo: "https://youtu.be/91WK10WI6Ug",
  },
  {
    name: "DrumSep",
    summary: "Separación de fuentes de batería con machine learning a partir de Hybrid Demucs.",
    image: "/drumsep.png",
    role: "investigación y desarrollo",
    technologies: ["Python", "PyTorch", "Demucs"],
    status: "prototipo",
    repository: "https://github.com/inagoy/drumsep/",
  },
  {
    name: "simpleEQ",
    summary: "EQ paramétrico con filtros low-pass, high-pass y band-pass, más visualización de espectro.",
    image: "/simple-eq.png",
    role: "diseño y desarrollo",
    technologies: ["C++", "JUCE", "DSP"],
    status: "completo",
    repository: "https://github.com/inagoy/simpleEQ",
  },
];

export const otherSoftwareProjects: SoftwareProject[] = [
  {
    name: "iBoux",
    summary: "Plataforma educativa en producción con trabajo frontend, backend e integraciones de API.",
    image: "/image.png",
    role: "desarrollo full-stack",
    technologies: ["frontend", "backend", "API"],
    status: "en producción",
    demo: "https://iboux.com",
  },
  {
    name: "DiqueUNO",
    summary: "Sitio web en producción para una residencia universitaria.",
    image: "/diqueuno.png",
    role: "diseño y desarrollo",
    technologies: ["SvelteKit", "Tailwind CSS"],
    status: "en producción",
    demo: "https://diqueuno.com",
    repository: "https://github.com/inagoy/diqueuno",
  },
  {
    name: "CIDEPINT",
    summary: "Aplicación web con área pública y administración privada.",
    image: "/cidepint.png",
    role: "desarrollo full-stack",
    technologies: ["Flask", "Python", "Vue"],
    status: "archivo",
    repository: "https://github.com/inagoy/CIDEPINT-App",
  },
];

const audioSoftwareEn: Record<string, Pick<SoftwareProject, 'summary' | 'role' | 'status'>> = {
  "Kit Velo": {
    summary: "Audio plugin for enhancing or reducing individual drum sources using local source separation.",
    role: "design and development",
    status: "in development",
  },
  "DrumSep": {
    summary: "Machine-learning drum source separation built from Hybrid Demucs.",
    role: "research and development",
    status: "prototype",
  },
  "simpleEQ": {
    summary: "Parametric EQ with low-pass, high-pass and band-pass filters plus spectrum visualization.",
    role: "design and development",
    status: "complete",
  },
};

const otherSoftwareEn: Record<string, Pick<SoftwareProject, 'summary' | 'role' | 'status'>> = {
  "iBoux": {
    summary: "Production education platform spanning frontend, backend and API integrations.",
    role: "full-stack development",
    status: "in production",
  },
  "DiqueUNO": {
    summary: "Production website for a university residence.",
    role: "design and development",
    status: "in production",
  },
  "CIDEPINT": {
    summary: "Web application with a public website and private administration area.",
    role: "full-stack development",
    status: "archived",
  },
};

function localizeSoftwareProjects(
  projects: SoftwareProject[],
  translations: Record<string, Pick<SoftwareProject, 'summary' | 'role' | 'status'>>,
  lang?: string,
): SoftwareProject[] {
  return normalizeLang(lang) === 'en'
    ? projects.map((project) => ({ ...project, ...translations[project.name] }))
    : projects;
}

export const getAudioSoftwareProjects = (lang?: string) =>
  localizeSoftwareProjects(audioSoftwareProjects, audioSoftwareEn, lang);

export const getOtherSoftwareProjects = (lang?: string) =>
  localizeSoftwareProjects(otherSoftwareProjects, otherSoftwareEn, lang);

export function getProgrammingProjectsPageContent(
  lang?: string
): ProgrammingProjectPageContent {
  const normalized = normalizeLang(lang);
  const t = getStrings(normalized);
  const projects = getAudioSoftwareProjects(normalized).map((project) => ({
    title: project.name,
    description: project.summary,
    image: project.image,
    year: project.status,
    url: project.demo ?? project.repository ?? '#',
  }));

  return {
    seo: {
      title: t.programming.seo.title,
      description: t.programming.seo.description,
      image: audioSoftwareProjects[0].image,
    },
    subtitle: t.programming.subtitle,
    projects,
  };
}
