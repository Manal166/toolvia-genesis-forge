
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import BugFixerInput from "@/components/BugFixerInput";
import BugFixerOutput from "@/components/BugFixerOutput";
import { fixCode } from "@/services/bugFixerService";
import { ToolConfig } from "@/config/tools.config";

interface BugFixerToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const BugFixerTool = ({ tool, isDark, onToggleTheme }: BugFixerToolProps) => {
  const [codeToFix, setCodeToFix] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("javascript");
  const [fixedCode, setFixedCode] = useState("");
  const [isFixing, setIsFixing] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const { toast } = useToast();

  const handleFixCode = async () => {
    if (!codeToFix.trim()) {
      toast({
        title: "No Code Provided",
        description: "Please paste some code to fix.",
        variant: "destructive",
      });
      return;
    }

    setIsFixing(true);
    
    try {
      const result = await fixCode(codeToFix, codeLanguage);
      setFixedCode(result);
      
      toast({
        title: "Code Fixed!",
        description: "Your bug fixes are ready.",
      });
    } catch (error) {
      console.error('Error fixing code:', error);
      toast({
        title: "Fix Failed",
        description: "There was an error fixing your code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsFixing(false);
    }
  };

  const handleRegenerateFix = async () => {
    await handleFixCode();
  };

  return (
    <ToolWrapper 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    >
      {/* Input Section */}
      <ToolSection>
        <BugFixerInput
          code={codeToFix}
          language={codeLanguage}
          isFixing={isFixing}
          showExplanation={showExplanation}
          onCodeChange={setCodeToFix}
          onLanguageChange={setCodeLanguage}
          onFixCode={handleFixCode}
          onToggleExplanation={setShowExplanation}
        />
      </ToolSection>

      {/* Output Section */}
      <ToolSection>
        <BugFixerOutput
          fixedCode={fixedCode}
          originalCode={codeToFix}
          language={codeLanguage}
          showExplanation={showExplanation}
          onRegenerate={handleRegenerateFix}
        />
      </ToolSection>
    </ToolWrapper>
  );
};

export default BugFixerTool;
