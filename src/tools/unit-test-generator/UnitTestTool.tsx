
import { useState } from "react";
import { toast } from "sonner";
import { ToolConfig } from "@/config/tools.config";
import { unitTestService } from "@/services/unitTestService";
import ToolWrapper from "@/components/ToolWrapper";
import UnitTestInput from "./UnitTestInput";
import UnitTestOutput from "./UnitTestOutput";

interface TestCase {
  name: string;
  description: string;
  type: 'positive' | 'negative' | 'edge' | 'boundary';
}

interface UnitTestResult {
  originalCode: string;
  testCode: string;
  framework: string;
  language: string;
  testCases: TestCase[];
  explanation: string;
}

interface UnitTestToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const UnitTestTool = ({ tool, isDark, onToggleTheme }: UnitTestToolProps) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<UnitTestResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateTests = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code to generate tests for");
      return;
    }

    console.log('Starting test generation...', { code: code.substring(0, 50), language });
    setIsGenerating(true);
    
    try {
      const testResult = await unitTestService.generateTests(code, language);
      console.log('Test generation successful:', testResult);
      setResult(testResult);
      toast.success("Unit tests generated successfully!");
    } catch (error) {
      console.error("Test generation error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to generate unit tests. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = async () => {
    if (!result?.testCode) return;
    
    try {
      await navigator.clipboard.writeText(result.testCode);
      setCopied(true);
      toast.success("Test code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleRegenerate = () => {
    if (code.trim()) {
      handleGenerateTests();
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="space-y-6">
        <UnitTestInput
          language={language}
          code={code}
          isGenerating={isGenerating}
          onLanguageChange={setLanguage}
          onCodeChange={setCode}
          onGenerateTests={handleGenerateTests}
        />
      </div>
      
      <div className="space-y-6">
        <UnitTestOutput
          result={result}
          copied={copied}
          onCopyToClipboard={handleCopyToClipboard}
          onRegenerate={handleRegenerate}
        />
      </div>
    </ToolWrapper>
  );
};

export default UnitTestTool;
