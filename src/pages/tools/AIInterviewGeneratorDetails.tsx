
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import { Brain } from "lucide-react";

const AIInterviewGeneratorDetails = () => {
  return (
    <ToolDetailsLayout
      title="AI Interview Question Generator"
      description="Generate technical interview questions tailored to specific programming languages, technologies, and difficulty levels. Perfect for interview preparation, practice, and recruiting."
      metaDescription="Free AI-powered interview question generator. Create technical interview questions for JavaScript, Python, React, and more. Tailored by difficulty level and technology."
      toolId="ai-interview-generator"
      icon={<Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={[
        "Prepare for technical interviews with relevant practice questions",
        "Generate questions for conducting technical interviews as a recruiter",
        "Create study materials for learning new technologies",
        "Practice coding concepts at different difficulty levels",
        "Build question banks for educational purposes",
        "Assess knowledge gaps in specific programming areas",
        "Prepare for coding bootcamp interviews and assessments",
        "Create mock interview scenarios for career preparation"
      ]}
    />
  );
};

export default AIInterviewGeneratorDetails;
