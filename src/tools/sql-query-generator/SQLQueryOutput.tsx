
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CheckCircle, Download, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SQLQueryOutputProps {
  query: string;
  dialect: string;
  isLoading: boolean;
}

const SQLQueryOutput = ({ query, dialect, isLoading }: SQLQueryOutputProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(query);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "SQL query copied to clipboard"
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  const downloadQuery = () => {
    const blob = new Blob([query], { type: 'text/sql' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `query-${dialect.toLowerCase().replace(/\s+/g, '-')}.sql`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "SQL query file has been downloaded"
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span>Generated SQL Query</span>
            {dialect && (
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({dialect})
              </span>
            )}
          </CardTitle>
          
          {query && !isLoading && (
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center space-x-1"
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={downloadQuery}
                className="flex items-center space-x-1"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            <span className="ml-3 text-gray-600 dark:text-gray-400">
              Generating SQL query...
            </span>
          </div>
        ) : query ? (
          <div className="space-y-4">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap">
              <code>{query}</code>
            </pre>
            
            <div className="text-xs text-gray-500 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <strong>⚠️ Safety Note:</strong> Always review generated SQL queries before executing them in production. 
              Test in a development environment first and ensure proper backup procedures are in place.
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <Database className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Describe what you want to query and select a database dialect to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SQLQueryOutput;
