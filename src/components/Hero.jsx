"use client";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Tilt } from "react-tilt";
import Gradient from "./Gradient";

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative bg-secondary">
        <Gradient />
        <div className="md:flex md:flex-row flex-col items-center justify-between md:py-[180px] pt-[130px] pb-[70px] px-[30px]">
          <div className="md:w-1/2 w-full md:pl-[40px]">
            <h2 className="text-white md:text-5xl text-3xl font-extrabold">
              Hi👋, I'm{" "}
            </h2>
            <h2 className="text-[#915EFF] md:text-5xl text-3xl font-extrabold -mt-7">
              <br />
              ARAVIND K K
            </h2>
            <p className="text-white md:text-lg mt-3">
              I’m a software developer focused on building scalable, efficient
              web applications using Next.js and Tailwind CSS. I strive to
              create impactful solutions through continuous learning and
              problem-solving.
            </p>

            <div className="flex items-center gap-5 mt-5">
              <Link
                href="#projects"
                className="text-white border text-sm border-white py-2 px-5 rounded-md"
              >
                View Projects
              </Link>
              <Link
                href="https://github.com/aravindkk004?tab=repositories"
                className="border border-white py-2 px-5 rounded-md cursor-pointer"
              >
                <FaGithub className="text-white" size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/aravind-k-k-b1593024a/"
                className="border border-white py-2 px-5 rounded-md cursor-pointer"
              >
                <FaLinkedin className="text-white" size={20} />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex items-center justify-center z-3">
            <Tilt options={{ max: 25, scale: 1.05, speed: 300 }}>
              <img
                src="./images/dev3.png"
                className="md:h-[400px] h-[300px] md:mt-0 mt-[30px]"
                alt="Developer Image"
              />
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
