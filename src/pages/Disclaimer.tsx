
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Helmet>
          <title>Disclaimer – Toolvia</title>
          <meta name="description" content="Disclaimer for Toolvia's free online tools and services. Important information about usage and limitations." />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

        <p className="mb-4 text-gray-300">
          Toolvia provides tools as-is with no guarantees. Please read this disclaimer carefully before using our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">1. General Information</h2>
        <p className="mb-4 text-gray-300">
          The information and tools provided by Toolvia are for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information or tools on our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">2. No Professional Advice</h2>
        <p className="mb-4 text-gray-300">
          The tools and information on this website are not intended to provide professional advice. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of our tools or reliance on any information provided.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">3. External Links</h2>
        <p className="mb-4 text-gray-300">
          Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Toolvia. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">4. Tool Accuracy</h2>
        <p className="mb-4 text-gray-300">
          While we strive to provide accurate tools and results, we cannot guarantee that all tools will work perfectly in all circumstances. Users are responsible for verifying the accuracy of results before using them for important purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">5. Data Processing</h2>
        <p className="mb-4 text-gray-300">
          All tool processing is done locally in your browser. We do not store or transmit your data to our servers. However, users are responsible for ensuring they do not input sensitive or confidential information into our tools.
        </p>
      </div>

      <Footer />
    </div>
  );
}
