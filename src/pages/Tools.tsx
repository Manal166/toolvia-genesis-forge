
import { useState } from "react";
import { Code, Moon, Sun, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ToolDirectory from "@/components/ToolDirectory";
import AdZone from "@/components/AdZone";

const Tools = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-black`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold font-mono text-white">CodeBoost</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/community" className="text-white hover:text-blue-400 transition-colors">Community</Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors">About</Link>
              <Link to="/settings">
                <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={toggleTheme}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Top Banner Ad Zone */}
      <AdZone 
        id="tools-banner-top" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Developer Tools
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover our collection of AI-powered tools designed to accelerate your development workflow.
          </p>
          <div className="mt-8">
            <Link 
              to="/tools" 
              className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
            >
              View All Tools
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <ToolDirectory />
          </div>
          
          {/* Sidebar Ad Zone */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              <AdZone 
                id="tools-sidebar-primary"
                className="w-full min-h-[300px]"
              />
              <AdZone 
                id="tools-sidebar-secondary"
                className="w-full min-h-[250px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad Zone */}
      <AdZone 
        id="tools-banner-bottom" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
      />
    </div>
  );
};

export default Tools;
