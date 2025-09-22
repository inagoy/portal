export const es = {
  lang: 'es',
  nav: {
    music: 'música | audio',
    programming: 'programación',
    contact: 'contacto',
  },
  onlyfans: {
    title: 'onlyfans',
    text: 'nunca digas nunca',
  },
  headings: {
    music_portfolio: 'portfolio música/audio',
    programming_portfolio: 'portfolio desarrollo',
    contact: 'contacto',
    more_projects_on: 'más proyectos en',
    my_networks: 'mis redes',
  },
  home: {
    role: 'productor musical | programador para audio',
    description:
      'siempre estoy dando vueltas entre el hacer musical y el aprendizaje y desarrollo de herramientas de audio',
    links: {
      music: 'portfolio de audio',
      programming: 'portfolio de programación',
    },
    seo: {
      title: 'iñaki goyeneche',
      description: 'productor musical y programador para audio',
    },
  },
  contact: {
    subtitle: 'cómo contactarme',
    seo: {
      title: 'contacto | iñaki goyeneche',
      description: 'productor musical | programador para audio',
    },
  },
  music: {
    subtitle: 'algunos proyectos en los que trabajé',
    seo: {
      title: 'música | iñaki goyeneche',
      description: 'algunos proyectos de producción musical',
    },
  },
  programming: {
    subtitle: 'algunos proyectos en los que trabajé',
    seo: {
      title: 'programación de audio | iñaki goyeneche',
      description: 'algunos proyectos de programación de herramientas de audio',
    },
  },
  form: {
    name_placeholder: 'nombre completo',
    name_required: 'por favor ingresa tu nombre completo.',
    email_label: 'dirección Email',
    email_placeholder: 'dirección email',
    email_required: 'por favor ingresa una dirección de Email.',
    email_invalid: 'por favor ingresa una dirección válida.',
    message_placeholder: 'tu mensaje',
    message_required: 'por favor ingresa tu mensaje.',
    send_button: 'enviar mensaje',
    sending: 'Enviando...',
    error: 'Algo salió mal!',
  },
  selector: {
    en: 'en',
    es: 'es',
  },
  labels: {
    with: 'junto con',
    types: {
      album: 'álbum',
      single: 'single',
      audiovisual: 'audiovisual',
    },
  },
} as const;

export type es = typeof es;
