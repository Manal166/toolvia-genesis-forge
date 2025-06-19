
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
    },
    {
      id: 6,
      title: "Mastering Git: Advanced Techniques for Team Collaboration",
      excerpt: "Level up your Git skills with advanced workflows, branching strategies, and collaboration techniques.",
      author: "Michael Johnson",
      date: "2024-06-03",
      readTime: "14 min read",
      category: "Git",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
      content: `
# Mastering Git: Advanced Techniques for Team Collaboration

Git is more than just version control. Master these advanced techniques to improve team collaboration and project management.

## Git Flow vs GitHub Flow

### Git Flow
- Feature branches from develop
- Release branches for preparation
- Hotfix branches for urgent fixes
- Master branch for production

### GitHub Flow
- Simpler workflow
- Feature branches from main
- Pull requests for code review
- Continuous deployment

## Advanced Branching Strategies

### Feature Branch Workflow
\`\`\`bash
# Create feature branch
git checkout -b feature/user-authentication

# Work on feature
git add .
git commit -m "Add login functionality"

# Push and create PR
git push origin feature/user-authentication
\`\`\`

### Release Branch Strategy
\`\`\`bash
# Create release branch
git checkout -b release/v1.2.0

# Prepare release
git commit -m "Bump version to 1.2.0"

# Merge to main and develop
git checkout main
git merge release/v1.2.0
git tag v1.2.0
\`\`\`

## Powerful Git Commands

### Interactive Rebase
\`\`\`bash
# Rewrite commit history
git rebase -i HEAD~3

# Options: pick, reword, edit, squash, drop
\`\`\`

### Cherry Pick
\`\`\`bash
# Apply specific commit to current branch
git cherry-pick abc123
\`\`\`

### Stash Management
\`\`\`bash
# Save work in progress
git stash push -m "WIP: feature implementation"

# List stashes
git stash list

# Apply specific stash
git stash apply stash@{1}
\`\`\`

## Conflict Resolution

### Merge Conflicts
\`\`\`bash
# When conflicts occur
git status
# Edit conflicted files
git add resolved-file.js
git commit -m "Resolve merge conflict"
\`\`\`

### Using Merge Tools
\`\`\`bash
# Configure merge tool
git config --global merge.tool vimdiff

# Launch merge tool
git mergetool
\`\`\`

## Collaborative Workflows

### Pull Request Best Practices
1. Keep PRs focused and small
2. Write descriptive titles and descriptions
3. Request appropriate reviewers
4. Respond to feedback promptly
5. Update branch with latest changes

### Code Review Guidelines
- Review for logic, not just syntax
- Check for security vulnerabilities
- Ensure tests are included
- Verify documentation updates
- Be constructive in feedback

## Git Hooks for Automation

### Pre-commit Hook
\`\`\`bash
#!/bin/sh
# Run tests before commit
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed. Commit aborted."
  exit 1
fi
\`\`\`

### Pre-push Hook
\`\`\`bash
#!/bin/sh
# Run linting before push
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed. Push aborted."
  exit 1
fi
\`\`\`

## Advanced Git Configuration

### Useful Aliases
\`\`\`bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.last 'log -1 HEAD'
\`\`\`

### Global .gitignore
\`\`\`bash
# Create global gitignore
git config --global core.excludesfile ~/.gitignore_global

# Add common patterns
echo ".DS_Store" >> ~/.gitignore_global
echo "*.log" >> ~/.gitignore_global
echo "node_modules/" >> ~/.gitignore_global
\`\`\`

## Troubleshooting Common Issues

### Undo Last Commit
\`\`\`bash
# Soft reset (keep changes)
git reset --soft HEAD~1

# Hard reset (discard changes)
git reset --hard HEAD~1
\`\`\`

### Recover Deleted Branch
\`\`\`bash
# Find commit hash
git reflog

# Recreate branch
git checkout -b recovered-branch abc123
\`\`\`

## Conclusion

These advanced Git techniques will make you more effective in team environments and help maintain cleaner project histories.
      `
    },
    {
      id: 7,
      title: "Node.js Performance Optimization: Best Practices",
      excerpt: "Learn how to identify bottlenecks and optimize your Node.js applications for better performance.",
      author: "Carlos Rodriguez",
      date: "2024-06-01",
      readTime: "16 min read",
      category: "Node.js",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      content: `
# Node.js Performance Optimization: Best Practices

Performance is crucial for Node.js applications. Learn how to identify bottlenecks and optimize your apps.

## Understanding the Event Loop

### How It Works
The event loop is the heart of Node.js performance:
- Single-threaded for JavaScript execution
- Non-blocking I/O operations
- Callback queue and call stack

### Avoiding Blocking Operations
\`\`\`javascript
// Bad - blocks the event loop
const data = fs.readFileSync('large-file.txt');

// Good - non-blocking
fs.readFile('large-file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Better - using promises
const data = await fs.promises.readFile('large-file.txt');
\`\`\`

## Memory Management

### Avoiding Memory Leaks
\`\`\`javascript
// Memory leak - global variables
global.cache = {};

// Better - proper cleanup
class Cache {
  constructor() {
    this.data = new Map();
  }
  
  clear() {
    this.data.clear();
  }
}
\`\`\`

### Monitoring Memory Usage
\`\`\`javascript
// Check memory usage
const memUsage = process.memoryUsage();
console.log({
  rss: \`\${Math.round(memUsage.rss / 1024 / 1024)} MB\`,
  heapTotal: \`\${Math.round(memUsage.heapTotal / 1024 / 1024)} MB\`,
  heapUsed: \`\${Math.round(memUsage.heapUsed / 1024 / 1024)} MB\`
});
\`\`\`

## Database Optimization

### Connection Pooling
\`\`\`javascript
// PostgreSQL connection pool
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'mydb',
  max: 20, // maximum number of clients
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

// Use pool for queries
const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
\`\`\`

### Query Optimization
\`\`\`javascript
// Bad - N+1 query problem
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.findAll({ where: { userId: user.id } });
}

// Good - single query with JOIN
const users = await User.findAll({
  include: [{ model: Post }]
});
\`\`\`

## Caching Strategies

### In-Memory Caching
\`\`\`javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes

async function getUser(id) {
  const cacheKey = \`user:\${id}\`;
  let user = cache.get(cacheKey);
  
  if (!user) {
    user = await User.findById(id);
    cache.set(cacheKey, user);
  }
  
  return user;
}
\`\`\`

### Redis Caching
\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

async function getCachedData(key) {
  try {
    const cached = await client.get(key);
    if (cached) {
      return JSON.parse(cached);
    }
    
    const data = await fetchDataFromDatabase(key);
    await client.setex(key, 3600, JSON.stringify(data)); // 1 hour
    return data;
  } catch (error) {
    console.error('Cache error:', error);
    return await fetchDataFromDatabase(key);
  }
}
\`\`\`

## HTTP Performance

### Keep-Alive Connections
\`\`\`javascript
const http = require('http');

const agent = new http.Agent({
  keepAlive: true,
  maxSockets: 50
});

// Use agent for requests
const options = {
  hostname: 'api.example.com',
  port: 80,
  path: '/data',
  agent: agent
};
\`\`\`

### Response Compression
\`\`\`javascript
const express = require('express');
const compression = require('compression');

const app = express();

// Enable gzip compression
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));
\`\`\`

## Asynchronous Programming

### Proper Promise Handling
\`\`\`javascript
// Bad - not handling promises properly
function processData() {
  return new Promise((resolve, reject) => {
    fetchData()
      .then(data => {
        processedData = transform(data);
        resolve(processedData);
      })
      .catch(reject);
  });
}

// Good - using async/await
async function processData() {
  const data = await fetchData();
  return transform(data);
}
\`\`\`

### Parallel Processing
\`\`\`javascript
// Sequential (slow)
const result1 = await operation1();
const result2 = await operation2();
const result3 = await operation3();

// Parallel (fast)
const [result1, result2, result3] = await Promise.all([
  operation1(),
  operation2(),
  operation3()
]);
\`\`\`

## Profiling and Monitoring

### Built-in Profiler
\`\`\`bash
# Start with profiler
node --prof app.js

# Process profiler output
node --prof-process isolate-0x*.log > processed.txt
\`\`\`

### Performance Monitoring
\`\`\`javascript
const performanceHooks = require('perf_hooks');

// Measure function performance
function measurePerformance(fn, name) {
  return async function(...args) {
    const start = performanceHooks.performance.now();
    const result = await fn.apply(this, args);
    const end = performanceHooks.performance.now();
    console.log(\`\${name} took \${end - start} milliseconds\`);
    return result;
  };
}

const optimizedFunction = measurePerformance(slowFunction, 'slowFunction');
\`\`\`

## Clustering for Multi-Core Systems

### Basic Clustering
\`\`\`javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork(); // Restart worker
  });
} else {
  // Worker process
  require('./app.js');
  console.log(\`Worker \${process.pid} started\`);
}
\`\`\`

## Best Practices Summary

1. **Use async/await** instead of callbacks
2. **Implement proper error handling**
3. **Monitor memory usage** regularly
4. **Use connection pooling** for databases
5. **Implement caching** at multiple levels
6. **Profile your application** regularly
7. **Use clustering** for CPU-intensive tasks
8. **Keep dependencies updated**

These optimization techniques will significantly improve your Node.js application performance.
      `
    },
    {
      id: 8,
      title: "React Hooks Deep Dive: Beyond useState and useEffect",
      excerpt: "Explore advanced React hooks and learn how to create custom hooks for better component logic.",
      author: "Jennifer Lee",
      date: "2024-05-28",
      readTime: "20 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      content: `
# React Hooks Deep Dive: Beyond useState and useEffect

Master advanced React hooks and learn to create powerful custom hooks for better component architecture.

## Advanced Built-in Hooks

### useReducer for Complex State
\`\`\`javascript
import { useReducer } from 'react';

const initialState = { count: 0, loading: false };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return initialState;
    case 'setLoading':
      return { ...state, loading: action.payload };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
\`\`\`

### useCallback and useMemo for Performance
\`\`\`javascript
import { useState, useCallback, useMemo } from 'react';

function ExpensiveComponent({ items, onItemClick }) {
  // Memoize expensive calculations
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);
  
  // Memoize callback functions
  const handleItemClick = useCallback((item) => {
    onItemClick(item);
  }, [onItemClick]);
  
  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => handleItemClick(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### useRef for DOM Access and Mutable Values
\`\`\`javascript
import { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const handleClick = () => {
    countRef.current += 1;
    console.log(\`Clicked \${countRef.current} times\`);
  };
  
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
\`\`\`

## Custom Hooks Patterns

### Data Fetching Hook
\`\`\`javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>Welcome, {user.name}!</div>;
}
\`\`\`

### Local Storage Hook
\`\`\`javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":`, error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":`, error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
\`\`\`

### Previous Value Hook
\`\`\`javascript
import { useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  });
  
  return ref.current;
}

// Usage
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
\`\`\`

### Debounce Hook
\`\`\`javascript
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
\`\`\`

## Advanced Patterns

### Hook Composition
\`\`\`javascript
function useAuth() {
  const [user, setUser] = useLocalStorage('user', null);
  const [loading, setLoading] = useState(false);
  
  const login = async (credentials) => {
    setLoading(true);
    try {
      const user = await authAPI.login(credentials);
      setUser(user);
      return user;
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return { user, loading, login, logout };
}

function useAuthenticatedFetch(url) {
  const { user } = useAuth();
  const { data, loading, error } = useFetch(url, {
    headers: user ? { Authorization: \`Bearer \${user.token}\` } : {}
  });
  
  return { data, loading, error };
}
\`\`\`

### Context with Hooks
\`\`\`javascript
import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}
\`\`\`

## Testing Custom Hooks

### Using React Testing Library
\`\`\`javascript
import { renderHook, act } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  
  test('should return initial value', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'));
    
    expect(result.current[0]).toBe('initial');
  });
  
  test('should update stored value', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'));
    
    act(() => {
      result.current[1]('updated');
    });
    
    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('test')).toBe('"updated"');
  });
});
\`\`\`

## Best Practices

1. **Start with built-in hooks** before creating custom ones
2. **Use custom hooks for reusable logic**
3. **Keep hooks focused** on a single responsibility
4. **Handle edge cases** and errors properly
5. **Test your custom hooks** thoroughly
6. **Use TypeScript** for better hook interfaces
7. **Follow the rules of hooks** consistently

Custom hooks are powerful tools for sharing stateful logic between components while keeping your code clean and reusable.
      `
    },
    {
      id: 9,
      title: "API Design Best Practices: Building RESTful Services",
      excerpt: "Learn how to design clean, scalable, and maintainable REST APIs that developers love to use.",
      author: "Robert Chen",
      date: "2024-05-25",
      readTime: "17 min read",
      category: "API Design",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      content: `
# API Design Best Practices: Building RESTful Services

Learn how to design clean, scalable, and maintainable REST APIs that developers love to use.

## RESTful Principles

### Resource-Based URLs
\`\`\`
Good:
GET /api/users
GET /api/users/123
POST /api/users
PUT /api/users/123
DELETE /api/users/123

Bad:
GET /api/getUsers
POST /api/createUser
GET /api/user/delete/123
\`\`\`

### HTTP Methods Usage
- **GET**: Retrieve data (idempotent)
- **POST**: Create new resources
- **PUT**: Update entire resource (idempotent)
- **PATCH**: Partial updates
- **DELETE**: Remove resources (idempotent)

### Status Codes
\`\`\`javascript
// Success responses
200 OK - General success
201 Created - Resource created
204 No Content - Success with no response body

// Client error responses
400 Bad Request - Invalid request data
401 Unauthorized - Authentication required
403 Forbidden - Insufficient permissions
404 Not Found - Resource doesn't exist
409 Conflict - Resource conflict
422 Unprocessable Entity - Validation errors

// Server error responses
500 Internal Server Error - Generic server error
503 Service Unavailable - Temporary server issue
\`\`\`

## URL Structure and Naming

### Resource Naming Conventions
\`\`\`
// Use nouns, not verbs
/api/users (not /api/getUsers)
/api/orders (not /api/orderManagement)

// Use plural nouns for collections
/api/users (not /api/user)
/api/products (not /api/product)

// Nested resources
/api/users/123/orders
/api/orders/456/items

// Use kebab-case for multi-word resources
/api/user-profiles
/api/order-items
\`\`\`

### Query Parameters
\`\`\`javascript
// Filtering
GET /api/users?status=active&role=admin

// Sorting
GET /api/products?sort=price&order=desc

// Pagination
GET /api/users?page=2&limit=50

// Searching
GET /api/articles?search=javascript&category=tutorials

// Field selection
GET /api/users?fields=name,email,created_at
\`\`\`

## Request and Response Design

### Consistent Response Format
\`\`\`javascript
// Success response
{
  "success": true,
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "message": "User retrieved successfully"
}

// Error response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email format is invalid"
      }
    ]
  }
}
\`\`\`

### Pagination
\`\`\`javascript
// Offset-based pagination
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": true
  }
}

// Cursor-based pagination
{
  "data": [...],
  "pagination": {
    "nextCursor": "eyJpZCI6MTIzfQ==",
    "prevCursor": "eyJpZCI6OTh9",
    "hasNext": true,
    "hasPrev": true
  }
}
\`\`\`

## Authentication and Authorization

### JWT Implementation
\`\`\`javascript
// Authentication middleware
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      error: { message: 'Access token required' }
    });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: { message: 'Invalid or expired token' }
      });
    }
    req.user = user;
    next();
  });
}

// Usage
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({
    success: true,
    data: req.user
  });
});
\`\`\`

### Role-Based Authorization
\`\`\`javascript
function authorize(roles = []) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: { message: 'Authentication required' }
      });
    }
    
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: { message: 'Insufficient permissions' }
      });
    }
    
    next();
  };
}

// Usage
app.delete('/api/users/:id', 
  authenticateToken, 
  authorize(['admin']), 
  deleteUser
);
\`\`\`

## Input Validation

### Using Joi for Validation
\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120),
  role: Joi.string().valid('user', 'admin').default('user')
});

function validateUser(req, res, next) {
  const { error, value } = userSchema.validate(req.body);
  
  if (error) {
    return res.status(422).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid input data',
        details: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }))
      }
    });
  }
  
  req.validatedData = value;
  next();
}
\`\`\`

## Error Handling

### Centralized Error Handler
\`\`\`javascript
class APIError extends Error {
  constructor(message, statusCode = 500, errorCode = 'INTERNAL_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;
  }
}

function errorHandler(err, req, res, next) {
  let { statusCode = 500, message, errorCode } = err;
  
  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 422;
    errorCode = 'VALIDATION_ERROR';
  } else if (err.name === 'CastError') {
    statusCode = 400;
    errorCode = 'INVALID_ID';
    message = 'Invalid resource ID';
  }
  
  res.status(statusCode).json({
    success: false,
    error: {
      code: errorCode,
      message: message
    }
  });
}

// Usage
app.use(errorHandler);

// Throwing errors
throw new APIError('User not found', 404, 'USER_NOT_FOUND');
\`\`\`

## Rate Limiting

### Basic Rate Limiting
\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests, please try again later'
    }
  },
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api/', limiter);
\`\`\`

## API Documentation

### OpenAPI/Swagger Example
\`\`\`yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
  description: API for managing users

paths:
  /users:
    get:
      summary: Get all users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                      
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string
\`\`\`

## Caching Strategies

### Response Caching
\`\`\`javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 });

function cacheMiddleware(duration = 600) {
  return (req, res, next) => {
    const key = req.originalUrl;
    const cached = cache.get(key);
    
    if (cached) {
      return res.json(cached);
    }
    
    res.sendResponse = res.json;
    res.json = (body) => {
      cache.set(key, body, duration);
      res.sendResponse(body);
    };
    
    next();
  };
}

// Usage
app.get('/api/users', cacheMiddleware(300), getUsers);
\`\`\`

## Versioning

### URL Versioning
\`\`\`javascript
// Version in URL path
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Header versioning
function versionMiddleware(req, res, next) {
  const version = req.headers['api-version'] || 'v1';
  req.apiVersion = version;
  next();
}
\`\`\`

## Security Best Practices

### CORS Configuration
\`\`\`javascript
const cors = require('cors');

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
\`\`\`

### Security Headers
\`\`\`javascript
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
\`\`\`

## Testing APIs

### Unit Testing with Jest
\`\`\`javascript
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  test('GET /api/users should return users list', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
      
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
  
  test('POST /api/users should create user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com'
    };
    
    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201);
      
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe(userData.name);
  });
});
\`\`\`

## Best Practices Summary

1. **Use consistent naming conventions**
2. **Implement proper error handling**
3. **Validate all input data**
4. **Use appropriate HTTP status codes**
5. **Implement authentication and authorization**
6. **Add rate limiting and caching**
7. **Version your APIs**
8. **Document everything**
9. **Test thoroughly**
10. **Monitor and log API usage**

Following these practices will help you build robust, scalable, and developer-friendly APIs.
      `
    },
    {
      id: 10,
      title: "Modern Database Design: SQL vs NoSQL Decision Guide",
      excerpt: "Navigate the complex world of database choices with practical guidance on when to use SQL or NoSQL databases.",
      author: "Maria Santos",
      date: "2024-05-22",
      readTime: "19 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
      content: `
# Modern Database Design: SQL vs NoSQL Decision Guide

Navigate the complex world of database choices with practical guidance on when to use SQL or NoSQL databases.

## Understanding the Landscape

### SQL Databases (RDBMS)
- **Structure**: Tables with rows and columns
- **Schema**: Fixed, predefined structure
- **ACID**: Strong consistency guarantees
- **Examples**: PostgreSQL, MySQL, SQLite, SQL Server

### NoSQL Databases
- **Document**: MongoDB, CouchDB
- **Key-Value**: Redis, DynamoDB
- **Column-Family**: Cassandra, HBase  
- **Graph**: Neo4j, Amazon Neptune

## When to Choose SQL

### ACID Requirements
\`\`\`sql
-- Financial transactions need ACID compliance
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Either both succeed or both fail
COMMIT;
\`\`\`

### Complex Relationships
\`\`\`sql
-- Complex joins and relationships
SELECT 
  u.name,
  COUNT(o.id) as order_count,
  SUM(oi.price * oi.quantity) as total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
HAVING total_spent > 1000;
\`\`\`

### Reporting and Analytics
\`\`\`sql
-- Complex analytical queries
WITH monthly_sales AS (
  SELECT 
    DATE_TRUNC('month', created_at) as month,
    SUM(total) as revenue
  FROM orders
  WHERE status = 'completed'
  GROUP BY DATE_TRUNC('month', created_at)
)
SELECT 
  month,
  revenue,
  LAG(revenue) OVER (ORDER BY month) as prev_month,
  (revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month) * 100 as growth_rate
FROM monthly_sales
ORDER BY month;
\`\`\`

## When to Choose NoSQL

### Document Databases (MongoDB)
\`\`\`javascript
// Flexible schema for varying data structures
const userProfiles = [
  {
    _id: ObjectId(),
    username: "john_doe",
    profile: {
      bio: "Software developer",
      skills: ["JavaScript", "Python", "React"],
      location: {
        city: "San Francisco",
        coordinates: [-122.4194, 37.7749]
      }
    },
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        push: false
      }
    }
  },
  {
    _id: ObjectId(),
    username: "jane_smith",
    profile: {
      bio: "Designer and photographer",
      portfolio: [
        { type: "image", url: "https://example.com/photo1.jpg" },
        { type: "video", url: "https://example.com/video1.mp4" }
      ]
    }
    // Different structure - no preferences
  }
];

// Querying nested documents
db.users.find({
  "profile.skills": "React",
  "profile.location.city": "San Francisco"
});
\`\`\`

### Key-Value Stores (Redis)
\`\`\`javascript
// Caching and session storage
const redis = require('redis');
const client = redis.createClient();

// Cache user session
await client.setex('session:abc123', 3600, JSON.stringify({
  userId: 123,
  email: 'user@example.com',
  permissions: ['read', 'write']
}));

// Rate limiting
const key = \`rate_limit:\${userId}\`;
const current = await client.incr(key);
if (current === 1) {
  await client.expire(key, 3600); // 1 hour window
}
if (current > 100) {
  throw new Error('Rate limit exceeded');
}
\`\`\`

### Time-Series Data (InfluxDB)
\`\`\`javascript
// IoT sensor data
const points = [
  {
    measurement: 'temperature',
    tags: {
      sensor_id: 'temp_001',
      location: 'server_room'
    },
    fields: {
      value: 23.5,
      unit: 'celsius'
    },
    timestamp: new Date()
  },
  {
    measurement: 'cpu_usage',
    tags: {
      host: 'web-server-01',
      datacenter: 'us-west'
    },
    fields: {
      usage_percent: 78.2
    },
    timestamp: new Date()
  }
];

// Time-based queries
SELECT mean(value) 
FROM temperature 
WHERE time >= now() - 1h 
GROUP BY time(5m), sensor_id;
\`\`\`

## Hybrid Approaches

### Polyglot Persistence
\`\`\`javascript
// Using multiple databases for different purposes
class UserService {
  constructor() {
    this.postgres = new PostgresClient(); // User accounts
    this.redis = new RedisClient();       // Sessions/cache
    this.mongodb = new MongoClient();      // User profiles
    this.elasticsearch = new ESClient();   // Search
  }
  
  async createUser(userData) {
    // Store core user data in PostgreSQL
    const user = await this.postgres.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *',
      [userData.email, userData.passwordHash]
    );
    
    // Store flexible profile data in MongoDB
    await this.mongodb.collection('profiles').insertOne({
      userId: user.id,
      profile: userData.profile,
      preferences: userData.preferences
    });
    
    // Index for search
    await this.elasticsearch.index({
      index: 'users',
      id: user.id,
      body: {
        username: userData.username,
        bio: userData.profile?.bio,
        skills: userData.profile?.skills
      }
    });
    
    return user;
  }
}
\`\`\`

## Database Schema Design

### SQL Schema Design
\`\`\`sql
-- Normalized schema design
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  bio TEXT,
  avatar_url VARCHAR(500)
);

CREATE TABLE user_skills (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  skill_name VARCHAR(100) NOT NULL,
  proficiency_level INTEGER CHECK (proficiency_level BETWEEN 1 AND 5)
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_skills_user_id ON user_skills(user_id);
CREATE INDEX idx_user_skills_skill_name ON user_skills(skill_name);
\`\`\`

### NoSQL Schema Design
\`\`\`javascript
// Document-based schema (MongoDB)
const userSchema = {
  _id: ObjectId,
  email: String,
  passwordHash: String,
  profile: {
    firstName: String,
    lastName: String,
    bio: String,
    avatarUrl: String,
    skills: [
      {
        name: String,
        proficiencyLevel: Number
      }
    ]
  },
  settings: {
    theme: String,
    notifications: {
      email: Boolean,
      push: Boolean,
      sms: Boolean
    }
  },
  metadata: {
    createdAt: Date,
    updatedAt: Date,
    lastLoginAt: Date
  }
};

// Indexes for MongoDB
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ "profile.skills.name": 1 });
db.users.createIndex({ "metadata.createdAt": 1 });
\`\`\`

## Performance Considerations

### SQL Optimization
\`\`\`sql
-- Query optimization with EXPLAIN
EXPLAIN ANALYZE 
SELECT u.email, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.email;

-- Partitioning large tables
CREATE TABLE orders_2024 PARTITION OF orders
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- Materialized views for complex queries
CREATE MATERIALIZED VIEW user_order_summary AS
SELECT 
  u.id,
  u.email,
  COUNT(o.id) as total_orders,
  SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.email;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW user_order_summary;
\`\`\`

### NoSQL Optimization
\`\`\`javascript
// MongoDB aggregation pipeline optimization
db.orders.aggregate([
  {
    $match: {
      status: "completed",
      createdAt: { $gte: new Date("2024-01-01") }
    }
  },
  {
    $group: {
      _id: "$userId",
      totalOrders: { $sum: 1 },
      totalSpent: { $sum: "$total" }
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user"
    }
  }
], {
  allowDiskUse: true,
  hint: { userId: 1, status: 1, createdAt: 1 }
});
\`\`\`

## Migration Strategies

### SQL to NoSQL Migration
\`\`\`javascript
// Gradual migration approach
class DataMigrationService {
  async migrateUserData(userId) {
    // Read from SQL
    const user = await this.postgres.query(
      'SELECT * FROM users WHERE id = $1', [userId]
    );
    
    const profile = await this.postgres.query(
      'SELECT * FROM user_profiles WHERE user_id = $1', [userId]
    );
    
    const skills = await this.postgres.query(
      'SELECT * FROM user_skills WHERE user_id = $1', [userId]
    );
    
    // Transform and write to NoSQL
    const document = {
      _id: new ObjectId(),
      email: user.email,
      passwordHash: user.password_hash,
      profile: {
        firstName: profile.first_name,
        lastName: profile.last_name,
        bio: profile.bio,
        skills: skills.map(skill => ({
          name: skill.skill_name,
          proficiencyLevel: skill.proficiency_level
        }))
      },
      metadata: {
        createdAt: user.created_at,
        migrated: true
      }
    };
    
    await this.mongodb.collection('users').insertOne(document);
  }
}
\`\`\`

## Decision Framework

### Choose SQL When:
- Strong consistency is required
- Complex relationships and joins
- Mature ecosystem and tooling
- Team expertise with SQL
- Regulatory compliance needs
- Complex reporting requirements

### Choose NoSQL When:
- Flexible schema requirements
- Horizontal scaling needs
- High-volume, simple queries
- Rapid development cycles
- Unstructured or semi-structured data
- Real-time applications

### Evaluation Checklist
\`\`\`
□ Data Structure
  - Fixed schema vs flexible schema
  - Relationships complexity
  - Query patterns

□ Scalability Requirements
  - Read/write patterns
  - Horizontal vs vertical scaling
  - Geographic distribution

□ Consistency Requirements
  - ACID vs eventual consistency
  - Transaction boundaries
  - Data integrity needs

□ Performance Requirements
  - Latency requirements
  - Throughput requirements
  - Query complexity

□ Operational Considerations
  - Team expertise
  - Tooling and ecosystem
  - Maintenance complexity
  - Cost considerations
\`\`\`

## Best Practices

### Universal Principles
1. **Understand your data access patterns**
2. **Design for your specific use case**
3. **Consider consistency requirements**
4. **Plan for scalability early**
5. **Monitor and optimize performance**
6. **Implement proper backup strategies**
7. **Consider operational complexity**
8. **Evaluate total cost of ownership**

The choice between SQL and NoSQL isn't binary - modern applications often benefit from using the right database for each specific use case within your system.
      `
    },
    {
      id: 11,
      title: "Microservices Architecture: Design Patterns and Best Practices",
      excerpt: "Explore proven patterns for building scalable microservices architectures and avoiding common pitfalls.",
      author: "Ahmed Hassan",
      date: "2024-05-20",
      readTime: "22 min read",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      content: `
# Microservices Architecture: Design Patterns and Best Practices

Explore proven patterns for building scalable microservices architectures and avoiding common pitfalls.

## Understanding Microservices

### What Are Microservices?
Microservices are small, independent services that communicate over well-defined APIs. Each service:
- Owns its data and business logic
- Can be developed, deployed, and scaled independently
- Communicates through network calls
- Is organized around business capabilities

### Monolith vs Microservices
\`\`\`
Monolith:
├── User Management
├── Order Processing  
├── Payment Processing
├── Inventory Management
└── Notification Service

Microservices:
├── User Service (Port 3001)
├── Order Service (Port 3002)
├── Payment Service (Port 3003)
├── Inventory Service (Port 3004)
└── Notification Service (Port 3005)
\`\`\`

## Service Decomposition Strategies

### Domain-Driven Design (DDD)
\`\`\`javascript
// Bounded Contexts
const ecommerceDomains = {
  userManagement: {
    entities: ['User', 'Profile', 'Authentication'],
    services: ['UserService', 'AuthService'],
    responsibilities: ['user registration', 'authentication', 'profile management']
  },
  
  orderManagement: {
    entities: ['Order', 'OrderItem', 'OrderStatus'],
    services: ['OrderService', 'OrderProcessingService'],
    responsibilities: ['order creation', 'order tracking', 'order fulfillment']
  },
  
  paymentProcessing: {
    entities: ['Payment', 'Transaction', 'PaymentMethod'],
    services: ['PaymentService', 'TransactionService'],
    responsibilities: ['payment processing', 'refunds', 'billing']
  }
};
\`\`\`

### Database per Service Pattern
\`\`\`javascript
// Each service has its own database
const serviceArchitecture = {
  userService: {
    database: 'PostgreSQL',
    schema: ['users', 'user_profiles', 'user_sessions']
  },
  
  orderService: {
    database: 'MongoDB',
    collections: ['orders', 'order_items', 'order_history']
  },
  
  inventoryService: {
    database: 'Redis',
    dataStructure: 'hash', // product_id -> stock_count
    backup: 'PostgreSQL'
  }
};
\`\`\`

## Communication Patterns

### Synchronous Communication
\`\`\`javascript
// REST API communication
class OrderService {
  constructor(userService, inventoryService, paymentService) {
    this.userService = userService;
    this.inventoryService = inventoryService;
    this.paymentService = paymentService;
  }
  
  async createOrder(orderData) {
    try {
      // Validate user
      const user = await this.userService.validateUser(orderData.userId);
      if (!user) {
        throw new Error('Invalid user');
      }
      
      // Check inventory
      const availability = await this.inventoryService.checkAvailability(
        orderData.items
      );
      if (!availability.available) {
        throw new Error('Items not available');
      }
      
      // Reserve inventory
      await this.inventoryService.reserveItems(orderData.items);
      
      // Process payment
      const payment = await this.paymentService.processPayment({
        amount: orderData.total,
        paymentMethod: orderData.paymentMethod
      });
      
      // Create order
      const order = await this.createOrderRecord(orderData);
      
      return order;
    } catch (error) {
      // Implement compensation logic
      await this.handleOrderCreationFailure(orderData, error);
      throw error;
    }
  }
}
\`\`\`

### Asynchronous Communication
\`\`\`javascript
// Event-driven communication with message queues
const EventEmitter = require('events');
const eventBus = new EventEmitter();

class OrderService {
  async createOrder(orderData) {
    const order = await this.createOrderRecord(orderData);
    
    // Emit event instead of direct service calls
    eventBus.emit('order.created', {
      orderId: order.id,
      userId: order.userId,
      items: order.items,
      total: order.total
    });
    
    return order;
  }
}

class InventoryService {
  constructor() {
    eventBus.on('order.created', this.handleOrderCreated.bind(this));
  }
  
  async handleOrderCreated(orderEvent) {
    try {
      await this.reserveItems(orderEvent.items);
      
      eventBus.emit('inventory.reserved', {
        orderId: orderEvent.orderId,
        items: orderEvent.items
      });
    } catch (error) {
      eventBus.emit('inventory.reservation.failed', {
        orderId: orderEvent.orderId,
        error: error.message
      });
    }
  }
}

class NotificationService {
  constructor() {
    eventBus.on('order.created', this.sendOrderConfirmation.bind(this));
    eventBus.on('inventory.reservation.failed', this.sendFailureNotification.bind(this));
  }
  
  async sendOrderConfirmation(orderEvent) {
    // Send confirmation email
    await this.emailService.send({
      to: orderEvent.userId,
      template: 'order-confirmation',
      data: orderEvent
    });
  }
}
\`\`\`

## Data Management Patterns

### Saga Pattern for Distributed Transactions
\`\`\`javascript
// Orchestration-based Saga
class OrderSaga {
  constructor() {
    this.steps = [
      { service: 'inventory', action: 'reserve', compensation: 'release' },
      { service: 'payment', action: 'charge', compensation: 'refund' },
      { service: 'shipping', action: 'schedule', compensation: 'cancel' },
      { service: 'order', action: 'confirm', compensation: 'cancel' }
    ];
  }
  
  async executeOrder(orderData) {
    const sagaId = generateSagaId();
    const executedSteps = [];
    
    try {
      for (const step of this.steps) {
        const result = await this.executeStep(step, orderData, sagaId);
        executedSteps.push({ step, result });
      }
      
      return { success: true, orderId: orderData.id };
    } catch (error) {
      // Compensate in reverse order
      await this.compensate(executedSteps.reverse());
      throw error;
    }
  }
  
  async compensate(executedSteps) {
    for (const { step, result } of executedSteps) {
      try {
        await this.executeCompensation(step, result);
      } catch (compensationError) {
        console.error('Compensation failed:', compensationError);
        // Log for manual intervention
      }
    }
  }
}
\`\`\`

### Event Sourcing
\`\`\`javascript
// Event store for order aggregate
class OrderEventStore {
  constructor() {
    this.events = [];
  }
  
  async appendEvent(aggregateId, event) {
    const eventRecord = {
      id: generateEventId(),
      aggregateId,
      eventType: event.type,
      eventData: event.data,
      timestamp: new Date(),
      version: await this.getNextVersion(aggregateId)
    };
    
    await this.persistEvent(eventRecord);
    return eventRecord;
  }
  
  async getEvents(aggregateId, fromVersion = 0) {
    return this.events.filter(event => 
      event.aggregateId === aggregateId && 
      event.version > fromVersion
    );
  }
}

class OrderAggregate {
  constructor(id) {
    this.id = id;
    this.version = 0;
    this.status = 'created';
    this.items = [];
    this.total = 0;
  }
  
  // Apply events to rebuild state
  applyEvent(event) {
    switch (event.eventType) {
      case 'OrderCreated':
        this.status = 'created';
        this.items = event.eventData.items;
        this.total = event.eventData.total;
        break;
        
      case 'OrderConfirmed':
        this.status = 'confirmed';
        break;
        
      case 'OrderShipped':
        this.status = 'shipped';
        this.trackingNumber = event.eventData.trackingNumber;
        break;
    }
    this.version = event.version;
  }
  
  // Rebuild aggregate from events
  static async fromEvents(aggregateId, eventStore) {
    const events = await eventStore.getEvents(aggregateId);
    const aggregate = new OrderAggregate(aggregateId);
    
    events.forEach(event => aggregate.applyEvent(event));
    return aggregate;
  }
}
\`\`\`

## Service Discovery and Load Balancing

### Service Registry Pattern
\`\`\`javascript
// Simple service registry
class ServiceRegistry {
  constructor() {
    this.services = new Map();
  }
  
  register(serviceName, instanceInfo) {
    if (!this.services.has(serviceName)) {
      this.services.set(serviceName, []);
    }
    
    const instances = this.services.get(serviceName);
    instances.push({
      ...instanceInfo,
      registeredAt: new Date(),
      lastHeartbeat: new Date()
    });
  }
  
  discover(serviceName) {
    const instances = this.services.get(serviceName) || [];
    return instances.filter(instance => this.isHealthy(instance));
  }
  
  isHealthy(instance) {
    const now = new Date();
    const timeSinceHeartbeat = now - instance.lastHeartbeat;
    return timeSinceHeartbeat < 30000; // 30 seconds
  }
  
  heartbeat(serviceName, instanceId) {
    const instances = this.services.get(serviceName) || [];
    const instance = instances.find(i => i.id === instanceId);
    if (instance) {
      instance.lastHeartbeat = new Date();
    }
  }
}

// Load balancer with health checks
class LoadBalancer {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry;
    this.strategies = {
      roundRobin: this.roundRobinStrategy.bind(this),
      leastConnections: this.leastConnectionsStrategy.bind(this),
      random: this.randomStrategy.bind(this)
    };
  }
  
  async route(serviceName, strategy = 'roundRobin') {
    const instances = this.serviceRegistry.discover(serviceName);
    
    if (instances.length === 0) {
      throw new Error(\`No healthy instances found for service: \${serviceName}\`);
    }
    
    return this.strategies[strategy](instances);
  }
  
  roundRobinStrategy(instances) {
    // Implementation of round-robin selection
    const index = this.getNextRoundRobinIndex(instances.length);
    return instances[index];
  }
}
\`\`\`

## API Gateway Pattern

### Centralized Gateway
\`\`\`javascript
const express = require('express');
const httpProxy = require('http-proxy-middleware');

class APIGateway {
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }
  
  setupMiddleware() {
    // Authentication middleware
    this.app.use('/api', this.authenticateRequest.bind(this));
    
    // Rate limiting
    this.app.use('/api', this.rateLimitMiddleware.bind(this));
    
    // Request logging
    this.app.use('/api', this.logRequests.bind(this));
  }
  
  setupRoutes() {
    // Route to user service
    this.app.use('/api/users', httpProxy({
      target: 'http://user-service:3001',
      changeOrigin: true,
      pathRewrite: { '^/api/users': '/users' }
    }));
    
    // Route to order service
    this.app.use('/api/orders', httpProxy({
      target: 'http://order-service:3002',
      changeOrigin: true,
      pathRewrite: { '^/api/orders': '/orders' }
    }));
    
    // Aggregation endpoint
    this.app.get('/api/user-dashboard/:userId', this.getUserDashboard.bind(this));
  }
  
  async getUserDashboard(req, res) {
    const userId = req.params.userId;
    
    try {
      // Parallel requests to multiple services
      const [userProfile, recentOrders, recommendations] = await Promise.all([
        this.callService('user-service', \`/users/\${userId}/profile\`),
        this.callService('order-service', \`/orders?userId=\${userId}&limit=5\`),
        this.callService('recommendation-service', \`/recommendations/\${userId}\`)
      ]);
      
      res.json({
        user: userProfile,
        recentOrders,
        recommendations
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
  }
}
\`\`\`

## Monitoring and Observability

### Distributed Tracing
\`\`\`javascript
const opentelemetry = require('@opentelemetry/api');

class OrderService {
  async createOrder(orderData) {
    const tracer = opentelemetry.trace.getTracer('order-service');
    
    return tracer.startActiveSpan('create-order', async (span) => {
      try {
        span.setAttributes({
          'order.id': orderData.id,
          'user.id': orderData.userId,
          'order.total': orderData.total
        });
        
        // Child span for inventory check
        const inventoryResult = await tracer.startActiveSpan('check-inventory', async (childSpan) => {
          const result = await this.inventoryService.checkAvailability(orderData.items);
          childSpan.setAttributes({
            'inventory.available': result.available,
            'inventory.items.count': orderData.items.length
          });
          return result;
        });
        
        if (!inventoryResult.available) {
          span.recordException(new Error('Inventory not available'));
          span.setStatus({ code: opentelemetry.SpanStatusCode.ERROR });
          throw new Error('Items not available');
        }
        
        const order = await this.createOrderRecord(orderData);
        span.setAttributes({ 'order.created.id': order.id });
        
        return order;
      } catch (error) {
        span.recordException(error);
        span.setStatus({ code: opentelemetry.SpanStatusCode.ERROR });
        throw error;
      } finally {
        span.end();
      }
    });
  }
}
\`\`\`

### Health Check Endpoints
\`\`\`javascript
// Health check implementation
class HealthCheckService {
  constructor(dependencies) {
    this.dependencies = dependencies; // database, external services, etc.
  }
  
  async getHealthStatus() {
    const checks = await Promise.allSettled([
      this.checkDatabase(),
      this.checkExternalServices(),
      this.checkMemoryUsage(),
      this.checkDiskSpace()
    ]);
    
    const status = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      checks: {},
      uptime: process.uptime()
    };
    
    checks.forEach((check, index) => {
      const checkName = ['database', 'external_services', 'memory', 'disk'][index];
      
      if (check.status === 'fulfilled') {
        status.checks[checkName] = check.value;
      } else {
        status.checks[checkName] = {
          status: 'unhealthy',
          error: check.reason.message
        };
        status.status = 'unhealthy';
      }
    });
    
    return status;
  }
  
  async checkDatabase() {
    try {
      await this.database.query('SELECT 1');
      return { status: 'healthy', responseTime: Date.now() - start };
    } catch (error) {
      return { status: 'unhealthy', error: error.message };
    }
  }
}

// Express endpoint
app.get('/health', async (req, res) => {
  const healthCheck = new HealthCheckService(dependencies);
  const status = await healthCheck.getHealthStatus();
  
  const httpStatus = status.status === 'healthy' ? 200 : 503;
  res.status(httpStatus).json(status);
});
\`\`\`

## Security Patterns

### JWT-based Authentication
\`\`\`javascript
// Service-to-service authentication
class ServiceAuthenticator {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }
  
  generateServiceToken(serviceId, permissions) {
    const payload = {
      serviceId,
      permissions,
      type: 'service',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hour
    };
    
    return jwt.sign(payload, this.secretKey);
  }
  
  validateServiceToken(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      if (decoded.type !== 'service') {
        throw new Error('Invalid token type');
      }
      return decoded;
    } catch (error) {
      throw new Error('Invalid service token');
    }
  }
}

// Middleware for service authentication
function authenticateService(req, res, next) {
  const token = req.headers['x-service-token'];
  
  if (!token) {
    return res.status(401).json({ error: 'Service token required' });
  }
  
  try {
    const serviceInfo = authenticator.validateServiceToken(token);
    req.serviceInfo = serviceInfo;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid service token' });
  }
}
\`\`\`

## Testing Strategies

### Contract Testing
\`\`\`javascript
// Pact contract testing
const { PactV3, MatchersV3 } = require('@pact-foundation/pact');

describe('Order Service Consumer Tests', () => {
  const provider = new PactV3({
    consumer: 'order-service',
    provider: 'user-service'
  });
  
  test('should get user details', async () => {
    await provider
      .given('user with ID 123 exists')
      .uponReceiving('a request for user details')
      .withRequest({
        method: 'GET',
        path: '/users/123',
        headers: {
          'Accept': 'application/json'
        }
      })
      .willRespondWith({
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          id: MatchersV3.integer(123),
          email: MatchersV3.string('user@example.com'),
          name: MatchersV3.string('John Doe')
        }
      });
    
    await provider.executeTest(async (mockService) => {
      const userService = new UserServiceClient(mockService.url);
      const user = await userService.getUser(123);
      
      expect(user.id).toBe(123);
      expect(user.email).toBe('user@example.com');
    });
  });
});
\`\`\`

## Best Practices Summary

### Do's
1. **Start with a monolith** and decompose gradually
2. **Design around business capabilities**
3. **Implement proper monitoring and logging**
4. **Use asynchronous communication when possible**
5. **Implement circuit breakers and timeouts**
6. **Version your APIs properly**
7. **Automate deployment and testing**
8. **Plan for failure scenarios**

### Don'ts
1. **Don't create too many small services**
2. **Don't share databases between services**
3. **Don't ignore network latency**
4. **Don't forget about data consistency**
5. **Don't skip monitoring and observability**
6. **Don't overlook security implications**
7. **Don't ignore operational complexity**

Microservices architecture offers many benefits but requires careful planning and implementation to avoid common pitfalls and realize the full potential of distributed systems.
      `
    },
    {
      id: 12,
      title: "Modern CSS Techniques: Grid, Flexbox, and Container Queries",
      excerpt: "Master the latest CSS layout techniques and responsive design patterns for modern web development.",
      author: "Sophie Martin",
      date: "2024-05-18",
      readTime: "16 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      content: `
# Modern CSS Techniques: Grid, Flexbox, and Container Queries

Master the latest CSS layout techniques and responsive design patterns for modern web development.

## CSS Grid Mastery

### Basic Grid Setup
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  min-height: 100vh;
}

