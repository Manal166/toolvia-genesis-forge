
import { Link } from "react-router-dom";
import { ArrowRight, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const SQLQueryGeneratorDetails = () => {
  const useCases = [
    "Convert natural language requirements into precise SQL queries",
    "Learn SQL syntax for different database management systems",
    "Generate complex JOIN queries across multiple tables",
    "Create data analysis and reporting queries quickly",
    "Build INSERT, UPDATE, and DELETE statements safely",
    "Generate database schema creation and modification scripts",
    "Create queries for data migration and ETL processes",
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
      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Multi-Database Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Generate queries for MySQL, PostgreSQL, SQLite, SQL Server, Oracle, and MariaDB.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Natural Language Input
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Describe what you want to query in plain English and get precise SQL code.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Safe & Optimized
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Generated queries follow best practices and include safety warnings for production use.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Example Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Load example queries to see how different types of SQL operations are generated.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Copy & Download
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Easily copy queries to clipboard or download as .sql files for immediate use.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Syntax Highlighting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Generated SQL code is displayed with proper syntax highlighting for easy reading.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Example Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Try These Example Queries
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              "Find all customers who made orders in the last 30 days with their total order amount"
            </p>
            <div className="bg-gray-900 p-3 rounded text-green-400 text-xs font-mono">
              SELECT c.name, SUM(o.amount)<br/>
              FROM customers c<br/>
              JOIN orders o ON c.id = o.customer_id<br/>
              WHERE o.created_at &gt;= DATE_SUB(NOW(), INTERVAL 30 DAY)
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Updates</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              "Update all inactive users to set their status to 'archived'"
            </p>
            <div className="bg-gray-900 p-3 rounded text-green-400 text-xs font-mono">
              UPDATE users<br/>
              SET status = 'archived'<br/>
              WHERE status = 'inactive'<br/>
              AND last_login &lt; DATE_SUB(NOW(), INTERVAL 90 DAY)
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Generate SQL Queries Instantly
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Transform your natural language requirements into optimized SQL code in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Link to="/tools/sql-query-generator">
              Launch Tool <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/tools/sql-query-generator">
              Try with Example Prompt
            </Link>
          </Button>
        </div>
      </div>
    </ToolDetailsLayout>
  );
};

export default SQLQueryGeneratorDetails;
