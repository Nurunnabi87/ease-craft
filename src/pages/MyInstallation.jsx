import { useEffect, useState } from "react";
import { Link } from "react-router";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);

    localStorage.setItem(
      "installedApps",
      JSON.stringify(updatedApps)
    );

    setInstalledApps(updatedApps);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Installed Apps
      </h1>

      {installedApps.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-500">
            No Installed Apps Found
          </h2>

          <Link to="/apps">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Explore Apps
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">

                <h2 className="text-xl font-semibold">
                  {app.title}
                </h2>

                <p className="text-sm text-gray-500">
                  {app.companyName}
                </p>

                <div className="flex justify-between mt-3 text-sm">
                  <span>⭐ {app.ratingAvg}</span>
                  <span>{app.downloads}</span>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Uninstall
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default MyInstallation;