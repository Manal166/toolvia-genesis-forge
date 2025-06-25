
import { useState } from "react";
import { Copy, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ToolWrapper from "@/components/ToolWrapper";
import { ToolComponentProps } from "@/config/toolRoutes.config";
import { useToast } from "@/hooks/use-toast";

const TextCompareTool = ({ tool, isDark, onToggleTheme }: ToolComponentProps) => {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [differences, setDifferences] = useState<{ a: string; b: string; diff: boolean }[]>([]);
  const { toast } = useToast();

  const compareTexts = () => {
    const linesA = textA.split("\n");
    const linesB = textB.split("\n");
    const maxLength = Math.max(linesA.length, linesB.length);

    const result = [];

    for (let i = 0; i < maxLength; i++) {
      const lineA = linesA[i] || "";
      const lineB = linesB[i] || "";
      result.push({ a: lineA, b: lineB, diff: lineA !== lineB });
    }

    setDifferences(result);
    toast({
      title: "Comparison Complete",
      description: `Found ${result.filter(r => r.diff).length} differences between the texts.`
    });
  };

  const clear = () => {
    setTextA("");
    setTextB("");
    setDifferences([]);
    toast({
      title: "Cleared",
      description: "All text inputs and comparisons have been cleared."
    });
  };

  const copyComparison = () => {
    const comparisonText = differences.map((line, index) => 
      `Line ${index + 1}:\nText A: ${line.a || '[empty]'}\nText B: ${line.b || '[empty]'}\nDifferent: ${line.diff ? 'Yes' : 'No'}\n`
    ).join('\n');
    
    navigator.clipboard.writeText(comparisonText);
    toast({
      title: "Copied!",
      description: "Comparison results copied to clipboard."
    });
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      {/* Input Section */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <FileText className="h-5 w-5 text-blue-400 mr-2" />
          <h2 className="text-lg font-semibold text-white">
            Text Inputs
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Text A</label>
            <Textarea
              placeholder="Enter first text..."
              value={textA}
              onChange={(e) => setTextA(e.target.value)}
              className="min-h-[200px] bg-gray-800 text-white border-gray-600 resize-y"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Text B</label>
            <Textarea
              placeholder="Enter second text..."
              value={textB}
              onChange={(e) => setTextB(e.target.value)}
              className="min-h-[200px] bg-gray-800 text-white border-gray-600 resize-y"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            onClick={compareTexts}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={!textA.trim() && !textB.trim()}
          >
            Compare Texts
          </Button>
          <Button
            onClick={clear}
            variant="outline"
            className="bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
          >
            Clear All
          </Button>
        </div>
      </div>

      {/* Output Section */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Copy className="h-5 w-5 text-green-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">
              Comparison Results
            </h2>
          </div>
          {differences.length > 0 && (
            <Button onClick={copyComparison} size="sm" className="ml-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Copy className="h-4 w-4 mr-2" />
              Copy Results
            </Button>
          )}
        </div>

        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 min-h-[200px] border-2 border-dashed overflow-auto">
          {differences.length > 0 ? (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4 mb-4 font-semibold text-gray-300 border-b border-gray-600 pb-2">
                <div className="text-center">Text A</div>
                <div className="text-center">Text B</div>
              </div>
              {differences.map((line, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b border-gray-700 last:border-b-0">
                  <div className={`p-2 rounded text-sm break-words ${
                    line.diff ? "bg-red-900/40 border-l-4 border-red-500" : ""
                  }`}>
                    {line.a || <span className="text-gray-500 italic">[empty line]</span>}
                  </div>
                  <div className={`p-2 rounded text-sm break-words ${
                    line.diff ? "bg-green-900/40 border-l-4 border-green-500" : ""
                  }`}>
                    {line.b || <span className="text-gray-500 italic">[empty line]</span>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400 italic text-center py-8">
              Enter text in both inputs and click "Compare Texts" to see the differences highlighted here...
            </div>
          )}
        </div>

        {differences.length > 0 && (
          <div className="mt-4 p-3 bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-300">
              <strong>Results:</strong> Found {differences.filter(r => r.diff).length} differences out of {differences.length} lines compared. 
              Differences are highlighted in red (Text A) and green (Text B).
            </p>
          </div>
        )}
      </div>
    </ToolWrapper>
  );
};

export default TextCompareTool;
