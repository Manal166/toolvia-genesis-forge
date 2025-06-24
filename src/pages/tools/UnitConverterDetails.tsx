
import { Helmet } from "react-helmet-async";
import { Calculator } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const UnitConverterDetails = () => {
  return (
    <>
      <Helmet>
        <title>Free Unit Converter Online Tool – Length, Weight, Temperature | CodeBoost</title>
        <meta
          name="description"
          content="Convert between metric and imperial units instantly. Free online unit converter for length, weight, and temperature measurements. Perfect for students, engineers, and professionals."
        />
        <meta name="keywords" content="unit converter, metric converter, imperial converter, length converter, weight converter, temperature converter, measurement converter, free tool" />
        <link rel="canonical" href="/tools/unit-converter/details" />
      </Helmet>

      <ToolDetailsLayout 
        title="Unit Converter"
        description="Convert between metric and imperial units instantly with our comprehensive online tool"
        metaDescription="Convert between metric and imperial units instantly. Free online unit converter for length, weight, and temperature measurements. Perfect for students, engineers, and professionals."
        toolId="unit-converter"
        icon={<Calculator className="h-8 w-8 text-blue-600" />}
        useCases={[
          "Converting between metric and imperial measurements",
          "Engineering calculations and technical specifications",
          "Educational assignments and homework help",
          "International recipe conversions for cooking",
          "Travel planning and understanding local measurements",
          "Scientific research and laboratory work",
          "Construction and architectural projects",
          "Fitness tracking and health measurements"
        ]}
      />
    </>
  );
};

export default UnitConverterDetails;
