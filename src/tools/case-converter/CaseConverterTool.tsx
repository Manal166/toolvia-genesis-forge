
import { useState } from "react";
import { Copy, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ToolWrapper from "@/components/ToolWrapper";
import { ToolComponentProps } from "@/config/toolRoutes.config";
import { useToast } from "@/hooks/use-toast";

const CaseConverterTool = ({ tool, isDark, onToggleTheme }: ToolComponentProps) => {
  const [text, setText] = useState("");
  const [converted, setConverted] = useState("");
  const [activeCase, setActiveCase] = useState("");
  const { toast } = useToast();

  const handleConvert = (type: string) => {
    let result = "";

    switch (type) {
      case "lower":
        result = text.toLowerCase();
        break;
      case "upper":
        result = text.toUpperCase();
        break;
      case "title":
        result = text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
        break;
      case "camel":
        result = text
          .replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
          .replace(/\s/g, "")
          .replace(/^(.)/, (match, group1) => group1.toLowerCase());
        break;
      case "snake":
        result = text.trim().toLowerCase().replace(/\s+/g, "_");
        break;
      default:
        result = text;
    }

    setConverted(result);
    setActiveCase(type);
  };

  const handleCopy = () => {
    if (converted) {
      navigator.clipboard.writeText(converted);
      toast({ 
        title: "Copied!", 
        description: "Converted text copied to clipboard." 
      });
    }
  };

  const caseButtons = [
    { type: "lower", label: "lowercase" },
    { type: "upper", label: "UPPERCASE" },
    { type: "title", label: "Title Case" },
    { type: "camel", label: "camelCase" },
    { type: "snake", label: "snake_case" }
  ];

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      {/* Input Section */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Type className="h-5 w-5 text-blue-400 mr-2" />
          <h2 className="text-lg font-semibold text-white">
            Input Text
          </h2>
        </div>
        
        <Textarea
          placeholder="Enter your text here to convert between different cases..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[120px] mb-6 bg-gray-800 text-white border-gray-600 overflow-auto break-words"
        />

        <div className="flex flex-wrap gap-3 justify-center">
          {caseButtons.map((button) => (
            <Button
              key={button.type}
              onClick={() => handleConvert(button.type)}
              variant={activeCase === button.type ? "default" : "outline"}
              className="bg-gray-700 text-white hover:bg-gray-600 border-gray-600 min-w-[150px] text-sm text-center"
              disabled={!text.trim()}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Output Section */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Copy className="h-5 w-5 text-green-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">
              Converted Text
            </h2>
          </div>
          {converted && (
            <Button onClick={handleCopy} size="sm" className="ml-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          )}
        </div>

        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 min-h-[120px] border-2 border-dashed">
          {converted ? (
            <div className="text-white whitespace-pre-wrap break-words overflow-auto">
              {converted}
            </div>
          ) : (
            <div className="text-gray-400 italic">
              Select a case conversion option above to see the result here...
            </div>
          )}
        </div>

        {converted && (
          <div className="mt-4 p-3 bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-300">
              <strong>Result:</strong> Your text has been converted to {
                caseButtons.find(b => b.type === activeCase)?.label
              } format. Click the copy button to use it elsewhere.
            </p>
          </div>
        )}
      </div>
    </ToolWrapper>
  );
};

export default CaseConverterTool;
