"use client";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import { Tilt } from "react-tilt";
import { services } from "@/utils/services";
import Gradient from "./Gradient";

export const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[250px]">
    <div
      className="w-full p-[1px] rounded-[20px] shadow-card"
      style={{
        background: "#00cea8",
        background: "linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
        background:
          "-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative bg-secondary md:pt-[130px] md:pb-[140px] pt-[100px] pb-[50px] md:px-[40px] px-[20px]"
      >
        <Gradient />
        <div className="md:flex md:flex-row flex-col items-center justify-between gap-10">
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <Tilt options={{ max: 25, scale: 1.05, speed: 300 }}>
              <img
                src="./images/about1.png"
                className="md:h-[400px] h-[300px] mb-[50px]"
              />
            </Tilt>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl text-white font-bold">Get to know me</h2>
            <p className="text-white text-lg my-4">
              I’m Aravind K K, a passionate software developer with a strong
              focus on building scalable and efficient web applications using
              Next.js and Tailwind CSS. My journey in software development is
              driven by a continuous quest for learning, problem-solving, and
              creating impactful solutions. With a solid foundation in front-end
              and back-end technologies, I aim to deliver seamless, user-centric
              experiences that solve real-world challenges. My love for coding,
              coupled with a commitment to staying updated on emerging
              technologies, ensures that I bring creativity and precision to
              every project I undertake. I thrive in collaborative environments
              and am dedicated to contributing to meaningful software solutions
              that make a difference.
            </p>
            <Link href="/Resume_Aravind_kk.pdf" target="_blank" download>
              <p className="text-white flex items-center gap-3 border border-gray-800 px-5 py-2 w-fit rounded-lg hover:bg-gray-800 transition duration-300">
                Download Resume
                <MdOutlineFileDownload size={25} />
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex justify-center z-[30] flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
