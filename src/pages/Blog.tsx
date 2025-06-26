
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Code, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    title: "Top 5 Tools Every Student Should Use",
    excerpt: "Discover the most helpful tools for boosting academic productivity.",
    slug: "top-5-student-tools",
  },
  {
    title: "How to Clean and Format Text for Free",
    excerpt: "Learn how to remove duplicates, fix casing, and clean messy text online.",
    slug: "clean-text-guide",
  },
];

export default function Blog() {
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

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Helmet>
          <title>Blog – Toolvia</title>
          <meta name="description" content="Read helpful articles about using online tools for study, work, and coding." />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <Link to={`/blog/${post.slug}`} className="text-blue-400 hover:underline text-xl font-semibold">
                {post.title}
              </Link>
              <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
