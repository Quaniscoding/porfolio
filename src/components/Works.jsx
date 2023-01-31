import React from "react";
import code from "../assets/code2.png";
import data from "./dataWork.js";
export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>
        <div className="flex gap-4">
          {data.map((item) => {
            return (
              <div
                style={{ backgroundImage: `url(${code})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                  <span className=" text-lg font-bold text-white tracking-wider">
                    {item.nameProject}
                  </span>
                  <p className="text-center">
                    Technology use: {item.technology}
                  </p>
                  <p className="text-center">Description: {item.des}</p>
                  <div className="pt-8 text-center">
                    <a href={item.vercel} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={item.github} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
