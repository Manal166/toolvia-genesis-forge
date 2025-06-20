
import { useState } from "react";
import { Code, Lightbulb, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CodeExplainerInputProps {
  code: string;
  language: string;
  isExplaining: boolean;
  onCodeChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onExplainCode: () => void;
}

const CodeExplainerInput = ({
  code,
  language,
  isExplaining,
  onCodeChange,
  onLanguageChange,
  onExplainCode
}: CodeExplainerInputProps) => {
  const [showExamples, setShowExamples] = useState(false);

  const exampleCodes = {
    javascript: `function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}`,
    python: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`,
    html: `<div class="card">
  <h2>Welcome</h2>
  <p>This is a sample card component</p>
  <button onclick="handleClick()">Click me</button>
</div>`
  };

  const insertExample = (lang: string) => {
    const example = exampleCodes[lang as keyof typeof exampleCodes] || exampleCodes.javascript;
    onCodeChange(example);
    onLanguageChange(lang);
    setShowExamples(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
          <Code className="h-5 w-5 text-blue-600" />
          <span>Code Input</span>
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowExamples(!showExamples)}
          className="flex items-center space-x-2 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Lightbulb className="h-4 w-4" />
          <span>Examples</span>
        </Button>
      </div>

      <div className="p-4 space-y-4">
        {showExamples && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-medium text-blue-900 dark:text-white mb-3">Try these examples:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => insertExample('javascript')}
                className="text-left text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                JavaScript Function
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => insertExample('python')}
                className="text-left text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Python Algorithm
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => insertExample('html')}
                className="text-left text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                HTML Component
              </Button>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Programming Language
          </label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
              <SelectItem value="javascript" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">JavaScript</SelectItem>
              <SelectItem value="python" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Python</SelectItem>
              <SelectItem value="html" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">HTML</SelectItem>
              <SelectItem value="css" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">CSS</SelectItem>
              <SelectItem value="java" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Java</SelectItem>
              <SelectItem value="cpp" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">C++</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Paste your code here
          </label>
          <Textarea
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            placeholder="Paste the code you want explained..."
            className="min-h-[200px] font-mono text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
        </div>

        <Button
          onClick={onExplainCode}
          disabled={!code.trim() || isExplaining}
          className="w-full flex items-center justify-center space-x-2"
        >
          {isExplaining ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Analyzing Code...</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              <span>Explain This Code</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CodeExplainerInput;
