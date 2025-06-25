
import { useState } from "react";
import { Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import { ToolConfig } from "@/config/tools.config";

interface RemoveDuplicatesToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const RemoveDuplicatesTool = ({ tool, isDark, onToggleTheme }: RemoveDuplicatesToolProps) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const { toast } = useToast();

  const handleRemoveDuplicates = () => {
    if (!inputText.trim()) {
      toast({
        title: "No Input",
        description: "Please enter some text to remove duplicates from.",
        variant: "destructive",
      });
      return;
    }

    const lines = inputText.split("\n");
    const uniqueLines = [...new Set(lines)];
    const result = uniqueLines.join("\n");
    
    setOutputText(result);
    
    const originalCount = lines.length;
    const uniqueCount = uniqueLines.length;
    const removedCount = originalCount - uniqueCount;
    
    toast({
      title: "Duplicates Removed",
      description: `Removed ${removedCount} duplicate line(s). ${uniqueCount} unique lines remaining.`,
    });
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    toast({
      title: "Cleared",
      description: "Input and output have been cleared.",
    });
  };

  const handleCopyOutput = async () => {
    if (!outputText) {
      toast({
        title: "Nothing to Copy",
        description: "No output to copy to clipboard.",
        variant: "destructive",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(outputText);
      toast({
        title: "Copied!",
        description: "Output copied to clipboard successfully.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <ToolSection>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Input Text
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Paste your text with duplicate lines here
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="input-text" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Text to Process
                </Label>
                <Textarea
                  id="input-text"
                  placeholder="Enter your text here, one item per line..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="mt-2 min-h-[200px] font-mono text-sm"
                />
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleRemoveDuplicates}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Remove Duplicates
                </Button>
                <Button
                  onClick={handleClear}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ToolSection>

      <ToolSection>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Output
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Text with duplicates removed
                </p>
              </div>
              {outputText && (
                <Button
                  onClick={handleCopyOutput}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              )}
            </div>
            
            <div className="relative">
              <Textarea
                value={outputText}
                readOnly
                placeholder="Processed text will appear here..."
                className="min-h-[200px] font-mono text-sm bg-gray-50 dark:bg-gray-900"
              />
            </div>
            
            {outputText && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  ✅ Duplicates removed successfully! Original order preserved.
                </p>
              </div>
            )}
          </div>
        </div>
      </ToolSection>
    </ToolWrapper>
  );
};

export default RemoveDuplicatesTool;
