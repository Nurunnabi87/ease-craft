import { Link } from "react-router";
import notFoundImage from "../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-lg">
        <img src={notFoundImage} alt="App Not Found" className="mx-auto mb-4" />

        <h2 className="text-2xl font-semibold mb-2">OPPS!! APP NOT FOUND</h2>
        <p className="text-gray-600 mb-6">
          The App you are requesting is not found on our system.  please try another apps
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

export default AppNotFound;