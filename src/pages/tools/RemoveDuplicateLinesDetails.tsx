
import { Helmet } from "react-helmet-async";
import { List } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const RemoveDuplicateLinesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Free Remove Duplicate Lines Tool – Clean Text & Lists Online | CodeBoost</title>
        <meta
          name="description"
          content="Remove duplicate lines from text instantly. Clean up lists, logs, and data while preserving original order. Free online duplicate line remover tool for developers and writers."
        />
        <meta name="keywords" content="remove duplicate lines, text cleaner, duplicate remover, list deduplication, data cleaning, text processing, online tool, free" />
        <link rel="canonical" href="/tools/remove-duplicate-lines/details" />
      </Helmet>

      <ToolDetailsLayout 
        title="Remove Duplicate Lines Tool"
        description="Instantly remove duplicate lines from any text while preserving the original order"
        metaDescription="Remove duplicate lines from text instantly. Clean up lists, logs, and data while preserving original order. Free online duplicate line remover tool for developers and writers."
        toolId="remove-duplicate-lines"
        icon={<List className="h-8 w-8 text-blue-600" />}
        useCases={[
          "Cleaning up email lists and contact databases",
          "Removing duplicate entries from CSV files",
          "Processing log files and system outputs",
          "Deduplicating code snippets and documentation",
          "Organizing todo lists and project notes",
          "Cleaning data for analysis and reporting",
          "Preparing content for databases and APIs",
          "Quality assurance and data validation"
        ]}
      />
    </>
  );
};

export default RemoveDuplicateLinesDetails;
