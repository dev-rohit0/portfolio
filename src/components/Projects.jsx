import React from "react";
import WeatherSS from "../assets/weatherapp-ss.png";
const Projects = () => {
  return (
    <div className="bg-[#264653]">
        <div className="text-3xl sm:text-5xl md:text-6xl font-space text-center pt-8 text-white underline">
            MY PROJECTS
        </div>
      <div className="md:grid md:grid-cols-3 md:px-24  md:gap-x-8 md:gap-y-4 flex flex-col justify-center items-center sm:grid-cols-2 sm:grid sm:gap-x-8 sm:gap-y-4 sm:px-8 px-8">
        <div className="bg-slate-100 my-8 rounded-lg">
          <img
            src="https://github.com/dev-rohit0/tip-calculator-app/raw/main/design/desktop-design-completed.jpg"
            alt="tip-calculator"
            className="rounded-lg "
          />
          <h2 className="mx-2 my-2 font-semibold cursor-pointer">
            Tip Calculator
          </h2>
          <div className="my-2 mx-2 flex justify-between items-center">
            <a
              href="https://github.com/dev-rohit0/tip-calculator-app"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Code
              </button>
            </a>
            <a
              href="https://front-end-mentor-tip-calculator.netlify.app/"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Live
              </button>
            </a>
          </div>
        </div>
        <div className="bg-slate-100 my-8 rounded-lg">
          <img
            src="https://github.com/dev-rohit0/loopstudios-landing-page/raw/main/design/desktop-preview.jpg"
            alt="LoopStudios Landing Page "
            className="rounded-lg "
          />
          <h2 className="mx-2 my-2 font-semibold cursor-pointer">
            LoopStudios Landing Page
          </h2>
          <div className="my-2 mx-2 flex justify-between items-center">
            <a
              href="https://github.com/dev-rohit0/loopstudios-landing-page"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Code
              </button>
            </a>
            <a
              href="https://frontend-mentor-loopstudios.netlify.app/"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Live
              </button>
            </a>
          </div>
        </div>
        <div className="bg-slate-100 my-8 rounded-lg">
          <img
            src="https://github.com/dev-rohit0/advice-generator-app-main/raw/main/design/desktop-preview.jpg"
            alt="weather-app"
            className="rounded-lg h-full "
          />

          <h2 className="mx-2 my-2 font-semibold cursor-pointer">
            Advice Generator App
          </h2>
          <div className="my-2 mx-2 flex justify-between items-center">
            <a
              href="https://github.com/dev-rohit0/advice-generator-app-main"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Code
              </button>
            </a>
            <a href="hhtps://get-random-advices.netlify.app/" target={"_blank"}>
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Live
              </button>
            </a>
          </div>
        </div>
        <div className="bg-slate-100 my-8 rounded-lg">
          <img
            src="https://github.com/AjeaSmith/easy-bank-landing-page/raw/master/design/desktop-preview.jpg"
            alt="Easy Bank Landing Page"
            className="rounded-lg object-cover object-center  "
          />

          <h2 className="mx-2 my-2 font-semibold cursor-pointer">
            Easy Bank Landing Page
          </h2>
          <div className="my-2 mx-2 flex justify-between items-center">
            <a
              href="https://github.com/dev-rohit0/easybank-landing-page-frontend-mentor"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Code
              </button>
            </a>
            <a
              href="https://rohit-easybank-landing-page.netlify.app/"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
