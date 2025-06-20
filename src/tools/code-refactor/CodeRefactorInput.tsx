
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, WandSparkles } from "lucide-react";
import { codeRefactorService } from "@/services/codeRefactorService";

interface CodeRefactorInputProps {
  onRefactor: (code: string, language: string) => void;
  isLoading: boolean;
}

const CodeRefactorInput = ({ onRefactor, isLoading }: CodeRefactorInputProps) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onRefactor(code, language);
    }
  };

  const loadExample = () => {
    const exampleCode = codeRefactorService.getExampleCode(language);
    setCode(exampleCode);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          Code Input
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="language" className="block text-sm font-medium mb-2">
              Programming Language
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {codeRefactorService.getSupportedLanguages().map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="code" className="block text-sm font-medium mb-2">
              Code to Refactor
            </label>
            <Textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here to improve its structure and readability..."
              className="min-h-[300px] font-mono text-sm"
            />
          </div>

          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={!code.trim() || isLoading}
              className="flex items-center gap-2"
            >
              <WandSparkles className="h-4 w-4" />
              {isLoading ? 'Refactoring...' : 'Refactor Code'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={loadExample}
              disabled={isLoading}
            >
              Load Example
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CodeRefactorInput;
