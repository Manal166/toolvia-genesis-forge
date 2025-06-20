
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, RefreshCw, CheckCircle, AlignJustify } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SummaryLength } from "@/services/textSummarizerService";

interface TextSummarizerOutputProps {
  summary: string;
  originalText: string;
  summaryLength: SummaryLength;
  onRegenerate: () => void;
  isLoading: boolean;
}

const TextSummarizerOutput = ({ 
  summary, 
  originalText, 
  summaryLength, 
  onRegenerate, 
  isLoading 
}: TextSummarizerOutputProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Summary copied",
        description: "The summary has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy summary to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const content = `Original Text Summary\n${'='.repeat(20)}\n\nSummary Length: ${summaryLength}\nGenerated: ${new Date().toLocaleString()}\n\n${summary}\n\n${'='.repeat(20)}\nOriginal Text:\n${originalText}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `text-summary-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download started",
      description: "Your summary has been downloaded as a text file.",
    });
  };

  const getLengthDescription = (length: SummaryLength) => {
    switch (length) {
      case 'short': return 'Short Summary (2-3 sentences)';
      case 'medium': return 'Medium Summary (1 paragraph)';
      case 'detailed': return 'Detailed Summary (2-3 paragraphs)';
      default: return 'Summary';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlignJustify className="h-5 w-5 text-green-600 dark:text-green-400" />
          Generated Summary
        </CardTitle>
        <CardDescription>
          {summary ? getLengthDescription(summaryLength) : "Your AI-generated summary will appear here"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {summary ? (
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="keypoints" disabled>
                Key Points (Coming Soon)
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary" className="mt-4">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {summary}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyToClipboard}
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onRegenerate}
                    disabled={isLoading}
                    className="flex items-center gap-2"
                  >
                    <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                    Regenerate
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="keypoints" className="mt-4">
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <AlignJustify className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Key points extraction feature coming soon!</p>
                <p className="text-sm mt-2">This will automatically extract bullet points from your summary.</p>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <AlignJustify className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Enter your text and click "Generate Summary" to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TextSummarizerOutput;
