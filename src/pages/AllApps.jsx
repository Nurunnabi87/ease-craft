import { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import AppNotFound from "./AppNotFound";

const AllApps = () => {
  const [search, setSearch] = useState("");

  const apps = useLoaderData();

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {filteredApps.length > 0 && (
        <>
          <h1 className="text-4xl font-bold text-center mb-5">
            Our All Applications
          </h1>

          <p className="text-center text-sm text-gray-400 mb-10">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6">
        {filteredApps.length > 0 && (
          <p className="text-lg font-semibold">
            ({filteredApps.length}) Apps Found
          </p>
        )}

        <label className="input input-bordered flex items-center gap-2 w-full md:w-80">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="text"
            className="grow"
            placeholder="Search Apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {filteredApps.length === 0 ? (
        <AppNotFound />
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
