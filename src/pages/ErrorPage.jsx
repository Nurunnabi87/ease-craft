import { Link } from "react-router";
import errorImage from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-lg">
        <img src={errorImage} alt="404 Error" className="mx-auto mb-4" />

        <h2 className="text-2xl font-semibold mb-2">Oops, page not found!</h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for is not available.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#7039E7] text-white px-6 py-3 rounded-lg hover:bg-[#5a2fc4] transition"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
