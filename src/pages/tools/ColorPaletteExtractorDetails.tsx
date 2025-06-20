
import ToolDetailsLayout from "@/components/ToolDetailsLayout";
import { Palette } from "lucide-react";

const ColorPaletteExtractorDetails = () => {
  return (
    <ToolDetailsLayout
      title="AI-Powered Color Palette Extractor Tool"
      description="Extract beautiful, professional color palettes from any image using advanced AI analysis. Perfect for designers, developers, and creatives."
      metaDescription="Free AI color palette extractor tool that analyzes images and generates beautiful color palettes with HEX codes. Perfect for designers and developers."
      toolId="color-palette-extractor"
      icon={<Palette className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      useCases={[
        "Creating color schemes for web design projects",
        "Extracting brand colors from logos and images",
        "Generating palettes for digital art and illustrations",
        "Matching colors for interior design projects",
        "Creating consistent color themes for presentations",
        "Finding complementary colors for marketing materials",
        "Developing color schemes for mobile app interfaces",
        "Extracting colors from photographs for creative projects"
      ]}
    />
  );
};

export default ColorPaletteExtractorDetails;
