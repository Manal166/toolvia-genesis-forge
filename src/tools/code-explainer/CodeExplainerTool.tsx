
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import CodeExplainerInput from "@/components/CodeExplainerInput";
import CodeExplanationOutput from "@/components/CodeExplanationOutput";
import { explainCode } from "@/services/codeExplainerService";
import { ToolConfig } from "@/config/tools.config";

interface CodeExplainerToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const CodeExplainerTool = ({ tool, isDark, onToggleTheme }: CodeExplainerToolProps) => {
  const [codeToExplain, setCodeToExplain] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("javascript");
  const [explanation, setExplanation] = useState("");
  const [isExplaining, setIsExplaining] = useState(false);
  
  const { toast } = useToast();

  const handleExplainCode = async () => {
    if (!codeToExplain.trim()) {
      toast({
        title: "No Code Provided",
        description: "Please paste some code to explain.",
        variant: "destructive",
      });
      return;
    }

    setIsExplaining(true);
    
    try {
      const result = await explainCode(codeToExplain, codeLanguage);
      setExplanation(result);
      
      toast({
        title: "Code Explained!",
        description: "Your code explanation is ready.",
      });
    } catch (error) {
      console.error('Error explaining code:', error);
      toast({
        title: "Explanation Failed",
        description: "There was an error explaining your code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExplaining(false);
    }
  };

  const handleRegenerateExplanation = async () => {
    await handleExplainCode();
  };

  return (
    <ToolWrapper 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    >
      {/* Input Section */}
      <ToolSection>
        <CodeExplainerInput
          code={codeToExplain}
          language={codeLanguage}
          isExplaining={isExplaining}
          onCodeChange={setCodeToExplain}
          onLanguageChange={setCodeLanguage}
          onExplainCode={handleExplainCode}
        />
      </ToolSection>

      {/* Output Section */}
      <ToolSection>
        <CodeExplanationOutput
          explanation={explanation}
          originalCode={codeToExplain}
          language={codeLanguage}
          onRegenerate={handleRegenerateExplanation}
        />
      </ToolSection>
    </ToolWrapper>
  );
};

export default CodeExplainerTool;
