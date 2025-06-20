
export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  inputType: 'prompt' | 'code' | 'file' | 'text';
  outputType: 'code' | 'text' | 'file' | 'diagram';
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
    id: 'frontend-debug-assistant',
    name: 'Frontend Debug Assistant',
    description: 'Diagnose and fix HTML, CSS, and JavaScript issues using AI.',
    icon: 'bug-play',
    category: 'Fixing & Optimization',
    inputType: 'code',
    outputType: 'code',
    languages: ['html', 'css', 'javascript'],
    keywords: ['frontend', 'debug', 'html', 'css', 'javascript', 'fix', 'ui'],
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
    id: 'flowchart-generator',
    name: 'Flowchart Generator',
    description: 'Convert your code into a visual flowchart for better understanding and documentation.',
    icon: 'diagram',
    category: 'Code Understanding',
    inputType: 'code',
    outputType: 'diagram',
    languages: ['javascript', 'python', 'java', 'cpp', 'html', 'css', 'typescript'],
    keywords: ['flowchart', 'diagram', 'visual', 'mermaid', 'chart', 'flow'],
    featured: true
  },
  {
    id: 'sql-query-generator',
    name: 'SQL Query Generator',
    description: 'Generate SQL queries from natural language instantly.',
    icon: 'database',
    category: 'Code Generation',
    inputType: 'prompt',
    outputType: 'code',
    languages: ['sql'],
    keywords: ['sql', 'database', 'query', 'select', 'insert', 'update', 'delete'],
    featured: true
  },
  {
    id: 'code-refactor',
    name: 'Code Refactoring Tool',
    description: 'Improve code readability, structure, and performance using AI.',
    icon: 'wand-sparkles',
    category: 'Fixing & Optimization',
    inputType: 'code',
    outputType: 'code',
    languages: ['javascript', 'python', 'java', 'cpp', 'typescript', 'html', 'css'],
    keywords: ['refactor', 'improve', 'clean', 'structure', 'optimize', 'readable'],
    featured: true
  },
  {
    id: 'text-summarizer',
    name: 'Text Summarizer',
    description: 'Summarize long texts into clear, concise summaries using AI.',
    icon: 'AlignJustify',
    category: 'AI Utilities',
    inputType: 'text',
    outputType: 'text',
    keywords: ['summarize', 'text', 'summary', 'ai', 'condense', 'brief'],
    featured: true
  },
  {
    id: 'color-palette-extractor',
    name: 'Color Palette Extractor',
    description: 'Extract beautiful color palettes from images using AI analysis.',
    icon: 'palette',
    category: 'Visual Tools',
    inputType: 'file',
    outputType: 'text',
    keywords: ['color', 'palette', 'extract', 'image', 'design', 'hex'],
    featured: true
  },
  {
    id: 'image-alt-text-generator',
    name: 'Image Alt Text Generator',
    description: 'Generate descriptive alt text for images using AI vision analysis.',
    icon: 'image',
    category: 'Accessibility Tools',
    inputType: 'file',
    outputType: 'text',
    keywords: ['alt text', 'accessibility', 'seo', 'image', 'description', 'ai vision'],
    featured: true
  },
  {
    id: 'live-playground',
    name: 'Live HTML/CSS Playground',
    description: 'Write and preview HTML, CSS, and JavaScript code in real-time with our interactive playground.',
    icon: 'play',
    category: 'Frontend Tools',
    inputType: 'code',
    outputType: 'code',
    languages: ['html', 'css', 'javascript'],
    keywords: ['playground', 'live', 'preview', 'html', 'css', 'javascript', 'codepen', 'jsfiddle'],
    featured: true
  },
  {
    id: 'code-minifier',
    name: 'Code Minifier / Prettifier',
    description: 'Compress or beautify your HTML, CSS, and JavaScript code instantly.',
    icon: 'terminal',
    category: 'Frontend Tools',
    inputType: 'code',
    outputType: 'code',
    languages: ['html', 'css', 'javascript'],
    keywords: ['minify', 'prettify', 'compress', 'beautify', 'format', 'optimize'],
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
    id: 'regex-explainer',
    name: 'Regex Explainer',
    description: 'Break down regular expressions into simple, human-readable explanations.',
    icon: 'zoom-in',
    category: 'Code Understanding',
    inputType: 'code',
    outputType: 'text',
    keywords: ['regex', 'explain',  'understand', 'pattern', 'breakdown'],
    featured: true
  },
  {
    id: 'code-optimizer',
    name: 'Code Optimizer',
    description: 'Improve your code performance and readability with AI-powered optimizations.',
    icon: 'settings',
    category: 'Fixing & Optimization',
    inputType: 'code',
    outputType: 'code',
    languages: ['javascript', 'python', 'java', 'cpp', 'html', 'css'],
    keywords: ['optimize', 'improve', 'performance', 'clean', 'refactor'],
    featured: true
  },
  {
    id: 'api-documentation',
    name: 'API Doc Generator',
    description: 'Generate comprehensive API documentation from your code automatically.',
    icon: 'file-text',
    category: 'Documentation',
    inputType: 'code',
    outputType: 'text',
    languages: ['javascript', 'python', 'java', 'php', 'csharp'],
    keywords: ['documentation', 'api', 'docs', 'swagger', 'openapi'],
    featured: true
  },
  {
    id: 'unit-test-generator',
    name: 'Unit Test Generator',
    description: 'Automatically generate comprehensive unit tests from your code with AI-powered analysis.',
    icon: 'test-tube',
    category: 'Testing Tools',
    inputType: 'code',
    outputType: 'code',
    languages: ['javascript', 'python', 'java', 'typescript', 'cpp', 'csharp', 'php'],
    keywords: ['test', 'unit', 'testing', 'jest', 'pytest', 'junit', 'automation'],
    featured: true
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
