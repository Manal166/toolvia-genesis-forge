
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    excerpt: 'Learn the fundamentals of web development with modern tools and best practices.',
    content: `# Getting Started with Web Development

Web development is an exciting field that combines creativity with technical skills. Whether you're building your first website or looking to advance your career, understanding the fundamentals is crucial.

## Essential Technologies

**HTML (HyperText Markup Language)** - The backbone of web content
- Provides structure to web pages
- Uses semantic elements for better accessibility
- Foundation for all web development

**CSS (Cascading Style Sheets)** - The styling language
- Controls visual presentation
- Enables responsive design
- Modern CSS includes flexbox and grid layouts

**JavaScript** - The programming language of the web
- Adds interactivity to websites
- Handles user interactions
- Powers modern web applications

## Getting Started Steps

1. **Set up your development environment**
   - Choose a code editor (VS Code, Atom, Sublime Text)
   - Install a web browser with developer tools
   - Set up version control with Git

2. **Learn HTML basics**
   - Understand document structure
   - Master common HTML elements
   - Practice semantic markup

3. **Style with CSS**
   - Learn selectors and properties
   - Understand the box model
   - Practice responsive design

4. **Add JavaScript functionality**
   - Start with basic syntax
   - Learn DOM manipulation
   - Understand event handling

## Best Practices

- Write clean, readable code
- Use version control consistently
- Test across different browsers
- Focus on accessibility
- Keep learning new technologies

## Next Steps

Once you're comfortable with the basics, explore modern frameworks like React, Vue, or Angular. Consider learning about backend development with Node.js or other server-side technologies.

Remember, web development is a journey of continuous learning. Start with the basics and build your skills progressively.`,
    author: 'CodeBoost Team',
    publishDate: '2024-12-01',
    readTime: '5 min read',
    category: 'Web Development',
    tags: ['JavaScript', 'HTML', 'CSS'],
    featuredImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop'
  },
  {
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
  },
  {
    id: '3',
    title: 'React Best Practices',
    excerpt: 'Learn essential React patterns and best practices for building scalable applications.',
    content: `# React Best Practices

React is a powerful library for building user interfaces. Following best practices ensures your applications are maintainable, performant, and scalable.

## Component Organization

**Functional Components** - Prefer function components over class components:

\`\`\`javascript
// Good
const MyComponent = ({ title }) => {
  return <h1>{title}</h1>;
};

// Avoid (unless you need class-specific features)
class MyComponent extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
\`\`\`

## State Management

**Use useState for Local State**

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

**Use useEffect for Side Effects**

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Performance Optimization

**Memoization**
- Use React.memo for components
- Use useMemo for expensive calculations
- Use useCallback for function references

**Code Splitting**
- Implement lazy loading for routes
- Split large bundles into smaller chunks

## Key Props

Always provide unique keys for list items:

\`\`\`javascript
const items = data.map(item => (
  <Item key={item.id} data={item} />
));
\`\`\`

## Error Boundaries

Implement error boundaries to catch and handle errors:

\`\`\`javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
\`\`\`

## Best Practices Summary

1. **Keep components small and focused**
2. **Use meaningful prop names**
3. **Implement proper error handling**
4. **Follow consistent naming conventions**
5. **Write tests for your components**
6. **Use TypeScript for better type safety**

Following these practices will help you build robust React applications that are easy to maintain and scale.`,
    author: 'CodeBoost Team',
    publishDate: '2024-11-25',
    readTime: '7 min read',
    category: 'React',
    tags: ['React', 'Best Practices', 'Performance'],
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  }
];
