
import { CodeAnalysisService } from './codeAnalysis';
import { CodeGenerationService } from './codeGeneration';
import { CodeImprovementService } from './codeImprovement';
import { DocumentationService } from './documentation';

class OpenAIService extends CodeAnalysisService {
  private codeGeneration: CodeGenerationService;
  private codeImprovement: CodeImprovementService;
  private documentation: DocumentationService;

  constructor() {
    super();
    this.codeGeneration = new CodeGenerationService();
    this.codeImprovement = new CodeImprovementService();
    this.documentation = new DocumentationService();
  }

  // Code Generation Methods
  async generateCode(description: string, language: string): Promise<string> {
    return this.codeGeneration.generateCode(description, language);
  }

  async translateCode(code: string, fromLanguage: string, toLanguage: string): Promise<string> {
    return this.codeGeneration.translateCode(code, fromLanguage, toLanguage);
  }

  async generateSQLQuery(description: string, dialect: string): Promise<string> {
    return this.codeGeneration.generateSQLQuery(description, dialect);
  }

  async generateRegex(description: string): Promise<{ regex: string; explanation: string }> {
    return this.codeGeneration.generateRegex(description);
  }

  // Code Improvement Methods
  async fixCode(code: string, language: string): Promise<string> {
    return this.codeImprovement.fixCode(code, language);
  }

  async optimizeCode(code: string, language: string): Promise<string> {
    return this.codeImprovement.optimizeCode(code, language);
  }

  async refactorCode(code: string, language: string): Promise<string> {
    return this.codeImprovement.refactorCode(code, language);
  }

  // Documentation Methods
  async generateAPIDocumentation(code: string, language: string): Promise<string> {
    return this.documentation.generateAPIDocumentation(code, language);
  }

  async generateUnitTests(code: string, language: string): Promise<string> {
    return this.documentation.generateUnitTests(code, language);
  }
}

export const openaiService = new OpenAIService();
