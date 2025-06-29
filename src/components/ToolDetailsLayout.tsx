
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Code } from "lucide-react";
import FeedbackButton from "./FeedbackButton";
import AdZone from "./AdZone";

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
        <title>{title} | Toolvia</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Toolvia" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${title} | Toolvia`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Toolvia" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Toolvia`} />
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
                  Toolvia
                </span>
              </Link>
              <div className="flex items-center space-x-4">
                <Link 
                  to="/tools" 
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  All Tools
                </Link>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Top Banner Ad Zone */}
        <AdZone 
          id="details-banner-top" 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
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

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={`/tools/${toolId}`}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                      Launch Tool
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/tools">
                    <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                      Browse All Tools
                    </Button>
                  </Link>
                </div>
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
                      Enter your data or describe what you need
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Process</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Our tool processes your input instantly
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

              {/* Navigation Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-8">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Explore More Tools
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Discover our complete collection of free online tools to boost your productivity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/tools">
                      <Button size="lg" variant="outline" className="px-8 py-3">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        View All Tools
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button size="lg" variant="outline" className="px-8 py-3">
                        Back to Homepage
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join thousands of users who trust Toolvia for their daily productivity needs.
                </p>
                <Link to={`/tools/${toolId}`}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    Try It Now - It's Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {children}
            </div>

            {/* Sidebar Ad Zone */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                <AdZone 
                  id="details-sidebar-primary"
                  className="w-full min-h-[300px]"
                />
                <AdZone 
                  id="details-sidebar-secondary"
                  className="w-full min-h-[250px]"
                />
                <AdZone 
                  id="details-sidebar-tertiary"
                  className="w-full min-h-[200px]"
                />
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Banner Ad Zone */}
        <AdZone 
          id="details-banner-bottom" 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        />

        {/* Feedback Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <FeedbackButton toolName={title} variant="floating" />
        </div>
      </div>
    </>
  );
};

export default ToolDetailsLayout;
