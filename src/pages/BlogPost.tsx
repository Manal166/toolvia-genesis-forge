import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPost {
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

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with AI-Powered Code Generation',
    excerpt: 'Learn how artificial intelligence is revolutionizing the way we write and generate code, making development faster and more efficient.',
    content: `
# Getting Started with AI-Powered Code Generation

Artificial intelligence is fundamentally transforming the software development landscape. What once required hours of manual coding can now be accomplished in minutes with the right AI tools.

## The Revolution is Here

AI-powered code generation represents one of the most significant advances in programming since the introduction of high-level languages. These tools don't just autocomplete your code—they understand context, design patterns, and best practices to generate entire functions, classes, and even applications.

## Key Benefits

**Increased Productivity**: Developers report 40-60% faster development times when using AI assistants.

**Reduced Errors**: AI tools catch common mistakes and suggest improvements in real-time.

**Learning Accelerator**: Junior developers can learn from AI-generated examples and explanations.

## Getting Started

1. **Choose Your Tool**: GitHub Copilot, ChatGPT, Claude, or specialized platforms like Lovable
2. **Start Small**: Begin with simple functions and gradually work up to complex features
3. **Review Everything**: AI is powerful but not infallible—always review generated code
4. **Learn the Prompts**: Effective prompting is a skill that dramatically improves results

## Best Practices

- Be specific in your requests
- Provide context about your project
- Ask for explanations along with code
- Test thoroughly before deployment

The future of coding is collaborative—human creativity paired with AI efficiency. Embrace these tools, and watch your productivity soar.
    `,
    author: 'Sarah Johnson',
    publishDate: '2024-06-15',
    readTime: '5 min read',
    category: 'AI & Development',
    tags: ['AI', 'Code Generation', 'Productivity'],
    featuredImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'The Art of Writing Self-Documenting Code',
    excerpt: 'Master the craft of creating code that tells its own story, reducing the need for extensive documentation while improving maintainability.',
    content: `
# The Art of Writing Self-Documenting Code

In the fast-paced world of software development, documentation often becomes an afterthought. But what if your code could tell its own story? Self-documenting code is more than just a buzzword—it's a philosophy that can transform how teams collaborate and maintain software.

## The Philosophy Behind Self-Documenting Code

Self-documenting code is code that clearly expresses its intent through careful naming, structure, and design. It reduces cognitive load and makes the codebase accessible to new team members without requiring extensive external documentation.

## The Foundation: Meaningful Names

**Choose Names That Reveal Intent**:
\`\`\`javascript
// Poor naming
function calc(x, y) {
  return x * y * 0.1;
}

// Self-documenting naming
function calculateMonthlyInterest(principal, rate) {
  const MONTHS_PER_YEAR = 12;
  return principal * rate / MONTHS_PER_YEAR;
}
\`\`\`

**Use Pronounceable Names**: If you can't say it out loud in a code review, it's probably not a good name.

**Avoid Mental Mapping**: Don't make readers translate abbreviations or acronyms in their heads.

## Function Design Principles

**Single Responsibility**: Each function should do one thing well.
\`\`\`python
# Before: Function doing too much
def process_user_data(user_id):
    user = get_user(user_id)
    validate_user(user)
    update_last_login(user)
    send_welcome_email(user)
    log_user_activity(user)
    
# After: Broken into focused functions
def authenticate_and_welcome_user(user_id):
    user = authenticate_user(user_id)
    welcome_returning_user(user)
    
def authenticate_user(user_id):
    user = fetch_user_by_id(user_id)
    validate_user_credentials(user)
    record_login_timestamp(user)
    return user
    
def welcome_returning_user(user):
    send_personalized_welcome_email(user)
    log_successful_authentication(user)
\`\`\`

**Small Functions**: Aim for functions that fit on a single screen. If you need to scroll, consider breaking it down.

## Code Structure as Documentation

**Use Guard Clauses**: Make the happy path obvious by handling edge cases early.
\`\`\`typescript
// Instead of deep nesting
function processOrder(order: Order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.customer.isValid()) {
        // main logic here
      }
    }
  }
}

// Use guard clauses
function processOrder(order: Order) {
  if (!order) throw new Error('Order is required');
  if (order.items.length === 0) throw new Error('Order must have items');
  if (!order.customer.isValid()) throw new Error('Invalid customer');
  
  // main logic here - the happy path is clear
}
\`\`\`

**Organize Code by Importance**: Put the most important logic first, details last.

## The Power of Domain-Driven Design

**Use Ubiquitous Language**: Your code should use the same terms that domain experts use.

\`\`\`java
// Generic, unclear
class DataProcessor {
  void process(List<Object> items) { }
}

// Domain-specific, clear
class InvoiceValidator {
  void validatePendingInvoices(List<Invoice> unpaidInvoices) { }
}
\`\`\`

**Create Domain Models**: Let your classes represent real-world concepts.

## When Comments Are Still Necessary

While self-documenting code reduces the need for comments, some situations still require them:

**Explaining Why, Not What**:
\`\`\`javascript
// Poor comment (explains what)
user.status = 'inactive'; // Set user status to inactive

// Good comment (explains why)
user.status = 'inactive'; // Prevent login attempts during password reset process
\`\`\`

**Complex Business Rules**:
\`\`\`python
# Apply the "Rule of 72" for compound interest approximation
# This simplified calculation is acceptable for estimation purposes
# as specified in requirements document REQ-2024-003
years_to_double = 72 / annual_interest_rate
\`\`\`

**API Documentation**: Public interfaces still need clear documentation.

## Code Organization Strategies

**Package by Feature, Not by Layer**:
\`\`\`
❌ Bad: Organized by technical layer
src/
  controllers/
  services/
  repositories/
  
✅ Good: Organized by business feature
src/
  user-management/
  order-processing/
  inventory-tracking/
\`\`\`

**Use Consistent Patterns**: Establish conventions and stick to them across your codebase.

## Testing as Documentation

Well-written tests serve as executable documentation:

\`\`\`javascript
describe('OrderCalculator', () => {
  it('should apply senior citizen discount when customer is over 65', () => {
    const customer = new Customer({ age: 70 });
    const order = new Order({ subtotal: 100 });
    
    const total = OrderCalculator.calculateTotal(order, customer);
    
    expect(total).toBe(85); // 15% senior discount applied
  });
});
\`\`\`

## Tools and Techniques

**Type Systems**: Use TypeScript, Flow, or other type systems to make contracts explicit.

**Linting Rules**: Enforce naming conventions and code structure through automated tools.

**Code Reviews**: Focus on readability and intent during peer reviews.

## Advanced Techniques

**Fluent Interfaces**: Make method chaining read like natural language.
\`\`\`java
Order order = OrderBuilder
  .createOrder()
  .forCustomer(customer)
  .addItem(product, quantity)
  .applyDiscount(coupon)
  .build();
\`\`\`

**Command Query Separation**: Methods should either do something or return something, not both.

**Intention-Revealing Interfaces**: Design APIs that make correct usage obvious.

## The Business Case

Self-documenting code isn't just about developer happiness—it has real business impact:

- **Faster Onboarding**: New developers become productive sooner
- **Reduced Bugs**: Clear code leads to fewer misunderstandings
- **Lower Maintenance Costs**: Self-evident code is easier to modify
- **Better Collaboration**: Teams spend less time explaining and more time building

## Making the Transition

**Start Small**: Begin with new code and gradually refactor existing code during regular maintenance.

**Team Agreement**: Establish coding standards that everyone follows.

**Continuous Improvement**: Regular retrospectives on code quality and readability.

**Measure Progress**: Track metrics like time to understand unfamiliar code or onboarding speed.

## Conclusion

Self-documenting code is an investment in your team's future productivity. It requires discipline and practice, but the payoff is enormous. When your code tells a clear story, everyone wins—from the developer who wrote it six months ago to the new team member encountering it for the first time.

Remember: code is written once but read many times. Make every reading a pleasant experience.
    `,
    author: 'Alex Rivera',
    publishDate: '2024-06-18',
    readTime: '9 min read',
    category: 'Development',
    tags: ['Documentation', 'Code Quality', 'Best Practices', 'Clean Code'],
    featuredImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Understanding Regular Expressions',
    excerpt: 'Master the art of pattern matching with regular expressions and learn how to use them effectively in your projects.',
    content: `
# Understanding Regular Expressions

Regular expressions (regex) are one of the most powerful tools in a developer's toolkit, yet they're often misunderstood and underutilized. Let's demystify regex and show you how to harness their power.

## What Are Regular Expressions?

Regular expressions are patterns that describe sets of strings. They're like a mini-language for describing text patterns, allowing you to search, match, and manipulate text with incredible precision.

## Common Use Cases

**Email Validation**: \`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$\`

**Phone Number Formatting**: Extract and format phone numbers from text

**Log File Analysis**: Parse server logs to extract specific information

**Data Cleaning**: Remove unwanted characters or standardize formats

## Building Blocks

**Literals**: Most characters match themselves (a matches "a")

**Character Classes**: [abc] matches any of a, b, or c

**Quantifiers**: 
- \`*\` means zero or more
- \`+\` means one or more  
- \`?\` means zero or one
- \`{n,m}\` means between n and m times

**Anchors**:
- \`^\` matches start of string
- \`$\` matches end of string

## Practical Examples

**Extracting URLs from Text**:
\`\`\`regex
https?://[^\s]+
\`\`\`

**Validating Strong Passwords**:
\`\`\`regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
\`\`\`

**Parsing CSV Data**:
\`\`\`regex
,(?=(?:[^"]*"[^"]*")*[^"]*$)
\`\`\`

## Best Practices

1. **Start Simple**: Build complex patterns gradually
2. **Test Thoroughly**: Use tools like RegexPal or regex101.com
3. **Comment Complex Patterns**: Use verbose mode when available
4. **Consider Performance**: Some patterns can be very slow on large texts
5. **Know When Not to Use Regex**: For parsing HTML or complex nested structures, use proper parsers

## Common Pitfalls

- **Greedy vs Lazy Matching**: Understanding when \`.*\` captures too much
- **Escaping Special Characters**: Remember to escape \`. + * ? ^ $ ( ) [ ] { } | \\\`
- **Case Sensitivity**: Use flags like \`i\` for case-insensitive matching

Regular expressions are incredibly powerful, but with great power comes great responsibility. Use them wisely, and they'll serve you well throughout your development career.
    `,
    author: 'Emily Rodriguez',
    publishDate: '2024-06-10',
    readTime: '6 min read',
    category: 'Programming',
    tags: ['Regex', 'Pattern Matching', 'Text Processing'],
    featuredImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Debugging Techniques for Modern Developers',
    excerpt: 'Explore advanced debugging strategies and tools that can help you identify and fix issues in your code more efficiently.',
    content: `
# Debugging Techniques for Modern Developers

Debugging is an essential skill that separates good developers from great ones. It's not just about fixing bugs—it's about understanding your code, your system, and developing a systematic approach to problem-solving.

## The Debugging Mindset

**Stay Calm**: Panic leads to poor decisions. Take a step back and approach the problem methodically.

**Question Everything**: Don't assume anything. The bug might be in the last place you'd expect.

**Reproduce Consistently**: If you can't reproduce it reliably, you can't fix it properly.

## Essential Debugging Tools

**Browser DevTools**: Chrome, Firefox, and Safari all offer powerful debugging capabilities:
- Breakpoints and step-through debugging
- Network tab for API calls
- Performance profiling
- Memory usage analysis

**IDE Debuggers**: Modern IDEs like VSCode offer integrated debugging:
- Set breakpoints directly in your code
- Watch variables and expressions
- Step through code execution
- Inspect call stacks

**Logging Libraries**: Strategic logging is often faster than debugging:
- Use different log levels (debug, info, warn, error)
- Include context in your log messages
- Use structured logging for easier parsing

## Debugging Strategies

**The Scientific Method**:
1. Observe the problem
2. Form a hypothesis
3. Test your hypothesis
4. Analyze results
5. Repeat until solved

**Divide and Conquer**: Isolate the problem by:
- Commenting out code sections
- Using minimal test cases
- Creating isolated reproductions

**Rubber Duck Debugging**: Explain your code line-by-line to an inanimate object. You'll often spot the issue while explaining.

## Advanced Techniques

**Time Travel Debugging**: Tools like Redux DevTools let you step backward through state changes.

**Remote Debugging**: Debug applications running on different devices or environments.

**Performance Debugging**: 
- Use profilers to identify bottlenecks
- Analyze memory leaks
- Optimize critical code paths

## Common Bug Categories

**Logic Errors**: The code runs but produces wrong results
- Use assertions to verify assumptions
- Add logging to trace execution flow

**Runtime Errors**: The code crashes during execution
- Check for null/undefined values
- Validate input parameters
- Handle exceptions gracefully

**Integration Issues**: Problems when components interact
- Mock dependencies for isolated testing
- Use integration tests
- Check API contracts and data formats

## Preventing Bugs

**Code Reviews**: Fresh eyes catch issues you might miss

**Unit Testing**: Write tests before bugs occur

**Type Systems**: Use TypeScript or similar tools to catch errors at compile time

**Linting**: Use tools like ESLint to enforce code quality

## When You're Stuck

1. **Take a Break**: Sometimes the solution comes when you're not actively thinking about it
2. **Ask for Help**: A colleague might spot something obvious you missed
3. **Start Over**: Sometimes rewriting is faster than debugging
4. **Document the Problem**: Writing it down often reveals the solution

Remember: Every bug is an opportunity to learn something new about your system. Embrace the challenge, and you'll become a better developer with each problem you solve.
    `,
    author: 'David Kim',
    publishDate: '2024-06-08',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Debugging', 'Tools', 'Problem Solving'],
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'The Future of Code Translation Tools',
    excerpt: 'Explore how AI-powered code translation is breaking down language barriers and enabling seamless migration between programming languages.',
    content: `
# The Future of Code Translation Tools

The software development landscape is becoming increasingly diverse, with new programming languages and frameworks emerging regularly. Code translation tools are revolutionizing how we migrate between technologies, making it easier than ever to adapt and evolve our codebases.

## The Translation Revolution

Code translation isn't just about converting syntax—it's about understanding programming paradigms, design patterns, and idiomatic approaches across different languages. Modern AI-powered tools can translate not just the code, but the intent behind it.

## Current State of the Art

**Syntax Translation**: Tools like GitHub Copilot and specialized converters can handle basic syntax conversion between similar languages.

**Framework Migration**: More sophisticated tools can translate between different frameworks while maintaining functionality.

**Cross-Paradigm Translation**: Advanced AI can even help translate between different programming paradigms (procedural to object-oriented, synchronous to asynchronous).

## Real-World Applications

**Legacy System Modernization**: 
- COBOL to Java migrations for financial institutions
- VB.NET to C# conversions
- Legacy JavaScript to modern TypeScript

**Multi-Platform Development**:
- Shared logic between web and mobile applications
- Converting algorithms between different performance requirements
- Adapting code for different deployment environments

**Team Transitions**:
- Helping teams adopt new technologies
- Onboarding developers familiar with different languages
- Standardizing codebases across multiple projects

## The AI Advantage

**Context Awareness**: Modern AI understands not just syntax, but the purpose and context of code blocks.

**Pattern Recognition**: AI can identify and translate complex design patterns between languages.

**Error Prevention**: Smart translation tools can identify potential issues and suggest better approaches in the target language.

**Documentation Generation**: Along with translation, AI can generate documentation explaining the converted code.

## Challenges and Limitations

**Language-Specific Features**: Some features don't have direct equivalents in other languages.

**Performance Considerations**: What's efficient in one language might not be in another.

**Library Dependencies**: Translating code is one thing; finding equivalent libraries is another.

**Testing Requirements**: Translated code needs comprehensive testing to ensure behavior is preserved.

## Best Practices for Code Translation

1. **Start with Tests**: Have comprehensive tests before translating
2. **Translate in Chunks**: Don't try to translate everything at once
3. **Review Everything**: Never trust automated translation completely
4. **Understand Both Languages**: Know the idioms and best practices of both source and target languages
5. **Plan for Refactoring**: Translation is often just the first step

## Tools and Platforms

**General Purpose**: GitHub Copilot, ChatGPT, Claude
**Specialized**: Language-specific converters for Java to Kotlin, JavaScript to TypeScript
**Enterprise**: Custom solutions for large-scale migrations

## The Future Landscape

We're moving toward a world where:
- Language barriers in programming become minimal
- Developers can work in their preferred language while contributing to polyglot projects
- Legacy systems can be modernized more easily and cost-effectively
- Cross-platform development becomes truly seamless

## Getting Started

1. **Experiment with Simple Projects**: Try translating small utilities between languages
2. **Learn the Differences**: Understand what makes each language unique
3. **Practice with AI Tools**: Get comfortable with AI-assisted translation
4. **Join Communities**: Connect with others doing similar migrations

The future of code translation is bright. As these tools become more sophisticated, the barriers between programming languages will continue to diminish, opening up new possibilities for developers and organizations alike.
    `,
    author: 'Lisa Wang',
    publishDate: '2024-06-05',
    readTime: '4 min read',
    category: 'AI & Development',
    tags: ['Code Translation', 'AI', 'Migration'],
    featuredImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop'
  },
  {
    id: '6',
    title: 'Building Scalable Web Applications',
    excerpt: 'Learn the key principles and patterns for creating web applications that can grow with your business needs.',
    content: `
# Building Scalable Web Applications

Scalability isn't just about handling more users—it's about building systems that can grow and evolve with your business needs while maintaining performance, reliability, and developer productivity.

## What Is Scalability?

Scalability refers to a system's ability to handle increased load gracefully. This includes:
- **User Scalability**: Supporting more concurrent users
- **Data Scalability**: Managing larger datasets efficiently
- **Feature Scalability**: Adding new functionality without breaking existing systems
- **Team Scalability**: Allowing larger development teams to work effectively

## Architectural Principles

**Separation of Concerns**: Keep different aspects of your application isolated:
- Separate business logic from presentation
- Isolate data access layers
- Use microservices for different domains

**Stateless Design**: Build components that don't rely on server-side state:
- Use JWT tokens instead of sessions
- Store state in databases or caches, not memory
- Enable horizontal scaling

**Caching Strategies**: Implement caching at multiple levels:
- Browser caching for static assets
- CDN for global content delivery
- Application-level caching for expensive operations
- Database query caching

## Frontend Scalability

**Code Splitting**: Load only what users need:
\`\`\`javascript
// Dynamic imports for route-based splitting
const HomePage = lazy(() => import('./HomePage'));
const DashboardPage = lazy(() => import('./DashboardPage'));
\`\`\`

**State Management**: Use appropriate tools for different scales:
- Local state for simple components
- Context API for moderate complexity
- Redux/Zustand for complex state management

**Performance Optimization**:
- Virtual scrolling for large lists
- Image lazy loading
- Bundle optimization
- Progressive web app features

## Backend Scalability

**Database Design**:
- Proper indexing strategies
- Database normalization/denormalization balance
- Read replicas for read-heavy workloads
- Sharding for write-heavy workloads

**API Design**:
- RESTful or GraphQL APIs
- Pagination for large datasets
- Rate limiting and throttling
- Proper error handling and status codes

**Infrastructure Patterns**:
- Load balancing across multiple servers
- Auto-scaling based on demand
- Container orchestration with Kubernetes
- Event-driven architectures

## Performance Monitoring

**Key Metrics**:
- Response time and throughput
- Error rates and availability
- Resource utilization (CPU, memory, disk)
- User experience metrics (Core Web Vitals)

**Tools and Techniques**:
- Application Performance Monitoring (APM)
- Real User Monitoring (RUM)
- Synthetic monitoring
- Log aggregation and analysis

## Development Practices

**Testing Strategies**:
- Unit tests for individual components
- Integration tests for system interactions
- Load testing for performance validation
- End-to-end tests for user workflows

**CI/CD Pipelines**:
- Automated testing and deployment
- Feature flags for gradual rollouts
- Blue-green deployments
- Rollback strategies

**Code Organization**:
- Modular architecture
- Clear dependency management
- Documentation and code standards
- Regular refactoring

## Common Scalability Patterns

**Microservices**: Break large applications into smaller, independent services
**Event Sourcing**: Store state changes as events for better auditability
**CQRS**: Separate read and write operations for better performance
**Circuit Breaker**: Prevent cascading failures in distributed systems

## Scalability Anti-Patterns

**Premature Optimization**: Don't optimize before you have data
**Over-Engineering**: Start simple and scale when needed
**Ignoring Monitoring**: You can't scale what you can't measure
**Tight Coupling**: Avoid dependencies that prevent independent scaling

## Planning for Scale

1. **Start with Good Foundations**: Clean code and proper architecture
2. **Measure Everything**: Implement monitoring from day one
3. **Plan for Growth**: Anticipate bottlenecks before they happen
4. **Iterate and Improve**: Scalability is an ongoing process

## Real-World Examples

**Netflix**: Microservices architecture handling millions of concurrent streams
**Facebook**: Efficient data storage and retrieval for billions of users
**Amazon**: Auto-scaling infrastructure that handles traffic spikes
**Shopify**: Multi-tenant architecture supporting thousands of stores

Building scalable applications is both an art and a science. It requires careful planning, continuous monitoring, and the willingness to refactor and improve as your application grows. Start with solid foundations, measure everything, and scale incrementally based on real data and user needs.

Remember: the best architecture is the one that solves your current problems while preparing for future growth.
    `,
    author: 'James Thompson',
    publishDate: '2024-06-03',
    readTime: '10 min read',
    category: 'Web Development',
    tags: ['Scalability', 'Architecture', 'Performance'],
    featuredImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop'
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
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold text-blue-400 mt-4 mb-2">{paragraph.slice(2, -2)}</p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-6 mb-1 text-gray-300">{paragraph.substring(2)}</li>;
                } else if (paragraph.match(/^\d+\./)) {
                  return <li key={index} className="ml-6 mb-1 text-gray-300 list-decimal">{paragraph.substring(paragraph.indexOf('.') + 2)}</li>;
                } else if (paragraph.startsWith('```')) {
                  return <pre key={index} className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4"><code className="text-green-400">{paragraph.substring(3)}</code></pre>;
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
