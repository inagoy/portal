export const en = {
  lang: 'en',
  nav: {
    music: 'music | audio',
    programming: 'audio dev portfolio',
    contact: 'contact',
  },
  onlyfans: {
    title: 'onlyfans',
    text: "never say never",
  },
  headings: {
    music_portfolio: 'music | audio portfolio',
    programming_portfolio: 'audio dev portfolio',
    contact: 'contact',
    more_projects_on: 'more projects at',
    my_networks: 'my socials',
  },
  home: {
    role: 'Music Producer / Mixing Engineer',
    description: '',
    links: {
      music: 'audio portfolio',
      programming: 'audio dev portfolio',
    },
    seo: {
      title: 'Iñaki Goyeneche — Music Producer & Mixing Engineer',
      description: 'Selected music production, mixing and audio work by Iñaki Goyeneche.',
    },
  },
  contact: {
    subtitle: 'how to reach me',
    seo: {
      title: 'contact | iñaki goyeneche',
      description: 'music producer | audio programmer',
    },
  },
  music: {
    subtitle: 'some projects I worked on',
    seo: {
      title: 'music | iñaki goyeneche',
      description: 'a few music production projects',
    },
  },
  programming: {
    subtitle: 'some projects I worked on',
    seo: {
      title: 'Iñaki Goyeneche — Audio Software Developer',
      description: 'Audio software, JUCE, source-separation and development projects by Iñaki Goyeneche.',
    },
  },
  form: {
    name_placeholder: 'full name',
    name_required: 'please enter your full name.',
    email_label: 'email address',
    email_placeholder: 'email address',
    email_required: 'please enter an email address.',
    email_invalid: 'please enter a valid email address.',
    message_placeholder: 'your message',
    message_required: 'please enter your message.',
    send_button: 'send message',
    sending: 'Sending...',
    success: 'Message sent successfully — thank you!',
    error: 'Something went wrong!',
  },
  selector: {
    en: 'en',
    es: 'es',
  },
  labels: {
    with: 'with',
    roles: {
      production: 'production',
      coProduction: 'co-production',
      editing: 'editing',
      editingAssistant: 'editing assistant',
      mixing: 'mixing',
      mixingAssistant: 'mixing assistant',
      mastering: 'mastering',
      foley: 'foley',
      soundDesign: 'sound design',
    },
    artistRoles: {
      interpreter: 'performer',
      coWriter: 'co-writer',
    },
    types: {
      album: 'album',
      single: 'single',
      audiovisual: 'audiovisual',
    },
  },
} as const;

export type EN = typeof en;
