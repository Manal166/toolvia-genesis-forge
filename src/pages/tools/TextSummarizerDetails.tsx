
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import { FileText } from "lucide-react";

const TextSummarizerDetails = () => {
  return (
    <ToolDetailsLayout
      title="AI-Powered Text Summarizer Tool"
      description="Easily summarize long articles, essays, or emails using AI. Choose summary length and get fast, readable results. Ideal for students, writers, and professionals."
      metaDescription="Free AI text summarizer tool that creates concise summaries from long articles, essays, and documents. Multiple summary lengths available with GPT-4 powered analysis."
      toolId="text-summarizer"
      icon={<FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={[
        "Summarizing research articles and academic papers",
        "Creating executive summaries for business reports",
        "Condensing long emails and documents",
        "Extracting key points from news articles",
        "Study aids for students",
        "Content curation for social media"
      ]}
    />
  );
};

export default TextSummarizerDetails;
