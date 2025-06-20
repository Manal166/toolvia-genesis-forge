
import { BlogPost } from '@/types/blogTypes';

export const modernJavaScriptPost: BlogPost = {
  id: '2',
  title: 'Modern JavaScript Features',
  excerpt: 'Discover the latest JavaScript features and how to use them in your projects.',
  content: `# Modern JavaScript Features

JavaScript has evolved significantly over the years. Modern ES6+ features make code more readable, maintainable, and powerful.

## Arrow Functions

Arrow functions provide a concise way to write function expressions:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

## Template Literals

Template literals make string interpolation easier:

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;
\`\`\`

## Destructuring

Extract values from arrays and objects:

\`\`\`javascript
// Array destructuring
const [first, second] = [1, 2, 3];

// Object destructuring
const { name, age } = { name: 'John', age: 30 };
\`\`\`

## Spread and Rest Operators

The spread operator (...) expands elements:

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
\`\`\`

## Promises and Async/Await

Handle asynchronous operations elegantly:

\`\`\`javascript
// Using async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## Modules

Organize code with ES6 modules:

\`\`\`javascript
// Export
export const myFunction = () => {};

// Import
import { myFunction } from './myModule.js';
\`\`\`

## Practical Tips

- Use arrow functions for short, simple functions
- Leverage destructuring for cleaner code
- Embrace async/await for better async code
- Use modules to organize your codebase
- Practice these features in real projects

Modern JavaScript features make development more enjoyable and productive. Start incorporating them into your projects today!`,
  author: 'CodeBoost Team',
  publishDate: '2024-11-28',
  readTime: '8 min read',
  category: 'JavaScript',
  tags: ['ES6', 'Modern JS', 'Development'],
  featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
};
