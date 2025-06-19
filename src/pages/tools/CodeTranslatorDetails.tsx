
import { Languages } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import SocialShareButtons from "@/components/SocialShareButtons";

const CodeTranslatorDetails = () => {
  const useCases = [
    "Migrating legacy applications to modern programming languages",
    "Converting prototype code from one language to production language",
    "Learning new programming languages by seeing familiar code translated",
    "Porting algorithms and functions between different tech stacks",
    "Converting scripts and automation tools to different environments",
    "Adapting open-source libraries to your preferred programming language",
    "Creating language-agnostic documentation with multiple code examples",
    "Quick prototyping in different languages for comparison and testing"
  ];

  return (
    <ToolDetailsLayout
      title="Code Translator - Convert Code Between Languages"
      description="Seamlessly translate code between programming languages while preserving logic and functionality. Support for all major programming languages."
      metaDescription="AI code translator that converts code between programming languages. Preserve logic while adapting syntax for JavaScript, Python, Java, C++, and more."
      toolId="code-translator"
      icon={<Languages className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      <SocialShareButtons
        title="Code Translator - Convert Code Between Languages"
        description="Seamlessly translate code between programming languages while preserving logic and functionality."
      />
    </ToolDetailsLayout>
  );
};

export default CodeTranslatorDetails;
