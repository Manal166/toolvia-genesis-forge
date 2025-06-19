
import { ReactNode } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolNavigation from "./ToolNavigation";
import ToolHeader from "./ToolHeader";
import FeedbackButton from "./FeedbackButton";

interface ToolWrapperProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
  children: ReactNode;
}

const ToolWrapper = ({ tool, isDark, onToggleTheme, children }: ToolWrapperProps) => {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <ToolNavigation isDark={isDark} onToggleTheme={onToggleTheme} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ToolHeader tool={tool} isDark={isDark} />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {children}
        </div>
      </div>

      {/* Tool-specific feedback - positioned to not conflict with global feedback */}
      <div className="fixed bottom-6 left-6 z-50">
        <FeedbackButton 
          toolName={tool.name}
          variant="inline"
        />
      </div>
    </div>
  );
};

export default ToolWrapper;
