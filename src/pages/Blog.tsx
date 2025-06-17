
import { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Calendar, User, ArrowRight, ArrowLeft, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const blogPosts = [
    {
      id: 1,
      title: "How to Write Cleaner Python Code: 5 Essential Tips",
      excerpt: "Discover proven techniques to write more readable, maintainable Python code that your team will love.",
      author: "Sarah Chen",
      date: "2024-06-15",
      readTime: "8 min read",
      category: "Python",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      content: `
# How to Write Cleaner Python Code: 5 Essential Tips

Writing clean, readable code is crucial for any Python developer. Here are five essential tips that will help you write better Python code.

## 1. Use Descriptive Variable Names

Instead of:
\`\`\`python
x = 10
y = 20
z = x + y
\`\`\`

Use:
\`\`\`python
price = 10
tax = 20
total_cost = price + tax
\`\`\`

## 2. Follow PEP 8 Guidelines

PEP 8 is the official style guide for Python. Key points:
- Use 4 spaces for indentation
- Keep lines under 79 characters
- Use snake_case for variables and functions
- Use UPPER_CASE for constants

## 3. Write Docstrings

Always document your functions:
\`\`\`python
def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius (float): The radius of the circle
        
    Returns:
        float: The area of the circle
    """
    return 3.14159 * radius ** 2
\`\`\`

## 4. Use List Comprehensions

Instead of:
\`\`\`python
squares = []
for i in range(10):
    squares.append(i ** 2)
\`\`\`

Use:
\`\`\`python
squares = [i ** 2 for i in range(10)]
\`\`\`

## 5. Handle Exceptions Properly

\`\`\`python
try:
    result = divide(a, b)
except ZeroDivisionError:
    print("Cannot divide by zero")
except TypeError:
    print("Invalid input types")
\`\`\`

Following these tips will make your Python code more professional and maintainable.
      `
    },
    {
      id: 2,
      title: "Best Tools for Frontend Developers in 2024",
      excerpt: "A comprehensive guide to the most essential tools every frontend developer should know about this year.",
      author: "Alex Rodriguez",
      date: "2024-06-12",
      readTime: "12 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      content: `
# Best Tools for Frontend Developers in 2024

The frontend development landscape is constantly evolving. Here are the essential tools you should know about in 2024.

## Code Editors & IDEs

### Visual Studio Code
Still the most popular choice among developers:
- Excellent extensions ecosystem
- Built-in Git integration
- Powerful debugging capabilities

### WebStorm
JetBrains' offering for web development:
- Advanced refactoring tools
- Intelligent code completion
- Built-in tools for testing and debugging

## Frontend Frameworks

### React
Continues to dominate the frontend space:
- Component-based architecture
- Large ecosystem and community
- Excellent tooling support

### Vue.js
Growing in popularity:
- Gentle learning curve
- Excellent documentation
- Progressive framework design

### Svelte
The newcomer making waves:
- Compile-time optimizations
- Smaller bundle sizes
- Simple, intuitive syntax

## Build Tools

### Vite
Fast and modern build tool:
- Lightning-fast hot reloading
- Native ES modules support
- Plugin ecosystem

### Webpack
Still widely used:
- Mature and stable
- Extensive plugin system
- Great for complex configurations

## CSS Tools

### Tailwind CSS
Utility-first CSS framework:
- Rapid development
- Consistent design system
- Highly customizable

### Sass/SCSS
CSS preprocessor:
- Variables and mixins
- Nested rules
- Modular architecture

## Version Control

### Git
Essential for any developer:
- Distributed version control
- Branching and merging
- Collaboration features

## Package Managers

### npm
The default choice:
- Huge package registry
- Built into Node.js
- Familiar to most developers

### Yarn
Alternative with benefits:
- Faster installation
- Better security
- Improved offline support

## Testing Tools

### Jest
Popular testing framework:
- Zero configuration
- Snapshot testing
- Mocking capabilities

### Cypress
End-to-end testing:
- Real browser testing
- Time-travel debugging
- Easy setup

These tools will help you build better frontend applications more efficiently in 2024.
      `
    },
    {
      id: 3,
      title: "JavaScript ES2024: New Features You Should Know",
      excerpt: "Explore the latest JavaScript features that are changing how we write modern web applications.",
      author: "Emma Thompson",
      date: "2024-06-10",
      readTime: "10 min read",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      content: `
# JavaScript ES2024: New Features You Should Know

JavaScript continues to evolve with exciting new features. Let's explore what ES2024 brings to the table.

## Array.fromAsync()

A new way to create arrays from async iterables:

\`\`\`javascript
// Before
const results = [];
for await (const item of asyncIterable) {
  results.push(item);
}

// Now
const results = await Array.fromAsync(asyncIterable);
\`\`\`

## Object.groupBy()

Group array elements by a key:

\`\`\`javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const groupedByAge = Object.groupBy(people, person => person.age);
// { 25: [Alice, Charlie], 30: [Bob] }
\`\`\`

## Promise.withResolvers()

A more convenient way to create promises:

\`\`\`javascript
// Before
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// Now
const { promise, resolve, reject } = Promise.withResolvers();
\`\`\`

## String.isWellFormed()

Check if a string is well-formed Unicode:

\`\`\`javascript
const validString = "Hello, World!";
const invalidString = "\\uD800"; // lone surrogate

console.log(validString.isWellFormed()); // true
console.log(invalidString.isWellFormed()); // false
\`\`\`

## ArrayBuffer.prototype.transfer()

Transfer ownership of an ArrayBuffer:

\`\`\`javascript
const buffer = new ArrayBuffer(16);
const newBuffer = buffer.transfer(32); // Transfer and resize
\`\`\`

## Conclusion

These new features make JavaScript more powerful and developer-friendly. Start experimenting with them in your projects!
      `
    },
    {
      id: 4,
      title: "Building Responsive UIs with CSS Grid and Flexbox",
      excerpt: "Master the art of creating flexible layouts that work perfectly on any device size.",
      author: "David Kim",
      date: "2024-06-08",
      readTime: "15 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      content: `
# Building Responsive UIs with CSS Grid and Flexbox

Creating responsive layouts is essential in modern web development. Let's explore how to use CSS Grid and Flexbox effectively.

## Understanding the Difference

### Flexbox
- One-dimensional layout (row or column)
- Great for components and small-scale layouts
- Content-based sizing

### CSS Grid
- Two-dimensional layout (rows and columns)
- Ideal for page layouts
- Grid-based sizing

## Flexbox Examples

### Basic Flex Container
\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

### Responsive Navigation
\`\`\`css
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-item {
  flex: 1 1 auto;
  min-width: 120px;
}
\`\`\`

## CSS Grid Examples

### Basic Grid Layout
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
\`\`\`

### Complex Layout
\`\`\`css
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

## Combining Both

You can use Grid for the overall layout and Flexbox for components:

\`\`\`css
/* Grid for page layout */
.page {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
}

/* Flexbox for component layout */
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: auto;
}
\`\`\`

## Responsive Design Tips

1. **Use relative units**: em, rem, %, vw, vh
2. **Mobile-first approach**: Start with mobile styles
3. **Progressive enhancement**: Add complexity for larger screens
4. **Test on real devices**: Emulators aren't always accurate

## Media Queries Best Practices

\`\`\`css
/* Mobile first */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
\`\`\`

Mastering these layout methods will help you create beautiful, responsive interfaces that work great on any device.
      `
    },
    {
      id: 5,
      title: "Getting Started with TypeScript: A Beginner's Guide",
      excerpt: "Learn why TypeScript is becoming essential for modern JavaScript development and how to get started.",
      author: "Lisa Wang",
      date: "2024-06-05",
      readTime: "18 min read",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      content: `
# Getting Started with TypeScript: A Beginner's Guide

TypeScript has revolutionized JavaScript development by adding static typing. Let's explore why it's worth learning.

## What is TypeScript?

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds:
- Static type checking
- Enhanced IDE support
- Better refactoring capabilities
- Improved code documentation

## Why Use TypeScript?

### 1. Catch Errors Early
\`\`\`typescript
// JavaScript - runtime error
function greet(name) {
  return "Hello, " + name.toUpperCase();
}
greet(null); // TypeError at runtime

// TypeScript - compile-time error
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}
greet(null); // Error: Argument of type 'null' is not assignable to parameter of type 'string'
\`\`\`

### 2. Better IDE Support
- Autocomplete
- Inline documentation
- Refactoring tools
- Go to definition

### 3. Self-Documenting Code
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function updateUser(user: User): Promise<User> {
  // Implementation
}
\`\`\`

## Basic Types

### Primitive Types
\`\`\`typescript
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let scores: number[] = [85, 90, 78];
\`\`\`

### Union Types
\`\`\`typescript
let id: string | number = "user123";
id = 12345; // Also valid
\`\`\`

### Optional Properties
\`\`\`typescript
interface Person {
  name: string;
  age?: number; // Optional
}
\`\`\`

## Interfaces and Types

### Interfaces
\`\`\`typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const laptop: Product = {
  id: 1,
  name: "MacBook Pro",
  price: 1999,
  category: "Electronics"
};
\`\`\`

### Type Aliases
\`\`\`typescript
type Status = "pending" | "approved" | "rejected";
type EventHandler = (event: Event) => void;
\`\`\`

## Functions

### Function Types
\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
\`\`\`

### Generic Functions
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello");
\`\`\`

## Classes

\`\`\`typescript
class Animal {
  private name: string;
  protected species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  public speak(): string {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, "Canine");
  }

  public speak(): string {
    return \`\${super.speak()} - Woof!\`;
  }
}
\`\`\`

## Getting Started

### 1. Installation
\`\`\`bash
npm install -g typescript
# or
npm install --save-dev typescript
\`\`\`

### 2. Configuration
Create a \`tsconfig.json\`:
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
\`\`\`

### 3. Compilation
\`\`\`bash
tsc app.ts          # Compile single file
tsc                 # Compile all files in project
tsc --watch         # Watch mode
\`\`\`

## Best Practices

1. **Enable strict mode** in tsconfig.json
2. **Use interfaces for object shapes**
3. **Prefer type assertions over any**
4. **Use utility types** (Partial, Pick, Omit)
5. **Add types gradually** to existing projects

## Conclusion

TypeScript makes JavaScript development more reliable and enjoyable. Start small, add types gradually, and watch your code quality improve!
      `
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold font-mono text-gray-900 dark:text-white">CodeBoost</span>
            </Link>
            
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Developer Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tutorials, tips, and insights to help you become a better developer. 
            From beginner guides to advanced techniques, we've got you covered.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest tutorials and coding tips delivered straight to your inbox. 
            Join our newsletter and never miss a post!
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
