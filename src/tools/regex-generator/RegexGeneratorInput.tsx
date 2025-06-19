
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, HelpCircle } from "lucide-react";

interface RegexGeneratorInputProps {
  description: string;
  isGenerating: boolean;
  onDescriptionChange: (value: string) => void;
  onGenerateRegex: () => void;
}

const RegexGeneratorInput = ({
  description,
  isGenerating,
  onDescriptionChange,
  onGenerateRegex
}: RegexGeneratorInputProps) => {
  const [showExamples, setShowExamples] = useState(false);

  const examplePrompts = [
    "Match all email addresses",
    "Find phone numbers in US format (XXX) XXX-XXXX",
    "Match URLs starting with http or https",
    "Find words that start with a capital letter",
    "Match dates in MM/DD/YYYY format",
    "Find hexadecimal color codes like #FF5733",
    "Match IP addresses",
    "Find all words containing numbers"
  ];

  const handleExampleClick = (example: string) => {
    onDescriptionChange(example);
    setShowExamples(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Describe Your Pattern
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Tell us what you want to match in plain English, and we'll generate the regex for you.
        </p>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pattern Description
          </label>
          <Textarea
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="e.g., Match all email addresses, Find phone numbers, etc."
            className="min-h-[100px] resize-none"
            disabled={isGenerating}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <Button
            onClick={onGenerateRegex}
            disabled={!description.trim() || isGenerating}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating Regex...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Regex
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={() => setShowExamples(!showExamples)}
            className="w-full"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            {showExamples ? 'Hide Examples' : 'Show Examples'}
          </Button>
        </div>

        {showExamples && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Example Prompts:
            </h3>
            <div className="grid gap-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="text-left p-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                >
                  "{example}"
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegexGeneratorInput;
