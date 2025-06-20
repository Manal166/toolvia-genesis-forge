
import { Link } from "react-router-dom";
import { ArrowRight, Code, Moon, Sun, BugPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const FrontendDebugAssistantDetails = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ToolDetailsLayout
      title="Fix Your Frontend Code Instantly with AI | Frontend Debug Assistant"
      description="Describe your frontend bug, paste your HTML/CSS/JavaScript, and let AI detect and fix the issue with step-by-step explanation."
      toolId="frontend-debug-assistant"
      isDark={isDark}
      onToggleTheme={toggleTheme}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6">
          <BugPlay className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Fix Your Frontend Code Instantly with AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Describe your frontend bug, paste your HTML/CSS/JavaScript, and let AI detect and fix the issue with step-by-step explanation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
            <Link to="/tools/frontend-debug-assistant">
              Launch Tool <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className={isDark ? 'border-gray-600 text-gray-200 hover:bg-gray-700' : ''}>
            <Link to="/tools/frontend-debug-assistant">Try Sample Bug</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
          <CardHeader>
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Multi-Language Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Debug HTML, CSS, and JavaScript code with specialized AI analysis for each language.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
          <CardHeader>
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Issue Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Describe your specific issue and get targeted fixes for layout, functionality, or visual bugs.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
          <CardHeader>
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Detailed Explanations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Get step-by-step explanations of what was wrong and how the fix improves your code.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
          <CardHeader>
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Copy & Download
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Easily copy fixed code to clipboard or download as files for immediate use.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
          <CardHeader>
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Example Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Load example buggy code to see how the AI identifies and fixes common frontend issues.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
          <CardHeader>
            <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Regenerate Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Not satisfied with the first fix? Regenerate for alternative solutions and approaches.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Common Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Layout Issues
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Fix broken layouts, alignment problems, responsive design issues, and CSS conflicts.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Interactive Elements
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Debug unresponsive buttons, broken forms, event handlers, and JavaScript functionality.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Console Errors
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Resolve JavaScript errors, undefined variables, and runtime exceptions.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Visual Bugs
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Fix styling issues, color problems, font rendering, and visual inconsistencies.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Debug Your Frontend Code?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get instant AI-powered fixes for your HTML, CSS, and JavaScript issues.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
            <Link to="/tools/frontend-debug-assistant">
              Start Debugging Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </ToolDetailsLayout>
  );
};

export default FrontendDebugAssistantDetails;
