
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
    const userApiKey = localStorage.getItem('openai_api_key');
    const envApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    console.log('API Key Check:', {
      hasUserKey: !!userApiKey,
      hasEnvKey: !!envApiKey,
      userKeyPrefix: userApiKey ? userApiKey.substring(0, 7) + '...' : null
    });
    
    if (!userApiKey && !envApiKey) {
      throw new Error('OpenAI API key not configured. Please enter your API key in Settings to use the Code Explainer.');
    }

    console.log('Explaining code with:', { 
      codeLength: code.length, 
      language, 
      tone,
      codePreview: code.substring(0, 100) + (code.length > 100 ? '...' : '')
    });
    
    const result = await openaiService.explainCodeWithTone(code, language || 'javascript', tone);
    console.log('Code explanation result received:', {
      resultLength: result.length,
      resultPreview: result.substring(0, 200) + (result.length > 200 ? '...' : '')
    });
    
    return result;
  } catch (error) {
    console.error('Error explaining code:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('API key') || error.message.includes('401')) {
        throw new Error('Missing or invalid OpenAI API key. Please check your Settings and enter a valid API key.');
      }
      
      if (error.message.includes('fetch')) {
        throw new Error('Network error: Unable to connect to OpenAI. Please check your internet connection.');
      }
      
      if (error.message.includes('rate limit')) {
        throw new Error('Rate limit exceeded. Please wait a moment before trying again.');
      }
    }
    
    throw error;
  }
};
