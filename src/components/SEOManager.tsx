
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { downloadSitemap } from "@/utils/sitemapGenerator";
import { useToast } from "@/hooks/use-toast";

const SEOManager = () => {
  const { toast } = useToast();

  const handleDownloadSitemap = () => {
    downloadSitemap();
    toast({
      title: "Sitemap Downloaded",
      description: "sitemap.xml has been downloaded. Upload it to your domain root for better SEO.",
    });
  };

  const toolPages = [
    { name: "Code Explainer", path: "/tools/code-explainer/details" },
    { name: "AI Code Generator", path: "/tools/ai-code-generator/details" },
    { name: "Bug Fixer", path: "/tools/bug-fixer/details" },
    { name: "Regex Generator", path: "/tools/regex-generator/details" },
    { name: "Code Translator", path: "/tools/code-translator/details" },
    { name: "Pseudocode Generator", path: "/tools/pseudocode-generator/details" },
    { name: "Password Generator", path: "/tools/password-generator/details" },
    { name: "URL Encoder/Decoder", path: "/tools/url-encoder-decoder/details" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        SEO Management
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            Tool Detail Pages
          </h4>
          <div className="grid gap-2">
            {toolPages.map((tool) => (
              <a
                key={tool.path}
                href={tool.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {tool.name}
                </span>
                <ExternalLink className="h-4 w-4 text-gray-500" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            Sitemap Generation
          </h4>
          <Button
            onClick={handleDownloadSitemap}
            variant="outline"
            className="w-full"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Sitemap.xml
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Upload the sitemap.xml to your domain root for better search engine indexing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOManager;
