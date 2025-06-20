
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Copy, CheckCircle, RotateCcw, Download } from "lucide-react";
import { toast } from "sonner";
import mermaid from "mermaid";

interface FlowchartResult {
  originalCode: string;
  mermaidCode: string;
  language: string;
  explanation: string;
}

interface FlowchartOutputProps {
  result: FlowchartResult | null;
  copied: boolean;
  onCopyToClipboard: () => void;
  onRegenerate: () => void;
}

const FlowchartOutput = ({
  result,
  copied,
  onCopyToClipboard,
  onRegenerate
}: FlowchartOutputProps) => {
  const [activeTab, setActiveTab] = useState("diagram");
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      },
      themeVariables: {
        primaryColor: '#3b82f6',
        primaryTextColor: '#1f2937',
        primaryBorderColor: '#2563eb',
        lineColor: '#6b7280',
        sectionBkgColor: '#f3f4f6',
        altSectionBkgColor: '#e5e7eb',
        gridColor: '#d1d5db'
      }
    });
  }, []);

  useEffect(() => {
    if (result?.mermaidCode && activeTab === "diagram") {
      renderMermaidDiagram();
    }
  }, [result, activeTab]);

  const renderMermaidDiagram = async () => {
    if (!result?.mermaidCode || !mermaidRef.current) return;

    try {
      // Clear previous content
      mermaidRef.current.innerHTML = '';
      
      // Generate unique ID for this diagram
      const diagramId = `mermaid-${Date.now()}`;
      
      // Render the diagram
      const { svg } = await mermaid.render(diagramId, result.mermaidCode);
      
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = svg;
      }
    } catch (error) {
      console.error('Error rendering Mermaid diagram:', error);
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = `
          <div class="text-center py-8 text-red-500">
            <p class="font-medium">Error rendering diagram</p>
            <p class="text-sm mt-2">Please check the Mermaid code or try regenerating</p>
          </div>
        `;
      }
    }
  };

  const handleDownloadSVG = async () => {
    if (!mermaidRef.current) return;
    
    try {
      const svgElement = mermaidRef.current.querySelector('svg');
      if (!svgElement) {
        toast.error("No diagram available to download");
        return;
      }

      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = 'flowchart.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      URL.revokeObjectURL(svgUrl);
      toast.success("Flowchart downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download flowchart");
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-green-600" />
            Generated Flowchart
          </CardTitle>
          {result && (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onRegenerate}
                className="flex items-center gap-1"
              >
                <RotateCcw className="h-3 w-3" />
                Regenerate
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {result ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="diagram">Diagram View</TabsTrigger>
              <TabsTrigger value="code">Mermaid Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagram" className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadSVG}
                  className="flex items-center gap-1"
                >
                  <Download className="h-3 w-3" />
                  Download SVG
                </Button>
              </div>
              <div 
                ref={mermaidRef}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 min-h-[400px] overflow-auto flex items-center justify-center"
              />
              {result.explanation && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                    Flowchart Explanation
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 whitespace-pre-wrap">
                    {result.explanation}
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="code" className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onCopyToClipboard}
                  className="flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono min-h-[400px]">
                <code>{result.mermaidCode}</code>
              </pre>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <ArrowRight className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Enter your code and select a language to generate a flowchart</p>
            <p className="text-xs mt-2">The diagram will appear here once generated</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FlowchartOutput;
