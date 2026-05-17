
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md">
        <h1 className="text-7xl font-bold text-red-500">404</h1>

        <h2 className="text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          Oops! The page you are looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;