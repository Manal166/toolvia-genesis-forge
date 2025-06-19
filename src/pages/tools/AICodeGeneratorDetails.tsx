
import { Zap } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const AICodeGeneratorDetails = () => {
  const useCases = [
    "Generating boilerplate code for new projects and features",
    "Creating utility functions and helper methods from descriptions",
    "Building API endpoints and database query functions",
    "Generating test cases and mock data for development",
    "Creating responsive UI components and layout structures",
    "Building form validation and data processing logic",
    "Prototyping ideas quickly without writing code from scratch",
    "Learning new programming languages through example generation"
  ];

  return (
    <ToolDetailsLayout
      title="AI Code Generator - Generate Production-Ready Code"
      description="Create clean, well-commented, production-ready code from simple descriptions. Support for multiple programming languages and frameworks."
      metaDescription="AI code generator that creates production-ready code from descriptions. Generate functions, components, APIs, and more in multiple programming languages."
      toolId="ai-code-generator"
      icon={<Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    />
  );
};

export default AICodeGeneratorDetails;
