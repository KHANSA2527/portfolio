import Link from "next/link";


const ProjectsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8" id="project">
      <h1 className="text-4xl 2xl:text-[30px] text-black font-bold mt-8 mb-4 text-center">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mx-auto">
        <div className="h-auto bg-gray-100 p-6 shadow-md rounded-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold">Calculator</h2>
          <p className="text-black text-sm">
            A simple calculator to perform basic arithmetic operations.
          </p>
          <Link href="https://www.npmjs.com/package/@khansakhalid/calculator" target="_blank">
            <span className="text-blue-600 mt-4 mx-auto block text-left">
              View Project
            </span>
          </Link>
        </div>

        <div className="h-auto bg-gray-100 p-6 shadow-md rounded-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold">Guess the Number</h2>
          <p className="text-black text-sm">
            A fun game where you guess a number between 1 and 50 with hints.
          </p>
          <Link href="https://www.npmjs.com/package/@khansakhalid/guess-number" target="_blank">
            <span className="text-blue-600 mt-4 mx-auto block">
              View Project
            </span>
          </Link>
        </div> 
        <div className="h-auto bg-gray-100 p-6 shadow-md rounded-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold">ATM System</h2>
          <p className="text-black text-sm">
            A basic ATM simulation system allowing withdrawals and deposits.
          </p>
          <Link href="https://www.npmjs.com/package/@khansakhalid/atmsystem" target="_blank">
            <span className="text-blue-600 mt-4 mx-auto block">
              View Project
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
