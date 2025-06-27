
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import { ToolConfig } from "@/config/tools.config";

interface WordCounterToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const WordCounterTool = ({ tool, isDark, onToggleTheme }: WordCounterToolProps) => {
  const [text, setText] = useState("");
  const { toast } = useToast();

  // Calculate statistics
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, "").length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const lineCount = text.split("\n").length;

  const handleClear = () => {
    setText("");
    toast({
      title: "Cleared",
      description: "Text has been cleared successfully.",
    });
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <ToolSection>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Text Input
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Type or paste your text below to get real-time statistics
            </p>
            
            <div className="space-y-4">
              <Textarea
                placeholder="Type or paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[300px] font-mono text-sm text-white dark:text-white resize-none"
              />
              
              <div className="flex justify-end">
                <Button
                  onClick={handleClear}
                  variant="outline"
                  className="flex items-center gap-2 bg-white text-black hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear Text
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ToolSection>

      <ToolSection>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Text Statistics
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Real-time analysis of your text
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {wordCount}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Words
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {charCount}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Characters
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {charCountNoSpaces}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  No Spaces
                </div>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {sentenceCount}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Sentences
                </div>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {paragraphCount}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Paragraphs
                </div>
              </div>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                  {lineCount}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Lines
                </div>
              </div>
            </div>
            
            {text && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  💡 <strong>Reading Time:</strong> Approximately {Math.ceil(wordCount / 200)} minute(s) at average reading speed
                </p>
              </div>
            )}
          </div>
        </div>
      </ToolSection>
    </ToolWrapper>
  );
};

export default WordCounterTool;
