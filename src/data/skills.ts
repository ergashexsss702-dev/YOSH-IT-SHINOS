export interface SkillItem {
  id: string;
  name: string;
  category: 'coding' | 'hardware' | 'ai';
  levelKey: 'learning' | 'practicing' | 'developing' | 'exploring';
  icon: string;
  accentColor: string;
}

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    category: 'coding',
    levelKey: 'developing',
    icon: 'Globe',
    accentColor: '#3B82F6',
  },
  {
    id: 'promptEngineering',
    name: 'Prompt Engineering',
    category: 'ai',
    levelKey: 'developing',
    icon: 'Sparkles',
    accentColor: '#8B5CF6',
  },
  {
    id: 'arduino',
    name: 'Arduino IDE',
    category: 'hardware',
    levelKey: 'practicing',
    icon: 'Cpu',
    accentColor: '#06B6D4',
  },
  {
    id: 'scratch',
    name: 'Scratch',
    category: 'coding',
    levelKey: 'practicing',
    icon: 'Code2',
    accentColor: '#F59E0B',
  },
  {
    id: 'mblock',
    name: 'mBlock',
    category: 'hardware',
    levelKey: 'practicing',
    icon: 'Bot',
    accentColor: '#10B981',
  },
  {
    id: 'appinventor',
    name: 'MIT App Inventor',
    category: 'coding',
    levelKey: 'practicing',
    icon: 'Smartphone',
    accentColor: '#EC4899',
  },
  {
    id: 'android',
    name: 'Android Development',
    category: 'coding',
    levelKey: 'learning',
    icon: 'Layers',
    accentColor: '#6366F1',
  },
  {
    id: 'computerLiteracy',
    name: 'Computer Literacy',
    category: 'coding',
    levelKey: 'practicing',
    icon: 'Monitor',
    accentColor: '#14B8A6',
  },
  {
    id: 'aiTools',
    name: 'AI Tools & Creative Tech',
    category: 'ai',
    levelKey: 'exploring',
    icon: 'Brain',
    accentColor: '#A855F7',
  },
];
