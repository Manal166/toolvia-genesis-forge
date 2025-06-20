
import { useState } from 'react';
import { ToolConfig } from '@/config/tools.config';
import ToolWrapper from '@/components/ToolWrapper';
import JsonYamlCsvInput from './JsonYamlCsvInput';
import JsonYamlCsvOutput from './JsonYamlCsvOutput';
import { DataFormat, jsonYamlCsvService } from '@/services/jsonYamlCsvService';
import { toast } from '@/hooks/use-toast';

interface JsonYamlCsvToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const JsonYamlCsvTool = ({ tool, isDark, onToggleTheme }: JsonYamlCsvToolProps) => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [lastConversion, setLastConversion] = useState<{
    input: string;
    fromFormat: DataFormat;
    toFormat: DataFormat;
  } | null>(null);

  const handleConvert = async (input: string, fromFormat: DataFormat, toFormat: DataFormat) => {
    setIsLoading(true);
    setError(undefined);
    setLastConversion({ input, fromFormat, toFormat });
    
    try {
      // Simulate a brief loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const conversionResult = jsonYamlCsvService.convert(input, fromFormat, toFormat);
      
      if (conversionResult.success && conversionResult.data) {
        setResult(conversionResult.data);
        setError(undefined);
        toast({
          title: "Conversion successful!",
          description: `Successfully converted ${fromFormat.toUpperCase()} to ${toFormat.toUpperCase()}`,
        });
      } else {
        setError(conversionResult.error || 'Conversion failed');
        setResult('');
        toast({
          title: "Conversion failed",
          description: conversionResult.error || 'An unknown error occurred',
          variant: "destructive",
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      setResult('');
      toast({
        title: "Conversion failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (lastConversion) {
      handleConvert(lastConversion.input, lastConversion.fromFormat, lastConversion.toFormat);
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="space-y-6">
        <JsonYamlCsvInput
          onConvert={handleConvert}
          isLoading={isLoading}
          isDark={isDark}
        />
      </div>
      
      <div className="space-y-6">
        <JsonYamlCsvOutput
          result={result}
          isLoading={isLoading}
          error={error}
          fromFormat={lastConversion?.fromFormat}
          toFormat={lastConversion?.toFormat}
          onRegenerate={handleRegenerate}
          isDark={isDark}
        />
      </div>
    </ToolWrapper>
  );
};

export default JsonYamlCsvTool;
