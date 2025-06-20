
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Sparkles } from "lucide-react";
import { sqlQueryService } from "@/services/sqlQueryService";

interface SQLQueryInputProps {
  onGenerate: (description: string, dialect: string) => void;
  isLoading: boolean;
}

const SQLQueryInput = ({ onGenerate, isLoading }: SQLQueryInputProps) => {
  const [description, setDescription] = useState("");
  const [dialect, setDialect] = useState("MySQL");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onGenerate(description.trim(), dialect);
    }
  };

  const loadExample = () => {
    const examples = sqlQueryService.getExampleQueries();
    const randomExample = examples[Math.floor(Math.random() * examples.length)];
    setDescription(randomExample.description);
    setDialect(randomExample.dialect);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span>Describe Your Query</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              What do you want to do?
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Find all customers who made orders in the last 30 days with their total order amount"
              className="min-h-[120px] resize-none"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Database Dialect
            </label>
            <Select value={dialect} onValueChange={setDialect} disabled={isLoading}>
              <SelectTrigger className="[&>span]:text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sqlQueryService.getSupportedDialects().map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              disabled={!description.trim() || isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate SQL
                </>
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={loadExample}
              disabled={isLoading}
            >
              Load Example
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SQLQueryInput;
