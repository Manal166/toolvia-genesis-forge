
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import { Play } from "lucide-react";

const LivePlaygroundDetails = () => {
  return (
    <ToolDetailsLayout
      title="Live HTML/CSS Playground"
      description="Write and preview HTML, CSS, and JavaScript code in real-time with our interactive playground. Perfect for testing, prototyping, and learning web development."
      metaDescription="Free online HTML/CSS/JavaScript playground with live preview. Test, debug, and share your frontend code instantly with our interactive code editor."
      toolId="live-playground"
      icon={<Play className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={[
        "Rapid prototyping of web components and layouts",
        "Testing HTML, CSS, and JavaScript code snippets",
        "Learning and experimenting with new web technologies",
        "Creating interactive demos for client presentations",
        "Debugging frontend issues in a clean environment",
        "Building and testing responsive designs",
        "Sharing code examples with colleagues and students",
        "Creating educational content and tutorials"
      ]}
    />
  );
};

export default LivePlaygroundDetails;
