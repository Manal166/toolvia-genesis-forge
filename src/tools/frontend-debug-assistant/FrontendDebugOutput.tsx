
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, RefreshCw, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FrontendDebugOutputProps {
  output: string;
  isLoading: boolean;
  onRegenerate: () => void;
  isDark: boolean;
}

const FrontendDebugOutput = ({
  output,
  isLoading,
  onRegenerate,
  isDark
}: FrontendDebugOutputProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Code has been copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try selecting and copying the text manually",
        variant: "destructive",
      });
    }
  };

  const downloadCode = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
          <p className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            AI is analyzing and fixing your code...
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!output) {
    return (
      <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className={`text-6xl mb-4 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>🐛</div>
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Debug results will appear here
          </p>
        </CardContent>
      </Card>
    );
  }

  const [fixedCode, explanation] = output.split('---EXPLANATION---').map(part => part.trim());

  return (
    <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <CheckCircle className="h-5 w-5 text-green-500" />
            Debug Results
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(fixedCode || output)}
              className={isDark ? 'border-gray-600 text-gray-200 hover:bg-gray-700' : ''}
            >
              {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => downloadCode(fixedCode || output, 'fixed-code.txt')}
              className={isDark ? 'border-gray-600 text-gray-200 hover:bg-gray-700' : ''}
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className={isDark ? 'border-gray-600 text-gray-200 hover:bg-gray-700' : ''}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="fixed-code" className="w-full">
          <TabsList className={`grid w-full grid-cols-2 ${isDark ? 'bg-gray-700' : ''}`}>
            <TabsTrigger 
              value="fixed-code"
              className={isDark ? 'data-[state=active]:bg-gray-600 data-[state=active]:text-white' : ''}
            >
              Fixed Code
            </TabsTrigger>
            <TabsTrigger 
              value="explanation"
              className={isDark ? 'data-[state=active]:bg-gray-600 data-[state=active]:text-white' : ''}
            >
              Explanation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="fixed-code" className="mt-4">
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <pre className={`text-sm overflow-x-auto ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                <code>{fixedCode || output}</code>
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="explanation" className="mt-4">
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className={`prose prose-sm max-w-none ${isDark ? 'prose-invert' : ''}`}>
                <div className={`whitespace-pre-wrap ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {explanation || 'No explanation provided'}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FrontendDebugOutput;
