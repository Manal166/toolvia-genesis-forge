
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RefreshCw, FileText } from 'lucide-react';
import { DataFormat, jsonYamlCsvService } from '@/services/jsonYamlCsvService';

interface JsonYamlCsvInputProps {
  onConvert: (input: string, fromFormat: DataFormat, toFormat: DataFormat) => void;
  isLoading: boolean;
  isDark: boolean;
}

const JsonYamlCsvInput = ({ onConvert, isLoading, isDark }: JsonYamlCsvInputProps) => {
  const [input, setInput] = useState('');
  const [fromFormat, setFromFormat] = useState<DataFormat>('json');
  const [toFormat, setToFormat] = useState<DataFormat>('yaml');
  const [detectedFormat, setDetectedFormat] = useState<DataFormat | 'unknown'>('unknown');

  const handleInputChange = (value: string) => {
    setInput(value);
    const detected = jsonYamlCsvService.detectFormat(value);
    setDetectedFormat(detected);
    
    // Auto-set from format if detected
    if (detected !== 'unknown') {
      setFromFormat(detected);
    }
  };

  const handleConvert = () => {
    if (!input.trim()) return;
    onConvert(input, fromFormat, toFormat);
  };

  const loadExample = () => {
    const example = jsonYamlCsvService.getExampleData(fromFormat);
    setInput(example);
    setDetectedFormat(fromFormat);
  };

  const formatOptions = [
    { value: 'json', label: 'JSON' },
    { value: 'yaml', label: 'YAML' },
    { value: 'csv', label: 'CSV' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Input Data
        </h2>
      </div>

      {/* Format Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="from-format" className="text-white">From Format</Label>
          <Select value={fromFormat} onValueChange={(value: DataFormat) => setFromFormat(value)}>
            <SelectTrigger className="text-white">
              <SelectValue placeholder="Select input format" className="text-white" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              {formatOptions.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="text-white hover:bg-gray-700 focus:bg-gray-700"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="to-format" className="text-white">To Format</Label>
          <Select value={toFormat} onValueChange={(value: DataFormat) => setToFormat(value)}>
            <SelectTrigger className="text-white">
              <SelectValue placeholder="Select output format" className="text-white" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              {formatOptions.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="text-white hover:bg-gray-700 focus:bg-gray-700"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Format Detection */}
      {detectedFormat !== 'unknown' && (
        <div className="text-sm text-blue-600 dark:text-blue-400">
          📄 Detected format: {detectedFormat.toUpperCase()}
        </div>
      )}

      {/* Input Textarea */}
      <div className="space-y-2">
        <Label htmlFor="input-data" className="text-white">Input Data</Label>
        <textarea
          id="input-data"
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={`Enter your ${fromFormat.toUpperCase()} data here...`}
          className="w-full h-64 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono resize-y focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={handleConvert}
          disabled={!input.trim() || isLoading}
          className="flex items-center space-x-2"
        >
          {isLoading ? (
            <RefreshCw className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          <span>Convert {fromFormat.toUpperCase()} to {toFormat.toUpperCase()}</span>
        </Button>

        <Button
          variant="outline"
          onClick={loadExample}
          disabled={isLoading}
        >
          Load Example
        </Button>
      </div>

      {/* Format Info */}
      <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
        <div>💡 <strong>Tips:</strong></div>
        <div>• JSON: Objects and arrays in JavaScript notation</div>
        <div>• YAML: Human-readable data serialization</div>
        <div>• CSV: Comma-separated values for tabular data</div>
      </div>
    </div>
  );
};

export default JsonYamlCsvInput;
