
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const TextSummarizerDetails = () => {
  const toolData = {
    title: "AI-Powered Text Summarizer Tool",
    description: "Easily summarize long articles, essays, or emails using AI. Choose summary length and get fast, readable results. Ideal for students, writers, and professionals.",
    features: [
      "AI-powered text summarization using GPT-4.1",
      "Multiple summary lengths: short, medium, detailed",
      "Support for up to 5,000 characters",
      "Copy and download functionality",
      "Dark mode support",
      "Mobile-responsive design"
    ],
    useCases: [
      "Summarizing research articles and academic papers",
      "Creating executive summaries for business reports",
      "Condensing long emails and documents",
      "Extracting key points from news articles",
      "Study aids for students",
      "Content curation for social media"
    ],
    toolId: "text-summarizer"
  };

  return <ToolDetailsLayout toolData={toolData} />;
};

export default TextSummarizerDetails;
