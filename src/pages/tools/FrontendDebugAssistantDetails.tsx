
import { Link } from "react-router-dom";
import { ArrowRight, BugPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const FrontendDebugAssistantDetails = () => {
  const useCases = [
    "Fix broken layouts, alignment problems, responsive design issues, and CSS conflicts",
    "Debug unresponsive buttons, broken forms, event handlers, and JavaScript functionality", 
    "Resolve JavaScript errors, undefined variables, and runtime exceptions",
    "Fix styling issues, color problems, font rendering, and visual inconsistencies",
    "Identify and resolve cross-browser compatibility issues",
    "Debug API integration problems and data binding issues"
  ];

  return (
    <ToolDetailsLayout
      title="Frontend Debug Assistant - Fix Your Code Instantly"
      description="Describe your frontend bug, paste your HTML/CSS/JavaScript, and let AI detect and fix the issue with step-by-step explanation."
      metaDescription="Fix your frontend code instantly with AI. Describe your bug, paste your HTML/CSS/JavaScript, and get step-by-step fixes for layout, functionality, and visual issues."
      toolId="frontend-debug-assistant"
      icon={<BugPlay className="h-8 w-8 text-blue-600" />}
      useCases={useCases}
    >
      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Multi-Language Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Debug HTML, CSS, and JavaScript code with specialized AI analysis for each language.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Issue Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Describe your specific issue and get targeted fixes for layout, functionality, or visual bugs.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Detailed Explanations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Get step-by-step explanations of what was wrong and how the fix improves your code.
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
              Easily copy fixed code to clipboard or download as files for immediate use.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Example Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Load example buggy code to see how the AI identifies and fixes common frontend issues.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Regenerate Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Not satisfied with the first fix? Regenerate for alternative solutions and approaches.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Additional CTA Section */}
      <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Debug Frontend Code Like a Pro
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          From CSS layout issues to JavaScript runtime errors, get instant AI-powered solutions.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
          <Link to="/tools/frontend-debug-assistant">
            Start Debugging <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </ToolDetailsLayout>
  );
};

export default FrontendDebugAssistantDetails;
