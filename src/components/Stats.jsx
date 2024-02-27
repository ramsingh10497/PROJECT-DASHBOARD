import { FaChevronDown } from "react-icons/fa";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import HalfCircleProgressBar from "./HalfProgressBar";

const data = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
];

const Stats = () => {
  return (
    <div
      style={{ background: "#F2EAE5", maxWidth: "52rem" }}
      className="overall-container border border-gray-200 shadow-md dark:border-gray-700 p-4 w-full md:w-96"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-lg">Overall Progress</h2>
        <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
          All <FaChevronDown className="ml-1" />
        </div>
      </div>
      {/* <HalfCircleProgressBar /> */}
      <div className="pie-chart-container mt-4">
        <PieChart width={300} height={300}>
          {" "}
          {/* Adjust width and height as needed */}
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
