
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import { Terminal } from "lucide-react";

const CodeMinifierDetails = () => {
  return (
    <ToolDetailsLayout
      title="Code Minifier / Prettifier"
      description="Compress or beautify your HTML, CSS, and JavaScript code instantly. Switch between minifying for production and formatting for development with our powerful code processor."
      metaDescription="Free online code minifier and prettifier. Compress or beautify HTML, CSS, and JavaScript code instantly. Perfect for developers and web optimization."
      toolId="code-minifier"
      icon={<Terminal className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={[
        "Minify HTML, CSS, and JavaScript for production deployment",
        "Format and beautify code for better readability and maintenance",
        "Reduce file sizes to improve website loading speed",
        "Clean up messy or unformatted code from various sources",
        "Optimize code for bandwidth-constrained environments",
        "Prepare code for version control with consistent formatting",
        "Debug minified code by converting it to readable format",
        "Educational tool for understanding code structure and formatting"
      ]}
    />
  );
};

export default CodeMinifierDetails;
