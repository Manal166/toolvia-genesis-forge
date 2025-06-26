
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CleanTextGuide() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Helmet>
          <title>How to Clean and Format Text for Free | Toolvia</title>
          <meta
            name="description"
            content="Learn how to clean up your text by removing duplicates, fixing casing, and formatting content easily using free tools from Toolvia."
          />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">
          How to Clean and Format Text for Free
        </h1>

        <p className="text-gray-300 mb-4">
          Whether you're a student, developer, or content creator, dealing with messy or duplicated text is a common problem. Fortunately, with the right tools, you can fix these issues in seconds.
        </p>

        <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
          1. Remove Duplicate Lines
        </h2>
        <p className="text-gray-300 mb-4">
          Toolvia offers a free{" "}
          <Link to="/tools/remove-duplicate-lines" className="text-blue-400 underline">
            Remove Duplicate Lines
          </Link>{" "}
          tool that helps you clean up repeated lines from any block of text. Paste your content, click a button, and get clean results instantly.
        </p>

        <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
          2. Convert Text Case
        </h2>
        <p className="text-gray-300 mb-4">
          Fix inconsistent capitalization using our{" "}
          <Link to="/tools/case-converter" className="text-blue-400 underline">
            Case Converter
          </Link>{" "}
          tool. You can convert to UPPERCASE, lowercase, Title Case, or camelCase with a single click.
        </p>

        <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
          3. Compare Text Easily
        </h2>
        <p className="text-gray-300 mb-4">
          Want to check what changed between two versions of a document? Try our{" "}
          <Link to="/tools/text-compare" className="text-blue-400 underline">
            Text Compare
          </Link>{" "}
          tool to see differences side by side.
        </p>

        <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
          4. No Sign-up, No Ads, No Data Collection
        </h2>
        <p className="text-gray-300 mb-4">
          Toolvia is completely browser-based. We do not collect any user data or track your activity. Our mission is to keep tools fast, private, and useful — forever.
        </p>

        <p className="text-gray-300 mt-10">
          🚀 Ready to clean your text? Explore more free tools on our{" "}
          <Link to="/tools" className="text-blue-400 underline">
            Tools Page
          </Link>
          .
        </p>
      </div>

      <Footer />
    </div>
  );
}
