// eslint-disable-next-line react/prop-types
const SkillDisplay = ({ percent = 95 }) => {
  const calculateStrokeColor = () => {
    if (percent <= 35) {
      return "yellow";
    } else if (percent <= 50) {
      return "orange";
    } else if (percent < 75) {
      return "red";
    } else {
      return "green";
    }
  };

  const calculateStrokeOffset = () => {
    const circumference = 2 * Math.PI * 120;
    return circumference - (percent / 100) * circumference;
  };

  return (
    <div className="flex items-center justify-center h-12">
      <svg className="w-12 h-12">
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke={calculateStrokeColor()}
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={2 * Math.PI * 14}
          strokeDashoffset={calculateStrokeOffset()}
        />
        <text x="24" y="24" textAnchor="middle" alignmentBaseline="central">
          {`${percent}%`}
        </text>
      </svg>
    </div>
  );
};

export default SkillDisplay;
