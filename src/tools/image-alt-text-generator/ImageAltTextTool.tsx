
import { useState } from 'react';
import { ToolConfig } from '@/config/tools.config';
import ToolWrapper from '@/components/ToolWrapper';
import ImageAltTextInput from './ImageAltTextInput';
import ImageAltTextOutput from './ImageAltTextOutput';
import { generateAltText, downloadAltText, AltTextOptions, AltTextResult } from '@/services/imageAltTextService';
import { useToast } from '@/hooks/use-toast';

interface ImageAltTextToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const ImageAltTextTool = ({ tool, isDark, onToggleTheme }: ImageAltTextToolProps) => {
  const [result, setResult] = useState<AltTextResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastFile, setLastFile] = useState<File | null>(null);
  const [lastOptions, setLastOptions] = useState<AltTextOptions>({ tone: 'neutral' });
  const { toast } = useToast();

  const handleGenerate = async (file: File, options: AltTextOptions) => {
    setIsGenerating(true);
    setLastFile(file);
    setLastOptions(options);
    
    try {
      console.log('Starting alt text generation for:', file.name);
      const altTextResult = await generateAltText(file, options);
      console.log('Alt text generated successfully:', altTextResult);
      
      setResult(altTextResult);
      
      toast({
        title: "Alt text generated successfully!",
        description: "Your image has been analyzed and alt text has been generated.",
      });
    } catch (error) {
      console.error('Error generating alt text:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate alt text';
      
      toast({
        title: "Generation failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = () => {
    if (lastFile) {
      handleGenerate(lastFile, lastOptions);
    }
  };

  const handleDownload = (altText: string) => {
    try {
      const filename = lastFile ? `alt-text-${lastFile.name.split('.')[0]}` : 'alt-text';
      downloadAltText(altText, filename);
      
      toast({
        title: "Downloaded successfully!",
        description: "Alt text has been saved to your downloads folder.",
      });
    } catch (error) {
      console.error('Error downloading alt text:', error);
      toast({
        title: "Download failed",
        description: "Failed to download alt text file.",
        variant: "destructive",
      });
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <ImageAltTextInput
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        isDark={isDark}
      />
      <ImageAltTextOutput
        result={result}
        onRegenerate={handleRegenerate}
        onDownload={handleDownload}
        isGenerating={isGenerating}
        isDark={isDark}
      />
    </ToolWrapper>
  );
};

export default ImageAltTextTool;
