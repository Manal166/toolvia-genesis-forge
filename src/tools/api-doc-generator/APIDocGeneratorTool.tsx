
import { useState } from "react";
import { toast } from "sonner";
import { ToolConfig } from "@/config/tools.config";
import { apiDocService } from "@/services/apiDocService";
import ToolWrapper from "@/components/ToolWrapper";
import APIDocGeneratorInput from "./APIDocGeneratorInput";
import APIDocGeneratorOutput from "./APIDocGeneratorOutput";

interface APIEndpoint {
  method: string;
  path: string;
  description: string;
  parameters?: string[];
  responses?: string[];
}

interface APIDocResult {
  documentation: string;
  endpoints: APIEndpoint[];
  summary: string;
}

interface APIDocGeneratorToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const APIDocGeneratorTool = ({ tool, isDark, onToggleTheme }: APIDocGeneratorToolProps) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<APIDocResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateDoc = async () => {
    if (!code.trim()) {
      toast.error("Please enter some API code to document");
      return;
    }

    setIsGenerating(true);
    try {
      const docResult = await apiDocService.generateDocumentation(code, language);
      setResult(docResult);
      toast.success("API documentation generated successfully!");
    } catch (error) {
      console.error("Documentation generation error:", error);
      toast.error("Failed to generate documentation. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = async () => {
    if (!result?.documentation) return;
    
    try {
      await navigator.clipboard.writeText(result.documentation);
      setCopied(true);
      toast.success("Documentation copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleRegenerate = () => {
    if (code.trim()) {
      handleGenerateDoc();
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="space-y-6">
        <APIDocGeneratorInput
          language={language}
          code={code}
          isGenerating={isGenerating}
          onLanguageChange={setLanguage}
          onCodeChange={setCode}
          onGenerateDoc={handleGenerateDoc}
        />
      </div>
      
      <div className="space-y-6">
        <APIDocGeneratorOutput
          result={result}
          copied={copied}
          onCopyToClipboard={handleCopyToClipboard}
          onRegenerate={handleRegenerate}
        />
      </div>
    </ToolWrapper>
  );
};

export default APIDocGeneratorTool;
