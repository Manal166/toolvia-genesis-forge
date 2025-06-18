
export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  inputType: 'prompt' | 'code' | 'file';
  outputType: 'code' | 'text' | 'file';
  languages?: string[];
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
    languages: ['html', 'css', 'javascript', 'python', 'java', 'cpp']
  }
];

export const getToolById = (id: string): ToolConfig | undefined => {
  return toolsConfig.find(tool => tool.id === id);
};

export const getToolsByCategory = (category: string): ToolConfig[] => {
  return toolsConfig.filter(tool => tool.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(toolsConfig.map(tool => tool.category))];
};
