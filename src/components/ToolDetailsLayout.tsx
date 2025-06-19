
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code } from "lucide-react";
import FeedbackButton from "./FeedbackButton";

interface ToolDetailsLayoutProps {
  title: string;
  description: string;
  metaDescription: string;
  ogImage?: string;
  toolId: string;
  icon: ReactNode;
  useCases: string[];
  children?: ReactNode;
}

const ToolDetailsLayout = ({
  title,
  description,
  metaDescription,
  ogImage = "/placeholder.svg",
  toolId,
  icon,
  useCases,
  children
}: ToolDetailsLayoutProps) => {
  const currentUrl = `${window.location.origin}/tools/${toolId}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  CodeBoost
                </span>
              </Link>
              <Link to="/tools" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                All Tools
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                {icon}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {description}
            </p>

            <Link to={`/tools/${toolId}`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Launch Tool
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Use Cases Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Perfect For These Use Cases
            </h2>
            <div className="grid gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700 dark:text-gray-300">{useCase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Input</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Paste your code or describe what you need
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Process</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI analyzes and generates the output
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Result</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Copy, download, or use your result instantly
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of developers who trust CodeBoost for their coding needs.
            </p>
            <Link to={`/tools/${toolId}`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Try It Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {children}
        </main>

        {/* Feedback Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <FeedbackButton toolName={title} variant="floating" />
        </div>
      </div>
    </>
  );
};

export default ToolDetailsLayout;
