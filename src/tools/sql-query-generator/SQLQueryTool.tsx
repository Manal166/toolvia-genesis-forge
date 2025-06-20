
import { useState } from "react";
import { ToolConfig } from "@/config/tools.config";
import ToolWrapper from "@/components/ToolWrapper";
import SQLQueryInput from "./SQLQueryInput";
import SQLQueryOutput from "./SQLQueryOutput";
import { sqlQueryService } from "@/services/sqlQueryService";
import { useToast } from "@/hooks/use-toast";

interface SQLQueryToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const SQLQueryTool = ({ tool, isDark, onToggleTheme }: SQLQueryToolProps) => {
  const [query, setQuery] = useState("");
  const [dialect, setDialect] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (description: string, selectedDialect: string) => {
    setIsLoading(true);
    try {
      const result = await sqlQueryService.generateSQLQuery(description, selectedDialect);
      setQuery(result.query);
      setDialect(result.dialect);
      
      toast({
        title: "Success!",
        description: "SQL query generated successfully"
      });
    } catch (error) {
      console.error('Error generating SQL query:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate SQL query",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <SQLQueryInput 
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />
      <SQLQueryOutput 
        query={query}
        dialect={dialect}
        isLoading={isLoading}
      />
    </ToolWrapper>
  );
};

export default SQLQueryTool;
