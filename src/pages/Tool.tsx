
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getToolById } from "@/config/tools.config";
import CodeExplainerTool from "@/tools/code-explainer/CodeExplainerTool";
import AICodeGeneratorTool from "@/tools/ai-code-generator/AICodeGeneratorTool";
import GenericTool from "@/components/GenericTool";

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
