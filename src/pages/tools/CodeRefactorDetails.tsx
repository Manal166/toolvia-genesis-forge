
import { Link } from "react-router-dom";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const CodeRefactorDetails = () => {
  const useCases = [
    "Improve code readability and maintainability with better structure",
    "Apply coding best practices and design patterns automatically",
    "Reduce code complexity and eliminate redundant code blocks",
    "Modernize legacy code to use current language features",
    "Optimize performance while preserving original functionality",
    "Extract reusable functions and components from monolithic code",
    "Improve naming conventions and code organization",
    "Prepare code for easier testing and debugging"
  ];

  return (
    <ToolDetailsLayout
      title="Code Refactoring Tool - Improve Your Code Quality"
      description="Transform messy code into clean, maintainable code with AI-powered refactoring. Get detailed explanations of improvements and best practices applied."
      metaDescription="AI-powered code refactoring tool that improves code quality, readability, and maintainability. Supports multiple programming languages with detailed explanations."
      toolId="code-refactor"
      icon={<RefreshCw className="h-8 w-8 text-green-600 dark:text-green-400" />}
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
              Refactor code in JavaScript, Python, Java, C++, Go, Rust, and many other languages.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Side-by-Side Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              View original and refactored code side by side to understand all improvements made.
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
              Get comprehensive explanations of what was changed and why each improvement matters.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Best Practices Applied
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Automatically apply industry best practices and coding standards to your code.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Performance Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Improve code performance while maintaining the same functionality and behavior.
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
              Easily copy refactored code to clipboard or download as files for immediate use.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Example Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          See Code Refactoring in Action
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Before (Original)</h3>
            <div className="bg-gray-900 p-3 rounded text-green-400 text-xs font-mono">
              function calc(a,b,op){'{'}<br/>
              {'  '}if(op=='add') return a+b;<br/>
              {'  '}if(op=='sub') return a-b;<br/>
              {'  '}if(op=='mul') return a*b;<br/>
              {'  '}if(op=='div') return a/b;<br/>
              {'}'}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">After (Refactored)</h3>
            <div className="bg-gray-900 p-3 rounded text-green-400 text-xs font-mono">
              function calculate(operandA, operandB, operation) {'{'}<br/>
              {'  '}const operations = {'{'}<br/>
              {'    '}add: (a, b) ={'>'} a + b,<br/>
              {'    '}subtract: (a, b) ={'>'} a - b,<br/>
              {'    '}multiply: (a, b) ={'>'} a * b,<br/>
              {'    '}divide: (a, b) ={'>'} b !== 0 ? a / b : null<br/>
              {'  '}{'}'};{' '}<br/>
              {'  '}return operations[operation]?.(operandA, operandB);<br/>
              {'}'}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Transform Your Code Quality Today
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Turn messy, hard-to-maintain code into clean, professional-grade code instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700">
            <Link to="/tools/code-refactor">
              Start Refactoring <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/tools/code-refactor">
              Try with Sample Code
            </Link>
          </Button>
        </div>
      </div>
    </ToolDetailsLayout>
  );
};

export default CodeRefactorDetails;
