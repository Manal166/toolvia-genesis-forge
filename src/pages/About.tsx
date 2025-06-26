
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Code, ArrowLeft } from "lucide-react";

export default function About() {
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
          <title>About Toolvia</title>
          <meta name="description" content="Learn more about Toolvia, a free tools platform built for students and developers." />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">About Toolvia</h1>

        <p className="mb-4 text-gray-300">
          Toolvia is a free and privacy-first tools platform designed to help students, developers, and everyday users accomplish simple tasks efficiently. Whether you need to clean up text, count words, convert units, or compare content — Toolvia has got you covered.
        </p>

        <p className="mb-4 text-gray-300">
          All tools are browser-based, no logins required, and no tracking involved. We believe in useful tools, clean design, and a commitment to simplicity.
        </p>

        <p className="mb-4 text-gray-300">
          Toolvia is continuously growing with new tools and updates. Our mission is to provide fast, free, and focused utilities that just work.
        </p>
      </div>
    </div>
  );
}
