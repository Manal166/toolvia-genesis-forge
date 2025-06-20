
import { useState } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolWrapper from "@/components/ToolWrapper";
import TextSummarizerInput from "./TextSummarizerInput";
import TextSummarizerOutput from "./TextSummarizerOutput";
import { summarizeText, SummaryLength } from "@/services/textSummarizerService";
import { useToast } from "@/hooks/use-toast";

interface TextSummarizerToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const TextSummarizerTool = ({ tool, isDark, onToggleTheme }: TextSummarizerToolProps) => {
  const [summary, setSummary] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [summaryLength, setSummaryLength] = useState<SummaryLength>("medium");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async (text: string, length: SummaryLength) => {
    setIsLoading(true);
    setOriginalText(text);
    setSummaryLength(length);
    
    try {
      const result = await summarizeText(text, length);
      setSummary(result);
      
      toast({
        title: "Summary generated successfully",
        description: `Your ${length} summary is ready.`,
      });
    } catch (error) {
      console.error('Error generating summary:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      toast({
        title: "Summary generation failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      setSummary("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (originalText) {
      handleSummarize(originalText, summaryLength);
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <TextSummarizerInput
        onSummarize={handleSummarize}
        isLoading={isLoading}
      />
      <TextSummarizerOutput
        summary={summary}
        originalText={originalText}
        summaryLength={summaryLength}
        onRegenerate={handleRegenerate}
        isLoading={isLoading}
      />
    </ToolWrapper>
  );
};

export default TextSummarizerTool;
