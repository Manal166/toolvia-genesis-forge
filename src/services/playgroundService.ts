
export interface PlaygroundCode {
  html: string;
  css: string;
  javascript: string;
}

export interface PlaygroundResult {
  compiledCode: string;
  success: boolean;
  error?: string;
}

export const playgroundService = {
  compileCode: (code: PlaygroundCode): PlaygroundResult => {
    try {
      const { html, css, javascript } = code;
      
      // Sanitize and validate HTML
      const sanitizedHtml = sanitizeHtml(html);
      
      // Wrap CSS in style tags
      const styleTag = css.trim() ? `<style>${css}</style>` : '';
      
      // Wrap JavaScript in script tags with error handling
      const scriptTag = javascript.trim() ? `
        <script>
          try {
            ${javascript}
          } catch (error) {
            console.error('JavaScript execution error:', error);
            document.body.innerHTML += '<div style="color: red; padding: 10px; background: #fee; border: 1px solid #fcc; margin: 10px; border-radius: 4px;"><strong>JavaScript Error:</strong> ' + error.message + '</div>';
          }
        </script>
      ` : '';
      
      // Combine everything into a complete HTML document
      const compiledCode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Live Playground Preview</title>
          ${styleTag}
        </head>
        <body>
          ${sanitizedHtml}
          ${scriptTag}
        </body>
        </html>
      `;
      
      return {
        compiledCode,
        success: true
      };
    } catch (error) {
      return {
        compiledCode: '',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown compilation error'
      };
    }
  },

  getExampleCode: (): PlaygroundCode => {
    return {
      html: `<div class="container">
  <h1>Welcome to Live Playground!</h1>
  <p>Edit the HTML, CSS, and JavaScript to see changes in real-time.</p>
  <button id="clickMe" class="btn">Click Me!</button>
  <div id="output"></div>
</div>`,
      css: `.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.btn {
  background: linear-gradient(45deg, #007bff, #0056b3);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

#output {
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  min-height: 50px;
}`,
      javascript: `document.getElementById('clickMe').addEventListener('click', function() {
  const output = document.getElementById('output');
  const messages = [
    'Hello, World! 🌍',
    'JavaScript is working! ⚡',
    'Keep coding! 💻',
    'You're awesome! 🚀'
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  output.innerHTML = '<p style="color: #007bff; font-weight: bold;">' + randomMessage + '</p>';
});`
    };
  },

  downloadCode: (code: PlaygroundCode, filename: string = 'playground'): void => {
    const result = playgroundService.compileCode(code);
    if (result.success) {
      const blob = new Blob([result.compiledCode], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },

  copyAllCode: async (code: PlaygroundCode): Promise<void> => {
    const result = playgroundService.compileCode(code);
    if (result.success) {
      await navigator.clipboard.writeText(result.compiledCode);
    }
  }
};

// Basic HTML sanitization to prevent XSS while allowing HTML tags
function sanitizeHtml(html: string): string {
  // Remove script tags that aren't in our controlled environment
  const scriptRegex = /<script[^>]*>[\s\S]*?<\/script>/gi;
  let sanitized = html.replace(scriptRegex, '');
  
  // Remove dangerous event handlers
  const eventHandlers = /on\w+\s*=\s*["'][^"']*["']/gi;
  sanitized = sanitized.replace(eventHandlers, '');
  
  return sanitized;
}
