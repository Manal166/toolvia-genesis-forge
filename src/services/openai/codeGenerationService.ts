
import { sharedOpenAIClient, OpenAIMessage } from './sharedOpenAIClient';

export class CodeGenerationService {
  async generateCode(description: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are an expert ${language} programmer. Generate clean, efficient, and well-documented code based on the user's description. Include comments explaining key parts of the code.`
      ),
      sharedOpenAIClient.createUserMessage(`Generate ${language} code for: ${description}`)
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async translateCode(code: string, fromLanguage: string, toLanguage: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are an expert programmer who translates code between programming languages. Maintain the exact same functionality and logic while adapting to ${toLanguage} best practices and syntax.`
      ),
      sharedOpenAIClient.createUserMessage(
        `Translate this ${fromLanguage} code to ${toLanguage}:\n\n${sharedOpenAIClient.formatCodeBlock(code, fromLanguage)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generateRegex(description: string): Promise<{ regex: string; explanation: string }> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a regex expert. Generate a regular expression based on the description and provide a clear explanation. Format your response as: REGEX: [pattern] EXPLANATION: [detailed explanation]'
      ),
      sharedOpenAIClient.createUserMessage(`Create a regex pattern for: ${description}`)
    ];

    const response = await sharedOpenAIClient.makeRequest(messages);
    const regexMatch = response.match(/REGEX:\s*(.+?)(?=\s*EXPLANATION:)/s);
    const explanationMatch = response.match(/EXPLANATION:\s*(.+)/s);
    
    return {
      regex: regexMatch?.[1]?.trim() || response,
      explanation: explanationMatch?.[1]?.trim() || 'Generated regex pattern'
    };
  }
}
