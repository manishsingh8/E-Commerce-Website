import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/*  */}
      <div className="bg-[#033f4a]  md:h-[200px] md:flex justify-around items-center">
        <div>
          <h1 className="text-[#acbfc2]">
            Making the world a better place through constructing elegant
            hierarchies.
          </h1>
          <div className="flex mt-[35px]">
            <BsFacebook className="mx-3 text-2xl cursor-pointer hover:text-[#3b5998]" />
            <BsTwitter className="mx-3 text-2xl cursor-pointer hover:text-[#00acee]" />
            <BsInstagram className="mx-3 text-2xl cursor-pointer hover:text-[#cf1f77]" />
            <BsGithub className="mx-3 text-2xl cursor-pointer hover:text-[#171515]" />
            <BsYoutube className="mx-3 text-2xl cursor-pointer hover:text-[#db2c2c]" />
          </div>
        </div>
        <div className=" text-white py-5 flex flex-col mt-4 ">
          <h1 className="font-bold ">Solution</h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Marketing
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Analytics
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Commerce
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Insights
          </h1>
        </div>
        <div className=" text-white py-5 flex flex-col mt-4 ">
          <h1 className="font-bold ">Support</h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Pricing
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Documentation
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Guides
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            API Status
          </h1>
        </div>
        <div className=" text-white py-5 flex flex-col mt-4 ">
          <h1 className="font-bold ">Company</h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            About
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Blog
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Jobs
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Press
          </h1>
        </div>
        <div className=" text-white py-5 flex flex-col mt-4 ">
          <h1 className="font-bold ">Legal</h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Claim
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Privacy
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Terms
          </h1>
          <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1">
            Partners
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
