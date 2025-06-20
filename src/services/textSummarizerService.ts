
import { sharedOpenAIClient } from './openai/sharedOpenAIClient';

export type SummaryLength = 'short' | 'medium' | 'detailed';

export const summarizeText = async (
  input: string, 
  length: SummaryLength = 'medium'
): Promise<string> => {
  if (!input.trim()) {
    throw new Error('Please provide text to summarize');
  }

  if (input.length > 5000) {
    throw new Error('Text is too long. Please limit to 5000 characters.');
  }

  const lengthInstructions = {
    short: 'a concise, 2-3 sentence summary',
    medium: 'a comprehensive paragraph summary (4-6 sentences)',
    detailed: 'a detailed summary with key points and context (2-3 paragraphs)'
  };

  const systemMessage = sharedOpenAIClient.createSystemMessage(
    `You are an expert text summarizer. Your task is to create clear, accurate, and well-structured summaries. 
    
    Guidelines:
    - Maintain the original meaning and key information
    - Write in clear, grammatically correct English
    - Focus on the most important points
    - Avoid personal opinions or interpretations
    - Structure the summary logically`
  );

  const userMessage = sharedOpenAIClient.createUserMessage(
    `Summarize the following text into ${lengthInstructions[length]}:

${input}`
  );

  return sharedOpenAIClient.makeRequest([systemMessage, userMessage], 'gpt-4.1-2025-04-14');
};
