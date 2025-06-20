
import { sharedOpenAIClient, OpenAIMessage } from './sharedOpenAIClient';

export class TestingService {
  async generateUnitTests(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a software testing assistant. Generate comprehensive unit tests using the best practices for the given language. Include positive, negative, and edge case tests. Return the test code followed by "---EXPLANATION---" and then provide a detailed explanation of the test cases.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate unit tests for the following function written in ${language}. Use the correct framework and cover edge cases:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generateIntegrationTests(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an integration testing expert. Generate comprehensive integration tests that verify the interaction between different components or modules.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate integration tests for this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }
}
