
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, RefreshCw, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeTranslatorOutputProps {
  translatedCode: string;
  originalCode: string;
  fromLanguage: string;
  toLanguage: string;
  onRegenerate: () => void;
}

const CodeTranslatorOutput = ({
  translatedCode,
  originalCode,
  fromLanguage,
  toLanguage,
  onRegenerate
}: CodeTranslatorOutputProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(translatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Translated code copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard",
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
      csharp: 'cs',
      php: 'php',
      ruby: 'rb',
      go: 'go',
    };

    const extension = fileExtensions[toLanguage] || 'txt';
    const blob = new Blob([translatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `translated_code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `Code saved as translated_code.${extension}`,
    });
  };

  if (!translatedCode) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <Languages className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Ready to Translate</h3>
          <p className="text-sm">
            Your translated code will appear here once you paste your source code and click translate.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Translated Code
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {fromLanguage.charAt(0).toUpperCase() + fromLanguage.slice(1)} → {toLanguage.charAt(0).toUpperCase() + toLanguage.slice(1)}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              disabled={!originalCode}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <Textarea
            value={translatedCode}
            readOnly
            className="min-h-[300px] font-mono text-sm bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={copyToClipboard}
            className="flex-1 min-w-[120px]"
            variant="outline"
          >
            {copied ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy Code
              </>
            )}
          </Button>
          <Button
            onClick={downloadCode}
            className="flex-1 min-w-[120px]"
            variant="outline"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeTranslatorOutput;
