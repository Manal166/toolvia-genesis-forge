
import { ComponentType } from 'react';
import { ToolConfig } from './tools.config';
import CaseConverterTool from '@/tools/case-converter/CaseConverterTool';
import PasswordGeneratorTool from '@/tools/password-generator/PasswordGeneratorTool';
import URLEncoderDecoderTool from '@/tools/url-encoder-decoder/URLEncoderDecoderTool';
import UnitConverterTool from '@/tools/unit-converter/UnitConverterTool';
import GenericTool from '@/components/GenericTool';
import TextCompareTool from '@/tools/text-compare/TextCompareTool';
import RemoveDuplicatesTool from '@/tools/remove-duplicate-lines/RemoveDuplicatesTool';

export interface ToolComponentProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

type ToolComponent = ComponentType<ToolComponentProps>;

export const toolComponentMap: Record<string, ToolComponent> = {
  'case-converter': CaseConverterTool,
  'password-generator': PasswordGeneratorTool,
  'url-encoder-decoder': URLEncoderDecoderTool,
  'unit-converter': UnitConverterTool,
  'text-compare': TextCompareTool,
  'remove-duplicate-lines': RemoveDuplicatesTool,
};

export const getToolComponent = (toolId: string): ToolComponent => {
  return toolComponentMap[toolId] || GenericTool;
};
