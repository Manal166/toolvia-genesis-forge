
import { Helmet } from "react-helmet-async";
import { Link2 } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const URLEncoderDecoderDetails = () => {
  return (
    <>
      <Helmet>
        <title>Free URL Encoder and Decoder Online Tool – Fast & Secure | CodeBoost</title>
        <meta
          name="description"
          content="Encode or decode URLs quickly and easily. 100% free URL encoder/decoder tool for developers and students. No registration required."
        />
        <meta name="keywords" content="url encoder, url decoder, percent encoding, url encoding, web development, free tool" />
        <link rel="canonical" href="/tools/url-encoder-decoder/details" />
      </Helmet>

      <ToolDetailsLayout 
        title="URL Encoder/Decoder"
        description="Encode or decode URLs quickly and easily with our free online tool"
        metaDescription="Encode or decode URLs quickly and easily. 100% free URL encoder/decoder tool for developers and students. No registration required."
        toolId="url-encoder-decoder"
        icon={<Link2 className="h-8 w-8 text-blue-600" />}
        useCases={[
          "Encoding URLs with special characters for web requests",
          "Decoding percent-encoded URLs for readability",
          "Preparing URLs for API calls and web forms",
          "Debugging URL-related issues in web development",
          "Converting between encoded and human-readable URLs"
        ]}
      />
    </>
  );
};

export default URLEncoderDecoderDetails;
