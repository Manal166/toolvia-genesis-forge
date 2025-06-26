
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#161b22] border-b border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <Link to="/" className="text-xl font-bold text-blue-400">
          Toolvia
        </Link>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/tools" className="hover:text-blue-400">Tools</Link>
          <Link to="/blog" className="hover:text-blue-400">Blog</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/privacy" className="hover:text-blue-400">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
