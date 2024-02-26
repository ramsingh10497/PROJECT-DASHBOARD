import { FaChevronDown } from "react-icons/fa";
import Cards from "./Cards";
import Table from "./Table";
import Stats from "./Stats";
import Tasks from "./Tasks";

const Dashboard = () => {
  return (
    <div className="flex-1 bg-orange-100 p-5 h-full">
      <div className="flex justify-between mb-1 ml-5">
        <h2 className="text-black font-bold text-xl">Overview</h2>
        <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
          Last 30 Days <FaChevronDown className="ml-1" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <Cards />
        <div className="flex gap-5">
          <Table />
          <Stats />
        </div>
      </div>
      <div className="flex justify-between mb-1 ml-5">
        <Tasks />
      </div>
    </div>
  );
};

export default Dashboard;
