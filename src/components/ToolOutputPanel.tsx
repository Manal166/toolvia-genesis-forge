
import { ToolConfig } from "@/config/tools.config";
import CodeOutput from "./CodeOutput";

interface ToolOutputPanelProps {
  tool: ToolConfig;
  generatedCode: string;
  copied: boolean;
  onCopyToClipboard: () => void;
}

const ToolOutputPanel = ({
  tool,
  generatedCode,
  copied,
  onCopyToClipboard
}: ToolOutputPanelProps) => {
  return (
    <div className="space-y-6">
      <CodeOutput
        generatedCode={generatedCode}
        copied={copied}
        onCopyToClipboard={onCopyToClipboard}
      />
    </div>
  );
};

export default ToolOutputPanel;
