
import { TestTube } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import SocialShareButtons from "@/components/SocialShareButtons";

const UnitTestGeneratorDetails = () => {
  const useCases = [
    "Generating comprehensive unit tests for new functions and methods",
    "Creating test suites for legacy code that lacks proper test coverage",
    "Building test cases for edge cases and boundary conditions automatically",
    "Generating tests for API endpoints and data processing functions",
    "Creating mock data and test scenarios for complex business logic",
    "Generating tests for utility functions and helper methods",
    "Building test coverage for error handling and exception scenarios",
    "Creating regression tests for bug fixes and code modifications"
  ];

  return (
    <ToolDetailsLayout
      title="Unit Test Generator - Automated Test Creation"
      description="Automatically generate comprehensive unit tests from your code using AI. Support for Jest, PyTest, JUnit, and more testing frameworks."
      metaDescription="AI-powered unit test generator that creates comprehensive test suites for JavaScript, Python, Java, and more. Generate Jest, PyTest, JUnit tests automatically."
      toolId="unit-test-generator"
      icon={<TestTube className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      <SocialShareButtons
        title="Unit Test Generator - Automated Test Creation"
        description="Automatically generate comprehensive unit tests from your code using AI."
      />
    </ToolDetailsLayout>
  );
};

export default UnitTestGeneratorDetails;