/* Named grid lines */
.grid-with-names {
  display: grid;
  grid-template-columns: [start] 250px [content-start] 1fr [content-end] 250px [end];
  grid-template-rows: [header-start] auto [header-end main-start] 1fr [main-end footer-start] auto [footer-end];
}

.header {
  grid-column: start / end;
  grid-row: header;
}

.sidebar {
  grid-column: start / content-start;
  grid-row: main;
}

.main {
  grid-column: content;
  grid-row: main;
}
\`\`\`

### Advanced Grid Patterns
\`\`\`css
/* Holy Grail Layout with Grid */
.holy-grail {
  display: grid;
  grid-template: 
    "header header header" auto
    "nav main aside" 1fr
    "footer footer footer" auto
    / 200px 1fr 200px;
  min-height: 100vh;
  gap: 1rem;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive Card Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* Magazine-style Layout */
.magazine {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 1rem;
}

.feature-article {
  grid-column: span 8;
  grid-row: span 3;
}

.sidebar-article {
  grid-column: span 4;
  grid-row: span 2;
}

.small-article {
  grid-column: span 4;
  grid-row: span 1;
}
\`\`\`

### Grid Subgrid (Modern Browsers)
\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.child-grid {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid; /* Inherits parent's grid */
  gap: inherit;
}

/* Nested grid alignment */
.nested-card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}

.card-header { grid-row: 1; }
.card-body { grid-row: 2; }
.card-footer { grid-row: 3; }
\`\`\`

## Advanced Flexbox Techniques

### Flexible Card Layouts
\`\`\`css
.flex-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
}

.flex-card {
  flex: 1 1 300px; /* grow shrink basis */
  display: flex;
  flex-direction: column;
  min-width: 0; /* Important for text overflow */
}

.card-header {
  flex-shrink: 0;
}

.card-body {
  flex: 1; /* Fill available space */
  overflow: hidden;
}

.card-footer {
  flex-shrink: 0;
  margin-top: auto; /* Push to bottom */
}
\`\`\`

### Advanced Centering Techniques
\`\`\`css
/* Perfect centering */
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Centering with margin auto */
.center-with-margin {
  display: flex;
  flex-direction: column;
}

.center-with-margin > * {
  margin: 0 auto;
}

/* Multi-line centering */
.center-multiline {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
\`\`\`

### Responsive Navigation Patterns
\`\`\`css
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-brand {
  flex-shrink: 0;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
  }
  
  .nav-menu {
    order: 3;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
}
\`\`\`

## Container Queries Revolution

### Basic Container Queries
\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

/* Apply styles based on container width */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 2rem;
    padding: 2rem;
  }
  
  .card-image {
    grid-row: span 2;
  }
}

@container card (min-width: 600px) {
  .card {
    grid-template-columns: 200px 1fr auto;
  }
  
  .card-actions {
    align-self: end;
  }
}
\`\`\`

### Advanced Container Query Patterns
\`\`\`css
/* Responsive typography based on container */
.text-container {
  container-type: inline-size;
}

@container (min-width: 200px) {
  .responsive-text {
    font-size: 1rem;
    line-height: 1.4;
  }
}

@container (min-width: 400px) {
  .responsive-text {
    font-size: 1.125rem;
    line-height: 1.5;
  }
}

@container (min-width: 600px) {
  .responsive-text {
    font-size: 1.25rem;
    line-height: 1.6;
  }
}

/* Component that adapts to sidebar vs main content */
.adaptive-component {
  container-type: inline-size;
}

@container (max-width: 300px) {
  .component-content {
    flex-direction: column;
  }
  
  .component-image {
    aspect-ratio: 16/9;
    width: 100%;
  }
  
  .component-text {
    font-size: 0.875rem;
  }
}

@container (min-width: 500px) {
  .component-content {
    flex-direction: row;
    gap: 2rem;
  }
  
  .component-image {
    flex-shrink: 0;
    width: 200px;
    aspect-ratio: 1;
  }
}
\`\`\`

## Modern Responsive Design Patterns

### Intrinsic Web Design
\`\`\`css
/* Flexible grid with minimum sizes */
.intrinsic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: 2rem;
}

/* Responsive without media queries */
.flexible-sidebar {
  display: grid;
  grid-template-columns: minmax(250px, 30%) 1fr;
  gap: 2rem;
}

@supports (width: min(250px, 30%)) {
  .flexible-sidebar {
    grid-template-columns: min(250px, 30%) 1fr;
  }
}
\`\`\`

### Fluid Typography
\`\`\`css
/* Fluid typography using clamp() */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: clamp(1.4, 1.4 + 0.2vw, 1.6);
}

/* Responsive spacing */
.section {
  padding-block: clamp(2rem, 5vw, 5rem);
  padding-inline: clamp(1rem, 5vw, 3rem);
}

.flow > * + * {
  margin-top: clamp(0.5rem, 2vw, 2rem);
}
\`\`\`

### CSS Custom Properties for Theming
\`\`\`css
:root {
  /* Design tokens */
  --color-primary: oklch(0.7 0.15 250);
  --color-secondary: oklch(0.8 0.1 180);
  --color-accent: oklch(0.65 0.2 30);
  
  /* Fluid spaces */
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
  --space-lg: clamp(2rem, 4vw, 4rem);
  --space-xl: clamp(3rem, 6vw, 6rem);
  
  /* Responsive font sizes */
  --font-size-sm: clamp(0.875rem, 1.5vw, 1rem);
  --font-size-base: clamp(1rem, 2vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 2.5vw, 1.5rem);
  --font-size-xl: clamp(1.5rem, 4vw, 2.5rem);
  
  /* Container sizes */
  --container-xs: 20rem;
  --container-sm: 30rem;
  --container-md: 45rem;
  --container-lg: 65rem;
  --container-xl: 80rem;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: oklch(0.8 0.15 250);
    --color-secondary: oklch(0.7 0.1 180);
    --color-surface: oklch(0.15 0.02 250);
    --color-text: oklch(0.9 0.02 250);
  }
}

/* Usage */
.card {
  background: var(--color-surface);
  color: var(--color-text);
  padding: var(--space-md);
  border-radius: var(--space-xs);
  font-size: var(--font-size-base);
}
\`\`\`

## Advanced Layout Techniques

### Sticky Sidebar with Scrollable Content
\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  overflow-y: auto;
  padding: 2rem;
  background: var(--color-surface);
}

.main-content {
  overflow-y: auto;
  padding: 2rem;
}

/* Sticky header within scrollable area */
.sticky-header {
  position: sticky;
  top: 0;
  background: var(--color-surface);
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}
\`\`\`

### Masonry Layout with CSS Grid
\`\`\`css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10px; /* Small row height for flexibility */
  gap: 1rem;
}

.masonry-item {
  background: var(--color-surface);
  border-radius: 8px;
  padding: 1rem;
}

/* JavaScript to set grid-row-end based on content height */
.masonry-item {
  grid-row-end: span var(--row-span);
}
\`\`\`

## Animation and Transitions

### Smooth Layout Transitions
\`\`\`css
.transition-layout {
  display: grid;
  grid-template-columns: 1fr;
  transition: grid-template-columns 0.3s ease;
}

.transition-layout.expanded {
  grid-template-columns: 300px 1fr;
}

/* Animate flex changes */
.flex-container {
  display: flex;
  transition: flex-direction 0.3s ease;
}

.flex-item {
  transition: flex 0.3s ease;
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
}
\`\`\`

### View Transitions API
\`\`\`css
/* View transitions for SPA navigation */
@view-transition {
  navigation: auto;
}

::view-transition-old(root) {
  animation: slide-out-left 0.3s ease-in;
}

::view-transition-new(root) {
  animation: slide-in-right 0.3s ease-out;
}

@keyframes slide-out-left {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@keyframes slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
\`\`\`

## Performance Optimization

### CSS Containment
\`\`\`css
.card {
  contain: layout style paint;
}

.list-item {
  contain: layout;
}

/* Content visibility for performance */
.below-fold {
  content-visibility: auto;
  contain-intrinsic-size: 500px;
}
\`\`\`

### Efficient Selectors and Specificity
\`\`\`css
/* Avoid deep nesting */
/* Bad */
.header .nav .menu .item .link:hover .icon {
  color: red;
}

/* Good */
.nav-link:hover .nav-icon {
  color: red;
}

/* Use efficient selectors */
/* Prefer classes over complex selectors */
.btn-primary { /* Good */ }
button[data-type="primary"] { /* Less efficient */ }

/* Use logical properties for internationalization */
.content {
  margin-inline-start: 2rem; /* Instead of margin-left */
  padding-block: 1rem; /* Instead of padding-top/bottom */
  border-inline-end: 1px solid; /* Instead of border-right */
}
\`\`\`

## Browser Support and Progressive Enhancement

### Feature Queries
\`\`\`css
/* Flexbox fallback for grid */
.layout {
  display: flex;
  flex-wrap: wrap;
}

.layout > * {
  flex: 1 1 300px;
}

@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .layout > * {
    flex: none;
  }
}

/* Container queries with fallback */
.card {
  padding: 1rem;
}

@media (min-width: 600px) {
  .card {
    display: flex;
    gap: 2rem;
  }
}

@supports (container-type: inline-size) {
  .card-container {
    container-type: inline-size;
  }
  
  @container (min-width: 400px) {
    .card {
      display: flex;
      gap: 2rem;
    }
  }
}
\`\`\`

## Best Practices Summary

### Layout Best Practices
1. **Use CSS Grid for 2D layouts** and Flexbox for 1D layouts
2. **Prefer logical properties** for better internationalization
3. **Use container queries** for truly responsive components
4. **Implement progressive enhancement** with feature queries
5. **Keep specificity low** and use meaningful class names
6. **Use custom properties** for consistent theming
7. **Optimize for performance** with CSS containment
8. **Test across different viewport sizes** and devices

### Modern CSS Workflow
1. **Design with intrinsic sizing** in mind
2. **Use fluid typography and spacing**
3. **Implement responsive design without breakpoints** where possible
4. **Prioritize accessibility** in all layout decisions
5. **Test in multiple browsers** and devices
6. **Use modern CSS features** with appropriate fallbacks

These modern CSS techniques provide powerful tools for creating flexible, maintainable, and performant layouts that work across all devices and screen sizes.
      `
    },
    {
      id: 13,
      title: "DevOps Essentials: CI/CD, Docker, and Kubernetes",
      excerpt: "Learn the fundamental DevOps practices that every developer should know for modern software deployment.",
      author: "James Wilson",
      date: "2024-05-15",
      readTime: "25 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
      content: `
# DevOps Essentials: CI/CD, Docker, and Kubernetes

Learn the fundamental DevOps practices that every developer should know for modern software deployment.

## Understanding DevOps Culture

### What is DevOps?
DevOps is a cultural and professional movement that emphasizes:
- **Collaboration** between development and operations teams
- **Automation** of software delivery processes
- **Continuous integration** and continuous deployment
- **Infrastructure as Code** (IaC)
- **Monitoring and feedback** loops

### Key Principles
1. **Culture of shared responsibility**
2. **Automation everywhere**
3. **Measure everything**
4. **Continuous improvement**
5. **Fail fast and learn**

## Continuous Integration (CI)

### GitHub Actions CI Pipeline
\`\`\`yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run tests
      run: npm run test:coverage
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
    
    - name: Build application
      run: npm run build
    
    - name: Run security audit
      run: npm audit --audit-level high

  docker-build:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3
    
    - name: Login to DockerHub
      uses: docker/login-action@v3
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}
    
    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: |
          myapp:latest
          myapp:\${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
\`\`\`

### GitLab CI Pipeline
\`\`\`yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

variables:
  NODE_VERSION: "18"
  DOCKER_DRIVER: overlay2

before_script:
  - node --version
  - npm --version

test:
  stage: test
  image: node:\$NODE_VERSION
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run lint
    - npm run test:coverage
    - npm run build
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml
    paths:
      - dist/
    expire_in: 1 hour
  coverage: '/Lines\\s*:\\s*(\\d+\\.?\\d*)%/'

build:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  before_script:
    - docker login -u \$CI_REGISTRY_USER -p \$CI_REGISTRY_PASSWORD \$CI_REGISTRY
  script:
    - docker build -t \$CI_REGISTRY_IMAGE:latest .
    - docker push \$CI_REGISTRY_IMAGE:latest
  only:
    - main

deploy:
  stage: deploy
  image: alpine/kubectl:latest
  script:
    - kubectl apply -f k8s/
    - kubectl set image deployment/myapp myapp=\$CI_REGISTRY_IMAGE:latest
    - kubectl rollout status deployment/myapp
  only:
    - main
\`\`\`

## Docker Fundamentals

### Dockerfile Best Practices
\`\`\`dockerfile
# Use specific version tags
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nextjs -u 1001

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["npm", "start"]
\`\`\`

### Docker Compose for Development
\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    networks:
      - app-network

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app
    networks:
      - app-network

volumes:
  postgres_data:
  redis_data:

networks:
  app-network:
    driver: bridge
\`\`\`

### Multi-stage Build for Optimization
\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
\`\`\`

## Kubernetes Basics

### Deployment Configuration
\`\`\`yaml
# k8s/deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: myapp-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            configMapKeyRef:
              name: myapp-config
              key: redis-url
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
        volumeMounts:
        - name: app-storage
          mountPath: /app/data
      volumes:
      - name: app-storage
        persistentVolumeClaim:
          claimName: myapp-pvc
\`\`\`

### Service and Ingress Configuration
\`\`\`yaml
# k8s/service.yml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP

---
# k8s/ingress.yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/rate-limit: "100"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80
\`\`\`

### ConfigMap and Secrets
\`\`\`yaml
# k8s/configmap.yml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  redis-url: "redis://redis-service:6379"
  log-level: "info"
  feature-flags: |
    {
      "newFeature": true,
      "betaFeature": false
    }

---
# k8s/secret.yml
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
type: Opaque
data:
  database-url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc3dvcmRAZGI6NTQzMi9teWFwcA==
  jwt-secret: bXlfc3VwZXJfc2VjcmV0X2tleQ==
  api-key: YWJjZGVmZ2hpams=
\`\`\`

## Advanced Kubernetes Patterns

### StatefulSet for Databases
\`\`\`yaml
# k8s/postgres-statefulset.yml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres-headless
  replicas: 3
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15
        env:
        - name: POSTGRES_DB
          value: myapp
        - name: POSTGRES_USER
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: username
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: password
        - name: POSTGRES_REPLICATION_MODE
          value: slave
        - name: POSTGRES_REPLICATION_USER
          value: replicator
        - name: POSTGRES_REPLICATION_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: replication-password
        - name: POSTGRES_MASTER_SERVICE
          value: postgres-0.postgres-headless
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi
\`\`\`

### Horizontal Pod Autoscaler
\`\`\`yaml
# k8s/hpa.yml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 0
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
      - type: Pods
        value: 4
        periodSeconds: 15
      selectPolicy: Max
\`\`\`

## Infrastructure as Code

### Terraform Configuration
\`\`\`hcl
# main.tf
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# EKS Cluster
module "eks" {
  source = "terraform-aws-modules/eks/aws"
  
  cluster_name    = var.cluster_name
  cluster_version = "1.28"
  
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
  
  eks_managed_node_groups = {
    general = {
      desired_size = 2
      min_size     = 1
      max_size     = 4
      
      instance_types = ["t3.medium"]
      
      k8s_labels = {
        Environment = var.environment
        NodeGroup   = "general"
      }
    }
  }
}

# VPC
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  
  name = "\${var.cluster_name}-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = data.aws_availability_zones.available.names
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  
  enable_nat_gateway = true
  enable_vpn_gateway = false
  
  tags = {
    "kubernetes.io/cluster/\${var.cluster_name}" = "shared"
  }
}

# RDS Database
resource "aws_db_instance" "main" {
  identifier = "\${var.cluster_name}-db"
  
  engine         = "postgres"
  engine_version = "15.4"
  instance_class = "db.t3.micro"
  
  allocated_storage     = 20
  max_allocated_storage = 100
  
  db_name  = var.db_name
  username = var.db_username
  password = var.db_password
  
  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name
  
  backup_retention_period = 7
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"
  
  skip_final_snapshot = var.environment != "production"
  
  tags = {
    Environment = var.environment
  }
}
\`\`\`

### Helm Charts
\`\`\`yaml
# helm/myapp/Chart.yaml
apiVersion: v2
name: myapp
description: My Application Helm Chart
version: 0.1.0
appVersion: "1.0.0"

dependencies:
- name: postgresql
  version: "12.x.x"
  repository: "https://charts.bitnami.com/bitnami"
  condition: postgresql.enabled

- name: redis
  version: "17.x.x"
  repository: "https://charts.bitnami.com/bitnami"
  condition: redis.enabled
\`\`\`

\`\`\`yaml
# helm/myapp/values.yaml
replicaCount: 3

image:
  repository: myapp
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80
  targetPort: 3000

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
  hosts:
    - host: myapp.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: myapp-tls
      hosts:
        - myapp.example.com

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80

resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi

# Dependencies
postgresql:
  enabled: true
  auth:
    postgresPassword: "mypassword"
    database: "myapp"

redis:
  enabled: true
  auth:
    enabled: false
\`\`\`

## Monitoring and Observability

### Prometheus Configuration
\`\`\`yaml
# monitoring/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
  - static_configs:
    - targets:
      - "alertmanager:9093"

scrape_configs:
- job_name: 'myapp'
  static_configs:
  - targets: ['myapp:3000']
  metrics_path: '/metrics'
  scrape_interval: 10s

- job_name: 'kubernetes-pods'
  kubernetes_sd_configs:
  - role: pod
  relabel_configs:
  - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
    action: keep
    regex: true
  - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
    action: replace
    target_label: __metrics_path__
    regex: (.+)
\`\`\`

### Grafana Dashboard
\`\`\`json
{
  "dashboard": {
    "title": "MyApp Dashboard",
    "panels": [
      {
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{ method }} {{ status }}"
          }
        ]
      },
      {
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          }
        ]
      },
      {
        "title": "Error Rate",
        "type": "singlestat",
        "targets": [
          {
            "expr": "rate(http_requests_total{status=~\"5..\"}[5m]) / rate(http_requests_total[5m]) * 100"
          }
        ]
      }
    ]
  }
}
\`\`\`

## Security Best Practices

### Kubernetes Security
\`\`\`yaml
# k8s/security-policy.yml
apiVersion: v1
kind: SecurityContext
metadata:
  name: restricted-security-context
spec:
  runAsNonRoot: true
  runAsUser: 1001
  fsGroup: 1001
  seccompProfile:
    type: RuntimeDefault
  capabilities:
    drop:
    - ALL
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true

---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: myapp-network-policy
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: nginx-ingress
    ports:
    - protocol: TCP
      port: 3000
  egress:
  - to:
    - namespaceSelector:
        matchLabels:
          name: database
    ports:
    - protocol: TCP
      port: 5432
\`\`\`

### Container Security Scanning
\`\`\`yaml
# .github/workflows/security.yml
name: Security Scan

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  container-scan:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Build Docker image
      run: docker build -t myapp:scan .
    
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: 'myapp:scan'
        format: 'sarif'
        output: 'trivy-results.sarif'
    
    - name: Upload Trivy scan results
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'
    
    - name: Run Snyk container scan
      uses: snyk/actions/docker@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
      with:
        image: myapp:scan
\`\`\`

## Best Practices Summary

### CI/CD Best Practices
1. **Keep pipelines fast** with parallel jobs and caching
2. **Fail fast** with early validation steps
3. **Use semantic versioning** for releases
4. **Implement proper testing** at multiple levels
5. **Secure your pipelines** with secrets management
6. **Monitor pipeline performance** and success rates

### Docker Best Practices
1. **Use multi-stage builds** to reduce image size
2. **Run as non-root user** for security
3. **Use specific base image tags** for reproducibility
4. **Implement health checks** for better orchestration
5. **Scan images for vulnerabilities** regularly
6. **Keep images small** by minimizing layers

### Kubernetes Best Practices
1. **Use resource limits and requests** for all containers
2. **Implement proper health checks** (liveness/readiness)
3. **Use ConfigMaps and Secrets** for configuration
4. **Apply security contexts** and network policies
5. **Monitor resource usage** and performance
6. **Plan for disaster recovery** and backups

### Infrastructure Best Practices
1. **Use Infrastructure as Code** for reproducibility
2. **Implement proper monitoring** and alerting
3. **Plan for scalability** from the beginning
4. **Secure your infrastructure** with proper access controls
5. **Automate everything** that can be automated
6. **Document your architecture** and processes

DevOps is not just about tools – it's about creating a culture of collaboration, automation, and continuous improvement that enables teams to deliver software faster and more reliably.
      `
    },
    {
      id: 14,
      title: "Web Security Fundamentals: Protecting Your Applications",
      excerpt: "Essential security practices every web developer needs to know to build secure applications.",
      author: "Anna Kowalski",
      date: "2024-05-12",
      readTime: "21 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      content: `
# Web Security Fundamentals: Protecting Your Applications

Essential security practices every web developer needs to know to build secure applications.

## The Security Mindset

### Security by Design
Security isn't an afterthought – it should be built into every aspect of your application:
- **Threat modeling** during design phase
- **Defense in depth** with multiple security layers
- **Principle of least privilege** for access control
- **Secure defaults** in configuration
- **Regular security audits** and updates

### Common Attack Vectors
Understanding common attacks helps you defend against them:
1. **Injection attacks** (SQL, NoSQL, Command, etc.)
2. **Cross-Site Scripting (XSS)**
3. **Cross-Site Request Forgery (CSRF)**
4. **Authentication and session management flaws**
5. **Insecure direct object references**
6. **Security misconfigurations**
7. **Sensitive data exposure**

## Input Validation and Sanitization

### SQL Injection Prevention
\`\`\`javascript
// Vulnerable code
const getUserById = (id) => {
  const query = \`SELECT * FROM users WHERE id = \${id}\`;
  return db.query(query);
};

// Secure code with parameterized queries
const getUserById = (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  return db.query(query, [id]);
};

// Using an ORM (Sequelize example)
const getUserById = async (id) => {
  return await User.findByPk(id); // Built-in protection
};

// Input validation
const getUserById = async (id) => {
  // Validate input
  if (!id || !Number.isInteger(Number(id))) {
    throw new Error('Invalid user ID');
  }
  
  const userId = parseInt(id, 10);
  if (userId <= 0) {
    throw new Error('User ID must be positive');
  }
  
  return await User.findByPk(userId);
};
\`\`\`

### NoSQL Injection Prevention
\`\`\`javascript
// Vulnerable MongoDB query
const getUser = (username, password) => {
  return db.users.findOne({
    username: username,
    password: password
  });
};

// If an attacker sends: 
// { "username": "admin", "password": { "$ne": null } }
// This would bypass authentication

// Secure version with validation
const getUser = (username, password) => {
  // Validate input types
  if (typeof username !== 'string' || typeof password !== 'string') {
    throw new Error('Invalid input types');
  }
  
  // Sanitize input
  const sanitizedUsername = username.replace(/[\\$\\.]/g, '');
  
  return db.users.findOne({
    username: sanitizedUsername,
    password: hashPassword(password)
  });
};

// Using Mongoose with schema validation
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true,
    validate: {
      validator: (v) => /^[a-zA-Z0-9_]+$/.test(v),
      message: 'Username contains invalid characters'
    }
  },
  password: { type: String, required: true }
});
\`\`\`

### Input Sanitization Library
\`\`\`javascript
const validator = require('validator');
const DOMPurify = require('isomorphic-dompurify');

class InputSanitizer {
  static sanitizeString(input, maxLength = 255) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string');
    }
    
    // Trim whitespace
    let sanitized = input.trim();
    
    // Limit length
    if (sanitized.length > maxLength) {
      throw new Error(\`Input too long (max \${maxLength} characters)\`);
    }
    
    // Remove null bytes
    sanitized = sanitized.replace(/\\0/g, '');
    
    // Escape HTML entities
    sanitized = validator.escape(sanitized);
    
    return sanitized;
  }
  
  static sanitizeEmail(email) {
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format');
    }
    
    return validator.normalizeEmail(email, {
      lowercase: true,
      remove_dots: false,
      remove_extension: false
    });
  }
  
  static sanitizeHTML(html) {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: []
    });
  }
  
  static sanitizeURL(url) {
    if (!validator.isURL(url, {
      protocols: ['http', 'https'],
      require_protocol: true
    })) {
      throw new Error('Invalid URL');
    }
    
    return url;
  }
}

// Usage in Express middleware
const sanitizeInput = (req, res, next) => {
  try {
    if (req.body.username) {
      req.body.username = InputSanitizer.sanitizeString(req.body.username, 50);
    }
    
    if (req.body.email) {
      req.body.email = InputSanitizer.sanitizeEmail(req.body.email);
    }
    
    if (req.body.content) {
      req.body.content = InputSanitizer.sanitizeHTML(req.body.content);
    }
    
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
\`\`\`

## Cross-Site Scripting (XSS) Prevention

### Output Encoding
\`\`\`javascript
// Template rendering with automatic escaping (EJS example)
// Safe by default
<h1>Hello <%= user.name %></h1>

// Raw output (dangerous)
<div><%- user.bio %></div>

// Safe raw output after sanitization
<div><%- sanitizeHTML(user.bio) %></div>

// React automatically escapes
const UserProfile = ({ user }) => (
  <div>
    <h1>Hello {user.name}</h1> {/* Automatically escaped */}
    <div dangerouslySetInnerHTML={{ 
      __html: DOMPurify.sanitize(user.bio) 
    }} />
  </div>
);
\`\`\`

### Content Security Policy (CSP)
\`\`\`javascript
// Express.js CSP middleware
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: [
      "'self'", 
      "'unsafe-inline'", // Only if necessary
      "https://fonts.googleapis.com"
    ],
    scriptSrc: [
      "'self'",
      "https://cdn.jsdelivr.net",
      "'nonce-" + getNonce() + "'" // Use nonces for inline scripts
    ],
    imgSrc: [
      "'self'", 
      "data:", 
      "https://images.unsplash.com"
    ],
    connectSrc: [
      "'self'",
      "https://api.example.com"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"],
    upgradeInsecureRequests: []
  }
}));

// Generate nonce for inline scripts
const generateNonce = () => {
  return crypto.randomBytes(16).toString('base64');
};

// Use nonce in templates
<script nonce="<%= nonce %>">
  // Inline script content
</script>
\`\`\`

## Authentication and Authorization

### Secure Password Handling
\`\`\`javascript
const bcrypt = require('bcrypt');
const crypto = require('crypto');

class PasswordManager {
  static async hashPassword(password) {
    // Validate password strength
    if (!this.isStrongPassword(password)) {
      throw new Error('Password does not meet security requirements');
    }
    
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
  }
  
  static async verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
  
  static isStrongPassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  }
  
  static generateResetToken() {
    return crypto.randomBytes(32).toString('hex');
  }
}

// Usage in registration
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields required' });
    }
    
    // Hash password
    const hashedPassword = await PasswordManager.hashPassword(password);
    
    // Create user
    const user = await User.create({
      username: InputSanitizer.sanitizeString(username),
      email: InputSanitizer.sanitizeEmail(email),
      password: hashedPassword
    });
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
\`\`\`

### JWT Security
\`\`\`javascript
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class JWTManager {
  constructor() {
    this.accessTokenSecret = process.env.JWT_ACCESS_SECRET;
    this.refreshTokenSecret = process.env.JWT_REFRESH_SECRET;
    this.accessTokenExpiry = '15m';
    this.refreshTokenExpiry = '7d';
  }
  
  generateTokens(payload) {
    const accessToken = jwt.sign(
      payload, 
      this.accessTokenSecret,
      { 
        expiresIn: this.accessTokenExpiry,
        issuer: 'myapp',
        audience: 'myapp-users'
      }
    );
    
    const refreshToken = jwt.sign(
      { userId: payload.userId },
      this.refreshTokenSecret,
      { 
        expiresIn: this.refreshTokenExpiry,
        issuer: 'myapp',
        audience: 'myapp-users'
      }
    );
    
    return { accessToken, refreshToken };
  }
  
  verifyAccessToken(token) {
    try {
      return jwt.verify(token, this.accessTokenSecret, {
        issuer: 'myapp',
        audience: 'myapp-users'
      });
    } catch (error) {
      throw new Error('Invalid access token');
    }
  }
  
  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, this.refreshTokenSecret, {
        issuer: 'myapp',
        audience: 'myapp-users'
      });
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }
}

// Secure cookie settings
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  signed: true
};

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ 
      email: InputSanitizer.sanitizeEmail(email) 
    });
    
    if (!user || !await PasswordManager.verifyPassword(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate tokens
    const jwtManager = new JWTManager();
    const { accessToken, refreshToken } = jwtManager.generateTokens({
      userId: user.id,
      email: user.email,
      role: user.role
    });
    
    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', refreshToken, cookieOptions);
    
    res.json({ 
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});
\`\`\`

### Rate Limiting
\`\`\`javascript
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const Redis = require('ioredis');

const redis = new Redis(process.env.REDIS_URL);

// General rate limiting
const generalLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redis.call(...args),
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limiting for auth endpoints
const authLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redis.call(...args),
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  skipSuccessfulRequests: true, // Don't count successful requests
  message: {
    error: 'Too many login attempts, please try again later'
  }
});

// Account lockout after failed attempts
class AccountSecurity {
  static async recordFailedLogin(email) {
    const key = \`failed_logins:\${email}\`;
    const attempts = await redis.incr(key);
    
    if (attempts === 1) {
      await redis.expire(key, 15 * 60); // 15 minutes
    }
    
    if (attempts >= 5) {
      await this.lockAccount(email);
    }
    
    return attempts;
  }
  
  static async clearFailedLogins(email) {
    await redis.del(\`failed_logins:\${email}\`);
  }
  
  static async lockAccount(email) {
    const lockKey = \`locked_account:\${email}\`;
    await redis.setex(lockKey, 30 * 60, 'locked'); // 30 minutes
  }
  
  static async isAccountLocked(email) {
    const locked = await redis.get(\`locked_account:\${email}\`);
    return locked === 'locked';
  }
}

// Usage in login
app.post('/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if account is locked
    if (await AccountSecurity.isAccountLocked(email)) {
      return res.status(423).json({ 
        error: 'Account temporarily locked due to too many failed attempts'
      });
    }
    
    const user = await User.findOne({ email });
    
    if (!user || !await PasswordManager.verifyPassword(password, user.password)) {
      await AccountSecurity.recordFailedLogin(email);
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Clear failed login attempts on successful login
    await AccountSecurity.clearFailedLogins(email);
    
    // Continue with token generation...
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});
\`\`\`

## HTTPS and Transport Security

### SSL/TLS Configuration
\`\`\`javascript
const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

// Security headers
app.use((req, res, next) => {
  // Force HTTPS
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(\`https://\${req.header('host')}\${req.url}\`);
  } else {
    next();
  }
});

// Helmet for security headers
const helmet = require('helmet');
app.use(helmet({
  // HTTP Strict Transport Security
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  },
  
  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      upgradeInsecureRequests: []
    }
  },
  
  // X-Frame-Options
  frameguard: { action: 'deny' },
  
  // X-Content-Type-Options
  noSniff: true,
  
  // Referrer Policy
  referrerPolicy: { policy: "same-origin" }
}));

// SSL certificate options
const options = {
  key: fs.readFileSync('path/to/private-key.pem'),
  cert: fs.readFileSync('path/to/certificate.pem'),
  
  // Additional security options
  secureProtocol: 'TLSv1_2_method',
  ciphers: [
    'ECDHE-RSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-RSA-AES128-SHA256',
    'ECDHE-RSA-AES256-SHA384'
  ].join(':'),
  honorCipherOrder: true
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
\`\`\`

## Session Management

### Secure Session Configuration
\`\`\`javascript
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: process.env.SESSION_SECRET, // Use strong, random secret
  name: 'sessionId', // Don't use default name
  resave: false,
  saveUninitialized: false,
  
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URL,
    touchAfter: 24 * 3600 // lazy session update
  }),
  
  cookie: {
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    httpOnly: true, // Prevent XSS
    maxAge: 30 * 60 * 1000, // 30 minutes
    sameSite: 'strict' // CSRF protection
  },
  
  // Regenerate session ID on login
  genid: () => {
    return crypto.randomBytes(32).toString('hex');
  }
}));

// Session security middleware
const sessionSecurity = (req, res, next) => {
  // Regenerate session ID periodically
  if (req.session.views) {
    req.session.views++;
    
    // Regenerate every 10 requests
    if (req.session.views % 10 === 0) {
      req.session.regenerate((err) => {
        if (err) {
          return next(err);
        }
        req.session.views = 1;
        next();
      });
      return;
    }
  } else {
    req.session.views = 1;
  }
  
  next();
};

app.use(sessionSecurity);
\`\`\`

## API Security

### API Authentication
\`\`\`javascript
// API Key middleware
const apiKeyAuth = async (req, res, next) => {
  try {
    const apiKey = req.header('X-API-Key');
    
    if (!apiKey) {
      return res.status(401).json({ error: 'API key required' });
    }
    
    // Hash the API key for comparison
    const hashedKey = crypto
      .createHash('sha256')
      .update(apiKey)
      .digest('hex');
    
    const keyRecord = await APIKey.findOne({ 
      hashedKey,
      isActive: true,
      expiresAt: { $gt: new Date() }
    });
    
    if (!keyRecord) {
      return res.status(401).json({ error: 'Invalid API key' });
    }
    
    // Rate limiting per API key
    const rateLimitKey = \`api_rate:\${keyRecord.id}\`;
    const requests = await redis.incr(rateLimitKey);
    
    if (requests === 1) {
      await redis.expire(rateLimitKey, 3600); // 1 hour window
    }
    
    if (requests > keyRecord.rateLimit) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }
    
    req.apiKey = keyRecord;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
};

// Usage
app.use('/api', apiKeyAuth);
\`\`\`

### Request Signing
\`\`\`javascript
const crypto = require('crypto');

class RequestSigner {
  static generateSignature(payload, secret) {
    return crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');
  }
  
  static verifySignature(payload, signature, secret) {
    const expectedSignature = this.generateSignature(payload, secret);
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expectedSignature, 'hex')
    );
  }
}

// Webhook signature verification
const verifyWebhookSignature = (req, res, next) => {
  const signature = req.headers['x-signature'];
  const payload = JSON.stringify(req.body);
  const secret = process.env.WEBHOOK_SECRET;
  
  if (!RequestSigner.verifySignature(payload, signature, secret)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  next();
};
\`\`\`

## Data Protection

### Encryption at Rest
\`\`\`javascript
const crypto = require('crypto');

class DataEncryption {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.secretKey = crypto.scryptSync(process.env.ENCRYPTION_KEY, 'salt', 32);
  }
  
  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(this.algorithm, this.secretKey, iv);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }
  
  decrypt(encryptedData) {
    const { encrypted, iv, authTag } = encryptedData;
    
    const decipher = crypto.createDecipher(
      this.algorithm, 
      this.secretKey, 
      Buffer.from(iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(authTag, 'hex'));
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}

// Usage in database model
const encryption = new DataEncryption();

const userSchema = new mongoose.Schema({
  email: String,
  encryptedSSN: {
    encrypted: String,
    iv: String,
    authTag: String
  }
});

userSchema.methods.setSSN = function(ssn) {
  this.encryptedSSN = encryption.encrypt(ssn);
};

userSchema.methods.getSSN = function() {
  return encryption.decrypt(this.encryptedSSN);
};
\`\`\`

## Security Testing

### Automated Security Testing
\`\`\`javascript
// Security test suite
const request = require('supertest');
const app = require('../app');

describe('Security Tests', () => {
  test('should prevent SQL injection', async () => {
    const maliciousInput = "'; DROP TABLE users; --";
    
    const response = await request(app)
      .post('/login')
      .send({
        email: maliciousInput,
        password: 'password'
      });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toContain('Invalid input');
  });
  
  test('should prevent XSS attacks', async () => {
    const xssPayload = '<script>alert("XSS")</script>';
    
    const response = await request(app)
      .post('/api/comments')
      .send({
        content: xssPayload
      });
    
    expect(response.body.content).not.toContain('<script>');
  });
  
  test('should enforce rate limiting', async () => {
    const requests = Array(10).fill().map(() =>
      request(app).post('/login').send({
        email: 'test@example.com',
        password: 'wrong'
      })
    );
    
    const responses = await Promise.all(requests);
    const tooManyRequests = responses.filter(r => r.status === 429);
    
    expect(tooManyRequests.length).toBeGreaterThan(0);
  });
  
  test('should require authentication for protected routes', async () => {
    const response = await request(app)
      .get('/api/profile');
    
    expect(response.status).toBe(401);
  });
});
\`\`\`

## Security Monitoring

### Security Event Logging
\`\`\`javascript
const winston = require('winston');

const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ 
      filename: 'security.log',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    new winston.transports.Console()
  ]
});

class SecurityMonitor {
  static logSecurityEvent(event, details) {
    securityLogger.warn('Security Event', {
      event,
      details,
      timestamp: new Date().toISOString(),
      userAgent: details.userAgent,
      ip: details.ip
    });
  }
  
  static logFailedLogin(email, ip, userAgent) {
    this.logSecurityEvent('FAILED_LOGIN', {
      email,
      ip,
      userAgent,
      severity: 'medium'
    });
  }
  
  static logSuspiciousActivity(userId, activity, ip) {
    this.logSecurityEvent('SUSPICIOUS_ACTIVITY', {
      userId,
      activity,
      ip,
      severity: 'high'
    });
  }
}

// Usage in middleware
const securityMonitoring = (req, res, next) => {
  // Detect suspicious patterns
  const userAgent = req.headers['user-agent'];
  const ip = req.ip;
  
  // Check for common attack patterns
  const suspiciousPatterns = [
    /union.*select/i,
    /<script.*>/i,
    /eval\\(/i,
    /javascript:/i
  ];
  
  const requestString = JSON.stringify(req.body) + req.url;
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(requestString)) {
      SecurityMonitor.logSuspiciousActivity(
        req.user?.id,
        'Potential injection attempt',
        ip
      );
      break;
    }
  }
  
  next();
};
\`\`\`

## Best Practices Summary

### Input Security
1. **Validate all input** on both client and server side
2. **Use parameterized queries** to prevent injection attacks
3. **Sanitize output** before rendering to prevent XSS
4. **Implement proper error handling** without exposing sensitive information

### Authentication & Authorization
1. **Use strong password policies** and secure storage (bcrypt)
2. **Implement proper session management** with secure cookies
3. **Use HTTPS everywhere** for sensitive data transmission
4. **Implement rate limiting** and account lockout mechanisms

### Infrastructure Security
1. **Keep dependencies updated** and scan for vulnerabilities
2. **Use security headers** (CSP, HSTS, etc.)
3. **Implement proper logging** and monitoring
4. **Follow the principle of least privilege**

### Data Protection
1. **Encrypt sensitive data** at rest and in transit
2. **Use secure communication protocols** (HTTPS, WSS)
3. **Implement proper backup** and recovery procedures
4. **Follow data privacy regulations** (GDPR, CCPA)

Security is an ongoing process, not a one-time implementation. Regular security audits, staying updated with the latest threats, and continuous learning are essential for maintaining secure applications.
      `
    },
    {
      id: 15,
      title: "The Future of Web Development: Emerging Trends and Technologies",
      excerpt: "Explore the cutting-edge technologies and trends that are shaping the future of web development.",
      author: "Dr. Kevin Zhang",
      date: "2024-05-10",
      readTime: "18 min read",
      category: "Future Tech",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      content: `
# The Future of Web Development: Emerging Trends and Technologies

Explore the cutting-edge technologies and trends that are shaping the future of web development.

## The Evolution of Web Development

### From Static to Dynamic to Intelligent
Web development has undergone massive transformations:
- **1990s**: Static HTML pages
- **2000s**: Dynamic server-side rendering (PHP, ASP)
- **2010s**: Single Page Applications (SPAs)
- **2020s**: Jamstack and Edge Computing
- **2024+**: AI-powered development and WebAssembly

### Current State vs Future Vision
Today's web development focuses on performance, user experience, and developer productivity. The future promises even more revolutionary changes with AI integration, immersive experiences, and unprecedented performance.

## AI-Powered Development

### AI Code Generation and Assistance
\`\`\`javascript
// Current: Manual code writing
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Future: AI-generated optimized code with built-in error handling,
// performance optimization, and security best practices
// Command: "Generate a robust user fetching function with caching"

const fetchUserData = aiGenerate(\`
  Create a function that fetches user data with:
  - Built-in caching (5 minutes)
  - Retry logic (3 attempts)
  - Error handling with specific error types
  - Performance monitoring
  - Type safety
\`);

// AI generates:
import { cache, retry, monitor, validateUserId } from '@ai/web-utils';

const fetchUserData = cache(
  retry(
    monitor(
      async (userId: string): Promise<User> => {
        await validateUserId(userId);
        const response = await fetch(\`/api/users/\${userId}\`, {
          headers: { 'Accept': 'application/json' }
        });
        
        if (!response.ok) {
          throw new ApiError(response.status, await response.text());
        }
        
        return await response.json();
      },
      { name: 'fetchUserData', tags: ['api', 'user'] }
    ),
    { attempts: 3, backoff: 'exponential' }
  ),
  { ttl: 300000, key: (userId) => \`user:\${userId}\` }
);
\`\`\`

### Intelligent Code Review and Optimization
\`\`\`typescript
// Future: AI-powered code analysis and optimization
interface AICodeAnalysis {
  performanceScore: number;
  securityScore: number;
  maintainabilityScore: number;
  suggestions: CodeSuggestion[];
  autoOptimizations: OptimizationProposal[];
}

class AICodeAssistant {
  async analyzeCode(codeString: string): Promise<AICodeAnalysis> {
    return await this.aiModel.analyze({
      code: codeString,
      context: this.projectContext,
      standards: this.codingStandards,
      performance: this.performanceTargets
    });
  }
  
  async optimizeComponent(component: ReactComponent): Promise<OptimizedComponent> {
    const analysis = await this.analyzeCode(component.source);
    
    return {
      optimizedCode: await this.generateOptimizedVersion(component),
      performanceImprovements: analysis.optimizations,
      bundleSizeReduction: this.calculateSizeReduction(),
      accessibilityEnhancements: this.generateA11yImprovements()
    };
  }
}

// AI suggests and implements optimizations:
// - Automatic memoization of expensive calculations
// - Bundle splitting recommendations
// - Performance bottleneck identification
// - Security vulnerability detection
// - Accessibility improvements
\`\`\`

## WebAssembly (WASM) Revolution

### High-Performance Web Applications
\`\`\`rust
// Rust code compiled to WebAssembly
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct ImageProcessor {
    data: Vec<u8>,
    width: u32,
    height: u32,
}

#[wasm_bindgen]
impl ImageProcessor {
    #[wasm_bindgen(constructor)]
    pub fn new(data: Vec<u8>, width: u32, height: u32) -> ImageProcessor {
        ImageProcessor { data, width, height }
    }
    
    #[wasm_bindgen]
    pub fn apply_gaussian_blur(&mut self, radius: f32) {
        // High-performance image processing in Rust
        // Compiled to WebAssembly for near-native speed
        gaussian_blur_impl(&mut self.data, self.width, self.height, radius);
    }
    
    #[wasm_bindgen]
    pub fn detect_edges(&self) -> Vec<u8> {
        // CPU-intensive edge detection algorithm
        edge_detection_impl(&self.data, self.width, self.height)
    }
}
\`\`\`

\`\`\`javascript
// JavaScript integration with WebAssembly
import init, { ImageProcessor } from './pkg/image_processor.js';

class WebImageEditor {
  constructor() {
    this.wasmModule = null;
    this.initializeWasm();
  }
  
  async initializeWasm() {
    this.wasmModule = await init();
    console.log('WebAssembly module loaded');
  }
  
  async processImage(imageData) {
    if (!this.wasmModule) {
      throw new Error('WASM module not initialized');
    }
    
    // Create WASM instance for high-performance processing
    const processor = new ImageProcessor(
      imageData.data, 
      imageData.width, 
      imageData.height
    );
    
    // Perform CPU-intensive operations at near-native speed
    processor.apply_gaussian_blur(2.5);
    const edges = processor.detect_edges();
    
    return {
      processed: processor.get_data(),
      edges: edges
    };
  }
}

// Performance comparison:
// JavaScript: 500ms for complex image processing
// WebAssembly: 50ms for the same operation (10x faster)
\`\`\`

## Edge Computing and Serverless

### Edge-First Architecture
\`\`\`javascript
// Cloudflare Workers / Vercel Edge Functions
export default {
  async fetch(request, env) {
    // Code runs at the edge, closer to users
    const url = new URL(request.url);
    
    // Geolocation-based logic
    const country = request.cf?.country || 'US';
    const region = this.getRegionFromCountry(country);
    
    // Edge-side A/B testing
    const testVariant = await this.getTestVariant(
      request.headers.get('CF-Connecting-IP')
    );
    
    // Personalized response at the edge
    const response = await this.generatePersonalizedContent({
      region,
      variant: testVariant,
      userAgent: request.headers.get('User-Agent')
    });
    
    return new Response(response, {
      headers: {
        'Cache-Control': 'public, max-age=3600',
        'Vary': 'User-Agent, CF-IPCountry'
      }
    });
  }
};

// Future: AI-powered edge optimization
class EdgeAI {
  async optimizeDelivery(request) {
    // Analyze user behavior patterns
    const userProfile = await this.analyzeUserContext(request);
    
    // Predict optimal content delivery strategy
    const strategy = await this.predictOptimalStrategy({
      bandwidth: userProfile.connectionSpeed,
      device: userProfile.deviceCapabilities,
      preferences: userProfile.contentPreferences
    });
    
    return this.executeStrategy(strategy);
  }
}
\`\`\`

### Serverless Database and State Management
\`\`\`typescript
// Future: Globally distributed, serverless databases
interface EdgeDatabase {
  // Data automatically replicated to edge locations
  // Near-zero latency reads worldwide
  
  async get<T>(key: string): Promise<T | null>;
  async set<T>(key: string, value: T, ttl?: number): Promise<void>;
  async query<T>(sql: string, params?: any[]): Promise<T[]>;
  
  // Built-in conflict resolution for concurrent writes
  async atomicUpdate<T>(
    key: string, 
    updateFn: (current: T) => T
  ): Promise<T>;
}

class GlobalStateManager {
  constructor(private db: EdgeDatabase) {}
  
  // State synchronization across edge locations
  async syncUserPreferences(userId: string, preferences: UserPreferences) {
    await this.db.atomicUpdate(\`user:\${userId}:prefs\`, (current) => ({
      ...current,
      ...preferences,
      lastModified: Date.now()
    }));
    
    // Automatically propagated to all edge locations
    // Available globally within milliseconds
  }
}
\`\`\`

## Immersive Web Experiences

### WebXR and Spatial Computing
\`\`\`javascript
// WebXR for VR/AR experiences in the browser
class WebXRExperience {
  constructor() {
    this.xrSession = null;
    this.referenceSpace = null;
  }
  
  async initializeXR() {
    if (!navigator.xr) {
      throw new Error('WebXR not supported');
    }
    
    // Check for AR support
    const isARSupported = await navigator.xr.isSessionSupported('immersive-ar');
    const isVRSupported = await navigator.xr.isSessionSupported('immersive-vr');
    
    if (isARSupported) {
      await this.startARSession();
    } else if (isVRSupported) {
      await this.startVRSession();
    }
  }
  
  async startARSession() {
    this.xrSession = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['local', 'hit-test', 'light-estimation']
    });
    
    this.referenceSpace = await this.xrSession.requestReferenceSpace('local');
    
    // Set up AR scene
    this.setupARScene();
    this.xrSession.requestAnimationFrame(this.onXRFrame.bind(this));
  }
  
  onXRFrame(time, frame) {
    const pose = frame.getViewerPose(this.referenceSpace);
    
    if (pose) {
      // Render 3D content anchored to real world
      this.renderARContent(pose);
      
      // Perform hit testing for object placement
      this.performHitTest(frame);
    }
    
    this.xrSession.requestAnimationFrame(this.onXRFrame.bind(this));
  }
  
  // Future: AI-powered spatial understanding
  async analyzeEnvironment(frame) {
    const environmentData = await this.aiModel.analyzeARFrame(frame);
    
    return {
      roomDimensions: environmentData.spatialMapping,
      lighting: environmentData.lightEstimation,
      surfaces: environmentData.surfaceDetection,
      objects: environmentData.objectRecognition
    };
  }
}

// WebGL/WebGPU for high-performance 3D graphics
class WebGPURenderer {
  async initialize() {
    const adapter = await navigator.gpu.requestAdapter();
    this.device = await adapter.requestDevice();
    
    // High-performance GPU computing in the browser
    this.setupRenderPipeline();
  }
  
  async renderComplexScene(sceneData) {
    // Ray tracing, advanced lighting, and physics
    // Running entirely in the browser with WebGPU
    const computeShader = this.device.createShaderModule({
      code: \`
        @compute @workgroup_size(8, 8)
        fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
          // GPU compute shader for ray tracing
          let pixel = vec2(global_id.xy);
          let color = rayTrace(pixel);
          textureStore(outputTexture, pixel, color);
        }
      \`
    });
    
    // Execute high-performance rendering on GPU
    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    computePass.setPipeline(this.computePipeline);
    computePass.dispatch(sceneData.width / 8, sceneData.height / 8);
    computePass.end();
    
    this.device.queue.submit([commandEncoder.finish()]);
  }
}
\`\`\`

### Advanced PWA Capabilities
\`\`\`javascript
// Future PWA capabilities
class NextGenPWA {
  constructor() {
    this.initializeAdvancedFeatures();
  }
  
  async initializeAdvancedFeatures() {
    // Advanced caching with ML predictions
    await this.setupPredictiveCaching();
    
    // Native-like integrations
    await this.setupSystemIntegrations();
    
    // Offline-first with conflict resolution
    await this.setupAdvancedOffline();
  }
  
  async setupPredictiveCaching() {
    // AI predicts what users will need next
    const predictor = new UserBehaviorPredictor();
    
    const predictions = await predictor.analyzeUserPatterns({
      historicalData: await this.getUserHistory(),
      currentContext: this.getCurrentContext(),
      timeOfDay: new Date().getHours(),
      location: await this.getLocation()
    });
    
    // Pre-cache predicted content
    for (const prediction of predictions.highConfidence) {
      await this.cacheContent(prediction.resource);
    }
  }
  
  async setupSystemIntegrations() {
    // File system access
    if ('showDirectoryPicker' in window) {
      this.fileSystemAccess = true;
    }
    
    // Web Serial API for IoT devices
    if ('serial' in navigator) {
      this.serialAccess = true;
    }
    
    // Web Bluetooth for device connectivity
    if ('bluetooth' in navigator) {
      this.bluetoothAccess = true;
    }
    
    // Web Share Target
    if ('serviceWorker' in navigator) {
      await this.registerShareTarget();
    }
  }
  
  async setupAdvancedOffline() {
    // Conflict-free replicated data types (CRDTs)
    this.crdt = new WebCRDT();
    
    // Automatic sync when online
    window.addEventListener('online', () => {
      this.synchronizeData();
    });
    
    // Background sync for reliable data delivery
    await this.registerBackgroundSync();
  }
}
\`\`\`

## Advanced State Management

### Distributed State with Real-time Collaboration
\`\`\`typescript
// Future: Distributed state management with automatic conflict resolution
interface CollaborativeState<T> {
  state: T;
  subscribers: Set<StateSubscriber<T>>;
  conflictResolver: ConflictResolver<T>;
  networkManager: P2PNetworkManager;
}

class DistributedStateManager<T> {
  private localState: T;
  private remoteStates: Map<string, T>;
  private operationalTransform: OT;
  
  constructor(initialState: T) {
    this.localState = initialState;
    this.operationalTransform = new OperationalTransform();
    this.setupP2PSync();
  }
  
  async setState(newState: Partial<T>, operation: Operation) {
    // Apply operational transformation for concurrent edits
    const transformedOp = await this.operationalTransform.transform(
      operation,
      this.getPendingOperations()
    );
    
    // Update local state
    this.localState = { ...this.localState, ...newState };
    
    // Broadcast to peers
    await this.broadcastOperation(transformedOp);
    
    // Notify subscribers
    this.notifySubscribers(this.localState);
  }
  
  async resolveConflicts(operations: Operation[]) {
    // AI-powered conflict resolution
    const resolution = await this.aiConflictResolver.resolve({
      operations,
      context: this.getStateContext(),
      userIntents: await this.inferUserIntents(operations)
    });
    
    return resolution.mergedState;
  }
}

// Real-time collaborative editing
class CollaborativeEditor {
  constructor() {
    this.state = new DistributedStateManager({
      document: '',
      cursors: new Map(),
      selections: new Map()
    });
  }
  
  async handleTextEdit(edit: TextEdit, userId: string) {
    // Operational transformation for text editing
    const operation = {
      type: 'text-edit',
      position: edit.position,
      deletion: edit.deletion,
      insertion: edit.insertion,
      userId,
      timestamp: Date.now()
    };
    
    await this.state.setState(
      { document: this.applyEdit(edit) },
      operation
    );
  }
}
\`\`\`

## Performance and Optimization

### Automatic Performance Optimization
\`\`\`javascript
// Future: AI-powered performance optimization
class PerformanceAI {
  constructor() {
    this.performanceMonitor = new WebVitalsMonitor();
    this.optimizer = new AutomaticOptimizer();
    this.predictor = new PerformancePredictor();
  }
  
  async optimizeApplication() {
    // Real-time performance monitoring
    const metrics = await this.performanceMonitor.collect();
    
    // Identify optimization opportunities
    const opportunities = await this.analyzer.analyze({
      metrics,
      userBehavior: this.getUserBehavior(),
      deviceCapabilities: this.getDeviceCapabilities(),
      networkConditions: this.getNetworkConditions()
    });
    
    // Apply optimizations automatically
    for (const optimization of opportunities) {
      await this.applyOptimization(optimization);
    }
  }
  
  async applyOptimization(optimization) {
    switch (optimization.type) {
      case 'code-splitting':
        await this.implementCodeSplitting(optimization.targets);
        break;
        
      case 'preloading':
        await this.optimizePreloading(optimization.resources);
        break;
        
      case 'caching':
        await this.optimizeCaching(optimization.strategy);
        break;
        
      case 'rendering':
        await this.optimizeRendering(optimization.components);
        break;
    }
  }
  
  // Predictive loading based on user behavior
  async predictivePreload() {
    const predictions = await this.predictor.predictUserActions({
      currentPage: window.location.pathname,
      timeSpent: this.getTimeOnPage(),
      scrollBehavior: this.getScrollBehavior(),
      clickPatterns: this.getClickPatterns()
    });
    
    // Preload resources for predicted actions
    for (const prediction of predictions.highConfidence) {
      await this.preloadResource(prediction.resource);
    }
  }
}

// Automatic bundle optimization
class IntelligentBundling {
  async optimizeBundles(applicationGraph) {
    // Analyze usage patterns
    const usageData = await this.analyzeUsagePatterns();
    
    // Create optimal bundle strategy
    const bundleStrategy = await this.createOptimalStrategy({
      modules: applicationGraph.modules,
      dependencies: applicationGraph.dependencies,
      usage: usageData,
      targetMetrics: {
        initialLoadTime: '<2s',
        interactiveTime: '<3s',
        cacheHitRate: '>90%'
      }
    });
    
    return bundleStrategy;
  }
}
\`\`\`

## Security Evolution

### Zero-Trust Architecture
\`\`\`typescript
// Future: Zero-trust security model
class ZeroTrustSecurity {
  private trustEngine: TrustEvaluationEngine;
  private riskAssessment: RiskAssessmentAI;
  
  async evaluateRequest(request: Request, context: SecurityContext) {
    // Continuous verification - never trust, always verify
    const riskScore = await this.riskAssessment.evaluate({
      user: context.user,
      device: context.device,
      location: context.location,
      behavior: context.behaviorPattern,
      request: request
    });
    
    const trustLevel = await this.trustEngine.calculateTrust({
      riskScore,
      historicalBehavior: await this.getUserHistory(context.user.id),
      deviceTrust: await this.getDeviceTrust(context.device.fingerprint),
      networkTrust: await this.getNetworkTrust(context.network)
    });
    
    return this.makeAccessDecision(trustLevel, request.sensitivity);
  }
  
  async adaptiveAuthentication(context: SecurityContext) {
    const riskLevel = await this.assessRiskLevel(context);
    
    switch (riskLevel) {
      case 'low':
        return { method: 'session', additional: [] };
        
      case 'medium':
        return { 
          method: 'mfa', 
          additional: ['device-verification'] 
        };
        
      case 'high':
        return { 
          method: 'strong-mfa', 
          additional: ['biometric', 'device-verification', 'location-verification'] 
        };
    }
  }
}

// Privacy-preserving authentication
class PrivacyPreservingAuth {
  async authenticateWithZKProof(credentials: Credentials) {
    // Zero-knowledge proofs for authentication
    // Prove identity without revealing sensitive information
    const zkProof = await this.generateZKProof({
      secret: credentials.password,
      challenge: this.generateChallenge(),
      publicParameters: this.getPublicParameters()
    });
    
    return this.verifyProof(zkProof);
  }
}
\`\`\`

## Development Tools Evolution

### AI-Powered Development Environment
\`\`\`typescript
// Future IDE with AI assistance
interface AIDevEnvironment {
  codeCompletion: IntelligentCodeCompletion;
  bugDetection: RealTimeBugDetection;
  performanceAnalysis: ContinuousPerformanceAnalysis;
  testGeneration: AutomaticTestGeneration;
  documentation: IntelligentDocumentation;
}

class NextGenIDE {
  private aiAssistant: DevelopmentAI;
  
  async provideCodeSuggestions(context: CodeContext) {
    return await this.aiAssistant.suggest({
      currentCode: context.code,
      cursorPosition: context.position,
      projectContext: context.project,
      userPreferences: context.preferences,
      bestPractices: await this.getBestPractices(context.language)
    });
  }
  
  async detectIssues(codebase: Codebase) {
    const issues = await Promise.all([
      this.aiAssistant.detectBugs(codebase),
      this.aiAssistant.identifyPerformanceIssues(codebase),
      this.aiAssistant.checkSecurity(codebase),
      this.aiAssistant.validateAccessibility(codebase)
    ]);
    
    return this.prioritizeIssues(issues.flat());
  }
  
  async generateTests(component: Component) {
    // AI generates comprehensive test suites
    return await this.aiAssistant.generateTests({
      component,
      coverage: 'comprehensive',
      testTypes: ['unit', 'integration', 'e2e', 'accessibility', 'performance'],
      frameworks: this.getTestingFrameworks()
    });
  }
}
\`\`\`

## The Road Ahead

### Timeline of Emerging Technologies
\`\`\`
2024-2025: Near Future
- AI code assistants become mainstream
- WebAssembly adoption accelerates
- Edge computing proliferates
- Advanced PWA capabilities

2025-2027: Medium Term
- WebXR becomes practical for commerce
- Quantum-resistant cryptography
- Brain-computer interfaces for web
- Fully distributed web architecture

2027-2030: Long Term
- AGI-powered development tools
- Quantum computing in browsers
- Neural web interfaces
- Semantic web with AI reasoning
\`\`\`

### Preparing for the Future
\`\`\`javascript
// Skills and mindset for future web development
const futureWebDeveloper = {
  technicalSkills: [
    'AI/ML integration',
    'WebAssembly development',
    'Edge computing architecture',
    'XR/spatial computing',
    'Quantum-safe cryptography',
    'Advanced performance optimization'
  ],
  
  mindset: [
    'AI-first development approach',
    'Privacy-by-design thinking',
    'Performance-conscious architecture',
    'Accessibility-first design',
    'Sustainability awareness',
    'Continuous learning adaptation'
  ],
  
  tools: [
    'AI-powered IDEs',
    'Automated testing suites',
    'Performance prediction models',
    'Security assessment AI',
    'Cross-platform deployment automation',
    'Real-time collaboration platforms'
  ]
};

// Framework for staying current
class TechEvolutionTracker {
  async trackEmergingTrends() {
    const trends = await this.aggregateFromSources([
      'research-papers',
      'industry-conferences',
      'open-source-projects',
      'technology-patents',
      'developer-surveys'
    ]);
    
    return this.analyzeImpactPotential(trends);
  }
  
  createLearningPath(trends) {
    return trends
      .filter(trend => trend.impact > 0.7)
      .sort((a, b) => b.adoptionTimeline - a.adoptionTimeline)
      .map(trend => ({
        technology: trend.name,
        priority: this.calculatePriority(trend),
        resources: this.findLearningResources(trend),
        practiceProjects: this.generateProjects(trend)
      }));
  }
}
\`\`\`

## Conclusion: Embracing the Future

The future of web development is incredibly exciting, with AI, WebAssembly, edge computing, and immersive technologies reshaping how we build and interact with web applications. Key trends to watch:

### Immediate Focus (2024-2025)
1. **AI Integration**: Start experimenting with AI code assistants and automated optimization
2. **Performance First**: Embrace edge computing and advanced caching strategies
3. **Enhanced PWAs**: Leverage new browser APIs for native-like experiences
4. **WebAssembly**: Explore high-performance computing in the browser

### Medium-term Preparation (2025-2027)
1. **Immersive Web**: Learn WebXR and spatial computing concepts
2. **Advanced Security**: Implement zero-trust architectures
3. **Distributed Systems**: Master edge-computing patterns
4. **AI-Powered UX**: Create intelligent, adaptive user interfaces

### Long-term Vision (2027+)
1. **AGI Collaboration**: Work alongside artificial general intelligence
2. **Quantum Integration**: Prepare for quantum computing capabilities
3. **Neural Interfaces**: Design for direct brain-computer interaction
4. **Autonomous Systems**: Build self-optimizing, self-healing applications

The web platform continues to evolve at an unprecedented pace. Success in this future landscape requires not just technical skills, but adaptability, continuous learning, and a forward-thinking mindset. The developers who thrive will be those who embrace change, experiment with emerging technologies, and always keep the user experience at the center of their innovations.

Stay curious, keep learning, and prepare to build the future of the web.
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
