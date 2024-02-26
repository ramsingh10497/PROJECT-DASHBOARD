// components/Sidebar.jsx

import {
  FaTachometerAlt,
  FaPlus,
  FaChartLine,
  FaProjectDiagram,
  FaTasks,
  FaClock,
  FaTools,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import plus from "../assets/plus.svg";
import dashboard from "../assets/dashboard.svg";

const Sidebar = () => {
  return (
    <div className="bg-black text-white w-64 h-screen p-5">
      <div className="flex flex-row mb-16">
        <img
          src="public/logo.svg"
          style={{ width: "31px", height: "30px" }}
          className="mr-2"
        />
        <div className="font-semibold text-lg">Promage</div>
      </div>
      <button className="bg-white text-black rounded-full p-3 mb-16 cursor-pointer flex flex-start mx-auto">
        <img src={plus} />
        <div className="font-semibold text-base p-1">Create New Project</div>
      </button>
      <div className="bg-white text-orange-500 rounded-full py-2 px-4 mb-4 cursor-pointer flex flex-start mx-auto">
        <img src={dashboard} />
        <div className="font-semibold text-base p-1 ml-4">Dashboard</div>
      </div>
      <ul className="list-none p-4">
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaProjectDiagram className="mr-2" /> Projects
        </li>
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaTasks className="mr-2" /> Tasks
        </li>
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaChartLine className="mr-2" /> Dashboard
        </li>
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaClock className="mr-2" /> Time Log
        </li>
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaTools className="mr-2" /> Resource Mgnt
        </li>
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaUsers className="mr-2" /> Users
        </li>
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaClipboardList className="mr-2" /> Project Template
        </li>
        <li className="rounded-md py-2 mb-1 cursor-pointer flex items-center">
          <FaClipboardList className="mr-2" /> Menu Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
