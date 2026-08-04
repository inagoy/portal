export const es = {
  lang: 'es',
  nav: {
    music: 'música | audio',
    programming: 'portfolio audio dev',
    contact: 'contacto',
  },
  onlyfans: {
    title: 'onlyfans',
    text: 'nunca digas nunca',
  },
  headings: {
    music_portfolio: 'portfolio música | audio',
    programming_portfolio: 'portfolio audio dev',
    contact: 'contacto',
    more_projects_on: 'más proyectos en',
    my_networks: 'mis redes',
  },
  home: {
    role: 'prod / mezcla',
    description: '',
    links: {
      music: 'portfolio de música | audio',
      programming: 'portfolio audio dev',
    },
    seo: {
      title: 'Iñaki Goyeneche — Productor Musical e Ingeniero de Mezcla',
      description: 'Selección de trabajos de producción musical, mezcla y audio de Iñaki Goyeneche.',
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
      title: 'Iñaki Goyeneche — Desarrollador de Software de Audio',
      description: 'Software de audio, JUCE, separación de fuentes y proyectos de desarrollo de Iñaki Goyeneche.',
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
    success: 'Mensaje enviado correctamente — ¡gracias!',
    error: 'Algo salió mal!',
  },
  selector: {
    en: 'en',
    es: 'es',
  },
  labels: {
    with: 'junto con',
    roles: {
      production: 'producción',
      coProduction: 'co-producción',
      editing: 'edición',
      editingAssistant: 'asistente en edición',
      mixing: 'mezcla',
      mixingAssistant: 'asistente en mezcla',
      mastering: 'mastering',
      foley: 'foley',
      soundDesign: 'diseño sonoro',
    },
    artistRoles: {
      interpreter: 'intérprete',
      coWriter: 'co-escritor',
    },
    types: {
      album: 'álbum',
      single: 'single',
      audiovisual: 'audiovisual',
    },
  },
} as const;

export type es = typeof es;
