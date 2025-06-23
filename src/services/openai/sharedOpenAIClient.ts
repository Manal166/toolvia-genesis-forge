
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
      console.log('Using user-provided API key:', userApiKey.substring(0, 7) + '...');
      return userApiKey;
    }

    // Fallback to environment variable
    const envApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (envApiKey) {
      console.log('Using environment API key:', envApiKey.substring(0, 7) + '...');
      return envApiKey;
    }

    throw new Error('OpenAI API key not found. Please set your API key in Settings.');
  }

  async makeRequest(messages: OpenAIMessage[], model: string = 'gpt-4o-mini'): Promise<string> {
    let apiKey: string;
    
    try {
      apiKey = this.getApiKey();
    } catch (error) {
      console.error('API key error:', error);
      throw new Error('OpenAI API key not configured. Please enter your API key in Settings to use this feature.');
    }

    console.log('Making OpenAI request with:', { 
      model, 
      messageCount: messages.length,
      apiKeyPrefix: apiKey.substring(0, 7) + '...'
    });

    try {
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

      console.log('OpenAI response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenAI API Error Response:', errorText);
        
        let errorMessage = 'OpenAI API Error';
        
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error?.message || errorMessage;
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
        }
        
        if (response.status === 401) {
          throw new Error('Invalid OpenAI API key. Please check your API key in Settings.');
        }
        
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please wait a moment before trying again.');
        }
        
        throw new Error(`OpenAI API Error (${response.status}): ${errorMessage}`);
      }

      const data: OpenAIResponse = await response.json();
      const result = data.choices[0]?.message?.content || 'No response generated';
      
      console.log('OpenAI response received successfully:', {
        resultLength: result.length,
        hasChoices: !!data.choices?.length
      });
      
      return result;
    } catch (error) {
      console.error('Request failed:', error);
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Network error: Unable to connect to OpenAI. Please check your internet connection.');
      }
      
      throw error;
    }
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
