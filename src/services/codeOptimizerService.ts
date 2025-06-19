
import { openaiService } from './openaiService';

interface OptimizationResult {
  originalCode: string;
  optimizedCode: string;
  explanation: string;
  improvements: string[];
}

class CodeOptimizerService {
  async optimizeCode(code: string, language: string): Promise<OptimizationResult> {
    try {
      const response = await openaiService.optimizeCode(code, language);
      
      // Parse the response to extract optimized code and explanation
      const sections = response.split('---EXPLANATION---');
      const optimizedCode = sections[0]?.trim() || code;
      const explanation = sections[1]?.trim() || 'Code has been optimized for better performance and readability.';
      
      // Extract improvements from the explanation
      const improvements = this.extractImprovements(explanation);
      
      return {
        originalCode: code,
        optimizedCode,
        explanation,
        improvements
      };
    } catch (error) {
      console.error('Error optimizing code:', error);
      throw new Error('Failed to optimize code. Please try again.');
    }
  }

  private extractImprovements(explanation: string): string[] {
    const improvements: string[] = [];
    const lines = explanation.split('\n');
    
    for (const line of lines) {
      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        improvements.push(line.trim().substring(1).trim());
      }
    }
    
    return improvements.length > 0 ? improvements : ['Performance improvements applied', 'Code readability enhanced'];
  }
}

export const codeOptimizerService = new CodeOptimizerService();
