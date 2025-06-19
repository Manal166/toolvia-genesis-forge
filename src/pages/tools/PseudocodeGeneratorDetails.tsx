
import { ListOrdered } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const PseudocodeGeneratorDetails = () => {
  const useCases = [
    "Creating algorithm documentation for technical specifications",
    "Teaching programming concepts to students and beginners",
    "Explaining complex code logic to non-technical team members",
    "Planning software architecture before implementation begins",
    "Code review preparation and algorithm discussion facilitation",
    "Creating flowchart alternatives for process documentation",
    "Simplifying complex algorithms for patent applications",
    "Building technical requirements and system design documents"
  ];

  return (
    <ToolDetailsLayout
      title="Pseudocode Generator - Convert Code to Plain English"
      description="Transform complex programming code into clear, step-by-step pseudocode that anyone can understand. Perfect for documentation and education."
      metaDescription="AI pseudocode generator that converts programming code into plain English step-by-step instructions. Perfect for documentation, teaching, and planning."
      toolId="pseudocode-generator"
      icon={<ListOrdered className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    />
  );
};

export default PseudocodeGeneratorDetails;
