
import * as prettier from 'prettier';
import { toast } from '@/hooks/use-toast';

export type SupportedLanguage = 'html' | 'css' | 'javascript';
export type FormatterMode = 'prettify' | 'minify';

export interface FormatResult {
  code: string;
  success: boolean;
  error?: string;
}

class CodeFormatterService {
  async formatCode(
    code: string,
    language: SupportedLanguage,
    mode: FormatterMode
  ): Promise<FormatResult> {
    try {
      if (!code.trim()) {
        return { code: '', success: true };
      }

      let result: string;

      if (mode === 'prettify') {
        result = await this.prettifyCode(code, language);
      } else {
        result = this.minifyCode(code, language);
      }

      return { code: result, success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return { 
        code: code, 
        success: false, 
        error: errorMessage 
      };
    }
  }

  private async prettifyCode(code: string, language: SupportedLanguage): Promise<string> {
    switch (language) {
      case 'html':
        return await prettier.format(code, { 
          parser: 'html',
          htmlWhitespaceSensitivity: 'css',
          printWidth: 80,
          tabWidth: 2,
          useTabs: false
        });
      
      case 'css':
        return await prettier.format(code, { 
          parser: 'css',
          printWidth: 80,
          tabWidth: 2,
          useTabs: false
        });
      
      case 'javascript':
        return await prettier.format(code, { 
          parser: 'babel',
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true
        });
      
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }

  private minifyCode(code: string, language: SupportedLanguage): string {
    switch (language) {
      case 'html':
        return this.minifyHTML(code);
      
      case 'css':
        return this.minifyCSS(code);
      
      case 'javascript':
        return this.minifyJS(code);
      
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }

  private minifyHTML(html: string): string {
    return html
      // Remove comments
      .replace(/<!--[\s\S]*?-->/g, '')
      // Remove extra whitespace between tags
      .replace(/>\s+</g, '><')
      // Remove leading/trailing whitespace
      .replace(/^\s+|\s+$/gm, '')
      // Remove empty lines
      .replace(/\n\s*\n/g, '\n')
      // Collapse multiple spaces into one
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  private minifyCSS(css: string): string {
    return css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove extra whitespace
      .replace(/\s+/g, ' ')
      // Remove space around certain characters
      .replace(/\s*([{}:;,>+~])\s*/g, '$1')
      // Remove trailing semicolon before }
      .replace(/;}/g, '}')
      // Remove leading/trailing whitespace
      .trim();
  }

  private minifyJS(js: string): string {
    return js
      // Remove single-line comments (but preserve URLs)
      .replace(/(?<!:)\/\/.*$/gm, '')
      // Remove multi-line comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove extra whitespace
      .replace(/\s+/g, ' ')
      // Remove space around certain operators
      .replace(/\s*([=+\-*/%<>!&|?:;,{}()[\]])\s*/g, '$1')
      // Remove trailing semicolons where possible
      .replace(/;\s*}/g, '}')
      // Remove leading/trailing whitespace
      .trim();
  }

  getExampleCode(language: SupportedLanguage): string {
    switch (language) {
      case 'html':
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example Page</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: #333; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Code Minifier</h1>
        <p>This is an example HTML document that can be minified or prettified.</p>
        <button onclick="alert('Hello World!')">Click me</button>
    </div>
</body>
</html>`;

      case 'css':
        return `/* Example CSS Code */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
  color: #2c3e50;
  margin-bottom: 0.5em;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #2980b9;
}`;

      case 'javascript':
        return `// Example JavaScript Code
function calculateTotal(items) {
  let total = 0;
  
  for (let i = 0; i < items.length; i++) {
    if (items[i].price && items[i].quantity) {
      total += items[i].price * items[i].quantity;
    }
  }
  
  return total;
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }
  
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
      });
    }
  }
  
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  }
  
  getTotal() {
    const subtotal = calculateTotal(this.items);
    return subtotal - (subtotal * this.discount);
  }
}

// Usage example
const cart = new ShoppingCart();
cart.addItem({ id: 1, name: 'Laptop', price: 999.99 }, 1);
cart.addItem({ id: 2, name: 'Mouse', price: 29.99 }, 2);

console.log('Total:', cart.getTotal());`;
    }
  }

  async copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Code has been copied to your clipboard",
      });
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      toast({
        title: "Copy failed",
        description: "Failed to copy code to clipboard",
        variant: "destructive",
      });
    }
  }

  downloadCode(code: string, language: SupportedLanguage, mode: FormatterMode): void {
    try {
      const blob = new Blob([code], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${mode}-code.${this.getFileExtension(language)}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Download started",
        description: `${mode === 'prettify' ? 'Formatted' : 'Minified'} code has been downloaded`,
      });
    } catch (error) {
      console.error('Failed to download file:', error);
      toast({
        title: "Download failed",
        description: "Failed to download the code file",
        variant: "destructive",
      });
    }
  }

  private getFileExtension(language: SupportedLanguage): string {
    switch (language) {
      case 'html': return 'html';
      case 'css': return 'css';
      case 'javascript': return 'js';
      default: return 'txt';
    }
  }
}

export const codeFormatterService = new CodeFormatterService();
