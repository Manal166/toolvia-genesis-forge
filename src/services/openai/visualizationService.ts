
import { sharedOpenAIClient, OpenAIMessage } from './sharedOpenAIClient';

export class VisualizationService {
  async generateFlowchart(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an expert at creating flowcharts from code. Generate a Mermaid flowchart that visualizes the logic flow of the provided code. Use proper Mermaid syntax with clear node labels and logical flow connections.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Create a Mermaid flowchart for this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generatePseudocode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an expert at converting code to pseudocode. Transform the provided code into clear, step-by-step pseudocode that explains the algorithm and logic in plain language.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Convert this ${language} code to pseudocode:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async explainCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a code explanation expert. Analyze the provided code and explain what it does, how it works, and break down complex parts into understandable explanations.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Explain this ${language} code in detail:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }
}
