
import { useState, useEffect } from 'react';
import { ToolConfig } from '@/config/tools.config';
import ToolWrapper from '@/components/ToolWrapper';
import CodeEditorPanel from './CodeEditorPanel';
import LivePreview from './LivePreview';
import PlaygroundToolbar from './PlaygroundToolbar';
import { PlaygroundCode, playgroundService } from '@/services/playgroundService';

interface LivePlaygroundToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const LivePlaygroundTool = ({ tool, isDark, onToggleTheme }: LivePlaygroundToolProps) => {
  const [code, setCode] = useState<PlaygroundCode>({
    html: '',
    css: '',
    javascript: ''
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedCode = localStorage.getItem('livePlaygroundCode');
    if (savedCode) {
      try {
        const parsed = JSON.parse(savedCode);
        setCode(parsed);
      } catch (error) {
        console.error('Failed to load saved code:', error);
        // Load example if saved code is corrupted
        setCode(playgroundService.getExampleCode());
      }
    } else {
      // Load example code on first visit
      setCode(playgroundService.getExampleCode());
    }
  }, []);

  // Save to localStorage whenever code changes
  useEffect(() => {
    localStorage.setItem('livePlaygroundCode', JSON.stringify(code));
  }, [code]);

  const handleCodeChange = (language: keyof PlaygroundCode, value: string) => {
    setCode(prev => ({
      ...prev,
      [language]: value
    }));
  };

  const handleLoadExample = () => {
    setCode(playgroundService.getExampleCode());
  };

  const handleReset = () => {
    setCode({
      html: '',
      css: '',
      javascript: ''
    });
  };

  const handleCopyAll = async () => {
    try {
      await playgroundService.copyAllCode(code);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const handleDownload = () => {
    playgroundService.downloadCode(code, 'my-playground');
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="col-span-full">
        {/* Toolbar */}
        <PlaygroundToolbar 
          onLoadExample={handleLoadExample}
          onReset={handleReset}
          onCopyAll={handleCopyAll}
          onDownload={handleDownload}
          isDark={isDark}
        />

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Code Editors */}
          <div className="space-y-4">
            <CodeEditorPanel
              language="html"
              value={code.html}
              onChange={(value) => handleCodeChange('html', value)}
              isDark={isDark}
            />
            <CodeEditorPanel
              language="css"
              value={code.css}
              onChange={(value) => handleCodeChange('css', value)}
              isDark={isDark}
            />
            <CodeEditorPanel
              language="javascript"
              value={code.javascript}
              onChange={(value) => handleCodeChange('javascript', value)}
              isDark={isDark}
            />
          </div>

          {/* Live Preview */}
          <div className="lg:sticky lg:top-6">
            <LivePreview code={code} isDark={isDark} />
          </div>
        </div>
      </div>
    </ToolWrapper>
  );
};

export default LivePlaygroundTool;
