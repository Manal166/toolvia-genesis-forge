
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Code, Play } from "lucide-react";

interface FrontendDebugInputProps {
  code: string;
  onCodeChange: (value: string) => void;
  language: string;
  onLanguageChange: (value: string) => void;
  issueDescription: string;
  onIssueDescriptionChange: (value: string) => void;
  onDebug: () => void;
  isLoading: boolean;
  isDark: boolean;
}

const FrontendDebugInput = ({
  code,
  onCodeChange,
  language,
  onLanguageChange,
  issueDescription,
  onIssueDescriptionChange,
  onDebug,
  isLoading,
  isDark
}: FrontendDebugInputProps) => {
  const loadExample = () => {
    const examples = {
      html: `<!DOCTYPE html>
<html>
<head>
    <title>Broken Layout</title>
</head>
<body>
    <div class="container">
        <h1>Welcome</h1>
        <p>This text should be centered but it's not working.</p>
        <button onclick="showAlert()">Click me</button>
    </div>
</body>
</html>`,
      css: `.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: darkblue;
}`,
      javascript: `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const items = [
  { name: "Apple", price: 1.50 },
  { name: "Banana", price: 0.75 },
  { name: "Orange", price: 2.00 }
];

console.log("Total:", calculateTotal(items));`
    };

    const exampleIssues = {
      html: "The text is not centering and the button click doesn't work",
      css: "The button styles are not being applied correctly",
      javascript: "Getting an error when trying to calculate the total price"
    };

    onCodeChange(examples[language as keyof typeof examples]);
    onIssueDescriptionChange(exampleIssues[language as keyof typeof exampleIssues]);
  };

  return (
    <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
      <CardHeader>
        <CardTitle className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <Code className="h-5 w-5" />
          Debug Frontend Code
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className={isDark ? 'text-gray-200' : 'text-gray-700'}>
            Programming Language
          </Label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className={isDark ? 'text-gray-200' : 'text-gray-700'}>
            Issue Description
          </Label>
          <Textarea
            placeholder="Describe what's wrong with your code (e.g., 'Button is not clickable', 'Layout is broken on mobile', 'Getting console errors')"
            value={issueDescription}
            onChange={(e) => onIssueDescriptionChange(e.target.value)}
            className="min-h-[80px] text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700"
          />
        </div>

        <div>
          <Label className={isDark ? 'text-gray-200' : 'text-gray-700'}>
            Your Code
          </Label>
          <Textarea
            placeholder={`Paste your ${language.toUpperCase()} code here...`}
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="min-h-[300px] font-mono text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700"
          />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={onDebug}
            disabled={isLoading || !code.trim() || !issueDescription.trim()}
            className="flex-1"
          >
            <Play className="h-4 w-4 mr-2" />
            {isLoading ? 'Debugging...' : 'Debug Code'}
          </Button>
          
          <Button
            variant="outline"
            onClick={loadExample}
            className={isDark ? 'border-gray-600 text-gray-200 hover:bg-gray-700' : ''}
          >
            Load Example
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FrontendDebugInput;
