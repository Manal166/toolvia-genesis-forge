
import { Hash } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import SocialShareButtons from "@/components/SocialShareButtons";

const RegexGeneratorDetails = () => {
  const useCases = [
    "Validating email addresses, phone numbers, and other user input formats",
    "Extracting specific data patterns from large text files and logs",
    "Creating search patterns for text processing and data mining",
    "Building form validation rules for web applications",
    "Parsing configuration files and structured text documents",
    "Creating URL routing patterns and API endpoint matchers",
    "Extracting dates, times, and numerical data from unstructured text",
    "Building content filters and text sanitization rules"
  ];

  return (
    <ToolDetailsLayout
      title="Regex Generator - Create Perfect Regular Expressions"
      description="Generate complex regular expressions from plain English descriptions. Get regex patterns with detailed explanations and testing examples."
      metaDescription="AI regex generator that creates regular expressions from plain English. Perfect for data validation, text parsing, and pattern matching."
      toolId="regex-generator"
      icon={<Hash className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      <SocialShareButtons
        title="Regex Generator - Create Perfect Regular Expressions"
        description="Generate complex regular expressions from plain English descriptions."
      />
    </ToolDetailsLayout>
  );
};

export default RegexGeneratorDetails;
