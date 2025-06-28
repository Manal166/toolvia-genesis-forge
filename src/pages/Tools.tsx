
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tools = [
  {
    name: "Unit Test Generator",
    description: "Generate comprehensive unit tests for your functions and classes automatically.",
    path: "/tools/unit-test-generator",
    category: "Testing",
  },
  {
    name: "Remove Duplicate Lines",
    description: "Clean up your text by removing duplicate lines instantly.",
    path: "/tools/remove-duplicate-lines",
    category: "Text Tools",
  },
  {
    name: "Text Compare Tool",
    description: "Compare two blocks of text side by side and highlight differences.",
    path: "/tools/text-compare",
    category: "Text Tools",
  },
  {
    name: "Case Converter",
    description: "Convert your text to lowercase, UPPERCASE, Title Case, camelCase, and more.",
    path: "/tools/case-converter",
    category: "Text Tools",
  },
  {
    name: "Unit Converter",
    description: "Convert length, weight, temperature, and more between metric and imperial units.",
    path: "/tools/unit-converter",
    category: "Utility",
  },
  {
    name: "Password Generator",
    description: "Generate strong, secure, random passwords instantly.",
    path: "/tools/password-generator",
    category: "Security",
  },
  {
    name: "URL Encoder / Decoder",
    description: "Encode or decode URLs safely and easily.",
    path: "/tools/url-encoder-decoder",
    category: "Utility",
  },
];

export default function Tools() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      <Header />
      
      <div className="px-4 py-10">
        <Helmet>
          <title>Free Online Tools – Toolvia</title>
          <meta
            name="description"
            content="Explore a collection of free, browser-based tools to boost your productivity. No login, no tracking, just fast and useful tools."
          />
        </Helmet>

        <h1 className="text-3xl font-bold text-center mb-4">All Tools</h1>
        <p className="text-center text-gray-400 mb-10">
          Discover free and reliable tools for developers, writers, and students.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              to={tool.path}
              className="bg-[#161b22] border border-[#30363d] rounded p-5 hover:border-blue-500 transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{tool.name}</h2>
              <p className="text-sm text-gray-400 mb-1">{tool.description}</p>
              <span className="text-xs text-gray-500">{tool.category}</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
