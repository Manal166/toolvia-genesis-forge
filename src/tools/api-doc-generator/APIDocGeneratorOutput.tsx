
import { Copy, CheckCircle, RotateCcw, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface APIEndpoint {
  method: string;
  path: string;
  description: string;
  parameters?: string[];
  responses?: string[];
}

interface APIDocResult {
  documentation: string;
  endpoints: APIEndpoint[];
  summary: string;
}

interface APIDocGeneratorOutputProps {
  result: APIDocResult | null;
  copied: boolean;
  onCopyToClipboard: () => void;
  onRegenerate: () => void;
}

const APIDocGeneratorOutput = ({ 
  result, 
  copied, 
  onCopyToClipboard, 
  onRegenerate 
}: APIDocGeneratorOutputProps) => {
  const handleDownload = () => {
    if (!result) return;
    
    const blob = new Blob([result.documentation], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'api-documentation.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!result) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-semibold mb-2">Ready to Generate Docs</h3>
          <p>Paste your API code to generate comprehensive documentation</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Documentation Results */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-green-400">
            API Documentation
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className="flex items-center space-x-2 text-white"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Regenerate</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center space-x-2 text-white"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onCopyToClipboard}
              className="flex items-center space-x-2 text-white"
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <Tabs defaultValue="documentation" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="documentation">Full Documentation</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints Overview</TabsTrigger>
            </TabsList>
            
            <TabsContent value="documentation" className="mt-4">
              <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto text-sm max-h-96 scrollbar-thin">
                <pre className="text-green-400 whitespace-pre-wrap font-mono">
                  {result.documentation}
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="endpoints" className="mt-4">
              <div className="space-y-4">
                {result.endpoints.map((endpoint, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400' :
                        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {endpoint.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Documentation Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Documentation Summary</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Overview</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">{result.summary}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {result.endpoints.length}
              </div>
              <div className="text-sm text-green-700 dark:text-green-300">Endpoints</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {result.endpoints.filter(e => e.method === 'GET').length}
              </div>
              <div className="text-sm text-purple-700 dark:text-purple-300">GET Routes</div>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {result.endpoints.filter(e => e.method === 'POST').length}
              </div>
              <div className="text-sm text-orange-700 dark:text-orange-300">POST Routes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocGeneratorOutput;
