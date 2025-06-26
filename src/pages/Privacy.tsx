
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Code, ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-gray-400" />
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold font-mono">Toolvia</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Helmet>
          <title>Privacy Policy – Toolvia</title>
          <meta name="description" content="Learn how Toolvia protects your privacy. We don't collect or store your personal data." />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-gray-300">
          At Toolvia, your privacy is extremely important to us. This privacy policy outlines the types of personal information we do not collect and how we respect your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">1. No Data Collection</h2>
        <p className="mb-4 text-gray-300">
          Toolvia is a 100% browser-based platform. We do not collect, store, or share any personal data. All processing is done locally in your browser.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">2. Cookies</h2>
        <p className="mb-4 text-gray-300">
          We do not use any cookies to track your activity or gather usage analytics. Some third-party services like Google AdSense (if enabled) may use cookies to show relevant ads.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">3. External Links</h2>
        <p className="mb-4 text-gray-300">
          Toolvia may contain links to external websites. We are not responsible for the content or privacy practices of these websites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-400">4. Consent</h2>
        <p className="mb-4 text-gray-300">
          By using Toolvia, you consent to this privacy policy. If you have any questions, feel free to contact us via the Contact page.
        </p>
      </div>
    </div>
  );
}
