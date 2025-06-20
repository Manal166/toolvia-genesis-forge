import { useState, useEffect } from 'react';
import { Copy, Download, RefreshCw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AltTextResult } from '@/services/imageAltTextService';

interface ImageAltTextOutputProps {
  result: AltTextResult | null;
  onRegenerate: () => void;
  onDownload: (altText: string) => void;
  isGenerating: boolean;
  isDark: boolean;
}

const ImageAltTextOutput = ({ 
  result, 
  onRegenerate, 
  onDownload, 
  isGenerating, 
  isDark 
}: ImageAltTextOutputProps) => {
  const [copied, setCopied] = useState(false);
  const [editedText, setEditedText] = useState('');

  // Update edited text when result changes
  useEffect(() => {
    if (result) {
      setEditedText(result.altText);
    }
  }, [result]);

  const handleCopy = async () => {
    if (editedText) {
      await navigator.clipboard.writeText(editedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (editedText) {
      onDownload(editedText);
    }
  };

  const getToneLabel = (tone: string) => {
    switch (tone) {
      case 'seo-optimized':
        return 'SEO Optimized';
      case 'accessibility-friendly':
        return 'Accessibility Friendly';
      default:
        return 'Neutral';
    }
  };

  const getToneColor = (tone: string) => {
    switch (tone) {
      case 'seo-optimized':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'accessibility-friendly':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  if (!result && !isGenerating) {
    return (
      <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <CardContent className="p-6">
          <div className="text-center py-12">
            <div className={`mx-auto w-16 h-16 ${isDark ? 'text-gray-600' : 'text-gray-400'} mb-4`}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Upload an image to generate alt text
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardHeader>
        <CardTitle className={`flex items-center justify-between ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Generated Alt Text
          {result && (
            <Badge className={getToneColor(result.tone)}>
              {getToneLabel(result.tone)}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        {isGenerating ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
            <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Analyzing image and generating alt text...
            </p>
          </div>
        ) : result ? (
          <div className="space-y-4">
            {/* Alt Text Display/Editor */}
            <div className="space-y-2">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Alt Text (Editable)
              </label>
              <Textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className={`min-h-[100px] ${isDark ? 'bg-gray-700 border-gray-600 text-gray-300' : ''}`}
                placeholder="Alt text will appear here..."
              />
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Character count: {editedText.length}
                {editedText.length > 125 && ' (Consider shortening for better accessibility)'}
              </p>
            </div>

            {/* HTML Preview */}
            <div className="space-y-2">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                HTML Preview
              </label>
              <div className={`p-3 rounded-lg font-mono text-sm ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                &lt;img src="your-image.jpg" alt="{editedText}" /&gt;
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className={`flex items-center space-x-2 ${isDark ? 'border-gray-600 text-gray-300' : ''}`}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'Copied!' : 'Copy Alt Text'}</span>
              </Button>
              
              <Button
                onClick={handleDownload}
                variant="outline"
                size="sm"
                className={`flex items-center space-x-2 ${isDark ? 'border-gray-600 text-gray-300' : ''}`}
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              
              <Button
                onClick={onRegenerate}
                variant="outline"
                size="sm"
                className={`flex items-center space-x-2 ${isDark ? 'border-gray-600 text-gray-300' : ''}`}
              >
                <RefreshCw className="h-4 w-4" />
                <span>Regenerate</span>
              </Button>
            </div>

            {/* Best Practices */}
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <h4 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Alt Text Best Practices:
              </h4>
              <ul className={`text-xs space-y-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Keep it concise (ideally under 125 characters)</li>
                <li>• Describe the essential information</li>
                <li>• Avoid "image of" or "picture of"</li>
                <li>• Use empty alt="" for decorative images</li>
              </ul>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default ImageAltTextOutput;
