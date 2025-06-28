
import { useState } from "react";
import { Copy, RotateCcw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  if (!result) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Generated Tests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your generated unit tests will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getTestTypeColor = (type: string) => {
    switch (type) {
      case 'positive': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'negative': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'edge': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'boundary': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Generated Tests ({result.framework})
          </div>
          <div className="flex gap-2">
            <Button
              onClick={onRegenerate}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Regenerate
            </Button>
            <Button
              onClick={onCopyToClipboard}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy Tests'}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="tests" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tests">Test Code</TabsTrigger>
            <TabsTrigger value="cases">Test Cases</TabsTrigger>
            <TabsTrigger value="explanation">Explanation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tests" className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4 max-h-96 overflow-auto">
              <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">
                {result.testCode}
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="cases" className="space-y-4">
            <div className="space-y-3">
              {result.testCases.map((testCase, index) => (
                <div key={index} className="p-3 border rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{testCase.name}</h4>
                    <Badge className={getTestTypeColor(testCase.type)}>
                      {testCase.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testCase.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="explanation" className="space-y-4">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm whitespace-pre-wrap">
                  {result.explanation}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UnitTestOutput;
