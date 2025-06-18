
interface CodeExplanationResponse {
  explanation: string;
  success: boolean;
  error?: string;
}

export const explainCode = async (code: string, language?: string): Promise<string> => {
  // Simulate API call for now - in production, this would call your AI service
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockExplanation = generateMockExplanation(code, language);
      resolve(mockExplanation);
    }, 2000);
  });
};

const generateMockExplanation = (code: string, language?: string): string => {
  // Mock explanation based on code content
  if (code.includes('function') || code.includes('const') || code.includes('let')) {
    return `This ${language || 'JavaScript'} code contains the following components:

**Function Declaration/Variable Assignment:**
${code.split('\n').slice(0, 3).map(line => `• ${line.trim()}`).join('\n')}

**Code Breakdown:**
1. **Variable Declaration**: The code starts by declaring variables or functions
2. **Logic Implementation**: The main functionality is implemented through conditional statements and loops
3. **Return/Output**: The code produces a result or performs an action

**Purpose**: This code appears to be designed for ${detectCodePurpose(code)}

**Key Concepts Used:**
- Variable assignment and scoping
- Function definitions and calls
- Control flow structures
- Data manipulation

This code follows standard ${language || 'JavaScript'} conventions and is structured for readability and maintainability.`;
  }

  if (code.includes('<') && code.includes('>')) {
    return `This HTML/JSX code creates a user interface with the following structure:

**HTML Elements:**
${code.split('\n').slice(0, 5).map(line => line.trim() ? `• ${line.trim()}` : '').filter(Boolean).join('\n')}

**Structure Analysis:**
1. **Container Elements**: Uses div, section, or other container elements for layout
2. **Content Elements**: Includes text, images, or interactive elements
3. **Styling**: May include CSS classes or inline styles for presentation

**Purpose**: This markup creates ${detectMarkupPurpose(code)}

**Best Practices Observed:**
- Proper element nesting
- Semantic HTML usage
- Accessible structure
- Clean code organization`;
  }

  return `This code snippet contains ${code.split('\n').length} lines of ${language || 'code'}.

**General Analysis:**
The code appears to implement functionality related to ${detectCodePurpose(code)}.

**Code Structure:**
- Uses standard programming constructs
- Follows readable formatting conventions
- Implements logical flow

**Key Features:**
- Variable declarations and assignments
- Control flow structures
- Function definitions or method calls

**Recommendations:**
- Code appears well-structured
- Consider adding comments for complex logic
- Ensure proper error handling where needed`;
};

const detectCodePurpose = (code: string): string => {
  if (code.toLowerCase().includes('login') || code.toLowerCase().includes('auth')) return 'user authentication';
  if (code.toLowerCase().includes('form') || code.toLowerCase().includes('input')) return 'form handling and user input';
  if (code.toLowerCase().includes('api') || code.toLowerCase().includes('fetch')) return 'API communication and data fetching';
  if (code.toLowerCase().includes('calculate') || code.toLowerCase().includes('math')) return 'mathematical calculations';
  if (code.toLowerCase().includes('render') || code.toLowerCase().includes('component')) return 'UI rendering and component logic';
  return 'general programming functionality';
};

const detectMarkupPurpose = (code: string): string => {
  if (code.toLowerCase().includes('form')) return 'a form interface for user input';
  if (code.toLowerCase().includes('nav') || code.toLowerCase().includes('menu')) return 'a navigation menu';
  if (code.toLowerCase().includes('card') || code.toLowerCase().includes('item')) return 'a card or item display component';
  if (code.toLowerCase().includes('button')) return 'interactive buttons and controls';
  return 'a user interface component';
};
