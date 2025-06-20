
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Download, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { DataFormat } from '@/services/jsonYamlCsvService';

interface JsonYamlCsvOutputProps {
  result: string;
  isLoading: boolean;
  error?: string;
  fromFormat?: DataFormat;
  toFormat?: DataFormat;
  onRegenerate?: () => void;
  isDark: boolean;
}

const JsonYamlCsvOutput = ({ 
  result, 
  isLoading, 
  error, 
  fromFormat,
  toFormat,
  onRegenerate,
  isDark 
}: JsonYamlCsvOutputProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The converted data has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying the text manually.",
        variant: "destructive",
      });
    }
  };

  const downloadFile = () => {
    if (!result || !toFormat) return;

    const getFileExtension = (format: DataFormat) => {
      switch (format) {
        case 'json': return 'json';
        case 'yaml': return 'yaml';
        case 'csv': return 'csv';
        default: return 'txt';
      }
    };

    const getMimeType = (format: DataFormat) => {
      switch (format) {
        case 'json': return 'application/json';
        case 'yaml': return 'text/yaml';
        case 'csv': return 'text/csv';
        default: return 'text/plain';
      }
    };

    const blob = new Blob([result], { type: getMimeType(toFormat) });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const fileName = `converted_data.${getFileExtension(toFormat)}`;
    
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download started!",
      description: `File ${fileName} has been downloaded.`,
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-spin" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Converting...
          </h2>
        </div>
        <div className="flex items-center justify-center p-12">
          <div className="text-center space-y-3">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto text-blue-600 dark:text-blue-400" />
            <p className="text-gray-500 dark:text-gray-400">
              Converting {fromFormat?.toUpperCase()} to {toFormat?.toUpperCase()}...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Conversion Error
          </h2>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
            <div className="space-y-2">
              <p className="text-red-800 dark:text-red-200 font-medium">
                Conversion Failed
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                {error}
              </p>
              {onRegenerate && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onRegenerate}
                  className="mt-2"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-5 w-5 text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Converted Data
          </h2>
        </div>
        <div className="flex items-center justify-center p-12 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
          <div className="text-center space-y-3">
            <RefreshCw className="h-8 w-8 mx-auto text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400">
              Enter your data and click convert to see the results
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Converted Data ({toFormat?.toUpperCase()})
          </h2>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            disabled={!result}
          >
            {copied ? (
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={downloadFile}
            disabled={!result}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={result}
          readOnly
          className="w-full h-64 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono resize-y"
        />
      </div>

      {onRegenerate && (
        <Button
          variant="outline"
          onClick={onRegenerate}
          className="w-full"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Convert Again
        </Button>
      )}
    </div>
  );
};

export default JsonYamlCsvOutput;
