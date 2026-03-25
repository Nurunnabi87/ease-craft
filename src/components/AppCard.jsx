import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg">
        <img src={app.image} alt="" className="w-full h-40 object-cover" />
        <h3 className="font-bold mt-3">{app.title}</h3>
        <div className="flex justify-between items-center mt-3 ">
          <p className="bg-[#F1F5E8] py-1 px-1 rounded-md">⬇ {app.downloads}</p>
          <p className="bg-[#FFF0E1] py-1 px-1 rounded-md">
            ⭐ {app.ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
