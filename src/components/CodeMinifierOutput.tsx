
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Copy, Download, Maximize2, Minimize2, Check } from 'lucide-react';
import { SupportedLanguage, FormatterMode, codeFormatterService } from '@/services/codeFormatterService';

interface CodeMinifierOutputProps {
  code: string;
  language: SupportedLanguage;
  mode: FormatterMode;
  isLoading: boolean;
  error?: string;
  isDark: boolean;
}

const CodeMinifierOutput = ({
  code,
  language,
  mode,
  isLoading,
  error,
  isDark
}: CodeMinifierOutputProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const getLanguageConfig = () => {
    switch (language) {
      case 'html':
        return {
          title: 'HTML',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
        };
      case 'css':
        return {
          title: 'CSS',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
        };
      case 'javascript':
        return {
          title: 'JavaScript',
          badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        };
    }
  };

  const config = getLanguageConfig();
  const modeColor = mode === 'prettify' 
    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    : 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';

  const handleCopy = async () => {
    if (code && !error) {
      await codeFormatterService.copyToClipboard(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (code && !error) {
      codeFormatterService.downloadCode(code, language, mode);
    }
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayCode = error ? `Error: ${error}` : code;
  const placeholder = isLoading ? 'Processing...' : `${mode === 'prettify' ? 'Formatted' : 'Minified'} code will appear here`;

  return (
    <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <FileText className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Output Code
            </CardTitle>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleCopy}
              variant="ghost"
              size="sm"
              disabled={!code || !!error || isLoading}
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            
            <Button
              onClick={handleDownload}
              variant="ghost"
              size="sm"
              disabled={!code || !!error || isLoading}
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Download className="h-4 w-4" />
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

        <div className="flex items-center space-x-3">
          <Badge className={config.badgeColor}>
            {config.title}
          </Badge>
          <Badge className={modeColor}>
            {mode === 'prettify' ? 'Formatted' : 'Minified'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="relative">
          <Textarea
            value={displayCode}
            readOnly
            placeholder={placeholder}
            className={`
              font-mono text-sm resize-none transition-all duration-200
              ${isExpanded ? 'min-h-[400px]' : 'min-h-[200px]'}
              ${error ? 'text-red-500' : ''}
              ${isDark 
                ? 'bg-gray-900 border-gray-600 text-gray-300 placeholder-gray-500' 
                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
              }
            `}
          />
          
          {/* Line numbers indicator */}
          {displayCode && !error && (
            <div className={`absolute top-3 left-3 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} pointer-events-none`}>
              {displayCode.split('\n').map((_, index) => (
                <div key={index} style={{ lineHeight: '1.5' }}>
                  {index + 1}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Character and line count */}
        <div className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {error ? 'Error occurred during processing' : `${displayCode.length} characters, ${displayCode.split('\n').length} lines`}
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeMinifierOutput;
