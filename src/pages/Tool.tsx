
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getToolById } from "@/config/tools.config";
import ToolLoader from "@/components/ToolLoader";

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

  return (
    <ToolLoader 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={toggleTheme}
    />
  );
};

export default Tool;
