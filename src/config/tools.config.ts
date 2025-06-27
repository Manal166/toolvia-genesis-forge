
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
    id: 'code-explainer',
    name: 'Code Explainer',
    description: 'Get detailed explanations of code snippets in multiple programming languages with different explanation styles.',
    category: 'AI Tools',
    icon: 'code',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'TypeScript', 'PHP', 'Ruby', 'Swift'],
    features: ['Multi-language support', 'Different explanation tones', 'Line-by-line breakdown', 'Context-aware analysis'],
    useCases: ['Understanding complex code', 'Learning new languages', 'Code review assistance', 'Educational purposes']
  },
  {
    id: 'ai-code-generator',
    name: 'AI Code Generator',
    description: 'Generate code snippets and functions using AI with support for multiple programming languages.',
    category: 'AI Tools',
    icon: 'zap',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'TypeScript', 'PHP', 'Ruby', 'Swift'],
    features: ['Multi-language support', 'Natural language to code', 'Function generation', 'Code optimization'],
    useCases: ['Rapid prototyping', 'Learning programming', 'Code completion', 'Algorithm implementation']
  },
  {
    id: 'bug-fixer',
    name: 'Bug Fixer',
    description: 'Identify and fix bugs in your code with AI-powered analysis and suggestions.',
    category: 'Debugging',
    icon: 'bug',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'PHP', 'Ruby', 'Go'],
    features: ['Bug detection', 'Fix suggestions', 'Error explanation', 'Code improvement tips'],
    useCases: ['Debugging applications', 'Code quality improvement', 'Error resolution', 'Learning from mistakes']
  },
  {
    id: 'frontend-debug-assistant',
    name: 'Frontend Debug Assistant',
    description: 'Debug frontend issues with AI assistance for HTML, CSS, and JavaScript problems.',
    category: 'Debugging',
    icon: 'tool',
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular'],
    features: ['UI/UX issue detection', 'CSS debugging', 'JavaScript error analysis', 'Performance optimization'],
    useCases: ['Responsive design issues', 'CSS layout problems', 'JavaScript errors', 'Cross-browser compatibility']
  },
  {
    id: 'regex-generator',
    name: 'Regex Generator',
    description: 'Generate regular expressions from plain English descriptions with explanations.',
    category: 'Text Processing',
    icon: 'regex',
    features: ['Natural language to regex', 'Pattern explanation', 'Test examples', 'Multiple regex flavors'],
    useCases: ['Input validation', 'Text parsing', 'Data extraction', 'Search patterns']
  },
  {
    id: 'regex-explainer',
    name: 'Regex Explainer',
    description: 'Understand complex regular expressions with detailed breakdowns and examples.',
    category: 'Text Processing',
    icon: 'regex',
    features: ['Pattern breakdown', 'Visual explanation', 'Test examples', 'Common use cases'],
    useCases: ['Learning regex', 'Debugging patterns', 'Code documentation', 'Pattern optimization']
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different case formats including uppercase, lowercase, title case, camelCase, and snake_case.',
    category: 'Text Processing',
    icon: 'type',
    features: ['Multiple case formats', 'Real-time conversion', 'Copy to clipboard', 'Batch processing'],
    useCases: ['Programming variable names', 'Document formatting', 'Social media posts', 'API response formatting', 'Documentation standardization', 'Naming conventions', 'Style guide compliance', 'Web development']
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and more in real-time with detailed text analysis.',
    category: 'Text Processing',
    icon: 'file-text',
    features: ['Real-time counting', 'Multiple statistics', 'Reading time estimation', 'Character analysis'],
    useCases: ['Essay writing', 'Content creation', 'Social media posts', 'Academic writing', 'Blog posts', 'Document analysis', 'SEO optimization', 'Character limits']
  },
  {
    id: 'code-translator',
    name: 'Code Translator',
    description: 'Convert code between different programming languages while preserving functionality.',
    category: 'Code Conversion',
    icon: 'languages',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift'],
    features: ['Multi-language conversion', 'Syntax preservation', 'Logic translation', 'Best practices'],
    useCases: ['Language migration', 'Learning new languages', 'Cross-platform development', 'Code modernization']
  },
  {
    id: 'pseudocode-generator',
    name: 'Pseudocode Generator',
    description: 'Convert code into readable pseudocode for better understanding and documentation.',
    category: 'Documentation',
    icon: 'list-ordered',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'PHP', 'Ruby', 'Go'],
    features: ['Algorithm extraction', 'Readable format', 'Logic flow', 'Language-agnostic'],
    useCases: ['Algorithm documentation', 'Code planning', 'Educational materials', 'Design reviews']
  },
  {
    id: 'flowchart-generator',
    name: 'Flowchart Generator',
    description: 'Create visual flowcharts from code or pseudocode to understand program flow.',
    category: 'Visualization',
    icon: 'play',
    features: ['Visual flow representation', 'Multiple chart types', 'Export options', 'Interactive diagrams'],
    useCases: ['Algorithm visualization', 'Process documentation', 'Code review', 'Educational content']
  },
  {
    id: 'code-optimizer',
    name: 'Code Optimizer',
    description: 'Optimize your code for better performance, readability, and best practices.',
    category: 'Optimization',
    icon: 'zap',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'PHP', 'Ruby', 'Go'],
    features: ['Performance optimization', 'Code refactoring', 'Best practices', 'Memory efficiency'],
    useCases: ['Performance improvement', 'Code cleanup', 'Best practices adoption', 'Maintainability']
  },
  {
    id: 'api-documentation',
    name: 'API Documentation Generator',
    description: 'Generate comprehensive API documentation from your code automatically.',
    category: 'Documentation',
    icon: 'file-text',
    languages: ['JavaScript', 'Python', 'Java', 'TypeScript', 'PHP', 'Ruby', 'Go'],
    features: ['Auto documentation', 'API endpoint analysis', 'Parameter extraction', 'Example generation'],
    useCases: ['API documentation', 'Developer onboarding', 'Integration guides', 'Maintenance docs']
  },
  {
    id: 'unit-test-generator',
    name: 'Unit Test Generator',
    description: 'Generate comprehensive unit tests for your functions and classes automatically.',
    category: 'Testing',
    icon: 'code',
    languages: ['JavaScript', 'Python', 'Java', 'TypeScript', 'PHP', 'Ruby', 'Go'],
    features: ['Test case generation', 'Edge case coverage', 'Mock generation', 'Framework support'],
    useCases: ['Test automation', 'Code coverage', 'Quality assurance', 'TDD development']
  },
  {
    id: 'sql-query-generator',
    name: 'SQL Query Generator',
    description: 'Generate SQL queries from natural language descriptions with optimization suggestions.',
    category: 'Database',
    icon: 'terminal',
    features: ['Natural language to SQL', 'Query optimization', 'Multiple DB support', 'Performance tips'],
    useCases: ['Database queries', 'Data analysis', 'Report generation', 'Learning SQL']
  },
  {
    id: 'code-refactor',
    name: 'Code Refactor Assistant',
    description: 'Refactor your code for better structure, readability, and maintainability.',
    category: 'Code Quality',
    icon: 'tool',
    languages: ['JavaScript', 'Python', 'Java', 'TypeScript', 'PHP', 'Ruby', 'Go'],
    features: ['Structure improvement', 'Pattern recognition', 'Clean code principles', 'Maintainability'],
    useCases: ['Legacy code improvement', 'Code modernization', 'Architecture cleanup', 'Technical debt reduction']
  },
  {
    id: 'text-summarizer',
    name: 'Text Summarizer',
    description: 'Summarize long texts, documentation, or articles into concise key points.',
    category: 'Text Processing',
    icon: 'file-text',
    features: ['Automatic summarization', 'Key point extraction', 'Length control', 'Multiple formats'],
    useCases: ['Documentation summary', 'Article condensation', 'Research notes', 'Content curation']
  },
  {
    id: 'color-palette-extractor',
    name: 'Color Palette Extractor',
    description: 'Extract color palettes from images for design and development projects.',
    category: 'Design Tools',
    icon: 'zap',
    features: ['Image color extraction', 'Palette generation', 'Color codes', 'Design integration'],
    useCases: ['Web design', 'Brand colors', 'UI development', 'Design inspiration']
  },
  {
    id: 'image-alt-text-generator',
    name: 'Image Alt Text Generator',
    description: 'Generate descriptive alt text for images to improve accessibility and SEO.',
    category: 'Accessibility',
    icon: 'zap',
    features: ['AI image analysis', 'Descriptive text', 'SEO optimization', 'Accessibility compliance'],
    useCases: ['Web accessibility', 'SEO improvement', 'Content management', 'Inclusive design']
  },
  {
    id: 'live-playground',
    name: 'Live Code Playground',
    description: 'Write, test, and experiment with HTML, CSS, and JavaScript in real-time.',
    category: 'Development',
    icon: 'play',
    languages: ['HTML', 'CSS', 'JavaScript'],
    features: ['Real-time preview', 'Code editing', 'Multiple panes', 'Export options'],
    useCases: ['Prototyping', 'Learning', 'Testing ideas', 'Code sharing']
  },
  {
    id: 'ai-interview-generator',
    name: 'AI Interview Generator',
    description: 'Generate technical interview questions and coding challenges for practice.',
    category: 'Interview Prep',
    icon: 'brain',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'],
    features: ['Question generation', 'Multiple difficulty levels', 'Coding challenges', 'Practice sessions'],
    useCases: ['Interview preparation', 'Skill assessment', 'Learning evaluation', 'Technical screening']
  },
  {
    id: 'json-yaml-csv-converter',
    name: 'JSON/YAML/CSV Converter',
    description: 'Convert between JSON, YAML, and CSV formats with validation and formatting.',
    category: 'Data Processing',
    icon: 'file-text',
    features: ['Multi-format conversion', 'Data validation', 'Pretty formatting', 'Error detection'],
    useCases: ['Data transformation', 'Configuration files', 'API integration', 'Data analysis']
  },
  {
    id: 'code-minifier',
    name: 'Code Minifier',
    description: 'Minify and compress your JavaScript, CSS, and HTML code for better performance.',
    category: 'Optimization',
    icon: 'zap',
    languages: ['JavaScript', 'CSS', 'HTML'],
    features: ['Code compression', 'Whitespace removal', 'Variable renaming', 'Size optimization'],
    useCases: ['Web performance', 'File size reduction', 'Production builds', 'Bandwidth optimization']
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure, and random passwords for your online accounts.',
    category: 'Security Tools',
    icon: 'tool',
    features: ['Adjustable length', 'Character customization', 'Strength indicators', 'Copy to clipboard'],
    useCases: ['Account security', 'Password creation', 'Security best practices', 'Privacy protection']
  },
  {
    id: 'url-encoder-decoder',
    name: 'URL Encoder/Decoder',
    description: 'Encode or decode URLs quickly and easily with percent encoding/decoding.',
    category: 'Web Development',
    icon: 'tool',
    features: ['URL encoding', 'URL decoding', 'Percent encoding', 'Copy to clipboard', 'Error handling'],
    useCases: ['Web development', 'API integration', 'URL debugging', 'Query string handling', 'Form data processing']
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement including length, weight, and temperature.',
    category: 'Utilities',
    icon: 'calculator',
    features: ['Length conversion', 'Weight conversion', 'Temperature conversion', 'Metric and Imperial units', 'Instant results'],
    useCases: ['Engineering calculations', 'Educational assignments', 'Recipe conversions', 'Travel planning', 'Scientific research', 'Construction projects', 'Fitness tracking', 'International commerce']
  },
  {
    id: 'text-compare',
    name: 'Text Compare Tool',
    description: 'Compare two texts side-by-side and identify differences with visual highlighting and line-by-line analysis.',
    category: 'Text Processing',
    icon: 'file-text',
    features: ['Side-by-side comparison', 'Difference highlighting', 'Line-by-line analysis', 'Copy results', 'Clear interface'],
    useCases: ['Document version comparison', 'Code diff analysis', 'Proofreading assistance', 'Content revision tracking', 'Quality assurance', 'Academic research', 'Legal document comparison', 'Collaboration workflows']
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from text while preserving the original order. Perfect for cleaning up lists, logs, and data.',
    category: 'Text Processing',
    icon: 'list',
    features: ['Duplicate line removal', 'Order preservation', 'Real-time processing', 'Copy to clipboard', 'Line count statistics'],
    useCases: ['Data cleaning', 'List deduplication', 'Log file processing', 'Text preprocessing', 'Email list cleanup', 'Code cleanup', 'Data validation', 'Content management']
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
    tool.category.toLowerCase().includes(lowercaseQuery) ||
    (tool.languages && tool.languages.some(lang => lang.toLowerCase().includes(lowercaseQuery)))
  );
};

export const getFeaturedTools = (): ToolConfig[] => {
  return toolsConfig.slice(0, 6);
};

export const getToolsByLanguage = (language: string): ToolConfig[] => {
  return toolsConfig.filter(tool => 
    tool.languages?.some(lang => lang.toLowerCase() === language.toLowerCase())
  );
};
