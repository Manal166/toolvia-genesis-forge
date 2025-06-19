
import { useState } from "react";
import { toast } from "sonner";
import { ToolConfig } from "@/config/tools.config";
import { codeOptimizerService } from "@/services/codeOptimizerService";
import ToolWrapper from "@/components/ToolWrapper";
import CodeOptimizerInput from "./CodeOptimizerInput";
import CodeOptimizerOutput from "./CodeOptimizerOutput";

interface OptimizationResult {
  originalCode: string;
  optimizedCode: string;
  explanation: string;
  improvements: string[];
}

interface CodeOptimizerToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const CodeOptimizerTool = ({ tool, isDark, onToggleTheme }: CodeOptimizerToolProps) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOptimizeCode = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code to optimize");
      return;
    }

    setIsOptimizing(true);
    try {
      const optimizationResult = await codeOptimizerService.optimizeCode(code, language);
      setResult(optimizationResult);
      toast.success("Code optimized successfully!");
    } catch (error) {
      console.error("Optimization error:", error);
      toast.error("Failed to optimize code. Please try again.");
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleCopyToClipboard = async () => {
    if (!result?.optimizedCode) return;
    
    try {
      await navigator.clipboard.writeText(result.optimizedCode);
      setCopied(true);
      toast.success("Optimized code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleRegenerate = () => {
    if (code.trim()) {
      handleOptimizeCode();
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="space-y-6">
        <CodeOptimizerInput
          language={language}
          code={code}
          isOptimizing={isOptimizing}
          onLanguageChange={setLanguage}
          onCodeChange={setCode}
          onOptimizeCode={handleOptimizeCode}
        />
      </div>
      
      <div className="space-y-6">
        <CodeOptimizerOutput
          result={result}
          copied={copied}
          onCopyToClipboard={handleCopyToClipboard}
          onRegenerate={handleRegenerate}
        />
      </div>
    </ToolWrapper>
  );
};

export default CodeOptimizerTool;
