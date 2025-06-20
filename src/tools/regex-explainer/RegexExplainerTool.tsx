
import { useState } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolWrapper from "@/components/ToolWrapper";
import RegexExplainerInput from "./RegexExplainerInput";
import RegexExplainerOutput from "./RegexExplainerOutput";
import { explainRegex } from "@/services/regexExplainerService";
import { useToast } from "@/hooks/use-toast";

interface RegexExplainerToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const RegexExplainerTool = ({ tool, isDark, onToggleTheme }: RegexExplainerToolProps) => {
  const [explanation, setExplanation] = useState("");
  const [currentRegex, setCurrentRegex] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleExplain = async (regex: string) => {
    setIsLoading(true);
    setCurrentRegex(regex);
    
    try {
      const result = await explainRegex(regex);
      setExplanation(result);
      
      toast({
        title: "Regex explained successfully",
        description: "Your regular expression has been broken down and explained.",
      });
    } catch (error) {
      console.error('Error explaining regex:', error);
      toast({
        title: "Explanation failed",
        description: "Failed to explain the regex pattern. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (currentRegex) {
      handleExplain(currentRegex);
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <RegexExplainerInput
        onExplain={handleExplain}
        isLoading={isLoading}
      />
      <RegexExplainerOutput
        explanation={explanation}
        regex={currentRegex}
        onRegenerate={handleRegenerate}
        isLoading={isLoading}
      />
    </ToolWrapper>
  );
};

export default RegexExplainerTool;
