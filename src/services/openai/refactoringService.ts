
import { sharedOpenAIClient, OpenAIMessage } from './sharedOpenAIClient';

export class RefactoringService {
  async refactorCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an expert software engineer. Refactor the provided code to improve clarity, structure, and performance, without changing its logic. Follow best practices for the specified programming language. Return the refactored code followed by "---EXPLANATION---" and then provide a detailed explanation of the improvements made with bullet points.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Please refactor the following code written in ${language}:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async fixCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an expert programmer who fixes bugs and improves code. Return only the corrected code with comments explaining the fixes. Format the response as clean, executable code.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Please fix any bugs or issues in this ${language} code and return the corrected version:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async optimizeCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an expert code optimizer. Optimize the given code for performance, readability, and best practices. Return the optimized code followed by "---EXPLANATION---" and then provide a detailed explanation of the improvements made with bullet points.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Optimize this ${language} code for better performance and readability:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }
}
