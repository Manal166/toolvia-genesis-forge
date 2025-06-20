
import { useState, useEffect } from 'react';
import { ToolConfig } from '@/config/tools.config';
import ToolWrapper from '@/components/ToolWrapper';
import CodeMinifierInput from '@/components/CodeMinifierInput';
import CodeMinifierOutput from '@/components/CodeMinifierOutput';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightLeft, Sparkles, Minimize } from 'lucide-react';
import { SupportedLanguage, FormatterMode, codeFormatterService, FormatResult } from '@/services/codeFormatterService';
import { toast } from '@/hooks/use-toast';

interface CodeMinifierToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const CodeMinifierTool = ({ tool, isDark, onToggleTheme }: CodeMinifierToolProps) => {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [language, setLanguage] = useState<SupportedLanguage>('html');
  const [mode, setMode] = useState<FormatterMode>('prettify');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  // Auto-format when input changes (with debounce)
  useEffect(() => {
    if (!inputCode.trim()) {
      setOutputCode('');
      setError(undefined);
      return;
    }

    const timer = setTimeout(async () => {
      await handleFormat();
    }, 500);

    return () => clearTimeout(timer);
  }, [inputCode, language, mode]);

  const handleFormat = async () => {
    if (!inputCode.trim()) {
      setOutputCode('');
      setError(undefined);
      return;
    }

    setIsLoading(true);
    setError(undefined);

    try {
      const result: FormatResult = await codeFormatterService.formatCode(inputCode, language, mode);
      
      if (result.success) {
        setOutputCode(result.code);
        setError(undefined);
      } else {
        setError(result.error);
        setOutputCode('');
        toast({
          title: "Formatting failed",
          description: result.error || "An error occurred while formatting the code",
          variant: "destructive",
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      setOutputCode('');
      toast({
        title: "Formatting failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadExample = () => {
    const exampleCode = codeFormatterService.getExampleCode(language);
    setInputCode(exampleCode);
  };

  const handleToggleMode = () => {
    const newMode = mode === 'prettify' ? 'minify' : 'prettify';
    setMode(newMode);
  };

  const handleLanguageChange = (newLanguage: SupportedLanguage) => {
    setLanguage(newLanguage);
    // Clear input when language changes
    setInputCode('');
    setOutputCode('');
    setError(undefined);
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="col-span-full">
        {/* Control Panel */}
        <Card className={`mb-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleToggleMode}
                  variant={mode === 'prettify' ? 'default' : 'secondary'}
                  className="min-w-[120px]"
                >
                  {mode === 'prettify' ? (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Prettify
                    </>
                  ) : (
                    <>
                      <Minimize className="h-4 w-4 mr-2" />
                      Minify
                    </>
                  )}
                </Button>
                
                <ArrowRightLeft className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                
                <div className={`px-4 py-2 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {mode === 'prettify' ? 'Format & Beautify' : 'Compress & Minify'}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Editor */}
          <CodeMinifierInput
            code={inputCode}
            language={language}
            onCodeChange={setInputCode}
            onLanguageChange={handleLanguageChange}
            onLoadExample={handleLoadExample}
            isDark={isDark}
          />

          {/* Output Editor */}
          <CodeMinifierOutput
            code={outputCode}
            language={language}
            mode={mode}
            isLoading={isLoading}
            error={error}
            isDark={isDark}
          />
        </div>
      </div>
    </ToolWrapper>
  );
};

export default CodeMinifierTool;
