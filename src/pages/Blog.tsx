
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

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
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with AI-Powered Code Generation',
    excerpt: 'Learn how artificial intelligence is revolutionizing the way we write and generate code, making development faster and more efficient.',
    content: 'AI-powered code generation is transforming software development...',
    author: 'Sarah Johnson',
    publishDate: '2024-06-15',
    readTime: '5 min read',
    category: 'AI & Development',
    tags: ['AI', 'Code Generation', 'Productivity']
  },
  {
    id: '2',
    title: 'Best Practices for Code Documentation',
    excerpt: 'Discover essential techniques for writing clear, maintainable documentation that helps teams collaborate effectively.',
    content: 'Good documentation is crucial for successful software projects...',
    author: 'Michael Chen',
    publishDate: '2024-06-12',
    readTime: '7 min read',
    category: 'Development',
    tags: ['Documentation', 'Best Practices', 'Team Collaboration']
  },
  {
    id: '3',
    title: 'Understanding Regular Expressions',
    excerpt: 'Master the art of pattern matching with regular expressions and learn how to use them effectively in your projects.',
    content: 'Regular expressions are powerful tools for pattern matching...',
    author: 'Emily Rodriguez',
    publishDate: '2024-06-10',
    readTime: '6 min read',
    category: 'Programming',
    tags: ['Regex', 'Pattern Matching', 'Text Processing']
  },
  {
    id: '4',
    title: 'Debugging Techniques for Modern Developers',
    excerpt: 'Explore advanced debugging strategies and tools that can help you identify and fix issues in your code more efficiently.',
    content: 'Effective debugging is a crucial skill for any developer...',
    author: 'David Kim',
    publishDate: '2024-06-08',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Debugging', 'Tools', 'Problem Solving']
  },
  {
    id: '5',
    title: 'The Future of Code Translation Tools',
    excerpt: 'Explore how AI-powered code translation is breaking down language barriers and enabling seamless migration between programming languages.',
    content: 'Code translation tools are becoming increasingly sophisticated...',
    author: 'Lisa Wang',
    publishDate: '2024-06-05',
    readTime: '4 min read',
    category: 'AI & Development',
    tags: ['Code Translation', 'AI', 'Migration']
  },
  {
    id: '6',
    title: 'Building Scalable Web Applications',
    excerpt: 'Learn the key principles and patterns for creating web applications that can grow with your business needs.',
    content: 'Scalability is a critical consideration in modern web development...',
    author: 'James Thompson',
    publishDate: '2024-06-03',
    readTime: '10 min read',
    category: 'Web Development',
    tags: ['Scalability', 'Architecture', 'Performance']
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Developer Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <Card key={`featured-${post.id}`} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Featured
                    </Badge>
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{formatDate(post.publishDate)}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Subscribe to our newsletter to get the latest articles and updates delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
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
