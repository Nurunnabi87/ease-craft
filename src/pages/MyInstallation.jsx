import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleSort = (value) => {
    setSortType(value);

    const sortedApps = [...installedApps];

    switch (value) {
      case "downloads-high":
        sortedApps.sort((a, b) => b.downloads - a.downloads);
        break;

      case "downloads-low":
        sortedApps.sort((a, b) => a.downloads - b.downloads);
        break;

      case "rating-high":
        sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
        break;

      case "rating-low":
        sortedApps.sort((a, b) => a.ratingAvg - b.ratingAvg);
        break;

      case "size-high":
        sortedApps.sort((a, b) => b.size - a.size);
        break;

      case "size-low":
        sortedApps.sort((a, b) => a.size - b.size);
        break;

      default:
        break;
    }

    setInstalledApps(sortedApps);
  };

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);

    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    setInstalledApps(updatedApps);

    toast.success("App Uninstalled Successfully ✅");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Your Installed Apps
      </h1>

      <p className="text-center text-sm text-gray-400 mb-10">
        Explore all installed applications crafted for smarter life
      </p>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
        <p className="text-lg font-semibold">
          {installedApps.length} Apps Found
        </p>

        <select
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
          className="border px-4 py-2 rounded-xl shadow w-full md:w-auto"
        >
          <option value="">Sort By</option>
          <option value="downloads-high">Downloads High-Low</option>
          <option value="downloads-low">Downloads Low-High</option>
          <option value="rating-high">Rating High-Low</option>
          <option value="rating-low">Rating Low-High</option>
          <option value="size-high">Size High-Low</option>
          <option value="size-low">Size Low-High</option>
        </select>
      </div>

      {/* Empty State */}
      {installedApps.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-500">No Installed Apps Found</h2>

          <Link to="/apps">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Explore Apps
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row justify-between items-center"
            >
              {/* Left Section */}
              <div className="flex flex-col sm:flex-row items-center w-full">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full sm:w-52 md:w-64 h-40 object-cover"
                />

                <div className="p-4 text-center sm:text-left">
                  <h2 className="text-xl font-bold">{app.title}</h2>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm justify-center sm:justify-start">
                    <p>⬇ {app.downloads}</p>
                    <p>⭐ {app.ratingAvg}</p>
                    <p>📦 {app.size} MB</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="p-4">
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-[#00D390] text-white py-2 px-5 rounded-lg hover:bg-[#00b67d] transition"
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
