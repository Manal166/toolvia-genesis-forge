
import { useState } from "react";
import { Copy, CheckCircle, BookOpen, RotateCcw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeExplanationOutputProps {
  explanation: string;
  originalCode: string;
  language: string;
  onRegenerate?: () => void;
}

const CodeExplanationOutput = ({
  explanation,
  originalCode,
  language,
  onRegenerate
}: CodeExplanationOutputProps) => {
  const [copied, setCopied] = useState(false);

  const copyExplanation = async () => {
    try {
      await navigator.clipboard.writeText(explanation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy explanation:', err);
    }
  };

  const downloadExplanation = () => {
    const content = `# Code Explanation - ${language.toUpperCase()}\n\n## Original Code:\n\`\`\`${language}\n${originalCode}\n\`\`\`\n\n## Explanation:\n${explanation}`;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code-explanation-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!explanation) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-green-600" />
            <span>Code Explanation</span>
          </h2>
        </div>
        
        <div className="p-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Paste your code and click "Explain This Code" to get started
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            I'll break down your code line by line with detailed analysis
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-green-600" />
          <span>Code Explanation</span>
        </h2>
        <div className="flex items-center space-x-2">
          {onRegenerate && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className="flex items-center space-x-2 text-white border-gray-600 hover:bg-gray-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Regenerate</span>
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={downloadExplanation}
            className="flex items-center space-x-2 text-white border-gray-600 hover:bg-gray-700"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={copyExplanation}
            className="flex items-center space-x-2 text-white border-gray-600 hover:bg-gray-700"
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

      <div className="p-6 space-y-6">
        {/* Original Code Display */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
            Original {language} Code:
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono border">
            <code>{originalCode}</code>
          </pre>
        </div>

        {/* Explanation */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
            Detailed Explanation:
          </h3>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {explanation.split('\n').map((line, index) => {
              // Handle markdown-style headers
              if (line.startsWith('##')) {
                return (
                  <h3 key={index} className="font-bold text-lg text-gray-900 dark:text-white mt-6 mb-3">
                    {line.replace(/^##\s*/, '')}
                  </h3>
                );
              }
              if (line.startsWith('#')) {
                return (
                  <h2 key={index} className="font-bold text-xl text-gray-900 dark:text-white mt-8 mb-4">
                    {line.replace(/^#\s*/, '')}
                  </h2>
                );
              }
              // Handle bold text
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <h4 key={index} className="font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                    {line.replace(/\*\*/g, '')}
                  </h4>
                );
              }
              // Handle bullet points
              if (line.startsWith('• ') || line.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-900 dark:text-white ml-4 mb-1">
                    {line.substring(2)}
                  </li>
                );
              }
              // Handle numbered lists
              if (line.match(/^\d+\./)) {
                return (
                  <p key={index} className="text-gray-900 dark:text-white font-medium mb-2">
                    {line}
                  </p>
                );
              }
              // Handle code blocks
              if (line.includes('`') && !line.startsWith('```')) {
                const parts = line.split('`');
                return (
                  <p key={index} className="text-gray-900 dark:text-white leading-relaxed mb-2">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? (
                        <code key={i} className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">
                          {part}
                        </code>
                      ) : part
                    )}
                  </p>
                );
              }
              // Regular paragraphs
              if (line.trim()) {
                return (
                  <p key={index} className="text-gray-900 dark:text-white leading-relaxed mb-3">
                    {line}
                  </p>
                );
              }
              return <br key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExplanationOutput;
