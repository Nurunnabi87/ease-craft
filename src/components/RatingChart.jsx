import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RatingChart = ({ ratings }) => {
  return (
    <div className="w-full h-80 bg-white rounded-2xl shadow-lg p-4">

      <h2 className="text-xl font-bold mb-4">
        Rating
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />

          <YAxis
            dataKey="name"
            type="category"
          />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#FF8811"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RatingChart;