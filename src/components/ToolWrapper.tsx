
import { ReactNode } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolNavigation from "./ToolNavigation";
import ToolHeader from "./ToolHeader";
import FeedbackButton from "./FeedbackButton";
import AdZone from "./AdZone";

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

      {/* Top Banner Ad Zone */}
      <AdZone 
        id="tool-banner-top" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ToolHeader tool={tool} isDark={isDark} />
        
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <div className="grid lg:grid-cols-2 gap-8">
              {children}
            </div>
          </div>
          
          {/* Sidebar Ad Zone */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              <AdZone 
                id="tool-sidebar-primary"
                className="w-full min-h-[250px]"
              />
              <AdZone 
                id="tool-sidebar-secondary"
                className="w-full min-h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad Zone */}
      <AdZone 
        id="tool-banner-bottom" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
      />

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
