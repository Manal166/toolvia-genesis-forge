
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Code, ArrowLeft } from "lucide-react";

export default function Contact() {
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

      <div className="max-w-xl mx-auto px-4 py-10">
        <Helmet>
          <title>Contact Us – Toolvia</title>
          <meta name="description" content="Have a suggestion or feedback? Get in touch with the Toolvia team." />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <form
          action="mailto:contact@toolvia.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white text-sm transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
