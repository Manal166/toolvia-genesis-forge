
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileCode, RotateCcw, Copy, Download, Check } from 'lucide-react';

interface PlaygroundToolbarProps {
  onLoadExample: () => void;
  onReset: () => void;
  onCopyAll: () => Promise<void>;
  onDownload: () => void;
  isDark: boolean;
}

const PlaygroundToolbar = ({ 
  onLoadExample, 
  onReset, 
  onCopyAll, 
  onDownload, 
  isDark 
}: PlaygroundToolbarProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = async () => {
    await onCopyAll();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={onLoadExample}
              variant="outline"
              size="sm"
              className={`flex items-center space-x-2 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileCode className="h-4 w-4" />
              <span>Load Example</span>
            </Button>
            
            <Button
              onClick={onReset}
              variant="outline"
              size="sm"
              className={`flex items-center space-x-2 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={handleCopyAll}
              variant="outline"
              size="sm"
              className={`flex items-center space-x-2 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? 'Copied!' : 'Copy All'}</span>
            </Button>
            
            <Button
              onClick={onDownload}
              variant="default"
              size="sm"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
          </div>
        </div>
        
        {/* Quick Tips */}
        <div className={`mt-3 pt-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            💡 <span className="font-medium">Tips:</span> Your code is automatically saved. 
            Use the mobile/desktop toggle in preview. Changes update in real-time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaygroundToolbar;
