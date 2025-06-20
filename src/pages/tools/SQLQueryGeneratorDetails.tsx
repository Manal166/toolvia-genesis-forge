
import { Database } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import SocialShareButtons from "@/components/SocialShareButtons";

const SQLQueryGeneratorDetails = () => {
  const useCases = [
    "Converting natural language requirements into precise SQL queries",
    "Learning SQL syntax for different database management systems",
    "Generating complex JOIN queries across multiple tables",
    "Creating data analysis and reporting queries quickly",
    "Building INSERT, UPDATE, and DELETE statements safely",
    "Generating database schema creation and modification scripts",
    "Creating queries for data migration and ETL processes",
    "Rapid prototyping of database queries for development teams"
  ];

  return (
    <ToolDetailsLayout
      title="SQL Query Generator - Natural Language to SQL"
      description="Generate safe, optimized SQL queries from natural language descriptions. Supports MySQL, PostgreSQL, SQLite, SQL Server, and more."
      metaDescription="AI-powered SQL query generator that converts natural language into optimized SQL code. Support for MySQL, PostgreSQL, SQLite, SQL Server, Oracle, and MariaDB."
      toolId="sql-query-generator"
      icon={<Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={useCases}
    >
      <SocialShareButtons
        title="SQL Query Generator - Natural Language to SQL"
        description="Generate safe, optimized SQL queries from natural language descriptions."
      />
    </ToolDetailsLayout>
  );
};

export default SQLQueryGeneratorDetails;
