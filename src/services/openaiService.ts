
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

  // Missing methods that other services expect
  async generateAPIDocumentation(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are an API documentation generator. Create comprehensive API documentation for the provided code.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate API documentation for this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async fixCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a code debugging assistant. Fix any syntax or logical errors in the provided code.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Fix this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async optimizeCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a code optimization expert. Optimize the provided code for better performance and readability.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Optimize this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async refactorCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a code refactoring expert. Refactor the provided code to improve structure and maintainability.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Refactor this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generateFlowchart(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a flowchart generator. Create mermaid syntax flowcharts from code logic.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate a flowchart in mermaid syntax for this ${language} code:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generatePseudocode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a pseudocode generator. Convert code into clear, structured pseudocode.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Convert this ${language} code to pseudocode:\n\n${sharedOpenAIClient.formatCodeBlock(code, language)}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async generateRegex(description: string): Promise<{ regex: string; explanation: string }> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        'You are a regex generator. Create regular expressions based on descriptions and provide explanations.'
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate a regex pattern for: ${description}`
      )
    ];

    const response = await sharedOpenAIClient.makeRequest(messages);
    
    // Parse response to extract regex and explanation
    const lines = response.split('\n');
    const regexLine = lines.find(line => line.includes('/') || line.includes('\\'));
    const regex = regexLine ? regexLine.trim() : response.split('\n')[0];
    const explanation = response;

    return { regex, explanation };
  }

  async generateSQLQuery(description: string, dialect: string = 'standard'): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are a SQL query generator. Generate ${dialect} SQL queries based on descriptions.`
      ),
      sharedOpenAIClient.createUserMessage(
        `Generate a SQL query for: ${description}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async makeRequest(messages: OpenAIMessage[], model?: string): Promise<string> {
    return sharedOpenAIClient.makeRequest(messages, model);
  }
}

export const openaiService = new OpenAIService();
