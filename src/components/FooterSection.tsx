
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} CodeBoost. All rights reserved.</p>
        <p>
          <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
