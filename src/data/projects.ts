export interface ProjectItem {
  id: string;
  key: 'portfolio' | 'arduinoSensor' | 'scratchAdventure' | 'appInventorAssistant' | 'promptLab' | 'mblockRobot';
  category: 'web' | 'ai' | 'mobile' | 'arduino' | 'creative';
  technologies: string[];
  statusKey: 'statusLive' | 'statusInDev' | 'statusPrototype' | 'statusComingSoon';
  hasLiveDemo: boolean;
  hasGithub: boolean;
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
  iconName: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'portfolio',
    key: 'portfolio',
    category: 'web',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18n'],
    statusKey: 'statusLive',
    hasLiveDemo: true,
    hasGithub: false, // User hasn't provided GitHub URL yet, disabled with "Coming Soon"
    demoUrl: '#',
    accentColor: '#3B82F6',
    iconName: 'Layout',
  },
  {
    id: 'arduinoSensor',
    key: 'arduinoSensor',
    category: 'arduino',
    technologies: ['Arduino IDE', 'C++', 'HC-SR04 Sensor', 'LDR Photocell'],
    statusKey: 'statusPrototype',
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: '#06B6D4',
    iconName: 'Cpu',
  },
  {
    id: 'scratchAdventure',
    key: 'scratchAdventure',
    category: 'creative',
    technologies: ['Scratch 3.0', 'Block Logic', 'Game Physics'],
    statusKey: 'statusInDev',
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: '#F59E0B',
    iconName: 'Gamepad2',
  },
  {
    id: 'appInventorAssistant',
    key: 'appInventorAssistant',
    category: 'mobile',
    technologies: ['MIT App Inventor', 'Android Blocks', 'Mobile UX'],
    statusKey: 'statusPrototype',
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: '#EC4899',
    iconName: 'Smartphone',
  },
  {
    id: 'promptLab',
    key: 'promptLab',
    category: 'ai',
    technologies: ['Prompt Engineering', 'Generative AI', 'Reasoning Chains'],
    statusKey: 'statusInDev',
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: '#8B5CF6',
    iconName: 'Sparkles',
  },
  {
    id: 'mblockRobot',
    key: 'mblockRobot',
    category: 'arduino',
    technologies: ['mBlock', 'Robotics', 'Ultrasonic Navigation'],
    statusKey: 'statusComingSoon',
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: '#10B981',
    iconName: 'Bot',
  },
];
