export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  languages?: string[];
  features?: string[];
  useCases?: string[];
  isPremium?: boolean;
}

export const toolsConfig: ToolConfig[] = [
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different case formats including uppercase, lowercase, title case, camelCase, and snake_case.',
    category: 'Text Tools',
    icon: 'type',
    features: ['Multiple case formats', 'Real-time conversion', 'Copy to clipboard'],
    useCases: ['Variable naming', 'Document formatting', 'Social media posts']
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement including length, weight, and temperature.',
    category: 'Utilities',
    icon: 'calculator',
    features: ['Length, weight, temperature', 'Metric and Imperial units', 'Instant results'],
    useCases: ['Engineering, education, travel, cooking']
  },
  {
    id: 'text-compare',
    name: 'Text Compare Tool',
    description: 'Compare two texts side-by-side and identify differences with visual highlighting.',
    category: 'Text Tools',
    icon: 'file-text',
    features: ['Side-by-side view', 'Difference highlighting', 'Line-by-line comparison'],
    useCases: ['Proofreading', 'Code review', 'Content revision']
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from your text while preserving the original order.',
    category: 'Text Tools',
    icon: 'list',
    features: ['Real-time processing', 'Line count', 'Order preserved'],
    useCases: ['List cleanup', 'Log file deduplication', 'Text filtering']
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure, and random passwords for your accounts.',
    category: 'Security Tools',
    icon: 'shield',
    features: ['Customizable length', 'Character types', 'Copy to clipboard'],
    useCases: ['Password security', 'Online safety']
  },
  {
    id: 'url-encoder-decoder',
    name: 'URL Encoder/Decoder',
    description: 'Quickly encode or decode URLs using percent-encoding format.',
    category: 'Web Tools',
    icon: 'link',
    features: ['Encode & decode', 'Real-time results', 'Copy output'],
    useCases: ['Web development', 'API requests', 'Query strings']
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    category: 'Text Tools',
    icon: 'file-text',
    features: ['Real-time counting', 'Multiple statistics', 'Reading time'],
    useCases: ['Blogging', 'Academic writing', 'SEO']
  }
];

export const getToolById = (id: string): ToolConfig | undefined => {
  return toolsConfig.find(tool => tool.id === id);
};

export const getToolsByCategory = (category: string): ToolConfig[] => {
  return toolsConfig.filter(tool => tool.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = toolsConfig.map(tool => tool.category);
  return Array.from(new Set(categories)).sort();
};

export const searchTools = (query: string): ToolConfig[] => {
  const lowercaseQuery = query.toLowerCase();
  return toolsConfig.filter(tool =>
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedTools = (): ToolConfig[] => {
  return toolsConfig.slice(0, 6);
};
