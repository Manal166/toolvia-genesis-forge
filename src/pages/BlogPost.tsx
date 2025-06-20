
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';

// Clean blog posts data that will always work
const blogPosts = [
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

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="aspect-video overflow-hidden rounded-lg mb-6">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              {post.category}
            </Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 text-gray-400">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-gray-300 border-gray-600">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-white">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold mt-5 mb-2 text-white">{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold text-blue-400 mt-4 mb-2">{paragraph.slice(2, -2)}</p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-6 mb-1 text-gray-300">{paragraph.substring(2)}</li>;
                } else if (paragraph.match(/^\d+\./)) {
                  return <li key={index} className="ml-6 mb-1 text-gray-300 list-decimal">{paragraph.substring(paragraph.indexOf('.') + 2)}</li>;
                } else if (paragraph.startsWith('```')) {
                  const language = paragraph.substring(3);
                  return <div key={index} className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4"><pre><code className="text-green-400">{language}</code></pre></div>;
                } else if (paragraph.match(/^\`\`\`[\w]*$/)) {
                  return <div key={index} className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4"><pre><code className="text-green-400">{paragraph}</code></pre></div>;
                } else if (paragraph.trim() === '') {
                  return <div key={index} className="h-4"></div>;
                } else {
                  return <p key={index} className="mb-4 text-gray-300 leading-relaxed">{paragraph}</p>;
                }
              })}
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={relatedPost.featuredImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="text-xs w-fit">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors text-white">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-400">{relatedPost.readTime}</p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
