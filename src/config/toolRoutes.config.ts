import { ToolConfig } from './tools.config';

// Tool component imports
import CaseConverterTool from '@/tools/case-converter/CaseConverterTool';
import UnitConverterTool from '@/tools/unit-converter/UnitConverterTool';
import TextCompareTool from '@/tools/text-compare/TextCompareTool';
import RemoveDuplicatesTool from '@/tools/remove-duplicate-lines/RemoveDuplicatesTool';
import PasswordGeneratorTool from '@/tools/password-generator/PasswordGeneratorTool';
import URLEncoderDecoderTool from '@/tools/url-encoder-decoder/URLEncoderDecoderTool';
import WordCounterTool from '@/tools/word-counter/WordCounterTool';

export interface ToolComponentProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

type ToolComponent = React.ComponentType<ToolComponentProps>;

// Map tool IDs to their components
const toolComponentMap: Record<string, ToolComponent> = {
  'case-converter': CaseConverterTool,
  'unit-converter': UnitConverterTool,
  'text-compare': TextCompareTool,
  'remove-duplicate-lines': RemoveDuplicatesTool,
  'password-generator': PasswordGeneratorTool,
  'url-encoder-decoder': URLEncoderDecoderTool,
  'word-counter': WordCounterTool,
};

export const getToolComponent = (toolId: string): ToolComponent => {
  const component = toolComponentMap[toolId];
  if (!component) {
    throw new Error(`Tool component not found for ID: ${toolId}`);
  }
  return component;
};

export const isToolSupported = (toolId: string): boolean => {
  return toolId in toolComponentMap;
};
