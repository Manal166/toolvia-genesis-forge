
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, FileText } from "lucide-react";
import { flowchartService } from "@/services/flowchartService";

interface FlowchartInputProps {
  language: string;
  code: string;
  isGenerating: boolean;
  onLanguageChange: (language: string) => void;
  onCodeChange: (code: string) => void;
  onGenerateFlowchart: () => void;
}

const FlowchartInput = ({
  language,
  code,
  isGenerating,
  onLanguageChange,
  onCodeChange,
  onGenerateFlowchart
}: FlowchartInputProps) => {
  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "typescript", label: "TypeScript" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "php", label: "PHP" }
  ];

  const handleLoadExample = () => {
    const exampleCode = flowchartService.getExampleCode(language);
    onCodeChange(exampleCode);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="h-5 w-5" />
          Generate Flowchart
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language">Programming Language</Label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select programming language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="code">Source Code</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLoadExample}
              className="flex items-center gap-1"
            >
              <FileText className="h-3 w-3" />
              Load Example
            </Button>
          </div>
          <Textarea
            id="code"
            placeholder="Paste your code here to generate a flowchart..."
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
            style={{ fontSize: '14px', lineHeight: '1.4' }}
          />
        </div>

        <Button 
          onClick={onGenerateFlowchart} 
          disabled={!code.trim() || isGenerating}
          className="w-full"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Flowchart...
            </>
          ) : (
            <>
              <ArrowRight className="mr-2 h-4 w-4" />
              Generate Flowchart
            </>
          )}
        </Button>

        <div className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          <p className="font-medium mb-2">Tips for better flowcharts:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Include complete functions or code blocks</li>
            <li>Add comments to clarify complex logic</li>
            <li>Focus on algorithms with clear control flow</li>
            <li>Include conditional statements and loops</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlowchartInput;
