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

export type ContactPageContent = {
  seo: SEOInfo;
  subtitle: string;
  links: SocialLink[];
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

