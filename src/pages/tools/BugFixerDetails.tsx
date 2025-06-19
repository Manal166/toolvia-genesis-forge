
import { Bug } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import SocialShareButtons from "@/components/SocialShareButtons";

const BugFixerDetails = () => {
  const useCases = [
    "Fixing syntax errors and compilation issues in any programming language",
    "Resolving runtime errors and exception handling problems",
    "Correcting logic errors in algorithms and data processing functions",
    "Fixing memory leaks and performance optimization issues",
    "Resolving API integration and network request problems",
    "Debugging database queries and ORM-related issues",
    "Fixing responsive design and CSS layout problems",
    "Correcting asynchronous code and promise handling errors"
  ];

  return (
    <ToolDetailsLayout
      title="Bug Fixer - Fix Code Issues Instantly"
      description="Automatically detect and fix bugs in your code with AI-powered analysis. Get corrected code with detailed explanations of what was wrong."
      metaDescription="AI bug fixer that automatically detects and fixes code issues. Get corrected code with explanations for syntax errors, logic bugs, and more."
      toolId="bug-fixer"
      icon={<Bug className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      <SocialShareButtons
        title="Bug Fixer - Fix Code Issues Instantly"
        description="Automatically detect and fix bugs in your code with AI-powered analysis."
      />
    </ToolDetailsLayout>
  );
};

export default BugFixerDetails;
