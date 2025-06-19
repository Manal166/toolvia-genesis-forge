
interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

class OpenAIService {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';

  constructor() {
    // In production, this should come from environment variables
    // For now, we'll use a placeholder that users can replace
    this.apiKey = process.env.REACT_APP_OPENAI_API_KEY || '';
  }

  private async makeRequest(messages: OpenAIMessage[], model: string = 'gpt-4o'): Promise<string> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not configured. Please set REACT_APP_OPENAI_API_KEY environment variable.');
    }

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
      throw new Error(`OpenAI API Error: ${error.error?.message || response.statusText}`);
    }

    const data: OpenAIResponse = await response.json();
    return data.choices[0]?.message?.content || 'No response generated';
  }

  async explainCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert programmer who explains code in a clear, educational way. Provide detailed explanations with code breakdown, purpose, and key concepts. Format your response in markdown with clear sections and bullet points.'
      },
      {
        role: 'user',
        content: `Please explain this ${language} code in detail with clear formatting:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }

  async fixCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert programmer who fixes bugs and improves code. Return only the corrected code with comments explaining the fixes. Format the response as clean, executable code.'
      },
      {
        role: 'user',
        content: `Please fix any bugs or issues in this ${language} code and return the corrected version:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }

  async generateRegex(description: string): Promise<{ regex: string; explanation: string }> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are a regex expert. Generate a regular expression based on the description and provide a detailed explanation. Return your response in JSON format with "regex" and "explanation" fields. The explanation should be formatted with bullet points for each part of the regex.'
      },
      {
        role: 'user',
        content: `Generate a regular expression for: ${description}\n\nReturn the response in this exact JSON format:\n{\n  "regex": "your_regex_pattern_here",\n  "explanation": "• detailed explanation here"\n}`
      }
    ];

    const response = await this.makeRequest(messages);
    
    try {
      // Try to parse as JSON first
      const parsed = JSON.parse(response);
      return {
        regex: parsed.regex || '.*',
        explanation: parsed.explanation || 'No explanation provided'
      };
    } catch {
      // Fallback: try to extract regex and explanation from text
      const regexMatch = response.match(/regex["\s:]+([^",\n]+)/i);
      const explanationMatch = response.match(/explanation["\s:]+([^"]+)/i);
      
      return {
        regex: regexMatch?.[1]?.trim() || '.*',
        explanation: explanationMatch?.[1]?.trim() || response
      };
    }
  }

  async translateCode(code: string, fromLanguage: string, toLanguage: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: `You are an expert programmer who translates code between programming languages while preserving logic and functionality. Return only the translated code with brief comments explaining any syntax changes.`
      },
      {
        role: 'user',
        content: `Translate this ${fromLanguage} code to ${toLanguage}. Maintain the same logic and functionality:\n\n\`\`\`${fromLanguage}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }

  async generatePseudocode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert at creating clear, step-by-step pseudocode from programming code. Create structured pseudocode that explains the algorithm in plain English with proper formatting and clear steps.'
      },
      {
        role: 'user',
        content: `Convert this ${language} code to detailed pseudocode with clear step-by-step breakdown:\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ];

    return this.makeRequest(messages);
  }

  async generateCode(description: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: `You are an expert ${language} programmer. Generate clean, well-commented, production-ready code based on the user's description. Follow best practices and include proper error handling where appropriate.`
      },
      {
        role: 'user',
        content: `Generate ${language} code for: ${description}\n\nPlease provide clean, well-commented code that follows best practices.`
      }
    ];

    return this.makeRequest(messages);
  }
}

export const openaiService = new OpenAIService();
