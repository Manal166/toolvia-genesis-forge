
import { openaiService } from './openai';

interface CodeExplanationResponse {
  explanation: string;
  success: boolean;
  error?: string;
}

export type ExplanationTone = 'beginner' | 'technical' | 'seo-friendly';

export const explainCode = async (
  code: string, 
  language?: string, 
  tone: ExplanationTone = 'technical'
): Promise<string> => {
  try {
    // Check if API key is available
    const hasApiKey = localStorage.getItem('openai_api_key') || import.meta.env.VITE_OPENAI_API_KEY;
    
    if (!hasApiKey) {
      throw new Error('OpenAI API key not configured. Please enter your API key in Settings to use the Code Explainer.');
    }

    console.log('Explaining code with:', { code: code.substring(0, 100), language, tone });
    const result = await openaiService.explainCodeWithTone(code, language || 'javascript', tone);
    console.log('Code explanation result:', result.substring(0, 200));
    return result;
  } catch (error) {
    console.error('Error explaining code:', error);
    
    if (error instanceof Error && error.message.includes('API key')) {
      throw new Error('Missing or invalid OpenAI API key. Please check your Settings and enter a valid API key.');
    }
    
    throw error;
  }
};
