import { useLoaderData } from "react-router";
import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import reviews from "../assets/icon-review.png";

import { useEffect, useState } from "react";

const AppDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

    const exists = storedApps.find((item) => item.id === app.id);

    if (exists) {
      setInstalled(true);
    }
  }, [app]);
  const handleInstall = () => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

    const exists = storedApps.find((item) => item.id === app.id);

    if (!exists) {
      storedApps.push(app);

      localStorage.setItem("installedApps", JSON.stringify(storedApps));

      setInstalled(true);
    }
  };
  return (
    <div className="bg-gray-100 max-w-5xl mx-auto px-4 py-10">
      <div className=" rounded-2xl p-6 md:flex gap-8">
        {/* App Image */}
        <div className="md:w-1/3">
          <img src={app.image} alt={app.title} className="w-full rounded-xl" />
        </div>

        {/* App Info */}
        <div className="md:w-2/3 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">{app.title}</h1>

          <p className="text-gray-500 mt-2">
            Developed by{" "}
            <span className="text-[#773FE8] font-semibold">
              {app.companyName}
            </span>{" "}
          </p>

          <hr className="mt-4 text-gray-300" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
            <div className=" flex flex-col gap-1 p-3 rounded-lg">
              <img src={downloads} alt="icon-download" className="w-8" />
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="font-bold">{app.downloads}</p>
            </div>
            <div className=" flex flex-col gap-1 p-3 rounded-lg">
              <img src={ratings} alt="icon-download" className="w-8" />
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="font-bold">{app.ratingAvg}</p>
            </div>
            <div className=" flex flex-col gap-1 p-3 rounded-lg">
              <img src={reviews} alt="icon-download" className="w-8" />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="font-bold">{app.reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 bg-[#00D390] text-white px-4 py-3 rounded-lg hover:bg-[#00D370] transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>
      <hr className="max-w-4xl mx-auto pt-10 text-gray-300 " />

      {/* Ratings Breakdown */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Ratings Breakdown</h2>

        <div className="space-y-3">
          {app.ratings.map((rating, index) => (
            <div
              key={index}
              className="flex justify-between bg-gray-100 px-4 py-2 rounded-lg"
            >
              <span>{rating.name}</span>
              <span>{rating.count}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-lg font-semibold mt-6">Description</p>
      <p className="mt-4 text-gray-700">{app.description}</p>
    </div>
  );
};

export default AppDetails;
