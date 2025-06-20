
import { openaiService } from './openaiService';

interface CodeExplanationResponse {
  explanation: string;
  success: boolean;
  error?: string;
}

export type ExplanationTone = 'beginner' | 'technical' | 'seo-friendly';

export const explainCode = async (
  code: string, 
  language?: string, 
  tone: ExplanationTone = 'technical'
): Promise<string> => {
  try {
    return await openaiService.explainCodeWithTone(code, language || 'javascript', tone);
  } catch (error) {
    console.error('Error explaining code:', error);
    throw error;
  }
};

const generateMockExplanation = (code: string, language?: string): string => {
  // Enhanced mock explanation as fallback
  const lines = code.split('\n').filter(line => line.trim());
  
  return `## Code Analysis for ${language || 'Unknown Language'}

**Function/Code Purpose:**
This code defines functionality for ${detectSpecificPurpose(code, language)}.

**Line-by-Line Breakdown:**
${lines.slice(0, 5).map((line, index) => 
  `${index + 1}. \`${line.trim()}\` - ${analyzeCodeLine(line, language)}`
).join('\n')}

**Key Components:**
- **Variables**: ${extractVariables(code).join(', ') || 'None detected'}
- **Functions**: ${extractFunctions(code).join(', ') || 'None detected'}
- **Control Flow**: ${detectControlFlow(code)}

**How It Works:**
${generateLogicExplanation(code)}

**Return Value:**
${detectReturnValue(code)}

This code follows ${language || 'standard'} conventions and implements ${detectPattern(code)}.`;
};

const detectSpecificPurpose = (code: string, language?: string): string => {
  const lowerCode = code.toLowerCase();
  
  if (lowerCode.includes('function') && lowerCode.includes('return')) {
    if (lowerCode.includes('%') && lowerCode.includes('===')) return 'checking if a number meets a specific condition (likely even/odd check)';
    if (lowerCode.includes('length')) return 'processing or validating string/array length';
    if (lowerCode.includes('for') || lowerCode.includes('while')) return 'iterating through data and performing calculations';
    if (lowerCode.includes('if') && lowerCode.includes('else')) return 'conditional logic with branching behavior';
  }
  
  if (lowerCode.includes('const') || lowerCode.includes('let')) return 'variable declaration and data manipulation';
  if (lowerCode.includes('class')) return 'object-oriented programming with class definition';
  if (lowerCode.includes('async') || lowerCode.includes('await')) return 'asynchronous operations and data fetching';
  
  return 'general programming logic';
};

const analyzeCodeLine = (line: string, language?: string): string => {
  const trimmed = line.trim();
  
  if (trimmed.startsWith('function')) return 'Function declaration with parameters';
  if (trimmed.startsWith('return')) return 'Returns the result of the computation';
  if (trimmed.includes('const') || trimmed.includes('let')) return 'Variable declaration and assignment';
  if (trimmed.includes('if')) return 'Conditional statement for branching logic';
  if (trimmed.includes('for') || trimmed.includes('while')) return 'Loop structure for iteration';
  if (trimmed.includes('===') || trimmed.includes('==')) return 'Comparison operation';
  if (trimmed.includes('%')) return 'Modulo operation for remainder calculation';
  
  return 'Code execution statement';
};

const extractVariables = (code: string): string[] => {
  const vars = [];
  const constMatches = code.match(/const\s+(\w+)/g);
  const letMatches = code.match(/let\s+(\w+)/g);
  const varMatches = code.match(/var\s+(\w+)/g);
  
  if (constMatches) vars.push(...constMatches.map(m => m.split(' ')[1]));
  if (letMatches) vars.push(...letMatches.map(m => m.split(' ')[1]));
  if (varMatches) vars.push(...varMatches.map(m => m.split(' ')[1]));
  
  return vars;
};

const extractFunctions = (code: string): string[] => {
  const functions = [];
  const functionMatches = code.match(/function\s+(\w+)/g);
  const arrowMatches = code.match(/const\s+(\w+)\s*=/g);
  
  if (functionMatches) functions.push(...functionMatches.map(m => m.split(' ')[1]));
  if (arrowMatches) functions.push(...arrowMatches.map(m => m.split(' ')[1]));
  
  return functions;
};

const detectControlFlow = (code: string): string => {
  const hasIf = code.includes('if');
  const hasFor = code.includes('for');
  const hasWhile = code.includes('while');
  const hasSwitch = code.includes('switch');
  
  const flows = [];
  if (hasIf) flows.push('conditional statements');
  if (hasFor || hasWhile) flows.push('loops');
  if (hasSwitch) flows.push('switch cases');
  
  return flows.length > 0 ? flows.join(', ') : 'linear execution';
};

const generateLogicExplanation = (code: string): string => {
  if (code.includes('% 2 === 0')) {
    return 'The function uses the modulo operator (%) to divide the input by 2 and checks if the remainder equals 0. If true, the number is even; otherwise, it\'s odd.';
  }
  
  if (code.includes('for') && code.includes('length')) {
    return 'The code iterates through a collection using a loop, processing each element according to the defined logic.';
  }
  
  return 'The code executes its logic step by step, processing the input according to the defined algorithm.';
};

const detectReturnValue = (code: string): string => {
  if (code.includes('return true') || code.includes('return false')) {
    return 'Boolean value (true or false) based on the condition evaluation';
  }
  
  if (code.includes('return ')) {
    return 'Computed result based on the input parameters and logic';
  }
  
  return 'No explicit return value (void function)';
};

const detectPattern = (code: string): string => {
  if (code.includes('% 2')) return 'a mathematical parity check pattern';
  if (code.includes('for') && code.includes('length')) return 'an iteration pattern';
  if (code.includes('if') && code.includes('else')) return 'a conditional branching pattern';
  
  return 'standard programming patterns';
};
