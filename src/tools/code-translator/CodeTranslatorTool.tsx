
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import CodeTranslatorInput from "./CodeTranslatorInput";
import CodeTranslatorOutput from "./CodeTranslatorOutput";
import { translateCode } from "@/services/codeTranslatorService";
import { ToolConfig } from "@/config/tools.config";

interface CodeTranslatorToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const CodeTranslatorTool = ({ tool, isDark, onToggleTheme }: CodeTranslatorToolProps) => {
  const [codeToTranslate, setCodeToTranslate] = useState("");
  const [fromLanguage, setFromLanguage] = useState("javascript");
  const [toLanguage, setToLanguage] = useState("python");
  const [translatedCode, setTranslatedCode] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  
  const { toast } = useToast();

  const handleTranslateCode = async () => {
    if (!codeToTranslate.trim()) {
      toast({
        title: "No Code Provided",
        description: "Please paste some code to translate.",
        variant: "destructive",
      });
      return;
    }

    if (fromLanguage === toLanguage) {
      toast({
        title: "Same Languages Selected",
        description: "Please select different source and target languages.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    
    try {
      const result = await translateCode(codeToTranslate, fromLanguage, toLanguage);
      setTranslatedCode(result);
      
      toast({
        title: "Code Translated!",
        description: `Your code has been translated from ${fromLanguage} to ${toLanguage}.`,
      });
    } catch (error) {
      console.error('Error translating code:', error);
      toast({
        title: "Translation Failed",
        description: "There was an error translating your code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleRegenerateTranslation = async () => {
    await handleTranslateCode();
  };

  return (
    <ToolWrapper 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    >
      {/* Input Section */}
      <ToolSection>
        <CodeTranslatorInput
          code={codeToTranslate}
          fromLanguage={fromLanguage}
          toLanguage={toLanguage}
          isTranslating={isTranslating}
          onCodeChange={setCodeToTranslate}
          onFromLanguageChange={setFromLanguage}
          onToLanguageChange={setToLanguage}
          onTranslateCode={handleTranslateCode}
        />
      </ToolSection>

      {/* Output Section */}
      <ToolSection>
        <CodeTranslatorOutput
          translatedCode={translatedCode}
          originalCode={codeToTranslate}
          fromLanguage={fromLanguage}
          toLanguage={toLanguage}
          onRegenerate={handleRegenerateTranslation}
        />
      </ToolSection>
    </ToolWrapper>
  );
};

export default CodeTranslatorTool;
