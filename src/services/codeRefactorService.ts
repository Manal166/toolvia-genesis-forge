
import { openaiService } from './openaiService';

interface CodeRefactorResult {
  originalCode: string;
  refactoredCode: string;
  explanation: string;
  language: string;
}

const SUPPORTED_LANGUAGES = [
  'javascript',
  'typescript',
  'python',
  'java',
  'cpp',
  'html',
  'css',
  'php',
  'csharp',
  'ruby',
  'go'
];

class CodeRefactorService {
  async refactorCode(code: string, language: string): Promise<CodeRefactorResult> {
    try {
      const response = await openaiService.refactorCode(code, language);
      
      // Split response into refactored code and explanation
      const parts = response.split('---EXPLANATION---');
      const refactoredCode = parts[0]?.trim() || response;
      const explanation = parts[1]?.trim() || 'Code has been refactored to improve readability and structure.';
      
      return {
        originalCode: code,
        refactoredCode,
        explanation,
        language
      };
    } catch (error) {
      console.error('Error refactoring code:', error);
      throw new Error('Failed to refactor code. Please try again.');
    }
  }

  getSupportedLanguages(): string[] {
    return SUPPORTED_LANGUAGES;
  }

  getExampleCode(language: string): string {
    const examples: Record<string, string> = {
      javascript: `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].price && items[i].quantity) {
      total = total + (items[i].price * items[i].quantity);
    }
  }
  return total;
}`,
      python: `def process_data(data):
    result = []
    for item in data:
        if item != None:
            if item > 0:
                result.append(item * 2)
            else:
                result.append(0)
    return result`,
      java: `public class Calculator {
    public static int add(int a, int b) {
        int result = a + b;
        return result;
    }
    
    public static int multiply(int x, int y) {
        int product = 0;
        for(int i = 0; i < y; i++) {
            product = product + x;
        }
        return product;
    }
}`
    };
    
    return examples[language] || examples.javascript;
  }
}

export const codeRefactorService = new CodeRefactorService();
