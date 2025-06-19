
import { CheckCircle, Copy, RefreshCw, TestTube, Regex } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface RegexGeneratorOutputProps {
  generatedRegex: string;
  explanation: string;
  originalDescription: string;
  onRegenerate: () => void;
}

const RegexGeneratorOutput = ({
  generatedRegex,
  explanation,
  originalDescription,
  onRegenerate
}: RegexGeneratorOutputProps) => {
  const [copied, setCopied] = useState(false);
  const [testText, setTestText] = useState("");
  const [testResults, setTestResults] = useState<string[]>([]);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedRegex);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Regex copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the regex manually.",
        variant: "destructive",
      });
    }
  };

  const testRegex = () => {
    if (!generatedRegex || !testText.trim()) {
      toast({
        title: "Missing Input",
        description: "Please provide both regex and test text.",
        variant: "destructive",
      });
      return;
    }

    try {
      const regex = new RegExp(generatedRegex, 'g');
      const matches = testText.match(regex) || [];
      setTestResults(matches);
      
      toast({
        title: "Test Complete",
        description: `Found ${matches.length} match${matches.length !== 1 ? 'es' : ''}.`,
      });
    } catch (error) {
      toast({
        title: "Invalid Regex",
        description: "The generated regex appears to be invalid.",
        variant: "destructive",
      });
      setTestResults([]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          Generated Regex
        </h2>
        
        {generatedRegex && (
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Regenerate</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="flex items-center space-x-2"
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </Button>
          </div>
        )}
      </div>
      
      <div className="p-4">
        {generatedRegex ? (
          <div className="space-y-6">
            {/* Generated Regex */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Regular Expression:
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-green-400">
                  <code>{generatedRegex}</code>
                </pre>
              </div>
            </div>

            {/* Explanation */}
            {explanation && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  How it works:
                </h3>
                <div className="text-blue-800 dark:text-blue-200 text-sm whitespace-pre-line">
                  {explanation}
                </div>
              </div>
            )}

            {/* Regex Tester */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                <TestTube className="h-4 w-4 mr-2" />
                Test Your Regex
              </h3>
              
              <div className="space-y-3">
                <Textarea
                  value={testText}
                  onChange={(e) => setTestText(e.target.value)}
                  placeholder="Paste your text here to test the regex..."
                  className="min-h-[80px] resize-none"
                />
                
                <Button
                  onClick={testRegex}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <TestTube className="h-4 w-4 mr-2" />
                  Test Regex
                </Button>

                {testResults.length > 0 && (
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                      Matches Found ({testResults.length}):
                    </h4>
                    <div className="space-y-1">
                      {testResults.map((match, index) => (
                        <div key={index} className="text-sm font-mono bg-green-100 dark:bg-green-800 px-2 py-1 rounded">
                          "{match}"
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <Regex className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Describe your pattern and click "Generate Regex" to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegexGeneratorOutput;
