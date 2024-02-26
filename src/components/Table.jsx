import { FaChevronDown } from "react-icons/fa";
import SkillDisplay from "./ProgressBar";

function createData(name, projectManager, dueDate, status, progress) {
  return { name, projectManager, dueDate, status, progress };
}

const rows = [
  createData(
    "Nelsa web development",
    "Om Prakash",
    "May 25, 2023",
    "Completed",
    100
  ),
  createData(
    "Datascale AI app",
    "Neilsan Mando",
    "June 20, 2023",
    "Delayed",
    36
  ),
  createData(
    "Media channel branding",
    "Tiruvelly Priya",
    "July 13, 2023",
    "At Risk",
    66
  ),
  createData(
    "Corlax IOS app development",
    "Matte Hannery",
    "Dec 20, 2023",
    "Completed",
    100
  ),
];

const makeStyle = (status) => {
  let backgroundColor, color;
  switch (status) {
    case "Completed":
      backgroundColor = "bg-green-300";
      color = "text-green-800";
      break;
    case "Delayed":
      backgroundColor = "bg-yellow-300";
      color = "text-yellow-800";
      break;
    case "At Risk":
      backgroundColor = "bg-red-300";
      color = "text-red-800";
      break;
    default:
      backgroundColor = "bg-blue-300";
      color = "text-blue-800";
  }
  return `${backgroundColor} ${color} rounded-full px-2 py-1`;
};

const TableComponent = () => {
  return (
    <div className="bg-orange-100 p-5">
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center px-4 py-2 bg-orange-100 rounded-t-lg">
          <div className="font-bold">Project Summary</div>
          <div className="flex items-center justify-end space-x-4">
            <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
              Projects <FaChevronDown className="ml-1" />
            </div>
            <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
              Project Manager <FaChevronDown className="ml-1" />
            </div>
            <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
              Status <FaChevronDown className="ml-1" />
            </div>
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300">
                Project Manager
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300">Due Date</th>
              <th className="px-6 py-3 border-b-2 border-gray-300">Status</th>
              <th className="px-6 py-3 border-b-2 border-gray-300">Progress</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.projectManager}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={makeStyle(row.status)}>{row.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <SkillDisplay percent={row.progress} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
