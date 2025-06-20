
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ListOrdered } from "lucide-react";

interface PseudocodeGeneratorInputProps {
  code: string;
  language: string;
  isGenerating: boolean;
  onCodeChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onGeneratePseudocode: () => void;
}

const languageOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
];

const PseudocodeGeneratorInput = ({
  code,
  language,
  isGenerating,
  onCodeChange,
  onLanguageChange,
  onGeneratePseudocode
}: PseudocodeGeneratorInputProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Convert Code to Pseudocode
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Transform complex code into simple, step-by-step pseudocode that anyone can understand.
        </p>
      </div>

      <div className="p-6 space-y-4">
        {/* Language Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Code Language
          </label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="[&>span]:text-gray-900 dark:[&>span]:text-white">
              <SelectValue placeholder="Select programming language" />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map(lang => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Code Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Code
          </label>
          <Textarea
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            placeholder={`Paste your ${language} code here...`}
            className="min-h-[200px] font-mono text-sm resize-none text-gray-900 dark:text-white"
            disabled={isGenerating}
          />
        </div>

        {/* Generate Button */}
        <Button
          onClick={onGeneratePseudocode}
          disabled={!code.trim() || isGenerating}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Converting to Pseudocode...
            </>
          ) : (
            <>
              <ListOrdered className="h-4 w-4 mr-2" />
              Generate Pseudocode
            </>
          )}
        </Button>

        {/* Help Text */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
            💡 What is Pseudocode?
          </h3>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Pseudocode is a simplified, step-by-step description of a computer program's logic, 
            written in plain English rather than specific programming syntax. It helps you understand 
            algorithms and share ideas with non-programmers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PseudocodeGeneratorInput;
