
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
    { type: "lower", label: "lowercase", description: "Convert to all lowercase letters" },
    { type: "upper", label: "UPPERCASE", description: "Convert to all uppercase letters" },
    { type: "title", label: "Title Case", description: "Capitalize the first letter of each word" },
    { type: "camel", label: "camelCase", description: "Convert to camelCase format" },
    { type: "snake", label: "snake_case", description: "Convert to snake_case format" }
  ];

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Type className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Input Text
          </h2>
        </div>
        
        <Textarea
          placeholder="Enter your text here to convert between different cases..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[120px] mb-4"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {caseButtons.map((button) => (
            <Button
              key={button.type}
              onClick={() => handleConvert(button.type)}
              variant={activeCase === button.type ? "default" : "outline"}
              className="justify-start h-auto p-3"
              disabled={!text.trim()}
            >
              <div className="text-left">
                <div className="font-medium">{button.label}</div>
                <div className="text-xs opacity-70 mt-1">{button.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Output Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Copy className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Converted Text
            </h2>
          </div>
          {converted && (
            <Button onClick={handleCopy} size="sm" className="ml-2">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          )}
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 min-h-[120px] border-2 border-dashed border-gray-200 dark:border-gray-600">
          {converted ? (
            <div className="text-gray-900 dark:text-white whitespace-pre-wrap break-words">
              {converted}
            </div>
          ) : (
            <div className="text-gray-500 dark:text-gray-400 italic">
              Select a case conversion option above to see the result here...
            </div>
          )}
        </div>

        {converted && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
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
