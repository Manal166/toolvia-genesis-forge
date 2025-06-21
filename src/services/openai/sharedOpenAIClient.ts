
interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string | Array<{
    type: 'text' | 'image_url';
    text?: string;
    image_url?: {
      url: string;
    };
  }>;
}

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export class SharedOpenAIClient {
  private baseUrl = 'https://api.openai.com/v1/chat/completions';

  private getApiKey(): string {
    // First check localStorage for user-provided key
    const userApiKey = localStorage.getItem('openai_api_key');
    if (userApiKey) {
      return userApiKey;
    }

    // Fallback to environment variable
    const envApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (envApiKey) {
      return envApiKey;
    }

    throw new Error('OpenAI API key not found. Please set your API key in Settings.');
  }

  async makeRequest(messages: OpenAIMessage[], model: string = 'gpt-4.1-2025-04-14'): Promise<string> {
    let apiKey: string;
    
    try {
      apiKey = this.getApiKey();
    } catch (error) {
      throw new Error('OpenAI API key not configured. Please enter your API key in Settings to use this feature.');
    }

    console.log('Making OpenAI request with:', { model, messageCount: messages.length });

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
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
      console.error('OpenAI API Error:', error);
      
      if (response.status === 401) {
        throw new Error('Invalid OpenAI API key. Please check your API key in Settings.');
      }
      
      throw new Error(`OpenAI API Error: ${error.error?.message || response.statusText}`);
    }

    const data: OpenAIResponse = await response.json();
    const result = data.choices[0]?.message?.content || 'No response generated';
    console.log('OpenAI response received, length:', result.length);
    return result;
  }

  createSystemMessage(content: string): OpenAIMessage {
    return { role: 'system', content };
  }

  createUserMessage(content: string): OpenAIMessage {
    return { role: 'user', content };
  }

  formatCodeBlock(code: string, language: string): string {
    return `\`\`\`${language}\n${code}\n\`\`\``;
  }
}

export type { OpenAIMessage };
export const sharedOpenAIClient = new SharedOpenAIClient();
