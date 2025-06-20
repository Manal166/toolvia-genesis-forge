
import { openaiService } from './openaiService';

interface SQLQueryResult {
  query: string;
  dialect: string;
  description: string;
}

const SUPPORTED_DIALECTS = [
  'MySQL',
  'PostgreSQL', 
  'SQLite',
  'SQL Server',
  'Oracle',
  'MariaDB'
];

class SQLQueryService {
  async generateSQLQuery(description: string, dialect: string): Promise<SQLQueryResult> {
    try {
      const response = await openaiService.generateSQLQuery(description, dialect);
      
      return {
        query: response,
        dialect,
        description
      };
    } catch (error) {
      console.error('Error generating SQL query:', error);
      throw new Error('Failed to generate SQL query. Please try again.');
    }
  }

  getSupportedDialects(): string[] {
    return SUPPORTED_DIALECTS;
  }

  getExampleQueries(): Array<{ description: string; dialect: string }> {
    return [
      {
        description: "Find all customers who made orders in the last 30 days",
        dialect: "MySQL"
      },
      {
        description: "Get the top 5 products by sales volume with their categories",
        dialect: "PostgreSQL"
      },
      {
        description: "Update all inactive users to set their status to 'archived'",
        dialect: "SQL Server"
      },
      {
        description: "Create a table for storing employee information with proper indexes",
        dialect: "MySQL"
      }
    ];
  }
}

export const sqlQueryService = new SQLQueryService();
