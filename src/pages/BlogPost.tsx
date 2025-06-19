
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
  // ... include all other blog posts from the previous file
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
