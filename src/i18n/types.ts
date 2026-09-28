export type Language = 'uz' | 'ru' | 'en';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
    terminal: string;
    getInTouch: string;
    switchTheme: string;
    switchLanguage: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    roles: string[];
    bioLine: string;
    viewProjects: string;
    contactMe: string;
    telegram: string;
    instagram: string;
    location: string;
    ageBadge: string;
    scrollDown: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    stats: {
      experience: { value: string; label: string };
      age: { value: string; label: string };
      languages: { value: string; label: string };
      skillsCount: { value: string; label: string };
    };
    highlights: {
      locationTitle: string;
      locationValue: string;
      centerTitle: string;
      centerValue: string;
      directionTitle: string;
      directionValue: string;
      mindsetTitle: string;
      mindsetValue: string;
    };
  };
  education: {
    sectionTag: string;
    title: string;
    subtitle: string;
    centerName: string;
    period: string;
    fields: string;
    description: string;
    learningPoints: string[];
    badge: string;
    viewCertSoon: string;
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      coding: string;
      hardware: string;
      ai: string;
    };
    levels: {
      learning: string;
      practicing: string;
      developing: string;
      exploring: string;
    };
    items: {
      scratch: { name: string; desc: string };
      arduino: { name: string; desc: string };
      mblock: { name: string; desc: string };
      appinventor: { name: string; desc: string };
      android: { name: string; desc: string };
      frontend: { name: string; desc: string };
      computerLiteracy: { name: string; desc: string };
      promptEngineering: { name: string; desc: string };
      aiTools: { name: string; desc: string };
    };
  };
  marquee: {
    title: string;
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterWeb: string;
    filterAi: string;
    filterMobile: string;
    filterArduino: string;
    filterCreative: string;
    statusInDev: string;
    statusPrototype: string;
    statusLive: string;
    statusComingSoon: string;
    btnCode: string;
    btnDemo: string;
    btnComingSoon: string;
    viewDetails: string;
    emptyMessage: string;
    items: {
      portfolio: {
        title: string;
        desc: string;
        category: string;
      };
      arduinoSensor: {
        title: string;
        desc: string;
        category: string;
      };
      scratchAdventure: {
        title: string;
        desc: string;
        category: string;
      };
      appInventorAssistant: {
        title: string;
        desc: string;
        category: string;
      };
      promptLab: {
        title: string;
        desc: string;
        category: string;
      };
      mblockRobot: {
        title: string;
        desc: string;
        category: string;
      };
    };
    modal: {
      close: string;
      techStack: string;
      status: string;
      overview: string;
    };
  };
  terminal: {
    sectionTag: string;
    title: string;
    subtitle: string;
    hint: string;
    helpText: string;
    clearBtn: string;
    autoRunBtn: string;
    promptText: string;
    commands: {
      whoami: string;
      skills: string;
      location: string;
      status: string;
      education: string;
      contact: string;
      goals: string;
      clear: string;
      help: string;
    };
  };
  whyCoding: {
    sectionTag: string;
    title: string;
    quote: string;
    pillars: {
      curiosity: { title: string; desc: string };
      problemSolving: { title: string; desc: string };
      aiFuture: { title: string; desc: string };
    };
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    phoneLabel: string;
    telegramLabel: string;
    instagramLabel: string;
    locationLabel: string;
    copyTooltip: string;
    copiedTooltip: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      sendBtn: string;
      demoNotice: string;
      successMsg: string;
    };
  };
  footer: {
    brandTagline: string;
    quickLinks: string;
    socialLinks: string;
    rights: string;
    backToTop: string;
    githubComingSoon: string;
  };
  easterEgg: {
    title: string;
    desc: string;
    close: string;
  };
}
