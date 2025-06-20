
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, RefreshCw, FileText, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeRefactorOutputProps {
  originalCode: string;
  refactoredCode: string;
  explanation: string;
  language: string;
  isLoading: boolean;
  onRegenerate?: () => void;
}

const CodeRefactorOutput = ({ 
  originalCode, 
  refactoredCode, 
  explanation, 
  language, 
  isLoading, 
  onRegenerate 
}: CodeRefactorOutputProps) => {
  const [activeTab, setActiveTab] = useState("refactored");
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`
    });
  };

  const downloadCode = (code: string, type: string) => {
    const extension = language === 'javascript' ? 'js' : 
                    language === 'typescript' ? 'ts' : 
                    language === 'python' ? 'py' : 
                    language === 'java' ? 'java' : 
                    language === 'cpp' ? 'cpp' : 'txt';
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type.toLowerCase().replace(' ', '_')}_code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `${type} downloaded successfully`
    });
  };

  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 animate-spin" />
            Refactoring Code...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2 text-blue-600" />
              <p className="text-gray-600 dark:text-gray-300">
                Analyzing and improving your code structure...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!refactoredCode) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Refactored Code
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Code className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-300">
                Your refactored code will appear here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="original">Original Code</TabsTrigger>
            <TabsTrigger value="refactored">Refactored Code</TabsTrigger>
            <TabsTrigger value="explanation">Explanation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="original" className="space-y-4">
            <div className="flex gap-2 mb-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => copyToClipboard(originalCode, "Original code")}
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => downloadCode(originalCode, "Original")}
              >
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
            <Textarea
              value={originalCode}
              readOnly
              className="min-h-[400px] font-mono text-sm"
            />
          </TabsContent>
          
          <TabsContent value="refactored" className="space-y-4">
            <div className="flex gap-2 mb-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => copyToClipboard(refactoredCode, "Refactored code")}
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => downloadCode(refactoredCode, "Refactored")}
              >
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              {onRegenerate && (
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={onRegenerate}
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Regenerate
                </Button>
              )}
            </div>
            <Textarea
              value={refactoredCode}
              readOnly
              className="min-h-[400px] font-mono text-sm"
            />
          </TabsContent>
          
          <TabsContent value="explanation" className="space-y-4">
            <div className="flex gap-2 mb-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => copyToClipboard(explanation, "Explanation")}
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4" />
                <span className="font-medium">Refactoring Changes</span>
              </div>
              <div className="whitespace-pre-wrap text-sm">
                {explanation}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CodeRefactorOutput;
