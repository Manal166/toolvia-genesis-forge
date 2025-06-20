
import { useState } from "react";
import { Search } from "lucide-react";
import { getAllCategories, getToolsByCategory, searchTools, toolsConfig } from "@/config/tools.config";
import ToolCard from "./ToolCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ToolDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...getAllCategories()];
  
  const getFilteredTools = () => {
    if (searchQuery) {
      return searchTools(searchQuery);
    }
    
    if (selectedCategory === "All") {
      return toolsConfig;
    }
    
    return getToolsByCategory(selectedCategory);
  };

  const filteredTools = getFilteredTools();

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`text-sm ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No tools found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ToolDirectory;
