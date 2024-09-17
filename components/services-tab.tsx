import React from "react";
import "./styles/service-card.scss";
import {
  IconBrandGit,
  IconBrandNextjs,
  IconStackFront,
} from "@tabler/icons-react";
// import SectionTitleDesign from "./sectionTitleDesign";

const ServiceTab = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-4 text-[#05081c] "
        style={{
          padding: "50px 0",
        }}
      >
        <div className="flex flex-row gap-10">
          <div className="service-card ">
            <div className="service-card-bg"></div>
            <div className="service-card-blob"></div>
            <div className="z-50 ml-[-70px] ">
              <IconBrandGit
                stroke={1}
                size={100}
                color="#05081c"
                className=" mt-[10px]"
              />
            </div>
            <div className="title font-extrabold text-xl">Development</div>
            <div className="description font-semibold text-xs">
              Software, Web, App Development
            </div>
            <div className="details font-mono text-sm mt-[20px]">
              Proficient in various development such as software development,
              website development, web and mobile apps development
            </div>
          </div>

          <div className="service-card ">
            <div className="service-card-bg"></div>
            <div className="service-card-blob"></div>
            <div className="z-50 ml-[-70px] ">
              <IconStackFront
                stroke={1}
                size={100}
                color="#05081c"
                className=" mt-[10px]"
              />
            </div>
            <div className="title font-extrabold text-xl">
              Frontend & Backend
            </div>
            <div className="description  font-semibold text-xs">
              HTML, CSS, JavaScript, Typescript, PostgreSQL
            </div>
            <div className="details font-mono text-sm mt-[20px]">
              Proficient in building responsive and accessible softwares and web
              interfaces using modern HTML, SCSS, JavaScript, Typescript and
              Database backend techniques.
            </div>
          </div>

          <div className="service-card ">
            <div className="service-card-bg"></div>
            <div className="service-card-blob"></div>
            <div className="z-50 ml-[-70px] ">
              <IconBrandNextjs
                stroke={1}
                size={100}
                color="#05081c"
                className=" mt-[10px]"
              />
            </div>
            <div className="title font-extrabold text-xl">
              Frameworks and Tools
            </div>
            <div className="description font-semibold text-xs">
              Next.js, React, Git, Tailwind CSS
            </div>
            <div className="details font-mono text-sm mt-[20px]">
              Experienced in using React, Next.js and using various development
              tools and technologies to streamline the development process and
              create visually appealing designs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTab;
