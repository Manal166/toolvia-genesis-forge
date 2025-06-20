
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Check, Maximize2, Minimize2 } from 'lucide-react';

interface CodeEditorPanelProps {
  language: 'html' | 'css' | 'javascript';
  value: string;
  onChange: (value: string) => void;
  isDark: boolean;
}

const CodeEditorPanel = ({ language, value, onChange, isDark }: CodeEditorPanelProps) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getLanguageConfig = () => {
    switch (language) {
      case 'html':
        return {
          title: 'HTML',
          placeholder: '<div>\n  <h1>Hello World!</h1>\n</div>',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
        };
      case 'css':
        return {
          title: 'CSS',
          placeholder: 'body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 20px;\n}',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
        };
      case 'javascript':
        return {
          title: 'JavaScript',
          placeholder: 'console.log("Hello, World!");\n\n// Your JavaScript code here',
          badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        };
    }
  };

  const config = getLanguageConfig();

  const handleCopy = async () => {
    if (value) {
      await navigator.clipboard.writeText(value);
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
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {config.title}
            </CardTitle>
            <Badge className={config.badgeColor}>
              {language.toUpperCase()}
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleCopy}
              variant="ghost"
              size="sm"
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="relative">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={config.placeholder}
            className={`
              font-mono text-sm resize-none transition-all duration-200
              ${isExpanded ? 'min-h-[400px]' : 'min-h-[150px]'}
              ${isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-blue-400 focus:border-blue-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500'
              }
            `}
          />
          
          {/* Line numbers indicator */}
          <div className={`absolute top-3 left-3 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} pointer-events-none`}>
            {value.split('\n').map((_, index) => (
              <div key={index} style={{ lineHeight: '1.5' }}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        
        {/* Character count */}
        <div className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {value.length} characters, {value.split('\n').length} lines
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeEditorPanel;
