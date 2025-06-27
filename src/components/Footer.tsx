
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-400 py-8 text-sm mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-gray-500 mb-4 md:mb-0">
            © 2025 <span className="text-white font-semibold">Toolvia</span>. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-4 text-center md:text-right text-gray-400">
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
            <Link to="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
          </nav>
        </div>

        <p className="mt-4 text-center text-xs text-gray-600">
          Made for students, writers, and developers.
        </p>
      </div>
    </footer>
  );
}
