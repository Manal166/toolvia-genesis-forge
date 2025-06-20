
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import { FileText } from "lucide-react";

const JsonYamlCsvConverterDetails = () => {
  return (
    <ToolDetailsLayout
      title="JSON ↔ YAML ↔ CSV Converter"
      description="A powerful data format converter that allows users to seamlessly convert between JSON, YAML, and CSV formats. Perfect for developers, data engineers, and anyone working with structured data."
      metaDescription="Free online JSON, YAML, and CSV converter. Seamlessly convert between data formats with syntax highlighting, format detection, and download options."
      toolId="json-yaml-csv-converter"
      icon={<FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={[
        "Convert JSON data to YAML for configuration files",
        "Transform CSV spreadsheet data to JSON for APIs",
        "Convert YAML configuration to CSV for analysis",
        "Migrate data between different application formats",
        "Convert API responses between different formats",
        "Transform database exports to different formats",
        "Convert configuration files for deployment",
        "Prepare data for different development environments"
      ]}
    />
  );
};

export default JsonYamlCsvConverterDetails;
