
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, ExternalLink, Smartphone, Monitor } from 'lucide-react';
import { PlaygroundCode, playgroundService } from '@/services/playgroundService';

interface LivePreviewProps {
  code: PlaygroundCode;
  isDark: boolean;
}

const LivePreview = ({ code, isDark }: LivePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    updatePreview();
  }, [code]);

  const updatePreview = () => {
    if (!iframeRef.current) return;

    try {
      const result = playgroundService.compileCode(code);
      
      if (result.success) {
        const iframe = iframeRef.current;
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        
        if (doc) {
          doc.open();
          doc.write(result.compiledCode);
          doc.close();
          setHasError(false);
        }
      } else {
        setHasError(true);
        console.error('Compilation error:', result.error);
      }
    } catch (error) {
      setHasError(true);
      console.error('Preview update error:', error);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      updatePreview();
      setIsRefreshing(false);
    }, 300);
  };

  const handleOpenInNewTab = () => {
    const result = playgroundService.compileCode(code);
    if (result.success) {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(result.compiledCode);
        newWindow.document.close();
      }
    }
  };

  const toggleMobileView = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} h-fit`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Live Preview
            </CardTitle>
            <Badge className={`${hasError 
              ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
              : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            }`}>
              {hasError ? 'Error' : 'Live'}
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={toggleMobileView}
              variant="ghost"
              size="sm"
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
              title={isMobileView ? 'Desktop View' : 'Mobile View'}
            >
              {isMobileView ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
            </Button>
            
            <Button
              onClick={handleRefresh}
              variant="ghost"
              size="sm"
              disabled={isRefreshing}
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </Button>
            
            <Button
              onClick={handleOpenInNewTab}
              variant="ghost"
              size="sm"
              className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'}`}
              title="Open in New Tab"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className={`
          relative border rounded-lg overflow-hidden transition-all duration-300
          ${isDark ? 'border-gray-600 bg-gray-900' : 'border-gray-300 bg-white'}
          ${isMobileView ? 'max-w-sm mx-auto' : ''}
        `}>
          {hasError && (
            <div className={`
              absolute inset-0 flex items-center justify-center z-10
              ${isDark ? 'bg-gray-900/90 text-red-400' : 'bg-white/90 text-red-600'}
            `}>
              <div className="text-center p-4">
                <p className="font-medium mb-2">Preview Error</p>
                <p className="text-sm opacity-75">Check your code for syntax errors</p>
                <Button
                  onClick={handleRefresh}
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}
          
          <iframe
            ref={iframeRef}
            className={`
              w-full transition-all duration-300
              ${isMobileView ? 'h-[600px]' : 'h-[500px]'}
              ${hasError ? 'opacity-25' : 'opacity-100'}
            `}
            title="Live Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        
        {/* Preview Info */}
        <div className={`flex justify-between items-center mt-3 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          <span>
            Viewport: {isMobileView ? '375px (Mobile)' : '100% (Desktop)'}
          </span>
          <span>
            Auto-refresh enabled
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LivePreview;
