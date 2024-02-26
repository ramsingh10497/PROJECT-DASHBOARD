import TotalRevenue from "../assets/revenueLogo.svg";
import Projects from "../assets/projects.svg";
import Time from "../assets/time.svg";
import Resources from "../assets/resources.svg";

// eslint-disable-next-line react/prop-types
const Card = ({ icon, heading, mainContent, footer }) => (
  <div className="max-w-sm p-6 rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-orange-50">
    <div className="flex justify-start items-center mb-4 text-gray-700">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold text-gray-900">{heading}</h3>
    <div className="text-xl font-bold mb-2">{mainContent}</div>
    <div className="text-sm text-gray-500">{footer}</div>
  </div>
);

const Cards = () => (
  <div className="flex flex-wrap justify-around gap-4">
    <Card
      icon={<img src={TotalRevenue} className="text-2xl" />}
      heading="Total Revenue"
      mainContent={
        <>
          <strong>$53,0089</strong>
        </>
      }
      footer="12% decrease from last 12 months"
    />
    <Card
      icon={<img src={Projects} className="text-2xl" />}
      heading="Projects"
      mainContent={
        <>
          <strong>95</strong>/100
        </>
      }
      footer="12% decrease from last month"
    />
    <Card
      icon={<img src={Time} className="text-2xl" />}
      heading="Time Spent"
      mainContent={
        <>
          <strong>1022</strong>/1300 Hrs
        </>
      }
      footer="8% increase from last month"
    />
    <Card
      icon={<img src={Resources} className="text-2xl" />}
      heading="Resources"
      mainContent={
        <>
          <strong>101</strong>/120
        </>
      }
      footer="2% increase from last month"
    />
  </div>
);

export default Cards;
