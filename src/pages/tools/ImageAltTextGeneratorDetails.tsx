
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import { Image } from "lucide-react";

const ImageAltTextGeneratorDetails = () => {
  return (
    <ToolDetailsLayout
      title="AI-Powered Image Alt Text Generator"
      description="Generate descriptive, accessible alt text for any image using advanced AI vision analysis. Perfect for improving website accessibility and SEO."
      metaDescription="Free AI alt text generator that creates descriptive alternative text for images. Improve website accessibility and SEO with AI-powered image descriptions."
      toolId="image-alt-text-generator"
      icon={<Image className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={[
        "Making website images accessible to screen readers",
        "Improving SEO with descriptive image alt text",
        "Bulk generating alt text for e-commerce product images",
        "Creating accessible content for social media posts",
        "Ensuring compliance with web accessibility standards (WCAG)",
        "Enhancing blog posts and articles with proper image descriptions",
        "Optimizing images for better search engine ranking",
        "Creating inclusive digital content for all users"
      ]}
    />
  );
};

export default ImageAltTextGeneratorDetails;
