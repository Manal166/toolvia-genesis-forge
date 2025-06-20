
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Code, AlertCircle } from 'lucide-react';

// Fallback blog posts data in case the main data file has issues
const fallbackBlogPosts = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    excerpt: 'Learn the fundamentals of web development with modern tools and best practices.',
    content: 'Content temporarily unavailable.',
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
    content: 'Content temporarily unavailable.',
    author: 'CodeBoost Team',
    publishDate: '2024-11-28',
    readTime: '8 min read',
    category: 'JavaScript',
    tags: ['ES6', 'Modern JS', 'Development'],
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
  }
];

let blogPosts = fallbackBlogPosts;

// Try to import the main blog posts, fall back to backup if there's an error
try {
  const { blogPosts: importedPosts } = require('@/data/blogPosts');
  if (importedPosts && Array.isArray(importedPosts)) {
    blogPosts = importedPosts;
  }
} catch (error) {
  console.warn('Could not load blog posts data, using fallback content:', error);
}

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

        {/* Data Loading Notice */}
        {blogPosts === fallbackBlogPosts && (
          <div className="mb-8 p-4 bg-yellow-900/20 border border-yellow-600 rounded-lg flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
            <p className="text-yellow-200">
              Blog content is temporarily limited due to data loading issues. Full content will be restored soon.
            </p>
          </div>
        )}

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
