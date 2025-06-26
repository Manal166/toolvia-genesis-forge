
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Toolvia</h4>
              <p className="text-gray-400 text-sm">
                Free online tools for students and developers. Privacy-first, no tracking.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Tools</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/tools/remove-duplicate-lines" className="text-gray-400 hover:text-white">Remove Duplicates</Link></li>
                <li><Link to="/tools/text-compare" className="text-gray-400 hover:text-white">Text Compare</Link></li>
                <li><Link to="/tools/case-converter" className="text-gray-400 hover:text-white">Case Converter</Link></li>
                <li><Link to="/tools" className="text-gray-400 hover:text-white">All Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Toolvia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
