
import { ToolConfig } from "@/config/tools.config";
import CodeConfiguration from "./CodeConfiguration";
import ExamplePrompts from "./ExamplePrompts";

interface ToolInputPanelProps {
  tool: ToolConfig;
  language: string;
  description: string;
  isGenerating: boolean;
  onLanguageChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onGenerateCode: () => void;
}

const ToolInputPanel = ({
  tool,
  language,
  description,
  isGenerating,
  onLanguageChange,
  onDescriptionChange,
  onGenerateCode
}: ToolInputPanelProps) => {
  return (
    <div className="space-y-6">
      <CodeConfiguration
        language={language}
        description={description}
        isGenerating={isGenerating}
        onLanguageChange={onLanguageChange}
        onDescriptionChange={onDescriptionChange}
        onGenerateCode={onGenerateCode}
      />

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Examples</h3>
        <ExamplePrompts />
      </div>
    </div>
  );
};

export default ToolInputPanel;
