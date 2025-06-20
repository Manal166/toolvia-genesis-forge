
import { WandSparkles } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import SocialShareButtons from "@/components/SocialShareButtons";

const CodeRefactorDetails = () => {
  const useCases = [
    "Improving code readability and maintainability for existing projects",
    "Modernizing legacy codebases with current best practices",
    "Optimizing code structure and performance without changing functionality",
    "Cleaning up messy or poorly structured code from rapid prototyping",
    "Learning better coding patterns and practices through AI suggestions",
    "Preparing code for code reviews and team collaboration",
    "Reducing technical debt in software projects",
    "Standardizing coding styles across different team members' contributions"
  ];

  return (
    <ToolDetailsLayout
      title="Code Refactoring Tool - AI-Powered Code Improvement"
      description="Automatically improve code structure, readability, and performance using AI-powered analysis and refactoring suggestions."
      metaDescription="AI-powered code refactoring tool that improves code quality, structure, and readability. Supports JavaScript, Python, Java, C++, and more programming languages."
      toolId="code-refactor"
      icon={<WandSparkles className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      <SocialShareButtons
        title="Code Refactoring Tool - AI-Powered Code Improvement"
        description="Automatically improve code structure, readability, and performance using AI-powered analysis."
      />
    </ToolDetailsLayout>
  );
};

export default CodeRefactorDetails;
