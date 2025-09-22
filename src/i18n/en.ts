export const en = {
  lang: 'en',
  nav: {
    music: 'music | audio',
    programming: 'programming',
    contact: 'contact',
  },
  onlyfans: {
    title: 'onlyfans',
    text: "never say never",
  },
  headings: {
    music_portfolio: 'music/audio portfolio',
    programming_portfolio: 'development portfolio',
    contact: 'contact',
    more_projects_on: 'more projects on',
    my_networks: 'my socials',
  },
  home: {
    role: 'music producer | audio programmer',
    description:
      'I move between making music and learning/developing audio tools.',
    links: {
      music: 'audio portfolio',
      programming: 'programming portfolio',
    },
    seo: {
      title: 'iñaki goyeneche',
      description: 'music producer and audio programmer',
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
      title: 'audio programming | iñaki goyeneche',
      description: 'some projects building audio tools',
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
    error: 'Something went wrong!',
  },
  selector: {
    en: 'en',
    es: 'es',
  },
  labels: {
    with: 'with',
    types: {
      album: 'album',
      single: 'single',
      audiovisual: 'audiovisual',
    },
  },
} as const;

export type EN = typeof en;
