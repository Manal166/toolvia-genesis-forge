
import { sharedOpenAIClient, OpenAIMessage } from './openai/sharedOpenAIClient';

export interface AltTextOptions {
  tone: 'neutral' | 'seo-optimized' | 'accessibility-friendly';
}

export interface AltTextResult {
  altText: string;
  tone: string;
}

const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const getToneInstructions = (tone: string): string => {
  switch (tone) {
    case 'seo-optimized':
      return `Generate SEO-optimized alt text that includes relevant keywords while remaining natural and descriptive. Focus on elements that would be valuable for search engines while maintaining readability.`;
    case 'accessibility-friendly':
      return `Generate accessibility-focused alt text that provides clear, detailed descriptions for screen readers. Focus on essential visual information that helps users understand the image's context and purpose.`;
    default:
      return `Generate neutral, descriptive alt text that clearly describes the main elements and content of the image in a concise manner.`;
  }
};

export const generateAltText = async (
  file: File,
  options: AltTextOptions = { tone: 'neutral' }
): Promise<AltTextResult> => {
  if (!file) {
    throw new Error('Please select an image file');
  }

  // Validate file type
  if (!file.type.startsWith('image/')) {
    throw new Error('Please select a valid image file (JPG, PNG, WebP, etc.)');
  }

  // Validate file size (5MB limit)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxSize) {
    throw new Error('Image file must be smaller than 5MB');
  }

  try {
    const base64Image = await convertImageToBase64(file);
    
    const toneInstructions = getToneInstructions(options.tone);
    
    const systemMessage = sharedOpenAIClient.createSystemMessage(
      `You are an expert at creating alt text for images. Your goal is to create descriptive, concise alt text that serves accessibility and SEO purposes.

${toneInstructions}

Guidelines:
- Keep descriptions between 5-25 words when possible
- Focus on the most important visual elements
- Avoid starting with "Image of" or "Picture showing"
- Be specific but concise
- Include relevant context when obvious
- For decorative images, suggest if alt="" would be appropriate
- Return only the alt text without quotation marks or extra formatting

Examples:
- Good: "Person typing on laptop at wooden desk with coffee cup"
- Good: "Red sports car parked on city street at sunset"
- Good: "Graph showing 40% increase in sales from 2023 to 2024"`
    );

    // Create a vision message with mixed content
    const visionMessage: OpenAIMessage = {
      role: 'user',
      content: [
        {
          type: 'text',
          text: `Please analyze this image and generate appropriate alt text with a ${options.tone} tone.`
        },
        {
          type: 'image_url',
          image_url: {
            url: base64Image
          }
        }
      ]
    };

    const response = await sharedOpenAIClient.makeRequest([
      systemMessage,
      visionMessage
    ], 'gpt-4o'); // Using gpt-4o for vision capabilities

    // Clean up the response
    const altText = response.trim().replace(/^["']|["']$/g, '');

    return {
      altText,
      tone: options.tone
    };

  } catch (error) {
    console.error('Error generating alt text:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate alt text for image');
  }
};

export const downloadAltText = (altText: string, filename: string = 'alt-text') => {
  const content = altText;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};
