
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import RegexGeneratorInput from "./RegexGeneratorInput";
import RegexGeneratorOutput from "@/components/RegexGeneratorOutput";
import { generateRegex } from "@/services/regexGeneratorService";
import { ToolConfig } from "@/config/tools.config";

interface RegexGeneratorToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const RegexGeneratorTool = ({ tool, isDark, onToggleTheme }: RegexGeneratorToolProps) => {
  const [description, setDescription] = useState("");
  const [generatedRegex, setGeneratedRegex] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { toast } = useToast();

  const handleGenerateRegex = async () => {
    if (!description.trim()) {
      toast({
        title: "No Description Provided",
        description: "Please describe the pattern you want to match.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const result = await generateRegex(description);
      setGeneratedRegex(result.regex);
      setExplanation(result.explanation);
      
      toast({
        title: "Regex Generated!",
        description: "Your regular expression is ready.",
      });
    } catch (error) {
      console.error('Error generating regex:', error);
      toast({
        title: "Generation Failed",
        description: "There was an error generating your regex. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerateRegex = async () => {
    await handleGenerateRegex();
  };

  return (
    <ToolWrapper 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    >
      {/* Input Section */}
      <ToolSection>
        <RegexGeneratorInput
          description={description}
          isGenerating={isGenerating}
          onDescriptionChange={setDescription}
          onGenerateRegex={handleGenerateRegex}
        />
      </ToolSection>

      {/* Output Section */}
      <ToolSection>
        <RegexGeneratorOutput
          generatedRegex={generatedRegex}
          explanation={explanation}
          originalDescription={description}
          onRegenerate={handleRegenerateRegex}
        />
      </ToolSection>
    </ToolWrapper>
  );
};

export default RegexGeneratorTool;
