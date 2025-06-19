
import { useState } from "react";
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareButtonsProps {
  title: string;
  description: string;
  url?: string;
}

const SocialShareButtons = ({ title, description, url }: SocialShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const shareUrl = url || window.location.href;
  
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Share link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Share2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Share This Tool
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
        Help other developers discover this tool
      </p>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => openShareWindow(shareLinks.facebook)}
          className="flex items-center"
        >
          <Facebook className="h-4 w-4 mr-2 text-blue-600" />
          Facebook
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => openShareWindow(shareLinks.twitter)}
          className="flex items-center"
        >
          <Twitter className="h-4 w-4 mr-2 text-blue-400" />
          Twitter
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => openShareWindow(shareLinks.linkedin)}
          className="flex items-center"
        >
          <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
          LinkedIn
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="flex items-center"
        >
          {copied ? (
            <Check className="h-4 w-4 mr-2 text-green-600" />
          ) : (
            <Copy className="h-4 w-4 mr-2" />
          )}
          {copied ? 'Copied!' : 'Copy Link'}
        </Button>
      </div>
    </div>
  );
};

export default SocialShareButtons;
