import { Link, useLoaderData } from "react-router";

const TrendingApps = () => {
  const apps = useLoaderData();

  const trendingApps = apps.slice(0, 8);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-5">Trending Apps</h1>
      <p className="text-center text-sm text-gray-400 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingApps.map((app) => (
          <Link to={`/app/${app.id}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg">
              <img
                src={app.image}
                alt=""
                className="w-full h-40 object-cover"
              />
              <h3 className="font-bold mt-3">{app.title}</h3>
              <div className="flex justify-between items-center mt-3 ">
                <p className="bg-[#F1F5E8] py-1 px-1 rounded-md">
                  ⬇ {app.downloads}
                </p>
                <p className="bg-[#FFF0E1] py-1 px-1 rounded-md">
                  ⭐ {app.ratingAvg}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to={`/apps`}>
        <button className="mt-8 flex justify-center items-center mx-auto bg-[#713AE7] text-white py-2 px-6 rounded-lg hover:bg-[#9D61F2] transition">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
