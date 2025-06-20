
import ToolCard from "@/components/ToolCard";

const tools = [
  {
    id: "code-explainer",
    name: "Code Explainer",
    description: "Understand code snippets instantly with AI-powered explanations.",
    icon: "book-open",
    category: "Understanding",
    inputType: "code" as const,
    outputType: "text" as const,
    href: "/tools/code-explainer",
    color: "bg-blue-500",
  },
  {
    id: "ai-code-generator",
    name: "AI Code Generator",
    description: "Generate code for any task using AI. Describe your requirements and get instant code.",
    icon: "code",
    category: "Code Generation",
    inputType: "prompt" as const,
    outputType: "code" as const,
    href: "/tools/ai-code-generator",
    color: "bg-green-500",
  },
  {
    id: "bug-fixer",
    name: "Bug Fixer",
    description: "Fix code errors quickly with AI. Paste your code and get solutions.",
    icon: "bug",
    category: "Fixing & Optimization",
    inputType: "code" as const,
    outputType: "code" as const,
    href: "/tools/bug-fixer",
    color: "bg-red-500",
  },
  {
    id: "regex-generator",
    name: "Regex Generator",
    description: "Generate regular expressions easily with AI. Describe your pattern and get the regex.",
    icon: "regex",
    category: "Utilities",
    inputType: "prompt" as const,
    outputType: "text" as const,
    href: "/tools/regex-generator",
    color: "bg-yellow-500",
  },
];

const ToolsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Our Tools
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
