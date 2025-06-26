
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#161b22] border-t border-[#30363d] text-gray-400 text-sm py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p>© {new Date().getFullYear()} Toolvia. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
