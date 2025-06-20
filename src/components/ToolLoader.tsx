
import { ToolConfig } from '@/config/tools.config';
import { getToolComponent, ToolComponentProps } from '@/config/toolRoutes.config';

interface ToolLoaderProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const ToolLoader = ({ tool, isDark, onToggleTheme }: ToolLoaderProps) => {
  const ToolComponent = getToolComponent(tool.id);

  return (
    <ToolComponent 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    />
  );
};

export default ToolLoader;
