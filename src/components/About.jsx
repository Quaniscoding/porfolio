import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-left text-4xl font-bold">
              <p>
                Hi. I'm Ngô Văn Quân, nice to meet you. Please take a looks
                around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Hi, I'm a fresher in React JS. I am very proud to learn and work
                with React, a powerful and popular software engineering in the
                field of user interface building. I am confident that I will
                work well with React and will help me become a professional
                front end developer in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
