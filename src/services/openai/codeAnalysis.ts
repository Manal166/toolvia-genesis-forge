
import { BaseOpenAIService, OpenAIMessage } from './base';

export class CodeAnalysisService extends BaseOpenAIService {
  async explainCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert programmer who explains code in a clear, educational way. Provide detailed explanations with code breakdown, purpose, and key concepts. Format your response in markdown with clear sections and bullet points.'
      },
      {
        role: 'user',
        content: `Please explain this ${language} code in detail with clear formatting:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }

  async generatePseudocode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert at creating clear, step-by-step pseudocode from programming code. Create structured pseudocode that explains the algorithm in plain English with proper formatting and clear steps.'
      },
      {
        role: 'user',
        content: `Convert this ${language} code to detailed pseudocode with clear step-by-step breakdown:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }

  async generateFlowchart(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert in code visualization and flowchart creation. Convert code into logical flowcharts using Mermaid.js syntax. Focus on control flow, decision points, loops, and function calls. Return the Mermaid flowchart code followed by "---EXPLANATION---" and then provide a detailed explanation of the flowchart structure.'
      },
      {
        role: 'user',
        content: `Analyze the following ${language} code and generate a step-by-step flowchart in Mermaid.js syntax. Focus on the logical flow, conditions, loops, and function calls:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }
}
