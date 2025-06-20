
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, RefreshCw, TestTube, CheckCircle, AlertCircle, Zap } from "lucide-react";

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

interface UnitTestOutputProps {
  result: UnitTestResult | null;
  copied: boolean;
  onCopyToClipboard: () => void;
  onRegenerate: () => void;
}

const UnitTestOutput = ({
  result,
  copied,
  onCopyToClipboard,
  onRegenerate
}: UnitTestOutputProps) => {
  const handleDownload = () => {
    if (!result) return;
    
    const fileName = `tests.${result.language === 'python' ? 'py' : result.language === 'java' ? 'java' : 'js'}`;
    const blob = new Blob([result.testCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getTestTypeIcon = (type: TestCase['type']) => {
    switch (type) {
      case 'positive':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'negative':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'edge':
        return <Zap className="h-4 w-4 text-yellow-500" />;
      case 'boundary':
        return <TestTube className="h-4 w-4 text-blue-500" />;
      default:
        return <TestTube className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTestTypeBadgeColor = (type: TestCase['type']) => {
    switch (type) {
      case 'positive':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'negative':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'edge':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'boundary':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  if (!result) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-5 w-5" />
            Generated Tests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <TestTube className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Generated unit tests will appear here</p>
            <p className="text-sm mt-2">Enter your code and click "Generate Unit Tests" to begin</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-5 w-5" />
            Generated Tests
            <Badge variant="outline">{result.framework}</Badge>
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCopyToClipboard}
              className="flex items-center gap-1"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-1"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className="flex items-center gap-1"
            >
              <RefreshCw className="h-4 w-4" />
              Regenerate
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tests" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tests">Test Code</TabsTrigger>
            <TabsTrigger value="cases">Test Cases</TabsTrigger>
            <TabsTrigger value="explanation">Explanation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tests" className="mt-4">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                  <code>{result.testCode}</code>
                </pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cases" className="mt-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-sm">Test Cases Coverage:</h3>
              <div className="grid gap-3">
                {result.testCases.map((testCase, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    {getTestTypeIcon(testCase.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm truncate">{testCase.name}</h4>
                        <Badge className={`text-xs ${getTestTypeBadgeColor(testCase.type)}`}>
                          {testCase.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {testCase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="explanation" className="mt-4">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-sm">
                    {result.explanation}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UnitTestOutput;
