
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Loader2 } from "lucide-react";

interface RegexExplainerInputProps {
  onExplain: (regex: string) => void;
  isLoading: boolean;
}

const RegexExplainerInput = ({ onExplain, isLoading }: RegexExplainerInputProps) => {
  const [regex, setRegex] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (regex.trim()) {
      onExplain(regex.trim());
    }
  };

  const exampleRegexes = [
    {
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      description: "Email validation"
    },
    {
      pattern: "\\d{3}-\\d{3}-\\d{4}",
      description: "US phone number (XXX-XXX-XXXX)"
    },
    {
      pattern: "https?://[^\\s]+",
      description: "HTTP/HTTPS URLs"
    },
    {
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}$",
      description: "Strong password (8+ chars, upper, lower, digit)"
    }
  ];

  const loadExample = (pattern: string) => {
    setRegex(pattern);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Regex Input
        </CardTitle>
        <CardDescription>
          Paste your regular expression pattern to get a detailed explanation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="regex">Regular Expression Pattern</Label>
            <Input
              id="regex"
              value={regex}
              onChange={(e) => setRegex(e.target.value)}
              placeholder="e.g., ^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              className="font-mono text-sm"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={!regex.trim() || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Explaining Pattern...
              </>
            ) : (
              "Explain Regex"
            )}
          </Button>
        </form>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Try these examples:</Label>
          <div className="grid gap-2">
            {exampleRegexes.map((example, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => loadExample(example.pattern)}
                className="justify-start text-left h-auto p-3 flex-col items-start"
                disabled={isLoading}
              >
                <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-1">
                  {example.pattern}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {example.description}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegexExplainerInput;
