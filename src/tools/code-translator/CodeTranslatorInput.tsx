
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Languages, ArrowRight } from "lucide-react";

interface CodeTranslatorInputProps {
  code: string;
  fromLanguage: string;
  toLanguage: string;
  isTranslating: boolean;
  onCodeChange: (value: string) => void;
  onFromLanguageChange: (value: string) => void;
  onToLanguageChange: (value: string) => void;
  onTranslateCode: () => void;
}

const languageOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
];

const CodeTranslatorInput = ({
  code,
  fromLanguage,
  toLanguage,
  isTranslating,
  onCodeChange,
  onFromLanguageChange,
  onToLanguageChange,
  onTranslateCode
}: CodeTranslatorInputProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Translate Your Code
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Convert code from one programming language to another while preserving the logic.
        </p>
      </div>

      <div className="p-6 space-y-4">
        {/* Language Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              From Language
            </label>
            <Select value={fromLanguage} onValueChange={onFromLanguageChange}>
              <SelectTrigger className="[&>span]:text-white">
                <SelectValue placeholder="Select source language" />
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
          
          <div className="flex justify-center">
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              To Language
            </label>
            <Select value={toLanguage} onValueChange={onToLanguageChange}>
              <SelectTrigger className="[&>span]:text-white">
                <SelectValue placeholder="Select target language" />
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
        </div>

        {/* Code Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Source Code
          </label>
          <Textarea
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            placeholder={`Paste your ${fromLanguage} code here...`}
            className="min-h-[200px] font-mono text-sm resize-none"
            disabled={isTranslating}
          />
        </div>

        {/* Translate Button */}
        <Button
          onClick={onTranslateCode}
          disabled={!code.trim() || isTranslating || fromLanguage === toLanguage}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          {isTranslating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Translating Code...
            </>
          ) : (
            <>
              <Languages className="h-4 w-4 mr-2" />
              Translate Code
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CodeTranslatorInput;
