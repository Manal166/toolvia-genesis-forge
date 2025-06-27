
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Helmet>
          <title>Terms & Conditions – Toolvia</title>
          <meta name="description" content="Terms and conditions for using Toolvia's free online tools and services." />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="mb-4 text-gray-300">
          By using Toolvia, you agree to the following terms and conditions. Please read them carefully before using our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-300">
          By accessing and using Toolvia's website and tools, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">2. Use License</h2>
        <p className="mb-4 text-gray-300">
          Permission is granted to temporarily use Toolvia's tools for personal and commercial purposes. This is the grant of a license, not a transfer of title.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">3. Disclaimer</h2>
        <p className="mb-4 text-gray-300">
          The tools and services on Toolvia are provided "as is" without any representations or warranties, express or implied. We make no warranties regarding the accuracy, reliability, or completeness of the tools.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">4. Limitations</h2>
        <p className="mb-4 text-gray-300">
          In no event shall Toolvia or its suppliers be liable for any damages arising out of the use or inability to use the tools on our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">5. Contact Information</h2>
        <p className="mb-4 text-gray-300">
          If you have any questions about these Terms & Conditions, please contact us through our Contact page.
        </p>
      </div>

      <Footer />
    </div>
  );
}
