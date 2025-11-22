import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AreaChartBox({ data }) {
  if (!data || data.length === 0) return <p>No chart data available</p>;

  const keys = Object.keys(data[0]).filter((k) => k !== "year");
  const colors = ["#007bff", "#0dcaf0", "#198754", "#ffc107", "#dc3545", "#6f42c1"];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          {keys.length > 1 && <Legend />}
          {keys.map((key, idx) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[idx % colors.length]}
              fill={colors[idx % colors.length] + "33"}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}