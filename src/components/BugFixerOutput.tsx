import { CheckCircle, Copy, RefreshCw, Download, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface BugFixerOutputProps {
  fixedCode: string;
  originalCode: string;
  language: string;
  showExplanation: boolean;
  onRegenerate: () => void;
}

const BugFixerOutput = ({
  fixedCode,
  originalCode,
  language,
  showExplanation,
  onRegenerate
}: BugFixerOutputProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fixedCode);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Fixed code copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the code manually.",
        variant: "destructive",
      });
    }
  };

  const downloadCode = () => {
    const fileExtensions: Record<string, string> = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      html: 'html',
      css: 'css'
    };
    
    const extension = fileExtensions[language] || 'txt';
    const blob = new Blob([fixedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fixed-code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `Fixed code saved as fixed-code.${extension}`,
    });
  };

  // Mock explanation for demonstration
  const getFixExplanation = () => {
    return `## Bugs Fixed:

1. **Missing closing bracket** - Added missing closing bracket in function declaration
2. **Missing return statement** - Added proper return statement for the function
3. **Syntax errors** - Fixed missing semicolons and parentheses
4. **Variable declarations** - Added proper variable declarations with 'const/let'
5. **Error handling** - Added try-catch blocks for better error management

## Improvements Made:

- Added proper code formatting and indentation
- Included parameter validation
- Added helpful comments
- Optimized performance where possible
- Following ${language} best practices`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          Fixed Code
        </h2>
        
        {fixedCode && (
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Regenerate</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadCode}
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="flex items-center space-x-2"
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </Button>
          </div>
        )}
      </div>
      
      <div className="p-4">
        {fixedCode ? (
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm font-mono text-gray-100">
                <code>{fixedCode}</code>
              </pre>
            </div>
            
            {showExplanation && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Fix Explanation
                </h3>
                <div className="text-blue-800 dark:text-blue-200 text-sm whitespace-pre-line">
                  {getFixExplanation()}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <Bug className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Paste your broken code and click "Fix My Code" to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BugFixerOutput;
