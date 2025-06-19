
import { openaiService } from './openaiService';

interface APIDocResult {
  documentation: string;
  endpoints: APIEndpoint[];
  summary: string;
}

interface APIEndpoint {
  method: string;
  path: string;
  description: string;
  parameters?: string[];
  responses?: string[];
}

class APIDocService {
  async generateDocumentation(code: string, language: string): Promise<APIDocResult> {
    try {
      const response = await openaiService.generateAPIDocumentation(code, language);
      
      // Parse the response to extract structured documentation
      const endpoints = this.extractEndpoints(response);
      const summary = this.extractSummary(response);
      
      return {
        documentation: response,
        endpoints,
        summary
      };
    } catch (error) {
      console.error('Error generating API documentation:', error);
      throw new Error('Failed to generate API documentation. Please try again.');
    }
  }

  private extractEndpoints(documentation: string): APIEndpoint[] {
    const endpoints: APIEndpoint[] = [];
    const lines = documentation.split('\n');
    
    let currentEndpoint: Partial<APIEndpoint> = {};
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine.includes('GET ') || trimmedLine.includes('POST ') || 
          trimmedLine.includes('PUT ') || trimmedLine.includes('DELETE ')) {
        if (currentEndpoint.method) {
          endpoints.push(currentEndpoint as APIEndpoint);
        }
        
        const parts = trimmedLine.split(' ');
        currentEndpoint = {
          method: parts[0],
          path: parts[1] || '',
          description: parts.slice(2).join(' ') || '',
          parameters: [],
          responses: []
        };
      }
    }
    
    if (currentEndpoint.method) {
      endpoints.push(currentEndpoint as APIEndpoint);
    }
    
    return endpoints;
  }

  private extractSummary(documentation: string): string {
    const lines = documentation.split('\n');
    const summaryLines = lines.slice(0, 3).filter(line => line.trim().length > 0);
    return summaryLines.join(' ').substring(0, 200) + '...';
  }
}

export const apiDocService = new APIDocService();
