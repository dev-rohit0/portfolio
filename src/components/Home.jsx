import React from "react";
import Rohit from "../assets/rohit.png";
import { FaDev } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:pt-20 pt-4 px-8 space-y-4 sm:flex-row sm:justify-center sm:space-x-16">
      {/* <div className=" shadow-xl rounded-full flex justify-center items-center ">
        
      </div> */}
      <div className="flex flex-col justify-center items-center">
        <img
          src={Rohit}
          alt="rohit-image"
          className=" w-2/3 md:w-[400px] sm:w-[300px] shadow-xl rounded-full cursor-pointer hover:scale-105 duration-200 delay-150  "
        />
        <div className="p-2 sm:p-8">

        <p className=" px-1 rounded sm:text-5xl text-3xl font-mynerve"> React Developer</p>
        </div>
      </div>
      <div className="max-w-[500px]">
        <p className="text-2xl font-space">
          <span className=" underline">
            {" "}
            <mark className="bg-pink-300 px-1 rounded "> Crafting</mark>
          </span>{" "}
          <span className=" text-right tracking-tighter break-normal">
            " interactive experiences with React.js – where code meets
            creativity and user delight takes center stage."
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center text-4xl sm:text-5xl space-x-5 ">
        <a href="https://github.com/dev-rohit0" target={"_blank"} className="">
          <AiFillGithub />
        </a>
        <a
          href="https://linkedin.com/in/rohit-sharma16"
          target={"_blank"}
          className=""
        >
          <AiFillLinkedin color="#0A66C2" />
        </a>
        <a
          href="https://twitter.com/rohitcodein"
          target={"_blank"}
          className=""
        >
          <AiOutlineTwitter color="#1DA1F2" />
        </a>
        <a href="https://dev.to/devrohit0" target={"_blank"} className="">
          <FaDev />
        </a>
      </div>
    </div>
  );
};

export default Home;
