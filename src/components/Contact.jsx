import React from "react";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Send me a message</p>
        </div>
        <div className="flex">
          <FaPhone style={{ color: "white" }} size="30" />
          <span className="text-xl text-white pl-3"> +84888498092</span>
        </div>
        <div className="flex pt-3">
          <HiOutlineMail style={{ color: "white" }} size="30" />
          <span className="text-xl text-white pl-3">
            vq.2509.2003@gmail.com
          </span>
        </div>
        <div className="flex pt-3">
          <FaLocationArrow style={{ color: "white" }} size="30" />
          <span className="text-xl text-white pl-3">
            9/1 Dang Thuy Tram, Binh Thanh, Ho Chi Minh.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
