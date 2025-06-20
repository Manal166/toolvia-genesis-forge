
export type DataFormat = 'json' | 'yaml' | 'csv';

export interface ConversionResult {
  success: boolean;
  data?: string;
  error?: string;
  detectedFormat?: DataFormat;
}

export class JsonYamlCsvService {
  // Detect format based on content
  detectFormat(input: string): DataFormat | 'unknown' {
    const trimmed = input.trim();
    
    // JSON detection
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || 
        (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
      try {
        JSON.parse(trimmed);
        return 'json';
      } catch {
        // Not valid JSON
      }
    }
    
    // CSV detection (simple heuristic)
    const lines = trimmed.split('\n');
    if (lines.length > 1 && lines[0].includes(',')) {
      const firstLineCommas = (lines[0].match(/,/g) || []).length;
      const secondLineCommas = (lines[1].match(/,/g) || []).length;
      if (firstLineCommas === secondLineCommas && firstLineCommas > 0) {
        return 'csv';
      }
    }
    
    // YAML detection (basic patterns)
    if (trimmed.includes(':') && !trimmed.includes('{') && !trimmed.includes('[')) {
      return 'yaml';
    }
    
    return 'unknown';
  }

  // Convert JSON to YAML
  jsonToYaml(jsonString: string): ConversionResult {
    try {
      const obj = JSON.parse(jsonString);
      const yaml = this.objectToYaml(obj);
      return { success: true, data: yaml };
    } catch (error) {
      return { success: false, error: 'Invalid JSON format' };
    }
  }

  // Convert JSON to CSV
  jsonToCsv(jsonString: string): ConversionResult {
    try {
      const obj = JSON.parse(jsonString);
      
      if (!Array.isArray(obj)) {
        return { success: false, error: 'JSON must be an array of objects for CSV conversion' };
      }
      
      if (obj.length === 0) {
        return { success: true, data: '' };
      }
      
      // Get all unique keys
      const keys = Array.from(new Set(obj.flatMap(item => Object.keys(item))));
      
      // Create CSV header
      const header = keys.join(',');
      
      // Create CSV rows
      const rows = obj.map(item => 
        keys.map(key => {
          const value = item[key];
          if (value === null || value === undefined) return '';
          if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return String(value);
        }).join(',')
      );
      
      const csv = [header, ...rows].join('\n');
      return { success: true, data: csv };
    } catch (error) {
      return { success: false, error: 'Invalid JSON format' };
    }
  }

  // Convert YAML to JSON
  yamlToJson(yamlString: string): ConversionResult {
    try {
      const obj = this.parseYaml(yamlString);
      const json = JSON.stringify(obj, null, 2);
      return { success: true, data: json };
    } catch (error) {
      return { success: false, error: 'Invalid YAML format' };
    }
  }

  // Convert YAML to CSV
  yamlToCsv(yamlString: string): ConversionResult {
    try {
      const obj = this.parseYaml(yamlString);
      const jsonString = JSON.stringify(obj);
      return this.jsonToCsv(jsonString);
    } catch (error) {
      return { success: false, error: 'Invalid YAML format' };
    }
  }

  // Convert CSV to JSON
  csvToJson(csvString: string): ConversionResult {
    try {
      const lines = csvString.trim().split('\n');
      if (lines.length < 2) {
        return { success: false, error: 'CSV must have at least a header and one data row' };
      }
      
      const headers = this.parseCsvLine(lines[0]);
      const result = [];
      
      for (let i = 1; i < lines.length; i++) {
        const values = this.parseCsvLine(lines[i]);
        const obj: Record<string, any> = {};
        
        headers.forEach((header, index) => {
          const value = values[index] || '';
          obj[header] = this.parseValue(value);
        });
        
        result.push(obj);
      }
      
      const json = JSON.stringify(result, null, 2);
      return { success: true, data: json };
    } catch (error) {
      return { success: false, error: 'Invalid CSV format' };
    }
  }

  // Convert CSV to YAML
  csvToYaml(csvString: string): ConversionResult {
    const jsonResult = this.csvToJson(csvString);
    if (!jsonResult.success || !jsonResult.data) {
      return jsonResult;
    }
    
    return this.jsonToYaml(jsonResult.data);
  }

