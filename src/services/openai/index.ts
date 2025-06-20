
import { CodeGenerationService } from './codeGenerationService';
import { SQLService } from './sqlService';
import { RefactoringService } from './refactoringService';
import { TestingService } from './testingService';
import { DocumentationService } from './documentationService';
import { VisualizationService } from './visualizationService';
import { InterviewService } from './interviewService';
import { sharedOpenAIClient } from './sharedOpenAIClient';

class OpenAIService {
  private codeGeneration: CodeGenerationService;
  private sql: SQLService;
  private refactoring: RefactoringService;
  private testing: TestingService;
  private documentation: DocumentationService;
  private visualization: VisualizationService;
  private interview: InterviewService;

  constructor() {
    this.codeGeneration = new CodeGenerationService();
    this.sql = new SQLService();
    this.refactoring = new RefactoringService();
    this.testing = new TestingService();
    this.documentation = new DocumentationService();
    this.visualization = new VisualizationService();
    this.interview = new InterviewService();
  }

  // Generic method for simple requests
  async makeRequest(messages: any[], model?: string): Promise<string> {
    return sharedOpenAIClient.makeRequest(messages, model);
  }

  // Code Generation Methods
  async generateCode(description: string, language: string): Promise<string> {
    return this.codeGeneration.generateCode(description, language);
  }

  async translateCode(code: string, fromLanguage: string, toLanguage: string): Promise<string> {
    return this.codeGeneration.translateCode(code, fromLanguage, toLanguage);
  }

  async generateRegex(description: string): Promise<{ regex: string; explanation: string }> {
    return this.codeGeneration.generateRegex(description);
  }

  // SQL Methods
  async generateSQLQuery(description: string, dialect: string = 'standard'): Promise<string> {
    return this.sql.generateSQLQuery(description, dialect);
  }

  async optimizeSQLQuery(query: string, dialect: string = 'standard'): Promise<string> {
    return this.sql.optimizeSQLQuery(query, dialect);
  }

  // Refactoring Methods
  async refactorCode(code: string, language: string): Promise<string> {
    return this.refactoring.refactorCode(code, language);
  }

  async fixCode(code: string, language: string): Promise<string> {
    return this.refactoring.fixCode(code, language);
  }

  async optimizeCode(code: string, language: string): Promise<string> {
    return this.refactoring.optimizeCode(code, language);
  }

  // Testing Methods
  async generateUnitTests(code: string, language: string): Promise<string> {
    return this.testing.generateUnitTests(code, language);
  }

  async generateIntegrationTests(code: string, language: string): Promise<string> {
    return this.testing.generateIntegrationTests(code, language);
  }

  // Documentation Methods
  async generateAPIDocumentation(code: string, language: string): Promise<string> {
    return this.documentation.generateAPIDocumentation(code, language);
  }

  async generateCodeComments(code: string, language: string): Promise<string> {
    return this.documentation.generateCodeComments(code, language);
  }

  async generateReadme(code: string, language: string): Promise<string> {
    return this.documentation.generateReadme(code, language);
  }

  // Visualization Methods
  async generateFlowchart(code: string, language: string): Promise<string> {
    return this.visualization.generateFlowchart(code, language);
  }

  async generatePseudocode(code: string, language: string): Promise<string> {
    return this.visualization.generatePseudocode(code, language);
  }

  async explainCode(code: string, language: string): Promise<string> {
    return this.visualization.explainCode(code, language);
  }

  // Interview Methods
  async generateInterviewQuestions(prompt: string, technology: string, difficulty: string, questionCount: number): Promise<string> {
    return this.interview.generateInterviewQuestions(prompt, technology, difficulty, questionCount);
  }
}

export const openaiService = new OpenAIService();
