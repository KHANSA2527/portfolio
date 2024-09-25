import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center  text-center  bg-white" id="about">
      <h1 className="text-4xl text-black font-bold mb-6">About Me</h1>

      <div className="text-gray-700 max-w-2xl text-lg ">
        <p className="mb-4">
          Hi, <span className="font-bold ">I {`'`}m Khansa Khan</span>, a Full
          Stack Developer with a passion for creating dynamic and efficient Web
          applications & Mobile application. I have a strong background in both
          front-end and back-end technologies, allowing me to build complete,
          scalable, and responsive solutions.
        </p>
      </div>

      <h1 className="text-4xl text-black font-bold mt-8 mb-4">My Experience</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl text-left mx-auto p-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-orange-500 hover:text-white">
          <h3 className="text-2xl font-semibold mb-2">Front-End Development</h3>
          <p className="text-gray-600 group-hover:text-white">
            I specialize in building responsive, user-friendly interfaces with
            HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
            I create designs that work seamlessly across devices and browsers.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-orange-500 hover:text-white">
          <h2 className="text-2xl font-semibold mb-2">Back-End Development</h2>
          <p className="text-gray-600 group-hover:text-white">
            My back-end expertise includes developing RESTful APIs, working with
            databases (SQL, NoSQL), and ensuring security and performance. I
            work primarily with Node.js, Express, and MongoDB.
          </p>
        </div>

      
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-orange-500 hover:text-white">
          <h2 className="text-2xl font-semibold mb-2">DataBase Management</h2>
          <p className="text-gray-600 group-hover:text-white">
            My expertise includes designing and managing databases, ensuring
            data integrity and performance. I work with both SQL and NoSQL
            databases, focusing on scalability and optimization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
