
import { sharedOpenAIClient, OpenAIMessage } from './sharedOpenAIClient';

export class DocumentationService {
  async generateAPIDocumentation(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an expert API documentation generator. Generate comprehensive API documentation from the provided code. Include endpoints, methods, parameters, responses, and examples. Format the output in a clear, structured manner with proper markdown formatting.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate API documentation for this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generateCodeComments(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a code documentation expert. Add comprehensive comments to the provided code explaining its purpose, parameters, return values, and key logic.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Add detailed comments to this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generateReadme(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a technical writer who creates excellent README documentation. Generate a comprehensive README.md file based on the provided code, including setup instructions, usage examples, and feature descriptions.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate a README.md file for this ${language} project:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }
}
