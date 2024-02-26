const Tasks = () => {
  const makeStyle = (status) => {
    let backgroundColor, color;
    switch (status) {
      case "Approved":
        backgroundColor = "bg-green-300";
        color = "text-green-800";
        break;
      case "review":
        backgroundColor = "bg-red-300";
        color = "text-red-800";
        break;
      default:
        backgroundColor = "bg-orange-300";
        color = "text-orange-800";
    }
    return `${backgroundColor} ${color} rounded-full px-2 py-1`;
  };
  return (
    <div
      style={{ background: "#F2EAE5", maxWidth: "52rem" }}
      className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-8"
    >
      <h5 className="mb-4 text-xl font-medium dark:text-gray-400">
        Today Task
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white justify-around">
        <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 border-blue-500">
          All
        </button>
        <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
          Importants
        </button>
        <div>Notes</div>
        <div>Links</div>
      </div>
      <hr className="h-px my-4 bg-gray-600 border-0 dark:bg-gray-900"></hr>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center flex justify-between">
          <div className="flex gap-8">
            <svg
              className="flex-shrink-0 w-4 h-4 text-orange-700 dark:text-orange-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Create a user flow of social application design
            </span>
          </div>
          <div className="px-6 py-4 whitespace-nowrap">
            <span className={makeStyle("Approved")}>Approved</span>
          </div>
        </li>
        <li className="flex items-center flex justify-between">
          <div className="flex gap-8">
            <svg
              className="flex-shrink-0 w-4 h-4 text-orange-700 dark:text-orange-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Create a user flow of social application design
            </span>
          </div>
          <div className="px-6 py-4 whitespace-nowrap">
            <span className={makeStyle("review")}>In review</span>
          </div>
        </li>
        <li className="flex items-center flex justify-between">
          <div className="flex gap-8">
            <svg
              className="flex-shrink-0 w-4 h-4 text-orange-700 dark:text-orange-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Create a user flow of social application design
            </span>
          </div>
          <div className="px-6 py-4 whitespace-nowrap">
            <span className={makeStyle("review")}>In review</span>
          </div>
        </li>
        <li className="flex items-center flex justify-between">
          <div className="flex gap-8">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Create a user flow of social application design
            </span>
          </div>
          <div className="px-6 py-4 whitespace-nowrap">
            <span className={makeStyle("")}>On going</span>
          </div>
        </li>
        <li className="flex items-center flex justify-between">
          <div className="flex gap-8">
            <svg
              className="flex-shrink-0 w-4 h-4 text-orange-700 dark:text-orange-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Create a user flow of social application design
            </span>
          </div>
          <div className="px-6 py-4 whitespace-nowrap">
            <span className={makeStyle("Approved")}>Approved</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tasks;
