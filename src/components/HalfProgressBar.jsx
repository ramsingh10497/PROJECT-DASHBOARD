const HalfCircleProgressBar = ({ percent }) => {
  // Calculate stroke-dasharray and stroke-dashoffset for each color
  const calculatePathValues = () => {
    const radius = 50; // Radius of the half circle
    const circumference = Math.PI * radius; // Circumference of the half circle
    const offset1 = circumference * (1 - percent / 100); // Offset for the first color
    const offset2 = circumference * 0.5; // Offset for the second color

    return {
      offset1,
      offset2,
      strokeDasharray: circumference,
    };
  };

  const { offset1, offset2, strokeDasharray } = calculatePathValues();

  return (
    <svg viewBox="0 0 100 50" className="w-24 h-12">
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="4"
      />
      {/* First color */}
      <path
        d={`M 50 0 a 50 50 0 0 1 0 100 a 50 50 0 0 1 0 -100`}
        fill="none"
        stroke="#1A932E"
        strokeWidth="4"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={offset1}
      />
      {/* Second color */}
      <path
        d={`M 50 0 a 50 50 0 0 1 0 100 a 50 50 0 0 1 0 -100`}
        fill="none"
        stroke="#E5AE20"
        strokeWidth="4"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={offset2}
      />
      {/* Third color (remainder) */}
      <path
        d={`M 50 0 a 50 50 0 0 1 0 100 a 50 50 0 0 1 0 -100`}
        fill="none"
        stroke="#E65E2B"
        strokeWidth="4"
        strokeDasharray={strokeDasharray}
        strokeDashoffset="0"
      />
    </svg>
  );
};

export default HalfCircleProgressBar;
