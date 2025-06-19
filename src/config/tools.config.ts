
export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  inputType: 'prompt' | 'code' | 'file';
  outputType: 'code' | 'text' | 'file';
  languages?: string[];
  keywords?: string[];
  featured?: boolean;
}

export const toolsConfig: ToolConfig[] = [
  {
    id: 'ai-code-generator',
    name: 'AI Code Generator',
    description: 'Describe what you want to build, and we\'ll generate the code for you.',
    icon: 'code',
    category: 'Code Generation',
    inputType: 'prompt',
    outputType: 'code',
    languages: ['html', 'css', 'javascript', 'python', 'java', 'cpp'],
    keywords: ['generate', 'create', 'build', 'ai'],
    featured: true
  },
  {
    id: 'code-explainer',
    name: 'Code Explainer',
    description: 'Understand code line by line in plain language.',
    icon: 'book-open',
    category: 'Understanding',
    inputType: 'code',
    outputType: 'text',
    languages: ['html', 'css', 'javascript', 'python', 'java', 'cpp'],
    keywords: ['explain', 'understand', 'learn', 'breakdown'],
    featured: true
  },
  {
    id: 'bug-fixer',
    name: 'Bug Fixer',
    description: 'Paste broken code and get instant AI-powered bug fixes and suggestions.',
    icon: 'bug',
    category: 'Fixing & Optimization',
    inputType: 'code',
    outputType: 'code',
    languages: ['html', 'css', 'javascript', 'python', 'java', 'cpp'],
    keywords: ['fix', 'debug', 'error', 'bug', 'repair'],
    featured: true
  },
  {
    id: 'code-translator',
    name: 'Code Translator',
    description: 'Translate code between programming languages while keeping the logic identical.',
    icon: 'languages',
    category: 'Code Generation',
    inputType: 'code',
    outputType: 'code',
    languages: ['javascript', 'python', 'java', 'cpp', 'csharp', 'php', 'ruby', 'go'],
    keywords: ['translate', 'convert', 'port', 'language'],
    featured: true
  },
  {
    id: 'pseudocode-generator',
    name: 'Pseudocode Generator',
    description: 'Convert complex code into simple step-by-step pseudocode for easy understanding.',
    icon: 'list-ordered',
    category: 'Understanding',
    inputType: 'code',
    outputType: 'text',
    languages: ['javascript', 'python', 'java', 'cpp', 'html', 'css'],
    keywords: ['pseudocode', 'algorithm', 'steps', 'logic', 'simplify'],
    featured: true
  },
  {
    id: 'regex-generator',
    name: 'Regex Generator',
    description: 'Generate regular expressions from plain language descriptions.',
    icon: 'regex',
    category: 'Utilities',
    inputType: 'prompt',
    outputType: 'text',
    keywords: ['regex', 'pattern', 'match', 'validation'],
    featured: false
  },
  {
    id: 'code-optimizer',
    name: 'Code Optimizer',
    description: 'Improve your code performance and readability.',
    icon: 'zap',
    category: 'Optimization',
    inputType: 'code',
    outputType: 'code',
    languages: ['javascript', 'python', 'java', 'cpp'],
    keywords: ['optimize', 'improve', 'performance', 'clean'],
    featured: false
  },
  {
    id: 'api-documentation',
    name: 'API Doc Generator',
    description: 'Generate comprehensive API documentation from your code.',
    icon: 'file-text',
    category: 'Documentation',
    inputType: 'code',
    outputType: 'text',
    languages: ['javascript', 'python', 'java'],
    keywords: ['documentation', 'api', 'docs', 'swagger'],
    featured: false
  }
];

export const getToolById = (id: string): ToolConfig | undefined => {
  return toolsConfig.find(tool => tool.id === id);
};

export const getToolsByCategory = (category: string): ToolConfig[] => {
  return toolsConfig.filter(tool => tool.category === category);
};

export const getFeaturedTools = (): ToolConfig[] => {
  return toolsConfig.filter(tool => tool.featured);
};

export const getAllCategories = (): string[] => {
  return [...new Set(toolsConfig.map(tool => tool.category))];
};

export const searchTools = (query: string): ToolConfig[] => {
  const lowerQuery = query.toLowerCase();
  return toolsConfig.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.keywords?.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
};
