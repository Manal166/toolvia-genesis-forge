
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { toolsConfig } from "@/config/tools.config";

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
          {toolsConfig.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
