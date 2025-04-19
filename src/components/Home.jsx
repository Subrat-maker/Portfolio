import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { DiDotnet } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Hi, My name is Subrat</span>
            <div className= "flex space-x-1 text-2xl md:text-3xl">
            <h1>& I'm a</h1>
            {/* <span className="text-red-700 font-bold">Frontend Developer</span> */}
            <ReactTyped
          className="text-red-600 font-bold"
          strings={["DOT NET Developer","Frontend Developer", "Web Developer", "Programmer", "Video Editor"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I am a passionate frontend developer with a robust command of the MERN stack, dedicated to creating seamless and intuitive user experiences. With expertise in React, and Node.js, I excel at developing dynamic and responsive web applications that meet the highest standards of performance and usability. My background in frontend development allows me to craft visually appealing interfaces, while my proficiency in the MERN stack ensures that my solutions are both efficient and scalable. Committed to continuous learning and innovation, I strive to stay at the forefront of web development technologies, delivering exceptional results in every project.
            </p>
            <br />
            {/* social media icons */}

        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="space-y-2">
              <h1 className="font-bold ">Available on</h1>
              <ul className="flex space-x-5">
              <a href="https://www.facebook.com/subratkumarparida.dinesh" target="_blank">
              <li><FaFacebookF className="text-2xl cursor-pointer hover:scale-110 duration-200"/></li>
              </a>
              <a href="https://www.linkedin.com/in/subrat-kumar-parida-871553237" target="_blank">
              <li><FaLinkedinIn className="text-2xl cursor-pointer hover:scale-110 duration-200"/></li>
              </a>
              <a href="https://github.com/Subrat-maker" target="_blank">
              <li><FiGithub className="text-2xl cursor-pointer hover:scale-110 duration-200"/></li>
              </a>
              <a href="mailto:subratparida644@gmail.com">
              <li><SiGmail className="text-2xl cursor-pointer hover:scale-110 duration-200"/></li>
              </a>
              </ul>
            </div>
            <div className="space-y-2">
            <h1 className="font-bold ">Currently working on</h1>
              <ul className="flex space-x-5">
              <li><DiDotnet  className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]"/></li>
              <li><TbBrandCSharp className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]"/></li>
              <li>< SiReact className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]"/></li>
              <li><IoLogoNodejs className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]"/></li>
              </ul>
            </div>
        </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-16 mt-8 order-1">
          <img src="bg.png" className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
          </div>
        </div>
      </div> 
      <hr />
    </>
  )
}

export default Home;
