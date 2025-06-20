
import { useState } from "react";
import { Settings, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface CodeOptimizerInputProps {
  language: string;
  code: string;
  isOptimizing: boolean;
  onLanguageChange: (value: string) => void;
  onCodeChange: (value: string) => void;
  onOptimizeCode: () => void;
}

const CodeOptimizerInput = ({
  language,
  code,
  isOptimizing,
  onLanguageChange,
  onCodeChange,
  onOptimizeCode
}: CodeOptimizerInputProps) => {
  const [showExamples, setShowExamples] = useState(false);

  const exampleCodes = {
    javascript: `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price * items[i].quantity;
  }
  return total;
}`,
    python: `def find_max(numbers):
    max_num = numbers[0]
    for i in range(1, len(numbers)):
        if numbers[i] > max_num:
            max_num = numbers[i]
    return max_num`,
    java: `public int factorial(int n) {
    if (n <= 1) return 1;
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}`
  };

  const loadExample = () => {
    const example = exampleCodes[language as keyof typeof exampleCodes] || exampleCodes.javascript;
    onCodeChange(example);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Code Optimization
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
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Code to Optimize
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={loadExample}
                className="text-blue-600 hover:text-blue-700"
              >
                <Upload className="h-4 w-4 mr-1" />
                Load Example
              </Button>
            </div>
            <Textarea
              placeholder="Paste your code here for optimization..."
              value={code}
              onChange={(e) => onCodeChange(e.target.value)}
              className="min-h-[200px] font-mono text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>

          <Button 
            onClick={onOptimizeCode}
            disabled={isOptimizing || !language || !code.trim()}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            size="lg"
          >
            {isOptimizing ? (
              <>
                <Settings className="mr-2 h-4 w-4 animate-spin" />
                Optimizing Code...
              </>
            ) : (
              <>
                <Settings className="mr-2 h-4 w-4" />
                Optimize Code
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Optimization Tips */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Optimization Areas</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <span className="font-semibold text-green-600 dark:text-green-400">Performance:</span> Loop optimization, algorithm efficiency
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span className="font-semibold text-blue-600 dark:text-blue-400">Readability:</span> Clean code, better naming
          </div>
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <span className="font-semibold text-purple-600 dark:text-purple-400">Best Practices:</span> Code patterns, error handling
          </div>
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <span className="font-semibold text-orange-600 dark:text-orange-400">Memory:</span> Reduced allocations, efficient data structures
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOptimizerInput;
