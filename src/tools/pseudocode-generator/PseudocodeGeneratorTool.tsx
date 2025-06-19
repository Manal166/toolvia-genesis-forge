
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import PseudocodeGeneratorInput from "./PseudocodeGeneratorInput";
import PseudocodeGeneratorOutput from "./PseudocodeGeneratorOutput";
import { generatePseudocode } from "@/services/pseudocodeGeneratorService";
import { ToolConfig } from "@/config/tools.config";

interface PseudocodeGeneratorToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const PseudocodeGeneratorTool = ({ tool, isDark, onToggleTheme }: PseudocodeGeneratorToolProps) => {
  const [codeToConvert, setCodeToConvert] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("javascript");
  const [generatedPseudocode, setGeneratedPseudocode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { toast } = useToast();

  const handleGeneratePseudocode = async () => {
    if (!codeToConvert.trim()) {
      toast({
        title: "No Code Provided",
        description: "Please paste some code to convert to pseudocode.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const result = await generatePseudocode(codeToConvert, codeLanguage);
      setGeneratedPseudocode(result);
      
      toast({
        title: "Pseudocode Generated!",
        description: "Your code has been converted to step-by-step pseudocode.",
      });
    } catch (error) {
      console.error('Error generating pseudocode:', error);
      toast({
        title: "Generation Failed",
        description: "There was an error generating your pseudocode. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegeneratePseudocode = async () => {
    await handleGeneratePseudocode();
  };

  return (
    <ToolWrapper 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    >
      {/* Input Section */}
      <ToolSection>
        <PseudocodeGeneratorInput
          code={codeToConvert}
          language={codeLanguage}
          isGenerating={isGenerating}
          onCodeChange={setCodeToConvert}
          onLanguageChange={setCodeLanguage}
          onGeneratePseudocode={handleGeneratePseudocode}
        />
      </ToolSection>

      {/* Output Section */}
      <ToolSection>
        <PseudocodeGeneratorOutput
          generatedPseudocode={generatedPseudocode}
          originalCode={codeToConvert}
          language={codeLanguage}
          onRegenerate={handleRegeneratePseudocode}
        />
      </ToolSection>
    </ToolWrapper>
  );
};

export default PseudocodeGeneratorTool;
