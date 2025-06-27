
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#161b22] border-t border-[#30363d] text-gray-400 text-sm py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Left: Copyright */}
        <div>
          <p>© {new Date().getFullYear()} Toolvia. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-500">Made for students, writers, and developers.</p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
          <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
