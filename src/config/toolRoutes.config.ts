
import { ComponentType } from 'react';
import { ToolConfig } from './tools.config';
import CodeExplainerTool from '@/tools/code-explainer/CodeExplainerTool';
import AICodeGeneratorTool from '@/tools/ai-code-generator/AICodeGeneratorTool';
import BugFixerTool from '@/tools/bug-fixer/BugFixerTool';
import RegexGeneratorTool from '@/tools/regex-generator/RegexGeneratorTool';
import RegexExplainerTool from '@/tools/regex-explainer/RegexExplainerTool';
import CodeTranslatorTool from '@/tools/code-translator/CodeTranslatorTool';
import PseudocodeGeneratorTool from '@/tools/pseudocode-generator/PseudocodeGeneratorTool';
import CodeOptimizerTool from '@/tools/code-optimizer/CodeOptimizerTool';
import APIDocGeneratorTool from '@/tools/api-doc-generator/APIDocGeneratorTool';
import UnitTestTool from '@/tools/unit-test-generator/UnitTestTool';
import FlowchartTool from '@/tools/flowchart-generator/FlowchartTool';
import SQLQueryTool from '@/tools/sql-query-generator/SQLQueryTool';
import CodeRefactorTool from '@/tools/code-refactor/CodeRefactorTool';
import FrontendDebugTool from '@/tools/frontend-debug-assistant/FrontendDebugTool';
import TextSummarizerTool from '@/tools/text-summarizer/TextSummarizerTool';
import ColorPaletteTool from '@/tools/color-palette-extractor/ColorPaletteTool';
import ImageAltTextTool from '@/tools/image-alt-text-generator/ImageAltTextTool';
import LivePlaygroundTool from '@/tools/live-playground/LivePlaygroundTool';
import AIInterviewGeneratorTool from '@/tools/ai-interview-generator/AIInterviewGeneratorTool';
import JsonYamlCsvTool from '@/tools/json-yaml-csv-converter/JsonYamlCsvTool';
import GenericTool from '@/components/GenericTool';

export interface ToolComponentProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

type ToolComponent = ComponentType<ToolComponentProps>;

export const toolComponentMap: Record<string, ToolComponent> = {
  'code-explainer': CodeExplainerTool,
  'ai-code-generator': AICodeGeneratorTool,
  'bug-fixer': BugFixerTool,
  'frontend-debug-assistant': FrontendDebugTool,
  'regex-generator': RegexGeneratorTool,
  'regex-explainer': RegexExplainerTool,
  'code-translator': CodeTranslatorTool,
  'pseudocode-generator': PseudocodeGeneratorTool,
  'flowchart-generator': FlowchartTool,
  'code-optimizer': CodeOptimizerTool,
  'api-documentation': APIDocGeneratorTool,
  'unit-test-generator': UnitTestTool,
  'sql-query-generator': SQLQueryTool,
  'code-refactor': CodeRefactorTool,
  'text-summarizer': TextSummarizerTool,
  'color-palette-extractor': ColorPaletteTool,
  'image-alt-text-generator': ImageAltTextTool,
  'live-playground': LivePlaygroundTool,
  'ai-interview-generator': AIInterviewGeneratorTool,
  'json-yaml-csv-converter': JsonYamlCsvTool,
};

export const getToolComponent = (toolId: string): ToolComponent => {
  return toolComponentMap[toolId] || GenericTool;
};
