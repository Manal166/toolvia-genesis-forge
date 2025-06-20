
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getToolById } from "@/config/tools.config";
import CodeExplainerTool from "@/tools/code-explainer/CodeExplainerTool";
import AICodeGeneratorTool from "@/tools/ai-code-generator/AICodeGeneratorTool";
import BugFixerTool from "@/tools/bug-fixer/BugFixerTool";
import RegexGeneratorTool from "@/tools/regex-generator/RegexGeneratorTool";
import CodeTranslatorTool from "@/tools/code-translator/CodeTranslatorTool";
import PseudocodeGeneratorTool from "@/tools/pseudocode-generator/PseudocodeGeneratorTool";
import CodeOptimizerTool from "@/tools/code-optimizer/CodeOptimizerTool";
import APIDocGeneratorTool from "@/tools/api-doc-generator/APIDocGeneratorTool";
import UnitTestTool from "@/tools/unit-test-generator/UnitTestTool";
import GenericTool from "@/components/GenericTool";
import FlowchartTool from "@/tools/flowchart-generator/FlowchartTool";
import SQLQueryTool from "@/tools/sql-query-generator/SQLQueryTool";
import CodeRefactorTool from "@/tools/code-refactor/CodeRefactorTool";
import FrontendDebugTool from "@/tools/frontend-debug-assistant/FrontendDebugTool";

const Tool = () => {
  const { toolId } = useParams();
  const [isDark, setIsDark] = useState(true);

  // Get tool configuration - fallback to AI Code Generator if no toolId or tool not found
  const tool = getToolById(toolId || 'ai-code-generator') || getToolById('ai-code-generator');
  
  if (!tool) {
    return <div>Tool not found</div>;
  }

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Render specific tool components based on tool ID
  switch (tool.id) {
    case 'code-explainer':
      return (
        <CodeExplainerTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'ai-code-generator':
      return (
        <AICodeGeneratorTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'bug-fixer':
      return (
        <BugFixerTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'frontend-debug-assistant':
      return (
        <FrontendDebugTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'regex-generator':
      return (
        <RegexGeneratorTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'code-translator':
      return (
        <CodeTranslatorTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'pseudocode-generator':
      return (
        <PseudocodeGeneratorTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'flowchart-generator':
      return (
        <FlowchartTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'code-optimizer':
      return (
        <CodeOptimizerTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'api-documentation':
      return (
        <APIDocGeneratorTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'unit-test-generator':
      return (
        <UnitTestTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'sql-query-generator':
      return (
        <SQLQueryTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    case 'code-refactor':
      return (
        <CodeRefactorTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
    default:
      return (
        <GenericTool 
          tool={tool} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
        />
      );
  }
};

export default Tool;
