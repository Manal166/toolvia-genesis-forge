
import { useState, useCallback, useRef } from 'react';
import { Upload, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { AltTextOptions } from '@/services/imageAltTextService';

interface ImageAltTextInputProps {
  onGenerate: (file: File, options: AltTextOptions) => void;
  isGenerating: boolean;
  isDark: boolean;
}

const ImageAltTextInput = ({ onGenerate, isGenerating, isDark }: ImageAltTextInputProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [options, setOptions] = useState<AltTextOptions>({ tone: 'neutral' });
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    
    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleGenerate = () => {
    if (selectedFile) {
      onGenerate(selectedFile, options);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Upload Image
            </h2>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Upload an image to generate descriptive alt text for accessibility and SEO.
            </p>
          </div>

          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
              dragActive
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : selectedFile
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                : isDark
                ? 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                : 'border-gray-300 bg-gray-50 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleUploadClick}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            
            {preview ? (
              <div className="space-y-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="max-w-full max-h-48 mx-auto rounded-lg shadow-md"
                />
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="font-medium">{selectedFile?.name}</p>
                  <p>{((selectedFile?.size || 0) / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFile();
                  }}
                  className={isDark ? 'border-gray-600 text-gray-300' : ''}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className={`mx-auto w-12 h-12 flex items-center justify-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {dragActive ? <Upload className="w-12 h-12" /> : <ImageIcon className="w-12 h-12" />}
                </div>
                <div>
                  <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {dragActive ? 'Drop your image here' : 'Drop an image or click to upload'}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Supports PNG, JPG, WebP (max 5MB)
                  </p>
                </div>
                <Button variant="outline" className="cursor-pointer">
                  Choose File
                </Button>
              </div>
            )}
          </div>

          {/* Tone Selection */}
          <div className="space-y-3">
            <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Alt Text Style
            </label>
            <Select
              value={options.tone}
              onValueChange={(value) => setOptions({ ...options, tone: value as AltTextOptions['tone'] })}
            >
              <SelectTrigger className={isDark ? 'bg-gray-700 border-gray-600 text-gray-300' : ''}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="neutral">Neutral - Balanced description</SelectItem>
                <SelectItem value="seo-optimized">SEO Optimized - Keyword focused</SelectItem>
                <SelectItem value="accessibility-friendly">Accessibility - Screen reader optimized</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tips */}
          <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'} border`}>
            <div className="flex items-start space-x-2">
              <AlertCircle className={`h-4 w-4 mt-0.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="space-y-1">
                <p className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-800'}`}>
                  Tips for best results:
                </p>
                <ul className={`text-xs space-y-1 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                  <li>• Use clear, well-lit images</li>
                  <li>• Avoid blurry or heavily distorted images</li>
                  <li>• Images with clear subjects work best</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={!selectedFile || isGenerating}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Analyzing Image...
              </>
            ) : (
              'Generate Alt Text'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageAltTextInput;
