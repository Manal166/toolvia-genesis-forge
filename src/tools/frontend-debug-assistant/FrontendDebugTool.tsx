
import { useState } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolWrapper from "@/components/ToolWrapper";
import FrontendDebugInput from "./FrontendDebugInput";
import FrontendDebugOutput from "./FrontendDebugOutput";
import { frontendDebugService } from "@/services/frontendDebugService";
import { useToast } from "@/hooks/use-toast";

interface FrontendDebugToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const FrontendDebugTool = ({ tool, isDark, onToggleTheme }: FrontendDebugToolProps) => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('html');
  const [issueDescription, setIssueDescription] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDebug = async () => {
    if (!code.trim() || !issueDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both code and issue description",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await frontendDebugService.debugFrontendCode(
        code,
        language,
        issueDescription
      );
      setOutput(result);
      toast({
        title: "Debug Complete!",
        description: "Your code has been analyzed and fixed",
      });
    } catch (error) {
      console.error('Frontend debugging failed:', error);
      toast({
        title: "Debug Failed",
        description: "Failed to debug code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (code.trim() && issueDescription.trim()) {
      handleDebug();
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="space-y-6">
        <FrontendDebugInput
          code={code}
          onCodeChange={setCode}
          language={language}
          onLanguageChange={setLanguage}
          issueDescription={issueDescription}
          onIssueDescriptionChange={setIssueDescription}
          onDebug={handleDebug}
          isLoading={isLoading}
          isDark={isDark}
        />
      </div>

      <div className="space-y-6">
        <FrontendDebugOutput
          output={output}
          isLoading={isLoading}
          onRegenerate={handleRegenerate}
          isDark={isDark}
        />
      </div>
    </ToolWrapper>
  );
};

export default FrontendDebugTool;
