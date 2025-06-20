
import { ArrowRight } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import SocialShareButtons from "@/components/SocialShareButtons";

const FlowchartGeneratorDetails = () => {
  const useCases = [
    "Visualizing complex algorithm logic and control flow for documentation",
    "Creating flowcharts for code review and team collaboration",
    "Converting legacy code into visual diagrams for better understanding",
    "Generating process diagrams for business logic and workflows",
    "Creating educational materials and tutorials with visual code representation",
    "Documenting software architecture and system processes",
    "Analyzing code complexity and identifying optimization opportunities",
    "Building visual guides for onboarding new developers to existing codebases"
  ];

  return (
    <ToolDetailsLayout
      title="Flowchart Generator - Visual Code Analysis"
      description="Convert your source code into clear, visual flowcharts using Mermaid.js. Perfect for documentation, code review, and understanding complex logic."
      metaDescription="AI-powered flowchart generator that converts source code into visual Mermaid.js diagrams. Create flowcharts from JavaScript, Python, Java, and more."
      toolId="flowchart-generator"
      icon={<ArrowRight className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      <SocialShareButtons
        title="Flowchart Generator - Visual Code Analysis"
        description="Convert your source code into clear, visual flowcharts using Mermaid.js."
      />
    </ToolDetailsLayout>
  );
};

export default FlowchartGeneratorDetails;
