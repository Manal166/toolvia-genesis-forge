
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TestTube, Loader2 } from "lucide-react";

interface UnitTestInputProps {
  language: string;
  code: string;
  isGenerating: boolean;
  onLanguageChange: (language: string) => void;
  onCodeChange: (code: string) => void;
  onGenerateTests: () => void;
}

const UnitTestInput = ({
  language,
  code,
  isGenerating,
  onLanguageChange,
  onCodeChange,
  onGenerateTests
}: UnitTestInputProps) => {
  const languages = [
    { value: "javascript", label: "JavaScript (Jest)" },
    { value: "python", label: "Python (PyTest)" },
    { value: "java", label: "Java (JUnit)" },
    { value: "typescript", label: "TypeScript (Jest)" },
    { value: "cpp", label: "C++ (Google Test)" },
    { value: "csharp", label: "C# (NUnit)" },
    { value: "php", label: "PHP (PHPUnit)" }
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TestTube className="h-5 w-5" />
          Generate Unit Tests
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language">Testing Framework</Label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select language and framework" />
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
          <Label htmlFor="code">Source Code</Label>
          <Textarea
            id="code"
            placeholder="Paste your function or class code here..."
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
            style={{ fontSize: '14px', lineHeight: '1.4' }}
          />
        </div>

        <Button 
          onClick={onGenerateTests} 
          disabled={!code.trim() || isGenerating}
          className="w-full"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Tests...
            </>
          ) : (
            <>
              <TestTube className="mr-2 h-4 w-4" />
              Generate Unit Tests
            </>
          )}
        </Button>

        <div className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          <p className="font-medium mb-2">Tips for better results:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Include function signatures and documentation</li>
            <li>Provide complete, compilable code snippets</li>
            <li>Specify expected behavior for edge cases</li>
            <li>Include any dependencies or imports needed</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitTestInput;
