
import { openaiService } from './openaiService';

interface FlowchartResult {
  originalCode: string;
  mermaidCode: string;
  language: string;
  explanation: string;
}

class FlowchartService {
  async generateFlowchart(code: string, language: string): Promise<FlowchartResult> {
    try {
      const response = await openaiService.generateFlowchart(code, language);
      
      // Parse the response to extract mermaid code and explanation
      const sections = response.split('---EXPLANATION---');
      const mermaidCode = sections[0]?.trim() || '';
      const explanation = sections[1]?.trim() || 'Flowchart has been generated from your code logic.';
      
      return {
        originalCode: code,
        mermaidCode,
        language,
        explanation
      };
    } catch (error) {
      console.error('Error generating flowchart:', error);
      throw new Error('Failed to generate flowchart. Please try again.');
    }
  }

  getExampleCode(language: string): string {
    const examples: Record<string, string> = {
      javascript: `function calculateFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

function processNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result.push(calculateFactorial(numbers[i]));
    }
  }
  return result;
}`,
      python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

def main():
    numbers = [64, 34, 25, 12, 22, 11, 90]
    sorted_numbers = quick_sort(numbers)
    print(sorted_numbers)`,
      java: `public class UserValidator {
    public boolean validateUser(String username, String password) {
        if (username == null || username.isEmpty()) {
            return false;
        }
        
        if (password == null || password.length() < 8) {
            return false;
        }
        
        if (hasSpecialCharacters(username)) {
            return false;
        }
        
        return true;
    }
    
    private boolean hasSpecialCharacters(String str) {
        return str.matches(".*[!@#$%^&*()].*");
    }
}`
    };
    
    return examples[language] || examples.javascript;
  }
}

export const flowchartService = new FlowchartService();
