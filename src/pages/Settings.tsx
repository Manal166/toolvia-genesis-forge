
import { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Settings as SettingsIcon, Save, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [apiKey, setApiKey] = useState("");
  const [savedKey, setSavedKey] = useState(() => {
    const stored = localStorage.getItem('openai_api_key');
    return stored ? `${stored.substring(0, 7)}...${stored.slice(-4)}` : null;
  });
  const { toast } = useToast();

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key.",
        variant: "destructive",
      });
      return;
    }

    if (!apiKey.startsWith('sk-')) {
      toast({
        title: "Invalid API Key Format",
        description: "OpenAI API keys should start with 'sk-'.",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage
    localStorage.setItem('openai_api_key', apiKey);
    
    // Update display key
    setSavedKey(`${apiKey.substring(0, 7)}...${apiKey.slice(-4)}`);
    
    // Clear input
    setApiKey("");
    
    toast({
      title: "API Key Saved!",
      description: "Your OpenAI API key has been saved successfully.",
    });
  };

  const handleRemoveApiKey = () => {
    localStorage.removeItem('openai_api_key');
    setSavedKey(null);
    
    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-400" />
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold font-mono text-white">CodeBoost</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Settings Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <SettingsIcon className="h-8 w-8 text-blue-600" />
            Settings
          </h1>
          <p className="text-gray-400">
            Configure your API keys and preferences for CodeBoost tools.
          </p>
        </div>

        <div className="space-y-6">
          {/* OpenAI API Key Section */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">OpenAI API Key</CardTitle>
              <CardDescription className="text-gray-400">
                Enter your OpenAI API key to use AI-powered tools like the Code Explainer.
                Your key is stored locally in your browser and never sent to our servers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {savedKey && (
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Current API Key:</p>
                  <p className="text-white font-mono">{savedKey}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleRemoveApiKey}
                    className="mt-2 text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                  >
                    Remove Key
                  </Button>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="apiKey" className="text-white">
                  {savedKey ? "Update API Key" : "Enter API Key"}
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    type="password"
                    placeholder="sk-..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  />
                  <Button onClick={handleSaveApiKey} className="shrink-0">
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 space-y-1">
                <p>• Your API key is stored locally in your browser</p>
                <p>• It's used only for direct communication with OpenAI</p>
                <p>• Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">OpenAI Platform</a></p>
              </div>
            </CardContent>
          </Card>

          {/* Available Tools Section */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Available Tools</CardTitle>
              <CardDescription className="text-gray-400">
                Tools that require an OpenAI API key to function.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Code Explainer</p>
                    <p className="text-sm text-gray-400">Analyze and explain code with AI</p>
                  </div>
                  <Link to="/tools/code-explainer">
                    <Button variant="outline" size="sm">
                      Open Tool
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">AI Code Generator</p>
                    <p className="text-sm text-gray-400">Generate code from descriptions</p>
                  </div>
                  <Link to="/tools/ai-code-generator">
                    <Button variant="outline" size="sm">
                      Open Tool
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
