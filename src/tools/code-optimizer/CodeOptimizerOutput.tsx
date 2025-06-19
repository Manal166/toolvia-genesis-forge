
import { Copy, CheckCircle, RotateCcw, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OptimizationResult {
  originalCode: string;
  optimizedCode: string;
  explanation: string;
  improvements: string[];
}

interface CodeOptimizerOutputProps {
  result: OptimizationResult | null;
  copied: boolean;
  onCopyToClipboard: () => void;
  onRegenerate: () => void;
}

const CodeOptimizerOutput = ({ 
  result, 
  copied, 
  onCopyToClipboard, 
  onRegenerate 
}: CodeOptimizerOutputProps) => {
  if (!result) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <Code className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-semibold mb-2">Ready to Optimize</h3>
          <p>Paste your code and select a language to get optimization suggestions</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Optimization Results */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-green-400">
            Optimization Results
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className="flex items-center space-x-2 text-white"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Regenerate</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onCopyToClipboard}
              className="flex items-center space-x-2 text-white"
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <Tabs defaultValue="optimized" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="optimized">Optimized Code</TabsTrigger>
              <TabsTrigger value="comparison">Before & After</TabsTrigger>
            </TabsList>
            
            <TabsContent value="optimized" className="mt-4">
              <pre className="bg-gray-900 p-6 rounded-lg overflow-x-auto text-sm font-mono scrollbar-thin">
                <code className="text-green-400">{result.optimizedCode}</code>
              </pre>
            </TabsContent>
            
            <TabsContent value="comparison" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Original Code</h4>
                  <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-xs font-mono scrollbar-thin">
                    <code className="text-gray-300">{result.originalCode}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Optimized Code</h4>
                  <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-xs font-mono scrollbar-thin">
                    <code className="text-green-400">{result.optimizedCode}</code>
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Improvements Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Key Improvements</h3>
        <div className="space-y-3">
          {result.improvements.map((improvement, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{improvement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Explanation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Detailed Explanation</h3>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
            {result.explanation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOptimizerOutput;
