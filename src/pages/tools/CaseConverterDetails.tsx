
import { Helmet } from "react-helmet-async";
import { Type } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const CaseConverterDetails = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Case Converter Tool – Uppercase, Lowercase, Title Case | CodeBoost</title>
        <meta
          name="description"
          content="Convert text to uppercase, lowercase, title case, camelCase, and snake_case instantly. Free online case converter tool for writers, developers, and students."
        />
        <meta name="keywords" content="case converter, text converter, uppercase, lowercase, title case, camelCase, snake_case, text transformation, writing tools" />
        <link rel="canonical" href="/tools/case-converter/details" />
      </Helmet>

      <ToolDetailsLayout 
        title="Case Converter"
        description="Convert text between different case formats instantly with our free online tool"
        metaDescription="Convert text to uppercase, lowercase, title case, camelCase, and snake_case instantly. Free online case converter tool for writers, developers, and students."
        toolId="case-converter"
        icon={<Type className="h-8 w-8 text-blue-600" />}
        useCases={[
          "Converting text for programming variable names",
          "Formatting titles and headings for documents",
          "Preparing text for social media posts",
          "Converting database field names and API responses",
          "Standardizing text formats for documentation",
          "Creating consistent naming conventions",
          "Formatting text for different style guides",
          "Converting text for web development projects"
        ]}
      />
    </>
  );
};

export default CaseConverterDetails;
