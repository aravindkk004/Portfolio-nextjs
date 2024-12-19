"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skill from "./Skill";
import { skills } from "@/utils/skills";
import Gradient from "../Gradient";

const Skills = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="skills" className="relative bg-secondary w-full">
      <Gradient />
        <div className="md:flex flex-col items-center justify-center pt-[160px] pb-[120px] px-[40px] w-full">
          <h2 className="text-white text-4xl font-bold text-center mt-[40px] mb-[70px]">Skills</h2>
          <div className="w-[100%] h-[300px]">
            <Slider {...settings} className="flex justify-center">
              {skills.map((skill, index) => (
                <Skill imgs={skill.img} lvl={skill.lvl} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
