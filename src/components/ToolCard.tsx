
import { Link } from "react-router-dom";
import { Code, Zap, Bug, Wrench, Regex, FileText, BookOpen } from "lucide-react";
import { ToolConfig } from "@/config/tools.config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolCardProps {
  tool: ToolConfig;
}

const iconMap = {
  code: Code,
  zap: Zap,
  'file-text': FileText,
  bug: Bug,
  tool: Wrench,
  regex: Regex,
  'book-open': BookOpen,
};

const ToolCard = ({ tool }: ToolCardProps) => {
  const IconComponent = iconMap[tool.icon as keyof typeof iconMap] || Code;

  return (
    <Link to={`/tools/${tool.id}`} className="block group">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group-hover:border-blue-300 dark:group-hover:border-blue-600">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tool.name}
              </CardTitle>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {tool.category}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            {tool.description}
          </CardDescription>
          {tool.languages && (
            <div className="mt-3 flex flex-wrap gap-1">
              {tool.languages.slice(0, 3).map((lang) => (
                <span 
                  key={lang}
                  className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded"
                >
                  {lang}
                </span>
              ))}
              {tool.languages.length > 3 && (
                <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                  +{tool.languages.length - 3} more
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ToolCard;
