
import { openaiService } from './openai/index';

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
      console.log('Generating tests for:', { code: code.substring(0, 100), language });
      
      const response = await openaiService.generateUnitTests(code, language);
      console.log('OpenAI response received:', response.substring(0, 200));
      
      // Parse the response to extract test code and explanation
      const sections = response.split('---EXPLANATION---');
      const testCode = sections[0]?.trim() || response;
      const explanation = sections[1]?.trim() || 'Unit tests have been generated following best practices for comprehensive coverage.';
      
      // Determine framework based on language
      const framework = this.getFrameworkForLanguage(language);
      
      // Extract test cases from the test code and explanation
      const testCases = this.extractTestCases(testCode, explanation);
      
      const result = {
        originalCode: code,
        testCode,
        framework,
        language,
        testCases,
        explanation
      };
      
      console.log('Generated test result:', result);
      return result;
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
    
    return frameworkMap[language.toLowerCase()] || 'Generic Testing Framework';
  }

  private extractTestCases(testCode: string, explanation: string): TestCase[] {
    const testCases: TestCase[] = [];
    const combinedText = `${testCode}\n${explanation}`;
    const lines = combinedText.split('\n');
    
    // Look for test function patterns
    const testPatterns = [
      /test\s*\(\s*['"`]([^'"`]+)['"`]/gi,
      /it\s*\(\s*['"`]([^'"`]+)['"`]/gi,
      /def\s+test_(\w+)/gi,
      /@Test[\s\S]*?public\s+void\s+(\w+)/gi
    ];
    
    for (const line of lines) {
      for (const pattern of testPatterns) {
        let match;
        while ((match = pattern.exec(line)) !== null) {
          const testName = match[1] || match[0];
          if (testName && testName.length > 0) {
            testCases.push({
              name: testName.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim(),
              description: `Tests ${testName.toLowerCase().replace(/_/g, ' ')}`,
              type: this.determineTestType(testName)
            });
          }
        }
      }
    }
    
    // If no test cases found, provide default ones
    if (testCases.length === 0) {
      return [
        { name: 'Valid Input Test', description: 'Tests function with valid input parameters', type: 'positive' },
        { name: 'Edge Case Test', description: 'Tests function with boundary conditions', type: 'edge' },
        { name: 'Error Handling Test', description: 'Tests function error handling', type: 'negative' },
        { name: 'Null Input Test', description: 'Tests function with null/undefined inputs', type: 'boundary' }
      ];
    }
    
    return testCases.slice(0, 8); // Limit to 8 test cases for UI display
  }

  private determineTestType(testName: string): 'positive' | 'negative' | 'edge' | 'boundary' {
    const lower = testName.toLowerCase();
    if (lower.includes('error') || lower.includes('fail') || lower.includes('invalid') || lower.includes('throw')) {
      return 'negative';
    }
    if (lower.includes('edge') || lower.includes('boundary') || lower.includes('limit') || lower.includes('max') || lower.includes('min')) {
      return 'edge';
    }
    if (lower.includes('null') || lower.includes('empty') || lower.includes('zero') || lower.includes('undefined')) {
      return 'boundary';
    }
    return 'positive';
  }
}

export const unitTestService = new UnitTestService();
