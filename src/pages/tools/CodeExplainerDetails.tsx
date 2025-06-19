
import { MessageSquare } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const CodeExplainerDetails = () => {
  const useCases = [
    "Understanding complex algorithms and data structures in unfamiliar codebases",
    "Learning how third-party libraries and frameworks work under the hood",
    "Breaking down legacy code that lacks proper documentation",
    "Preparing code reviews and explaining implementation details to team members",
    "Educational purposes - helping students understand programming concepts",
    "Debugging by understanding what each code section is supposed to do",
    "Converting technical code into plain English for non-technical stakeholders"
  ];

  return (
    <ToolDetailsLayout
      title="Code Explainer - Understand Any Code in Seconds"
      description="Transform complex code into clear, educational explanations with detailed breakdowns, purpose analysis, and key concept identification."
      metaDescription="AI-powered code explainer that breaks down complex programming code into clear, understandable explanations. Perfect for learning, debugging, and code reviews."
      toolId="code-explainer"
      icon={<MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    />
  );
};

export default CodeExplainerDetails;
