
import { useState } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolWrapper from "@/components/ToolWrapper";
import ColorPaletteInput from "./ColorPaletteInput";
import ColorPaletteOutput from "./ColorPaletteOutput";
import { extractColorsFromImage, extractColorsFromUrl, ExtractPaletteOptions } from "@/services/colorPaletteService";
import { useToast } from "@/hooks/use-toast";

interface ColorPaletteToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const ColorPaletteTool = ({ tool, isDark, onToggleTheme }: ColorPaletteToolProps) => {
  const [colors, setColors] = useState<string[]>([]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [extractionSource, setExtractionSource] = useState<'image' | 'url'>('image');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleExtractPalette = async (file: File, options: ExtractPaletteOptions) => {
    setIsLoading(true);
    setCurrentFile(file);
    setCurrentUrl("");
    setExtractionSource('image');
    
    try {
      const result = await extractColorsFromImage(file, options);
      setColors(result.colors);
      
      toast({
        title: "Palette extracted successfully!",
        description: `Found ${result.colors.length} colors in your image.`,
      });
    } catch (error) {
      console.error('Error extracting color palette:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      toast({
        title: "Extraction failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      setColors([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExtractFromUrl = async (url: string, options: ExtractPaletteOptions) => {
    setIsLoading(true);
    setCurrentUrl(url);
    setCurrentFile(null);
    setExtractionSource('url');
    
    try {
      const result = await extractColorsFromUrl(url, options);
      setColors(result.colors);
      
      toast({
        title: "Palette extracted successfully!",
        description: `Found ${result.colors.length} colors from the website.`,
      });
    } catch (error) {
      console.error('Error extracting color palette from URL:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      toast({
        title: "Extraction failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      setColors([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = (colorCount: 3 | 6 | 9) => {
    if (extractionSource === 'image' && currentFile) {
      handleExtractPalette(currentFile, { colorCount });
    } else if (extractionSource === 'url' && currentUrl) {
      handleExtractFromUrl(currentUrl, { colorCount });
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <ColorPaletteInput
        onExtractPalette={handleExtractPalette}
        onExtractFromUrl={handleExtractFromUrl}
        isLoading={isLoading}
      />
      <ColorPaletteOutput
        colors={colors}
        onRegenerate={handleRegenerate}
        isLoading={isLoading}
      />
    </ToolWrapper>
  );
};

export default ColorPaletteTool;
