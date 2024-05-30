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
    title: "About | Tim Witzdam",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
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
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on  on MUSIC.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://open.spotify.com/embed/album/3QNumfCFJRBvHEuKA3A4HU?utm_source=generator&theme=0" ,
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};
// Projects (/programming-projects)
export const programmingProjectsPageContent: ProgrammingProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on PROGRAMMING.",
  projects: [
    {
      title: "SimpleEQ VST Plugin",
      description: "EQ Paramétrico con C++ Juce con 3 filtros: Low, High y Band Pass. Incluye visualización de espectro",
      image: "/simple-eq.png",
      year: "2024",
      url: "https://github.com/inagoy/simpleEQ",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
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
