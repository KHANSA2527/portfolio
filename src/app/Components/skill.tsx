import Image from "next/image";
import React from "react";

const skill = () => {
  return (
    <>
      <div className="w-full h-auto mt-2 mb-2 px-4 flex flex-col gap-y-4  gap-3 justify-start items-center bg-white" id="skill">
        <h1 className="text-4xl 2xl:text-[30px] text-black font-bold mb-4 text-center p-8">
          My Skills
        </h1>

        <div
          className="w-full lg:w-[88%] xl:w-[66%] 2xl:w-[50%] h-auto grid grid-cols-4 md:grid-cols-8 
            lg:grid-cols-8 justify-center items-center"
        >
          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/javascript-gray.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              alt="react-color"
              src="/images/javascript-color.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/react-gray.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />

            {/* Color Image - hidden initially, visible on hover */}
            <Image
              alt="react-color"
              src="/images/react-color.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/nextjs-gray.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />

            {/* Color Image - hidden initially, visible on hover */}
            <Image
              alt="react-color"
              src="/images/next.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/tailwindcss-gray.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />

            {/* Color Image - hidden initially, visible on hover */}
            <Image
              alt="react-color"
              src="/images/tailwind.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/node-grey.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />

            {/* Color Image - hidden initially, visible on hover */}
            <Image
              alt="react-color"
              src="/images/node-color.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/expres-grey.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />

            {/* Color Image - hidden initially, visible on hover */}
            <Image
              alt="react-color"
              src="/images/expressjs.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/mongodb-grey.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />

            {/* Color Image - hidden initially, visible on hover */}
            <Image
              alt="react-color"
              src="/images/mongodb.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="relative h-[80px] w-[80px] flip-vertical-rounded-[20px] transform transition-all duration-300 flex items-center justify-center bg-[#e7e7e7]/[0.2] p-6 group">
            {/* Gray Image - initially visible */}
            <Image
              alt="react-gray"
              src="/images/postgress-gray.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />

            {/* Color Image - hidden initially, visible on hover */}
            <Image
              alt="react-color"
              src="/images/postgres.svg"
              width={80}
              height={80}
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default skill;
