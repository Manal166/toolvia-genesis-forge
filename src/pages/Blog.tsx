
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Code, AlertCircle } from 'lucide-react';

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

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold font-mono text-white">CodeBoost</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Developer Blog
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Insights, tutorials, and best practices for modern software development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' 
                  : 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-800 border-gray-700 hover:border-blue-500">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-white border-gray-600">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-white leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-white bg-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-white">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <Link key={`featured-${post.id}`} to={`/blog/${post.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        Featured
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-700 text-white border-gray-600">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base text-white leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-gray-600 text-white bg-gray-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-white">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{formatDate(post.publishDate)}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:bg-blue-900 text-white hover:text-white">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Stay Updated</CardTitle>
              <CardDescription className="text-white">
                Subscribe to our newsletter to get the latest articles and updates delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
