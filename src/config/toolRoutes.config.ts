
import { ToolConfig } from './tools.config';

// Tool component imports
import AICodeGeneratorTool from '@/tools/ai-code-generator/AICodeGeneratorTool';
import BugFixerTool from '@/tools/bug-fixer/BugFixerTool';
import CodeExplainerTool from '@/tools/code-explainer/CodeExplainerTool';
import CodeTranslatorTool from '@/tools/code-translator/CodeTranslatorTool';
import FlowchartTool from '@/tools/flowchart-generator/FlowchartTool';
import PseudocodeGeneratorTool from '@/tools/pseudocode-generator/PseudocodeGeneratorTool';
import RegexGeneratorTool from '@/tools/regex-generator/RegexGeneratorTool';
import UnitTestTool from '@/tools/unit-test-generator/UnitTestTool';
import AIInterviewGeneratorTool from '@/tools/ai-interview-generator/AIInterviewGeneratorTool';
import CodeMinifierTool from '@/tools/code-minifier/CodeMinifierTool';
import ImageAltTextTool from '@/tools/image-alt-text-generator/ImageAltTextTool';
import JsonYamlCsvTool from '@/tools/json-yaml-csv-converter/JsonYamlCsvTool';
import ColorPaletteTool from '@/tools/color-palette-extractor/ColorPaletteTool';
import LivePlaygroundTool from '@/tools/live-playground/LivePlaygroundTool';
import TextSummarizerTool from '@/tools/text-summarizer/TextSummarizerTool';
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
  'ai-code-generator': AICodeGeneratorTool,
  'bug-fixer': BugFixerTool,
  'code-explainer': CodeExplainerTool,
  'code-translator': CodeTranslatorTool,
  'flowchart-generator': FlowchartTool,
  'pseudocode-generator': PseudocodeGeneratorTool,
  'regex-generator': RegexGeneratorTool,
  'unit-test-generator': UnitTestTool,
  'ai-interview-generator': AIInterviewGeneratorTool,
  'code-minifier': CodeMinifierTool,
  'image-alt-text-generator': ImageAltTextTool,
  'json-yaml-csv-converter': JsonYamlCsvTool,
  'color-palette-extractor': ColorPaletteTool,
  'live-playground': LivePlaygroundTool,
  'text-summarizer': TextSummarizerTool,
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
