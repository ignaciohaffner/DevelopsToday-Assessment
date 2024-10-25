import React from "react";
import { PopulationCount } from "../Models/Entities/CountryInformation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

interface ChartProps {
  data: PopulationCount[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const formatNumber = (num: number) => num.toLocaleString("en-US");

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-200 p-2 rounded-lg">
          <p className="label">{`Year: ${label}`}</p>
          <p className="label">{`Population: ${formatNumber(
            payload[0].value ?? 0
          )}`}</p>
        </div>
      );
    }
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Border Countries</h2>
      <ResponsiveContainer width="100%" height={400} className="">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatNumber} width={80} />
          <Tooltip content={<CustomTooltip />} />
          <Legend formatter={() => "Population"} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
