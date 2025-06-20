
import { useState } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolWrapper from "@/components/ToolWrapper";
import CodeRefactorInput from "./CodeRefactorInput";
import CodeRefactorOutput from "./CodeRefactorOutput";
import { codeRefactorService } from "@/services/codeRefactorService";
import { useToast } from "@/hooks/use-toast";

interface CodeRefactorToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const CodeRefactorTool = ({ tool, isDark, onToggleTheme }: CodeRefactorToolProps) => {
  const [originalCode, setOriginalCode] = useState("");
  const [refactoredCode, setRefactoredCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [language, setLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleRefactor = async (code: string, selectedLanguage: string) => {
    setIsLoading(true);
    setOriginalCode(code);
    setLanguage(selectedLanguage);
    
    try {
      const result = await codeRefactorService.refactorCode(code, selectedLanguage);
      setRefactoredCode(result.refactoredCode);
      setExplanation(result.explanation);
      
      toast({
        title: "Success!",
        description: "Code refactored successfully"
      });
    } catch (error) {
      console.error('Error refactoring code:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to refactor code",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (originalCode && language) {
      handleRefactor(originalCode, language);
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <CodeRefactorInput 
        onRefactor={handleRefactor}
        isLoading={isLoading}
      />
      <CodeRefactorOutput 
        originalCode={originalCode}
        refactoredCode={refactoredCode}
        explanation={explanation}
        language={language}
        isLoading={isLoading}
        onRegenerate={handleRegenerate}
      />
    </ToolWrapper>
  );
};

export default CodeRefactorTool;
