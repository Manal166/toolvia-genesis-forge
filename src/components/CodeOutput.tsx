
import { Code, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeOutputProps {
  generatedCode: string;
  copied: boolean;
  onCopyToClipboard: () => void;
}

const CodeOutput = ({ generatedCode, copied, onCopyToClipboard }: CodeOutputProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-green-400">
          Generated Code
        </h2>
        {generatedCode && (
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
        )}
      </div>
      
      <div className="p-4">
        {generatedCode ? (
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm font-mono">
            <code>{generatedCode}</code>
          </pre>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Select a language and describe your code to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeOutput;
