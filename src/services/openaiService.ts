
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

  private async makeRequest(messages: OpenAIMessage[], model: string = 'gpt-4'): Promise<string> {
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
      const error = await response.json();
      throw new Error(`OpenAI API Error: ${error.error?.message || 'Unknown error'}`);
    }

    const data: OpenAIResponse = await response.json();
    return data.choices[0]?.message?.content || 'No response generated';
  }

  async explainCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert programmer who explains code in a clear, educational way. Provide detailed explanations with code breakdown, purpose, and key concepts.'
      },
      {
        role: 'user',
        content: `Please explain this ${language} code in detail:\n\n${code}`
      }
    ];

    return this.makeRequest(messages);
  }

  async fixCode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert programmer who fixes bugs and improves code. Return only the corrected code with comments explaining the fixes.'
      },
      {
        role: 'user',
        content: `Please fix any bugs or issues in this ${language} code and return the corrected version:\n\n${code}`
      }
    ];

    return this.makeRequest(messages);
  }

  async generateRegex(description: string): Promise<{ regex: string; explanation: string }> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are a regex expert. Generate a regular expression based on the description and provide a detailed explanation. Return your response in JSON format with "regex" and "explanation" fields.'
      },
      {
        role: 'user',
        content: `Generate a regular expression for: ${description}`
      }
    ];

    const response = await this.makeRequest(messages);
    
    try {
      const parsed = JSON.parse(response);
      return {
        regex: parsed.regex || '.*',
        explanation: parsed.explanation || 'No explanation provided'
      };
    } catch {
      // Fallback if response isn't JSON
      return {
        regex: '.*',
        explanation: response
      };
    }
  }

  async translateCode(code: string, fromLanguage: string, toLanguage: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: `You are an expert programmer who translates code between programming languages while preserving logic and functionality. Return only the translated code.`
      },
      {
        role: 'user',
        content: `Translate this ${fromLanguage} code to ${toLanguage}:\n\n${code}`
      }
    ];

    return this.makeRequest(messages);
  }

  async generatePseudocode(code: string, language: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are an expert at creating clear, step-by-step pseudocode from programming code. Create structured pseudocode that explains the algorithm in plain English.'
      },
      {
        role: 'user',
        content: `Convert this ${language} code to detailed pseudocode:\n\n${code}`
      }
    ];

    return this.makeRequest(messages);
  }
}

export const openaiService = new OpenAIService();