  // Main conversion function
  convert(input: string, fromFormat: DataFormat, toFormat: DataFormat): ConversionResult {
    if (fromFormat === toFormat) {
      return { success: true, data: input };
    }

    switch (`${fromFormat}-${toFormat}`) {
      case 'json-yaml':
        return this.jsonToYaml(input);
      case 'json-csv':
        return this.jsonToCsv(input);
      case 'yaml-json':
        return this.yamlToJson(input);
      case 'yaml-csv':
        return this.yamlToCsv(input);
      case 'csv-json':
        return this.csvToJson(input);
      case 'csv-yaml':
        return this.csvToYaml(input);
      default:
        return { success: false, error: 'Unsupported conversion' };
    }
  }

  // Helper: Simple YAML parser (basic implementation)
  private parseYaml(yamlString: string): any {
    const lines = yamlString.trim().split('\n');
    const result: any = {};
    let currentArray: any[] | null = null;
    let currentKey = '';
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      
      if (trimmed.startsWith('- ')) {
        // Array item
        const value = trimmed.substring(2).trim();
        if (!currentArray) {
          currentArray = [];
          if (currentKey) {
            result[currentKey] = currentArray;
          }
        }
        currentArray.push(this.parseValue(value));
      } else if (trimmed.includes(':')) {
        // Key-value pair
        const [key, ...valueParts] = trimmed.split(':');
        const value = valueParts.join(':').trim();
        currentKey = key.trim();
        
        if (value === '') {
          currentArray = null;
        } else {
          result[currentKey] = this.parseValue(value);
          currentArray = null;
        }
      }
    }
    
    return result;
  }

  // Helper: Convert object to YAML
  private objectToYaml(obj: any, indent = 0): string {
    const spaces = '  '.repeat(indent);
    
    if (Array.isArray(obj)) {
      return obj.map(item => `${spaces}- ${this.valueToYaml(item, indent + 1)}`).join('\n');
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return `${spaces}${key}:\n${this.objectToYaml(value, indent + 1)}`;
          } else if (typeof value === 'object' && value !== null) {
            return `${spaces}${key}:\n${this.objectToYaml(value, indent + 1)}`;
          } else {
            return `${spaces}${key}: ${this.valueToYaml(value)}`;
          }
        })
        .join('\n');
    }
    
    return this.valueToYaml(obj);
  }

  // Helper: Convert value to YAML format
  private valueToYaml(value: any, indent = 0): string {
    if (typeof value === 'string') {
      if (value.includes('\n') || value.includes(':') || value.includes('#')) {
        return `"${value.replace(/"/g, '\\"')}"`;
      }
      return value;
    }
    
    if (typeof value === 'object' && value !== null) {
      return '\n' + this.objectToYaml(value, indent);
    }
    
    return String(value);
  }

  // Helper: Parse CSV line handling quotes
  private parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];
      
      if (char === '"' && !inQuotes) {
        inQuotes = true;
      } else if (char === '"' && inQuotes) {
        if (nextChar === '"') {
          current += '"';
          i++; // Skip next quote
        } else {
          inQuotes = false;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    
    result.push(current);
    return result;
  }

  // Helper: Parse string value to appropriate type
  private parseValue(value: string): any {
    const trimmed = value.trim();
    
    if (trimmed === 'true') return true;
    if (trimmed === 'false') return false;
    if (trimmed === 'null') return null;
    if (trimmed === '') return '';
    
    // Try to parse as number
    const num = Number(trimmed);
    if (!isNaN(num) && isFinite(num) && trimmed !== '') {
      return num;
    }
    
    return trimmed;
  }

  // Get example data for each format
  getExampleData(format: DataFormat): string {
    switch (format) {
      case 'json':
        return JSON.stringify([
          {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "active": true
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com",
            "active": false
          }
        ], null, 2);
      
      case 'yaml':
        return `- id: 1
  name: John Doe
  email: john@example.com
  active: true
- id: 2
  name: Jane Smith
  email: jane@example.com
  active: false`;
      
      case 'csv':
        return `id,name,email,active
1,John Doe,john@example.com,true
2,Jane Smith,jane@example.com,false`;
      
      default:
        return '';
    }
  }
}

export const jsonYamlCsvService = new JsonYamlCsvService();
