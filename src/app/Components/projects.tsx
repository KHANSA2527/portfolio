// import Image from "next/image";

// const project = [
//   {
//     title: "Guess the Number Game",
//     description: "A CLI tool where users guess a number between 1 and 50.",
//     techStack: ["Node.js", "JavaScript", "NPM"],
//     image: "/images/guess-the-number-game.png",
//     repoUrl: "https://github.com/yourusername/guess-the-number-game",
//   },
//   {
//     title: "Patient Record Management System",
//     description: "A centralized system for storing patient treatment records for easy access and management.",
//     techStack: ["React", "Node.js", "MongoDB"],
//     image: "/images/patient-record-management.png",
//     repoUrl: "https://github.com/yourusername/patient-record-system",
//   },
//   // Add more projects here
// ];
const ProjectsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8" id="project">
    <h1 className="text-4xl 2xl:text-[30px] text-black font-bold mt-8 mb-4 text-center">
      My Projects
    </h1>
  
    {/* Responsive Grid Layout for Projects */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mx-auto">
      
      {/* Project 1: Calculator */}
      <div className="h-auto bg-gray-100 p-6 shadow-md rounded-lg flex flex-col justify-between">
        <h2 className="text-xl font-semibold">Calculator</h2>
        <p className="text-gray-500 text-sm">A simple calculator to perform basic arithmetic operations.</p>
        <button className="text-blue-600 mt-4">View Project</button>
      </div>
  
      {/* Project 2: Guess the Number */}
      <div className="h-auto bg-gray-100 p-6 shadow-md rounded-lg flex flex-col justify-between">
        <h2 className="text-xl font-semibold">Guess the Number</h2>
        <p className="text-gray-500 text-sm">A fun game where you guess a number between 1 and 50 with hints.</p>
        <button className="text-blue-600 mt-4">View Project</button>
      </div>
  
      {/* Project 3: ATM System */}
      <div className="h-auto bg-gray-100 p-6 shadow-md rounded-lg flex flex-col justify-between">
        <h2 className="text-xl font-semibold">ATM System</h2>
        <p className="text-gray-500 text-sm">A basic ATM simulation system allowing withdrawals and deposits.</p>
        <button className="text-blue-600 mt-4">View Project</button>
      </div>
      
    </div>
  </div>
  

  );
};

export default ProjectsSection;
