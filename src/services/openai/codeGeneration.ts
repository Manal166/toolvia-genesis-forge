
import { BaseOpenAIService, OpenAIMessage } from './base';

export class CodeGenerationService extends BaseOpenAIService {
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

  async generateSQLQuery(description: string, dialect: string): Promise<string> {
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are a professional SQL expert. Generate safe, efficient SQL queries based on user requests. Return only the SQL code without any explanations or markdown formatting.'
      },
      {
        role: 'user',
        content: `Generate a SQL query for the following request using ${dialect}. Return only the SQL code.

Request:
${description}`
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
      const parsed = JSON.parse(response);
      return {
        regex: parsed.regex || '.*',
        explanation: parsed.explanation || 'No explanation provided'
      };
    } catch {
      const regexMatch = response.match(/regex["\s:]+([^",\n]+)/i);
      const explanationMatch = response.match(/explanation["\s:]+([^"]+)/i);
      
      return {
        regex: regexMatch?.[1]?.trim() || '.*',
        explanation: explanationMatch?.[1]?.trim() || response
      };
    }
  }
}
