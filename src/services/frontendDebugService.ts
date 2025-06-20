
import { sharedOpenAIClient, OpenAIMessage } from './openai/sharedOpenAIClient';

export class FrontendDebugService {
  async debugFrontendCode(code: string, language: string, issueDescription: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a senior frontend developer. Your job is to analyze the following frontend code and fix any issues based on the user\'s description. Focus on HTML, CSS, or JavaScript as needed. Provide the fixed code followed by "---EXPLANATION---" and then a detailed explanation of what was wrong and how it was fixed.'
      ),
      sharedOpenAIClient.createUserMessage(
        `The following ${language} code is experiencing this issue:
${issueDescription}

Here is the code:
${sharedOpenAIClient.formatCodeBlock(code, language)}

Please return the fixed code and an explanation of what was wrong and how it was fixed.`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async analyzeCodeIssues(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a frontend code analyzer. Examine the provided code and identify potential issues, bugs, or improvements without fixing them yet.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Analyze this ${language} code for potential issues:
${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }
}

export const frontendDebugService = new FrontendDebugService();
