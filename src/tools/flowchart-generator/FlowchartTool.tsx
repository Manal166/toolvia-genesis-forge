
import { useState } from "react";
import { toast } from "sonner";
import { ToolConfig } from "@/config/tools.config";
import { flowchartService } from "@/services/flowchartService";
import ToolWrapper from "@/components/ToolWrapper";
import FlowchartInput from "./FlowchartInput";
import FlowchartOutput from "./FlowchartOutput";

interface FlowchartResult {
  originalCode: string;
  mermaidCode: string;
  language: string;
  explanation: string;
}

interface FlowchartToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const FlowchartTool = ({ tool, isDark, onToggleTheme }: FlowchartToolProps) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<FlowchartResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateFlowchart = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code to generate a flowchart");
      return;
    }

    setIsGenerating(true);
    try {
      const flowchartResult = await flowchartService.generateFlowchart(code, language);
      setResult(flowchartResult);
      toast.success("Flowchart generated successfully!");
    } catch (error) {
      console.error("Flowchart generation error:", error);
      toast.error("Failed to generate flowchart. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = async () => {
    if (!result?.mermaidCode) return;
    
    try {
      await navigator.clipboard.writeText(result.mermaidCode);
      setCopied(true);
      toast.success("Mermaid code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleRegenerate = () => {
    if (code.trim()) {
      handleGenerateFlowchart();
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="space-y-6">
        <FlowchartInput
          language={language}
          code={code}
          isGenerating={isGenerating}
          onLanguageChange={setLanguage}
          onCodeChange={setCode}
          onGenerateFlowchart={handleGenerateFlowchart}
        />
      </div>
      
      <div className="space-y-6">
        <FlowchartOutput
          result={result}
          copied={copied}
          onCopyToClipboard={handleCopyToClipboard}
          onRegenerate={handleRegenerate}
        />
      </div>
    </ToolWrapper>
  );
};

export default FlowchartTool;
