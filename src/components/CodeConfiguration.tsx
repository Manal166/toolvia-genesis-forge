
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface CodeConfigurationProps {
  language: string;
  description: string;
  isGenerating: boolean;
  onLanguageChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onGenerateCode: () => void;
}

const CodeConfiguration = ({
  language,
  description,
  isGenerating,
  onLanguageChange,
  onDescriptionChange,
  onGenerateCode
}: CodeConfigurationProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Configuration
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Programming Language
          </label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-full [&>span]:text-gray-900 dark:[&>span]:text-white">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <Textarea
            placeholder="Describe what you want to build... (e.g., 'a login form with email and password fields', 'a to-do list app', 'a calculator function')"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            className="min-h-[120px] text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
        </div>

        <Button 
          onClick={onGenerateCode}
          disabled={isGenerating || !language || !description}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Zap className="mr-2 h-4 w-4 animate-spin" />
              Generating Code...
            </>
          ) : (
            <>
              <Zap className="mr-2 h-4 w-4" />
              Generate Code
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CodeConfiguration;
