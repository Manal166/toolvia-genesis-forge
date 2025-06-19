
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, RefreshCw, CheckCircle, ListOrdered } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PseudocodeGeneratorOutputProps {
  generatedPseudocode: string;
  originalCode: string;
  language: string;
  onRegenerate: () => void;
}

const PseudocodeGeneratorOutput = ({
  generatedPseudocode,
  originalCode,
  language,
  onRegenerate
}: PseudocodeGeneratorOutputProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPseudocode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Pseudocode copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const downloadPseudocode = () => {
    const blob = new Blob([generatedPseudocode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pseudocode_${language}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `Pseudocode saved as pseudocode_${language}.txt`,
    });
  };

  if (!generatedPseudocode) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <ListOrdered className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Ready to Generate</h3>
          <p className="text-sm">
            Your step-by-step pseudocode will appear here once you paste your code and click generate.
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
              Generated Pseudocode
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Step-by-step breakdown of your {language} code
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
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-[300px]">
            <pre className="whitespace-pre-wrap text-sm text-gray-900 dark:text-gray-100 font-mono leading-relaxed">
              {generatedPseudocode}
            </pre>
          </div>
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
                Copy Pseudocode
              </>
            )}
          </Button>
          <Button
            onClick={downloadPseudocode}
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

export default PseudocodeGeneratorOutput;
