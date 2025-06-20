
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, BookOpen } from "lucide-react";

const NavigationHeader = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold font-mono text-white">CodeBoost</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/blog">
              <Button variant="ghost" className="text-white hover:text-blue-400">
                <BookOpen className="h-4 w-4 mr-2" />
                Blog
              </Button>
            </Link>
            <Link to="/tools">
              <Button variant="ghost" className="text-white hover:text-blue-400">Tools</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="text-white hover:text-blue-400">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-white hover:text-blue-400">Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
