
import { useState } from "react";
import { Link2, Moon, Sun, Settings, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { ToolComponentProps } from "@/config/toolRoutes.config";
import AdZone from "@/components/AdZone";

const URLEncoderDecoderTool = ({ tool, isDark, onToggleTheme }: ToolComponentProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeURL = () => {
    try {
      if (!input.trim()) {
        toast.error("Please enter some text to encode");
        return;
      }
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
      toast.success("URL encoded successfully!");
    } catch (error) {
      toast.error("Invalid input to encode");
    }
  };

  const decodeURL = () => {
    try {
      if (!input.trim()) {
        toast.error("Please enter some text to decode");
        return;
      }
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
      toast.success("URL decoded successfully!");
    } catch (error) {
      toast.error("Invalid input to decode");
    }
  };

  const copyOutput = () => {
    if (!output) {
      toast.error("No output to copy");
      return;
    }
    navigator.clipboard.writeText(output);
    toast.success("Output copied to clipboard");
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    toast.success("Cleared all content");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-lg border-b ${isDark ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Code className={`h-8 w-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                CodeBoost
              </span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className={`${isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>
                Home
              </Link>
              <Link to="/tools" className={`${isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>
                Tools
              </Link>
              <Link to="/community" className={`${isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>
                Community
              </Link>
              <Link to="/about" className={`${isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>
                About
              </Link>
              <Link to="/settings">
                <Button variant="ghost" size="sm" className={isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}>
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={onToggleTheme}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Top Banner Ad Zone */}
      <AdZone 
        id="url-encoder-banner-top" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className={`p-4 rounded-full ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}>
                  <Link2 className={`h-8 w-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
              </div>
              
              <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {tool.name}
              </h1>
              
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {tool.description}
              </p>
            </div>

            {/* Tool Interface */}
            <div className={`rounded-xl shadow-lg p-8 mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              {/* Input Section */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Input Text or URL
                </label>
                <Textarea
                  rows={4}
                  placeholder="Enter your URL or text here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`w-full ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'bg-white border-gray-300'}`}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button 
                  onClick={encodeURL}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link2 className="h-4 w-4 mr-2" />
                  Encode URL
                </Button>
                <Button 
                  onClick={decodeURL} 
                  variant="outline"
                  className={isDark ? 'border-gray-600 text-white hover:bg-gray-700' : 'border-gray-300'}
                >
                  <Link2 className="h-4 w-4 mr-2" />
                  Decode URL
                </Button>
                <Button 
                  onClick={clearAll}
                  variant="outline"
                  className={isDark ? 'border-gray-600 text-white hover:bg-gray-700' : 'border-gray-300'}
                >
                  Clear All
                </Button>
              </div>

              {/* Output Section */}
              {output && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Output
                    </label>
                    <Button
                      onClick={copyOutput}
                      size="sm"
                      variant="outline"
                      className={isDark ? 'border-gray-600 text-white hover:bg-gray-700' : 'border-gray-300'}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                    <code className={`text-sm break-all ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {output}
                    </code>
                  </div>
                </div>
              )}
            </div>

            {/* How It Works Section */}
            <div className={`rounded-xl shadow-lg p-8 mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                How It Works
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    URL Encoding
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Converts special characters in URLs to percent-encoded format, making them safe for transmission over the internet.
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    URL Decoding
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Converts percent-encoded URLs back to their original readable format with special characters restored.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Ad Zone */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              <AdZone 
                id="url-encoder-sidebar-primary"
                className="w-full min-h-[300px]"
              />
              <AdZone 
                id="url-encoder-sidebar-secondary"
                className="w-full min-h-[250px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad Zone */}
      <AdZone 
        id="url-encoder-banner-bottom" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
      />
    </div>
  );
};

export default URLEncoderDecoderTool;
