
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0d1117] to-[#161b22] min-h-screen text-white">
      <Helmet>
        <title>Toolvia – Free Online Tools for Students & Developers</title>
        <meta
          name="description"
          content="Toolvia offers fast, privacy-friendly tools for developers, writers, and students. No login. No tracking. Just useful tools that work."
        />
      </Helmet>

      <Header />

      {/* Header Section */}
      <section className="text-center px-4 pt-20 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Toolvia</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
          Smart & Free Tools for Students and Developers
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Boost your productivity with our free, privacy-friendly tools — no login, no limits.
          From text formatting to code utilities, Toolvia gives you what you need to get work done faster.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/tools"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm"
          >
            Explore Tools
          </Link>
          <Link
            to="/tools/remove-duplicate-lines"
            className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded text-sm"
          >
            Try Text Cleaner
          </Link>
        </div>
      </section>

      {/* Why Choose Toolvia */}
      <section className="px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Why Choose Toolvia?</h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Toolvia is your one-stop platform for useful, fast, and free tools that simplify everyday
          technical and academic tasks — made for students, writers, and developers.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#161b22] border border-[#30363d] p-6 rounded text-center">
            <div className="text-blue-400 text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-2">Fast & Lightweight</h3>
            <p className="text-gray-400 text-sm">
              No loading delays or logins. Tools open instantly in your browser.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] p-6 rounded text-center">
            <div className="text-green-400 text-2xl mb-2">🧰</div>
            <h3 className="text-white font-semibold mb-2">Essential Utilities</h3>
            <p className="text-gray-400 text-sm">
              Clean text, compare content, count words, convert formats, and more.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] p-6 rounded text-center">
            <div className="text-purple-400 text-2xl mb-2">🔒</div>
            <h3 className="text-white font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-400 text-sm">
              All tools run on your browser. We don't store or track your data.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
