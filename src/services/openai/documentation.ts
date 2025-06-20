
import { BaseOpenAIService, OpenAIMessage } from './base';

export class DocumentationService extends BaseOpenAIService {
  async generateAPIDocumentation(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert API documentation generator. Generate comprehensive API documentation from the provided code. Include endpoints, methods, parameters, responses, and examples. Format the output in a clear, structured manner with proper markdown formatting.'
      },
      {
        role: 'user',
        content: `Generate API documentation for this ${language} code:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }

  async generateUnitTests(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are a software testing assistant. Generate comprehensive unit tests using the best practices for the given language. Include positive, negative, and edge case tests. Return the test code followed by "---EXPLANATION---" and then provide a detailed explanation of the test cases.'
      },
      {
        role: 'user',
        content: `Generate unit tests for the following function written in ${language}. Use the correct framework and cover edge cases:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }
}
