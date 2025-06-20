
import { Link } from "react-router-dom";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const RegexExplainerDetails = () => {
  const useCases = [
    "Understanding complex regex patterns found in code repositories",
    "Learning regular expressions through step-by-step breakdowns",
    "Debugging regex patterns that aren't working as expected",
    "Teaching regex concepts with clear, beginner-friendly explanations",
    "Documenting regex patterns for team knowledge sharing",
    "Analyzing third-party regex patterns for security reviews",
    "Converting cryptic regex into readable documentation",
    "Preparing regex explanations for code reviews and documentation"
  ];

  return (
    <ToolDetailsLayout
      title="Understand Any Regex Pattern with AI"
      description="Paste any regular expression and get a human-readable explanation. Great for learning, debugging, or teaching!"
      metaDescription="AI-powered regex explainer that breaks down complex regular expressions into simple, step-by-step explanations. Perfect for learning and debugging."
      toolId="regex-explainer"
      icon={<ZoomIn className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Step-by-Step Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Get detailed explanations of each regex component with examples of what it matches.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Beginner-Friendly Language
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Complex patterns explained in plain English that anyone can understand.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Real-World Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              See what strings the regex would match and what it would reject.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Common Patterns Library
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Quick access to explanations of popular regex patterns like email, phone, URL validation.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Copy & Download
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Save explanations to clipboard or download as text files for documentation.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Universal Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Works with any standard regex pattern from any programming language or tool.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Example Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          See Regex Explanation in Action
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Input Pattern</h3>
            <div className="bg-gray-900 p-3 rounded text-green-400 text-sm font-mono">
              ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{'{'}2,{'}'}$
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Explanation</h3>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <p><strong>Email Validation Pattern</strong></p>
              <p>1. ^ - Start of string</p>
              <p>2. [a-zA-Z0-9._%+-]+ - Username part</p>
              <p>3. @ - Literal @ symbol</p>
              <p>4. [a-zA-Z0-9.-]+ - Domain name</p>
              <p>5. \. - Literal dot</p>
              <p>6. [a-zA-Z]{'{'}2,{'}'} - Top-level domain</p>
              <p>7. $ - End of string</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Decode Any Regex Pattern Today
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Stop struggling with cryptic regular expressions. Get instant, clear explanations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Link to="/tools/regex-explainer">
              Launch Tool <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/tools/regex-explainer">
              Try Example
            </Link>
          </Button>
        </div>
      </div>
    </ToolDetailsLayout>
  );
};

export default RegexExplainerDetails;
