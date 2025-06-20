
import { openaiService } from './openaiService';

interface UnitTestResult {
  originalCode: string;
  testCode: string;
  framework: string;
  language: string;
  testCases: TestCase[];
  explanation: string;
}

interface TestCase {
  name: string;
  description: string;
  type: 'positive' | 'negative' | 'edge' | 'boundary';
}

class UnitTestService {
  async generateTests(code: string, language: string): Promise<UnitTestResult> {
    try {
      const response = await openaiService.generateUnitTests(code, language);
      
      // Parse the response to extract test code and explanation
      const sections = response.split('---EXPLANATION---');
      const testCode = sections[0]?.trim() || '';
      const explanation = sections[1]?.trim() || 'Unit tests have been generated following best practices.';
      
      // Determine framework based on language
      const framework = this.getFrameworkForLanguage(language);
      
      // Extract test cases from the explanation
      const testCases = this.extractTestCases(explanation);
      
      return {
        originalCode: code,
        testCode,
        framework,
        language,
        testCases,
        explanation
      };
    } catch (error) {
      console.error('Error generating unit tests:', error);
      throw new Error('Failed to generate unit tests. Please try again.');
    }
  }

  private getFrameworkForLanguage(language: string): string {
    const frameworkMap: Record<string, string> = {
      javascript: 'Jest',
      python: 'PyTest',
      java: 'JUnit',
      typescript: 'Jest',
      cpp: 'Google Test',
      csharp: 'NUnit',
      php: 'PHPUnit'
    };
    
    return frameworkMap[language.toLowerCase()] || 'Generic';
  }

  private extractTestCases(explanation: string): TestCase[] {
    const testCases: TestCase[] = [];
    const lines = explanation.split('\n');
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine.includes('test') || trimmedLine.includes('Test')) {
        const testCase: TestCase = {
          name: trimmedLine.substring(0, 50) + '...',
          description: trimmedLine,
          type: this.determineTestType(trimmedLine)
        };
        testCases.push(testCase);
      }
    }
    
    return testCases.length > 0 ? testCases : [
      { name: 'Happy Path Test', description: 'Tests normal functionality', type: 'positive' },
      { name: 'Edge Case Test', description: 'Tests boundary conditions', type: 'edge' },
      { name: 'Error Handling Test', description: 'Tests error conditions', type: 'negative' }
    ];
  }

  private determineTestType(description: string): 'positive' | 'negative' | 'edge' | 'boundary' {
    const lower = description.toLowerCase();
    if (lower.includes('error') || lower.includes('fail') || lower.includes('invalid')) {
      return 'negative';
    }
    if (lower.includes('edge') || lower.includes('boundary') || lower.includes('limit')) {
      return 'edge';
    }
    if (lower.includes('null') || lower.includes('empty') || lower.includes('zero')) {
      return 'boundary';
    }
    return 'positive';
  }
}

export const unitTestService = new UnitTestService();
