
import { sharedOpenAIClient, OpenAIMessage } from './openai/sharedOpenAIClient';
import { TestingService } from './openai/testingService';

class OpenAIService {
  private testingService: TestingService;

  constructor() {
    this.testingService = new TestingService();
  }

  async generateUnitTests(code: string, language: string): Promise<string> {
    return this.testingService.generateUnitTests(code, language);
  }

  async generateCode(prompt: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are a helpful coding assistant. Generate clean, well-commented code in ${language}.`
      ),
      sharedOpenAIClient.createUserMessage(prompt)
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async explainCode(code: string, language: string, tone: string = 'beginner'): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are a code explanation assistant. Explain code in a ${tone} friendly way.`
      ),
      sharedOpenAIClient.createUserMessage(
        `Explain this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async fixBugs(code: string, language: string, errorMessage?: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a debugging assistant. Identify and fix bugs in the provided code.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Fix bugs in this ${language} code${errorMessage ? ` (Error: ${errorMessage})` : ''}:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async translateCode(code: string, fromLanguage: string, toLanguage: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are a code translation assistant. Convert code from ${fromLanguage} to ${toLanguage} while preserving functionality.`
      ),
      sharedOpenAIClient.createUserMessage(
        `Translate this ${fromLanguage} code to ${toLanguage}:\n\n${sharedOpenAIClient.formatCodeBlock(code, fromLanguage)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }
}

export const openaiService = new OpenAIService();
