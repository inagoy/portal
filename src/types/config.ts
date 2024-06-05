export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  connect: {
    description: string;
    links: SocialLink[];
  };
  about: {
    description: string;
    image_l: {
      url: string;
      alt: string;
    };
    image_r: {
      url: string;
      alt: string;
    };
  };
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
  socio? : string;
};

export type MusicalProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type ProgrammingProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};
