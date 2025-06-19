import { Code, Zap, FileText, Bug, Wrench, Hash, Languages, ListOrdered } from "lucide-react";
import { ToolConfig } from "@/config/tools.config";

interface ToolHeaderProps {
  tool: ToolConfig;
  isDark?: boolean;
}

const iconMap = {
  code: Code,
  zap: Zap,
  'file-text': FileText,
  bug: Bug,
  tool: Wrench,
  regex: Hash,
  languages: Languages,
  'list-ordered': ListOrdered,
};

const ToolHeader = ({ tool, isDark }: ToolHeaderProps) => {
  const IconComponent = iconMap[tool.icon as keyof typeof iconMap] || Code;

  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
          <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      
      <div className="mb-2">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3">
          {tool.category}
        </span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {tool.name}
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {tool.description}
      </p>
    </div>
  );
};

export default ToolHeader;
