
import { sharedOpenAIClient, OpenAIMessage } from './sharedOpenAIClient';

export type ExplanationTone = 'beginner' | 'technical' | 'seo-friendly';

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
    return this.explainCodeWithTone(code, language, 'technical');
  }

  async explainCodeWithTone(code: string, language: string, tone: ExplanationTone): Promise<string> {
    const toneInstructions = this.getToneInstructions(tone);
    
    console.log('Generating code explanation with tone:', tone);
    
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are an expert code analyst. Analyze the provided code and explain exactly what it does, how it works, and break down complex parts into understandable explanations. 

${toneInstructions}

IMPORTANT: 
- Always analyze the ACTUAL code provided, never give generic responses
- Explain what each function, variable, and logic statement does specifically
- Identify the purpose, parameters, return values, and logic flow
- Use the specific variable names, function names, and values from the code
- Provide line-by-line analysis when helpful
- Format your response with clear sections like "Function Purpose", "How It Works", "Key Variables", etc.
- Be specific about what the code accomplishes, not generic programming concepts
- Structure your response with markdown headers (##) for better readability`
      ),
      sharedOpenAIClient.createUserMessage(
        `Analyze and explain this ${language} code in detail:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}\n\nPlease provide a comprehensive explanation of what this specific code does, including its purpose, logic, variables, and return values.`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  private getToneInstructions(tone: ExplanationTone): string {
    switch (tone) {
      case 'beginner':
        return `Use simple, beginner-friendly language. Explain programming concepts as you encounter them. Avoid jargon and use analogies where helpful. Structure your explanation to help someone new to programming understand what's happening.`;
      
      case 'technical':
        return `Use precise technical language appropriate for experienced developers. Include implementation details, complexity analysis where relevant, and technical best practices. Focus on the algorithmic approach and technical aspects.`;
      
      case 'seo-friendly':
        return `Write in a clear, engaging style suitable for blog posts or documentation. Use headings, bullet points, and structured content. Make it informative but accessible to a broad audience including both beginners and experienced developers.`;
      
      default:
        return `Provide a balanced explanation that is clear and informative for developers at various skill levels.`;
    }
  }
}
