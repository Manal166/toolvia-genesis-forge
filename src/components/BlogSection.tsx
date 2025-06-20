
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">From the Blog</h2>
        <p className="text-gray-400">Latest insights and tutorials for developers</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((post) => (
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
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatDate(post.publishDate)}</span>
                  <span>{post.author}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link to="/blog">
          <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 hover:border-gray-500">
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
