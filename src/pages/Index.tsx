import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Shield, Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ToolCard from "@/components/ToolCard";
import EmailCapture from "@/components/EmailCapture";
import SocialShareButtons from "@/components/SocialShareButtons";
import AdZone from "@/components/AdZone";
import { blogPosts } from "@/data/blogData";

const tools = [
  {
    id: "code-explainer",
    name: "Code Explainer",
    description: "Understand code snippets instantly with AI-powered explanations.",
    icon: "book-open",
    category: "Understanding",
    inputType: "code" as const,
    outputType: "text" as const,
    href: "/tools/code-explainer",
    color: "bg-blue-500",
  },
  {
    id: "ai-code-generator",
    name: "AI Code Generator",
    description: "Generate code for any task using AI. Describe your requirements and get instant code.",
    icon: "code",
    category: "Code Generation",
    inputType: "prompt" as const,
    outputType: "code" as const,
    href: "/tools/ai-code-generator",
    color: "bg-green-500",
  },
  {
    id: "bug-fixer",
    name: "Bug Fixer",
    description: "Fix code errors quickly with AI. Paste your code and get solutions.",
    icon: "bug",
    category: "Fixing & Optimization",
    inputType: "code" as const,
    outputType: "code" as const,
    href: "/tools/bug-fixer",
    color: "bg-red-500",
  },
  {
    id: "regex-generator",
    name: "Regex Generator",
    description: "Generate regular expressions easily with AI. Describe your pattern and get the regex.",
    icon: "regex",
    category: "Utilities",
    inputType: "prompt" as const,
    outputType: "text" as const,
    href: "/tools/regex-generator",
    color: "bg-yellow-500",
  },
];

const features = [
  {
    title: "AI-Powered Tools",
    description: "Leverage the power of AI to boost your coding efficiency and accuracy.",
  },
  {
    title: "Comprehensive Solutions",
    description: "From code generation to debugging, find all the tools you need in one place.",
  },
  {
    title: "User-Friendly Interface",
    description: "Enjoy a seamless experience with our intuitive and easy-to-navigate platform.",
  },
];

const Index = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold font-mono text-white">CodeBoost</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/blog">
                  <Button variant="ghost" className="text-white hover:text-blue-400">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Blog
                  </Button>
                </Link>
                <Link to="/tools">
                  <Button variant="ghost" className="text-white hover:text-blue-400">Tools</Button>
                </Link>
                <Link to="/about">
                  <Button variant="ghost" className="text-white hover:text-blue-400">About</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="ghost" className="text-white hover:text-blue-400">Contact</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Boost Your Code with AI
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-12">
            Supercharge your development workflow with our suite of AI-powered tools. Generate, explain, and debug code faster than ever before.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/tools">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Explore Tools
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 hover:border-gray-500">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Our Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* From the Blog Section */}
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

        {/* Email Capture Section */}
        <section className="container mx-auto px-4 py-16">
          <EmailCapture />
        </section>

        {/* Social Sharing and Ad Zone */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Share this page</h3>
              <SocialShareButtons 
                url={window.location.href} 
                title="CodeBoost - AI-Powered Developer Tools"
                description="Boost your coding productivity with our comprehensive suite of AI-powered development tools. Code explanation, generation, debugging, and optimization made simple."
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Advertisements</h3>
              <AdZone id="homepage-ad" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CodeBoost. All rights reserved.</p>
            <p>
              <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
