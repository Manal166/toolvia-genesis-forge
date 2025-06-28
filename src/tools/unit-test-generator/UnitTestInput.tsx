
import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
  const [exampleCode] = useState({
    javascript: `function calculateTotal(price, tax) {
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }
  return price + (price * tax);
}`,
    python: `def calculate_total(price, tax):
    if price < 0:
        raise ValueError('Price cannot be negative')
    return price + (price * tax)`,
    java: `public double calculateTotal(double price, double tax) {
    if (price < 0) {
        throw new IllegalArgumentException("Price cannot be negative");
    }
    return price + (price * tax);
}`,
    typescript: `function calculateTotal(price: number, tax: number): number {
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }
  return price + (price * tax);
}`
  });

  const handleExampleLoad = () => {
    const example = exampleCode[language as keyof typeof exampleCode] || exampleCode.javascript;
    onCodeChange(example);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5" />
          Code Input
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language">Programming Language</Label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
              <SelectItem value="php">PHP</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="code">Your Code</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExampleLoad}
              className="text-sm"
            >
              Load Example
            </Button>
          </div>
          <Textarea
            id="code"
            placeholder="Paste your function or class code here..."
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
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
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
              Generating Tests...
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Generate Unit Tests
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UnitTestInput;
