
import { ToolConfig } from "@/config/tools.config";
import ToolWrapper from "./ToolWrapper";
import ToolSection from "./ToolSection";

interface GenericToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const GenericTool = ({ tool, isDark, onToggleTheme }: GenericToolProps) => {
  return (
    <ToolWrapper 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    >
      <ToolSection>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {tool.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {tool.description}
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200">
              This tool is coming soon! We're working hard to bring you more amazing features.
            </p>
          </div>
        </div>
      </ToolSection>
    </ToolWrapper>
  );
};

export default GenericTool;
