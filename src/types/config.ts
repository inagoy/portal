export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type PortfolioContext = 'music' | 'audio-dev';

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
  disappearsOnHover?: boolean;
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

export type ProjectRole =
  | 'production'
  | 'coProduction'
  | 'editing'
  | 'editingAssistant'
  | 'mixing'
  | 'mixingAssistant'
  | 'mastering'
  | 'foley'
  | 'soundDesign';

export type ProjectArtistRole = 'interpreter' | 'coWriter';

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
  socio? : string;
  type?: 'album' | 'single' | 'audiovisual';
};

export type MusicProject = Omit<Project, 'description'> & {
  artist?: string;
  roles: ProjectRole[];
  artistRoles?: ProjectArtistRole[];
  description?: string;
  source?: 'kamehouse';
};

export type SoftwareProject = {
  name: string;
  summary: string;
  image: string;
  role: string;
  technologies: string[];
  status: string;
  repository?: string;
  demo?: string;
  category?: string;
};

export type MusicProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: MusicProject[];
};

export type ProgrammingProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};
