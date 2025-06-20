
import { sharedOpenAIClient } from './sharedOpenAIClient';

export class InterviewService {
  async generateInterviewQuestions(
    prompt: string, 
    technology: string, 
    difficulty: string, 
    questionCount: number
  ): Promise<string> {
    const systemMessage = sharedOpenAIClient.createSystemMessage(`
      You are an expert technical interview question generator. Generate ${questionCount} high-quality technical interview questions for ${technology} at ${difficulty} level.

      Requirements:
      - Questions should be realistic and commonly asked in technical interviews
      - Include a brief answer or key points for each question
      - Vary question types: conceptual, practical, coding problems, and scenario-based
      - Ensure questions are appropriate for ${difficulty} level
      - Format response as JSON array with this structure:
      [
        {
          "id": "unique_id",
          "question": "Question text",
          "answer": "Brief answer or key points",
          "hints": ["hint1", "hint2"],
          "difficulty": "${difficulty}",
          "category": "category_name"
        }
      ]
    `);

    const userMessage = sharedOpenAIClient.createUserMessage(
      `Generate ${questionCount} ${difficulty} level interview questions for ${technology}. Focus on: ${prompt}`
    );

    return sharedOpenAIClient.makeRequest([systemMessage, userMessage]);
  }
}
