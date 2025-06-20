
import { Bug, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BugFixerInputProps {
  code: string;
  language: string;
  isFixing: boolean;
  showExplanation: boolean;
  onCodeChange: (code: string) => void;
  onLanguageChange: (language: string) => void;
  onFixCode: () => void;
  onToggleExplanation: (show: boolean) => void;
}

const BugFixerInput = ({
  code,
  language,
  isFixing,
  showExplanation,
  onCodeChange,
  onLanguageChange,
  onFixCode,
  onToggleExplanation
}: BugFixerInputProps) => {
  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Paste Your Broken Code
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Programming Language
            </label>
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onToggleExplanation(!showExplanation)}
              className="text-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {showExplanation ? 'Hide' : 'Show'} Fix Explanation
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <Textarea
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          placeholder={`Paste your ${language} code here that needs fixing...

Example:
function calculate(a, b {
  result = a + b
  console.log(result
}`}
          className="min-h-[300px] font-mono text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
        />
        
        <div className="mt-4 flex justify-center">
          <Button
            onClick={onFixCode}
            disabled={isFixing || !code.trim()}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8"
          >
            {isFixing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                Fixing Code...
              </>
            ) : (
              <>
                <Bug className="h-4 w-4 mr-2" />
                Fix My Code
              </>
            )}
          </Button>
        </div>
        
        {!code.trim() && (
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-2">
            Enter some code above to get started
          </p>
        )}
      </div>
    </div>
  );
};

export default BugFixerInput;
