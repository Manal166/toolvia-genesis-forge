
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { FileText, Copy, Download, Maximize2, Minimize2 } from 'lucide-react';
import { SupportedLanguage } from '@/services/codeFormatterService';

interface CodeMinifierInputProps {
  code: string;
  language: SupportedLanguage;
  onCodeChange: (code: string) => void;
  onLanguageChange: (language: SupportedLanguage) => void;
  onLoadExample: () => void;
  isDark: boolean;
}

const CodeMinifierInput = ({
  code,
  language,
  onCodeChange,
  onLanguageChange,
  onLoadExample,
  isDark
}: CodeMinifierInputProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const getLanguageConfig = () => {
    switch (language) {
      case 'html':
        return {
          title: 'HTML',
          placeholder: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Example</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
        };
      case 'css':
        return {
          title: 'CSS',
          placeholder: 'body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 20px;\n  background: #f5f5f5;\n}',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
        };
      case 'javascript':
        return {
          title: 'JavaScript',
          placeholder: 'function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("World");',
          badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        };
    }
  };

  const config = getLanguageConfig();

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <FileText className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Input Code
            </CardTitle>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleCopy}
              variant="ghost"
              size="sm"
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Copy className="h-4 w-4" />
            </Button>
            
            <Button
              onClick={handleToggleExpand}
              variant="ghost"
              size="sm"
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className={`w-32 ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
              </SelectContent>
            </Select>
            
            <Badge className={config.badgeColor}>
              {config.title}
            </Badge>
          </div>

          <Button
            onClick={onLoadExample}
            variant="outline"
            size="sm"
            className={`${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300'}`}
          >
            Load Example
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="relative">
          <Textarea
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            placeholder={config.placeholder}
            className={`
              font-mono text-sm resize-none transition-all duration-200
              ${isExpanded ? 'min-h-[400px]' : 'min-h-[200px]'}
              ${isDark 
                ? 'bg-gray-900 border-gray-600 text-gray-300 placeholder-gray-500' 
                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
              }
            `}
          />
          
          {/* Line numbers indicator */}
          <div className={`absolute top-3 left-3 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} pointer-events-none`}>
            {code.split('\n').map((_, index) => (
              <div key={index} style={{ lineHeight: '1.5' }}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        
        {/* Character and line count */}
        <div className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {code.length} characters, {code.split('\n').length} lines
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeMinifierInput;
