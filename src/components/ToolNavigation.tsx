
import { Link } from "react-router-dom";
import { Code, ArrowLeft, Moon, Sun, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolNavigationProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const ToolNavigation = ({ isDark, onToggleTheme }: ToolNavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold font-mono text-gray-900 dark:text-white">Toolvia</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Link to="/settings">
              <Button variant="ghost" size="sm" title="Settings">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={onToggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ToolNavigation;
