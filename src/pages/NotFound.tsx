
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0d1117] px-4 text-center">
      <Helmet>
        <title>404 – Page Not Found | Toolvia</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist." />
      </Helmet>

      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}
