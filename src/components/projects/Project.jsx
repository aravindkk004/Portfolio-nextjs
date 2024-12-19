"use client";
import { Tilt } from "react-tilt";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Project = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-[#151030] backdrop-blur-lg border border-white p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-fill rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={"./images/github.png"}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-gray-400 text-[16px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-between">
        <div className="flex items-center gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px]`}
              style={{ color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <Link href={live} className="flex items-center gap-3 text-white">
          Live Demo
          <MdArrowOutward />
        </Link>
      </div>
    </Tilt>
  );
};

export default Project;
