
import { useState } from "react";
import { Copy, Download, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { downloadPalette } from "@/services/colorPaletteService";

interface ColorPaletteOutputProps {
  colors: string[];
  onRegenerate: (colorCount: 3 | 6 | 9) => void;
  isLoading: boolean;
}

const ColorPaletteOutput = ({ colors, onRegenerate, isLoading }: ColorPaletteOutputProps) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
      
      toast({
        title: "Color copied!",
        description: `${color} copied to clipboard`,
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Could not copy color to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDownload = (format: 'json' | 'txt') => {
    downloadPalette(colors, format);
    toast({
      title: "Palette downloaded!",
      description: `Color palette saved as ${format.toUpperCase()} file`,
    });
  };

  if (colors.length === 0) {
    return (
      <Card className="h-full">
        <CardContent className="p-6 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
            <p>Your color palette will appear here</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Extracted Palette</span>
          <span className="text-sm font-normal text-gray-500">
            {colors.length} colors
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Color Swatches Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {colors.map((color, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Color Swatch */}
              <div
                className="h-20 w-full"
                style={{ backgroundColor: color }}
              />
              
              {/* Color Info */}
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-gray-900 dark:text-white">
                    {color}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(color)}
                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedColor === color ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Colors List */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            All Colors
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <code className="text-sm text-gray-600 dark:text-gray-400">
              {colors.join(', ')}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(colors.join(', '))}
              className="ml-2 h-6 w-6 p-0"
            >
              {copiedColor === colors.join(', ') ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {/* Regenerate Options */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Regenerate with different count:
            </label>
            <div className="flex gap-2">
              {([3, 6, 9] as const).map((count) => (
                <Button
                  key={count}
                  size="sm"
                  variant="outline"
                  onClick={() => onRegenerate(count)}
                  disabled={isLoading}
                  className="flex items-center gap-1"
                >
                  <RefreshCw className="h-3 w-3" />
                  {count} colors
                </Button>
              ))}
            </div>
          </div>

          {/* Download Options */}
          <div className="flex gap-2">
            <Button
              onClick={() => handleDownload('json')}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <Download className="h-4 w-4 mr-1" />
              JSON
            </Button>
            <Button
              onClick={() => handleDownload('txt')}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <Download className="h-4 w-4 mr-1" />
              TXT
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPaletteOutput;
