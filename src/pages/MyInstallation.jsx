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

    let sortedApps = [...installedApps];

    if (value === "downloads-high") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    }

    if (value === "downloads-low") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }

    if (value === "rating-high") {
      sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }

    if (value === "rating-low") {
      sortedApps.sort((a, b) => a.ratingAvg - b.ratingAvg);
    }

    if (value === "size-high") {
      sortedApps.sort((a, b) => b.size - a.size);
    }

    if (value === "size-low") {
      sortedApps.sort((a, b) => a.size - b.size);
    }

    setInstalledApps(sortedApps);
  };

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);

    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    setInstalledApps(updatedApps);
    toast.success("App Uninstalled Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-5">
        Your Installed Apps
      </h1>
      <p className="text-center text-sm text-gray-400 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center pb-4">
        <p className="text-lg font-semibold">
          {installedApps.length} Apps Found
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <select
            value={sortType}
            onChange={(e) => handleSort(e.target.value)}
            className="border px-4 py-2 rounded-xl shadow"
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
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-500">No Installed Apps Found</h2>

          <Link to="/apps">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
              Explore Apps
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white flex justify-between pr-10  items-center shadow-lg rounded-2xl overflow-hidden"
            >
              <div className="flex justify-center items-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-96 h-32 object-cover"
                />

                <div className="p-4 flex flex-col">
                  <h2 className="text-xl font-bold">{app.title}</h2>

                  <div className="flex gap-4 mt-3 space-y-1 text-sm">
                    <p>⬇ {app.downloads}</p>
                    <p>⭐ {app.ratingAvg}</p>
                    <p>📦 {app.size} MB</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="mt-4  bg-[#00D390] text-white py-2 px-4 rounded-lg"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;
