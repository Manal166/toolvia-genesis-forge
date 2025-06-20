
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Download, RefreshCw, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegexExplainerOutputProps {
  explanation: string;
  regex: string;
  onRegenerate: () => void;
  isLoading: boolean;
}

const RegexExplainerOutput = ({ explanation, regex, onRegenerate, isLoading }: RegexExplainerOutputProps) => {
  const { toast } = useToast();
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = async () => {
    try {
      setIsCopying(true);
      const content = `Regex Pattern: ${regex}\n\nExplanation:\n${explanation}`;
      await navigator.clipboard.writeText(content);
      toast({
        title: "Copied to clipboard",
        description: "The regex explanation has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCopying(false);
    }
  };

  const handleDownload = () => {
    try {
      const content = `Regex Pattern: ${regex}\n\nExplanation:\n${explanation}`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `regex-explanation-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Downloaded successfully",
        description: "The regex explanation has been downloaded as a text file.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download the file. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!explanation) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Enter a regex pattern to see its explanation here</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
          Regex Explanation
        </CardTitle>
        <CardDescription>
          Human-readable breakdown of your regular expression
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Original Pattern Display */}
        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Original Pattern:</div>
          <code className="text-sm font-mono text-blue-600 dark:text-blue-400 break-all">
            {regex}
          </code>
        </div>

        {/* Explanation Content */}
        <div className="prose dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {explanation}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            onClick={handleCopy}
            disabled={isCopying}
            variant="outline"
            size="sm"
          >
            <Copy className="mr-2 h-4 w-4" />
            {isCopying ? "Copying..." : "Copy"}
          </Button>
          
          <Button
            onClick={handleDownload}
            variant="outline"
            size="sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          
          <Button
            onClick={onRegenerate}
            disabled={isLoading}
            variant="outline"
            size="sm"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Regenerate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegexExplainerOutput;
