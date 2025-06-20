
import { useState, useRef } from "react";
import { Upload, Image, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ExtractPaletteOptions } from "@/services/colorPaletteService";

interface ColorPaletteInputProps {
  onExtractPalette: (file: File, options: ExtractPaletteOptions) => void;
  onExtractFromUrl: (url: string, options: ExtractPaletteOptions) => void;
  isLoading: boolean;
}

const ColorPaletteInput = ({ onExtractPalette, onExtractFromUrl, isLoading }: ColorPaletteInputProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [colorCount, setColorCount] = useState<3 | 6 | 9>(6);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleExtractFromImage = () => {
    if (selectedFile) {
      onExtractPalette(selectedFile, { colorCount });
    }
  };

  const handleExtractFromUrl = () => {
    if (websiteUrl.trim()) {
      onExtractFromUrl(websiteUrl.trim(), { colorCount });
    }
  };

  const loadExampleImage = () => {
    // Create a canvas to generate a sample colorful image
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, 200, 200);
      gradient.addColorStop(0, '#FF6B6B');
      gradient.addColorStop(0.2, '#4ECDC4');
      gradient.addColorStop(0.4, '#45B7D1');
      gradient.addColorStop(0.6, '#96CEB4');
      gradient.addColorStop(0.8, '#FFEAA7');
      gradient.addColorStop(1, '#DDA0DD');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 200, 200);
      
      // Convert canvas to blob and create file
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'example-image.png', { type: 'image/png' });
          setSelectedFile(file);
        }
      });
    }
  };

  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Upload Image or Enter URL
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Extract beautiful color palettes from images or websites
          </p>
        </div>

        {/* File Upload Area */}
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          {selectedFile ? (
            <div className="space-y-2">
              <Image className="h-12 w-12 text-green-600 mx-auto" />
              <p className="text-green-600 font-medium">{selectedFile.name}</p>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <Upload className="h-12 w-12 text-gray-400 mx-auto" />
              <p className="text-gray-600 dark:text-gray-400">
                Drop your image here or click to select
              </p>
              <p className="text-sm text-gray-500">
                Supports JPG, PNG up to 5MB
              </p>
            </div>
          )}
        </div>

        {/* URL Input */}
        <div className="space-y-2">
          <Label htmlFor="website-url" className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            Website URL
          </Label>
          <Input
            id="website-url"
            type="url"
            placeholder="https://example.com"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* Color Count Selection */}
        <div className="space-y-2">
          <Label>Number of Colors</Label>
          <div className="flex gap-2">
            {([3, 6, 9] as const).map((count) => (
              <Button
                key={count}
                variant={colorCount === count ? "default" : "outline"}
                size="sm"
                onClick={() => setColorCount(count)}
                disabled={isLoading}
              >
                {count} colors
              </Button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleExtractFromImage}
            disabled={!selectedFile || isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? 'Extracting...' : 'Extract from Image'}
          </Button>
          
          <Button
            onClick={handleExtractFromUrl}
            disabled={!websiteUrl.trim() || isLoading}
            className="w-full"
            size="lg"
            variant="outline"
          >
            {isLoading ? 'Extracting...' : 'Extract from Website'}
          </Button>
          
          <Button
            onClick={loadExampleImage}
            variant="outline"
            className="w-full"
            disabled={isLoading}
          >
            Load Example Image
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPaletteInput;
