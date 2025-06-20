
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
    console.log('Explaining code with:', { code: code.substring(0, 100), language, tone });
    const result = await openaiService.explainCodeWithTone(code, language || 'javascript', tone);
    console.log('Code explanation result:', result.substring(0, 200));
    return result;
  } catch (error) {
    console.error('Error explaining code:', error);
    throw error;
  }
};
