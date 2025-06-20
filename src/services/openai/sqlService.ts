
import { sharedOpenAIClient, OpenAIMessage } from './sharedOpenAIClient';

export class SQLService {
  async generateSQLQuery(description: string, dialect: string = 'standard'): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are a SQL expert specializing in ${dialect} SQL. Generate efficient, well-formatted SQL queries based on natural language descriptions. Include comments explaining complex parts.`
      ),
      sharedOpenAIClient.createUserMessage(`Generate a ${dialect} SQL query for: ${description}`)
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }

  async optimizeSQLQuery(query: string, dialect: string = 'standard'): Promise<string> {
    const messages: OpenAIMessage[] = [
      sharedOpenAIClient.createSystemMessage(
        `You are a SQL optimization expert. Analyze the given SQL query and provide an optimized version with explanations of the improvements made.`
      ),
      sharedOpenAIClient.createUserMessage(
        `Optimize this ${dialect} SQL query:\n\n${sharedOpenAIClient.formatCodeBlock(query, 'sql')}`
      )
    ];

    return sharedOpenAIClient.makeRequest(messages);
  }
}
