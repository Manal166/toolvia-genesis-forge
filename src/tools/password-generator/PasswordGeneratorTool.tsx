
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCcw } from "lucide-react";
import { toast } from "sonner";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import { ToolComponentProps } from "@/config/toolRoutes.config";

const PasswordGeneratorTool = ({ tool, isDark, onToggleTheme }: ToolComponentProps) => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard");
  };

  return (
    <>
      <Helmet>
        <title>Free Strong Password Generator – Secure & Fast</title>
        <meta
          name="description"
          content="Generate strong, secure, and random passwords for your online accounts. Free tool for students, developers & everyone."
        />
      </Helmet>
      
      <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
        <ToolSection>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Generate Password
              </h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="length" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Password Length: {length}
                  </Label>
                  <Input
                    id="length"
                    type="range"
                    min={6}
                    max={32}
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Include Uppercase Letters
                    </Label>
                    <Switch
                      checked={includeUppercase}
                      onCheckedChange={setIncludeUppercase}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Include Numbers
                    </Label>
                    <Switch 
                      checked={includeNumbers} 
                      onCheckedChange={setIncludeNumbers} 
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Include Symbols
                    </Label>
                    <Switch 
                      checked={includeSymbols} 
                      onCheckedChange={setIncludeSymbols} 
                    />
                  </div>
                </div>

                <Button 
                  onClick={generatePassword} 
                  className="w-full flex items-center justify-center gap-2"
                >
                  <RefreshCcw className="w-4 h-4" /> 
                  Generate Password
                </Button>
              </div>
            </div>
          </div>
        </ToolSection>

        <ToolSection>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Generated Password
              </h2>

              {password ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <code className="text-sm text-gray-900 dark:text-gray-100 break-all font-mono">
                      {password}
                    </code>
                  </div>
                  
                  <Button 
                    onClick={copyToClipboard} 
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Password
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">
                    Click "Generate Password" to create a secure password
                  </p>
                </div>
              )}
            </div>
          </div>
        </ToolSection>
      </ToolWrapper>
    </>
  );
};

export default PasswordGeneratorTool;
