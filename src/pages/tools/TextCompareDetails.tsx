
import { Helmet } from "react-helmet-async";
import { FileText } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const TextCompareDetails = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Text Compare Tool – Side by Side Text Comparison | CodeBoost</title>
        <meta
          name="description"
          content="Compare two texts side-by-side and find differences easily. Free online text comparison tool for developers, writers, and editors with difference highlighting."
        />
        <meta name="keywords" content="text compare, text comparison, diff tool, side by side comparison, text differences, online text compare, free diff tool" />
        <link rel="canonical" href="/tools/text-compare/details" />
      </Helmet>

      <ToolDetailsLayout 
        title="Text Compare Tool"
        description="Compare two texts side-by-side and identify differences with visual highlighting"
        metaDescription="Compare two texts side-by-side and find differences easily. Free online text comparison tool for developers, writers, and editors with difference highlighting."
        toolId="text-compare"
        icon={<FileText className="h-8 w-8 text-blue-600" />}
        useCases={[
          "Comparing different versions of documents or code",
          "Identifying changes between text files",
          "Proofreading and editing assistance",
          "Version control and change tracking",
          "Academic research and plagiarism detection",
          "Legal document comparison",
          "Content revision and collaboration",
          "Quality assurance and testing"
        ]}
      />
    </>
  );
};

export default TextCompareDetails;
