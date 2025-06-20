import { sharedOpenAIClient, OpenAIMessage } from './openai/sharedOpenAIClient';

export interface ColorPalette {
  colors: string[];
  extractedFrom: 'image' | 'url';
}

export interface ExtractPaletteOptions {
  colorCount?: 3 | 6 | 9;
}

const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix to get just the base64 data
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const extractColorsFromImage = async (
  file: File,
  options: ExtractPaletteOptions = { colorCount: 6 }
): Promise<ColorPalette> => {
  if (!file) {
    throw new Error('Please select an image file');
  }

  // Validate file type
  if (!file.type.startsWith('image/')) {
    throw new Error('Please select a valid image file (JPG, PNG, etc.)');
  }

  // Validate file size (5MB limit)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxSize) {
    throw new Error('Image file must be smaller than 5MB');
  }

  try {
    const base64Image = await convertImageToBase64(file);
    
    const systemMessage = sharedOpenAIClient.createSystemMessage(
      `You are a color palette extraction expert. Analyze the provided image and extract ${options.colorCount || 6} distinct, representative colors from it.

Guidelines:
- Return exactly ${options.colorCount || 6} colors
- Use HEX format (e.g., #FF5733)
- Choose colors that best represent the image's dominant tones
- Avoid very similar shades
- Prioritize colors that would work well in design contexts
- Return the result as a clean JSON array of HEX color strings

Example format: ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF3", "#F3FF33"]`
    );

    // Create a vision message with mixed content
    const visionMessage: OpenAIMessage = {
      role: 'user',
      content: [
        {
          type: 'text',
          text: `Please analyze this image and extract ${options.colorCount || 6} representative colors. Return them as a JSON array of HEX color codes.`
        },
        {
          type: 'image_url',
          image_url: {
            url: `data:${file.type};base64,${base64Image}`
          }
        }
      ]
    };

    // For image analysis, we need to use a model that supports vision
    const response = await sharedOpenAIClient.makeRequest([
      systemMessage,
      visionMessage
    ], 'gpt-4o'); // Using gpt-4o for vision capabilities

    // Parse the JSON response
    let colors: string[];
    try {
      // Try to extract JSON from the response
      const jsonMatch = response.match(/\[.*\]/);
      if (jsonMatch) {
        colors = JSON.parse(jsonMatch[0]);
      } else {
        // Fallback: extract hex codes using regex
        const hexMatches = response.match(/#[0-9A-Fa-f]{6}/g);
        if (hexMatches && hexMatches.length > 0) {
          colors = hexMatches.slice(0, options.colorCount || 6);
        } else {
          throw new Error('No valid colors found in response');
        }
      }
    } catch (parseError) {
      // Fallback: extract hex codes using regex
      const hexMatches = response.match(/#[0-9A-Fa-f]{6}/g);
      if (hexMatches && hexMatches.length > 0) {
        colors = hexMatches.slice(0, options.colorCount || 6);
      } else {
        throw new Error('Failed to parse color palette from response');
      }
    }

    // Validate that we have the expected number of colors
    if (!colors || colors.length === 0) {
      throw new Error('No colors could be extracted from the image');
    }

    return {
      colors: colors.slice(0, options.colorCount || 6),
      extractedFrom: 'image'
    };

  } catch (error) {
    console.error('Error extracting colors from image:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to extract color palette from image');
  }
};

export const downloadPalette = (colors: string[], format: 'json' | 'txt' = 'json') => {
  let content: string;
  let filename: string;
  let mimeType: string;

  if (format === 'json') {
    content = JSON.stringify(colors, null, 2);
    filename = 'color-palette.json';
    mimeType = 'application/json';
  } else {
    content = colors.join('\n');
    filename = 'color-palette.txt';
    mimeType = 'text/plain';
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};
