import React from "react";
import "./styles/service-card.css";
import { IconBrandGit, IconBrandNextjs, IconStackFront } from "@tabler/icons-react";
// import SectionTitleDesign from "./sectionTitleDesign";

const ServiceTab = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-[#05081c] " style={{
    // background: 'linear-gradient(135deg, #12172b 30%, #0e1326 100%)',
    padding: '50px 0'
}}>
       
        <div className="flex flex-row gap-10">
          <div className="service-card ">
            <div className="service-card-bg"></div>
            <div className="service-card-blob"></div>
            <div className="z-50 ml-[-70px] ">
              <IconStackFront stroke={1} size={100} color="#05081c"  className=" mt-[10px]"/>
            </div>
            <div className="title font-extrabold text-xl">
            Frontend & Backend
            </div>
            <div className="description  font-semibold text-xs">HTML, CSS, JavaScript, Typescript PostgreSQL</div>
            <div className="details font-mono text-sm mt-[20px]">Proficient in building responsive and accessible softwares and web interfaces using modern HTML, SCSS, JavaScript, Typescript and Database backend techniques.</div>
          </div>

          <div className="service-card ">
            <div className="service-card-bg"></div>
            <div className="service-card-blob"></div>
            <div className="z-50 ml-[-70px] ">
              <IconBrandNextjs stroke={1} size={100} color="#05081c"  className=" mt-[10px]"/>
            </div>
            <div className="title font-extrabold text-xl">Frameworks</div>
            <div className="description font-semibold text-xs">Next.js, React </div>
            <div className="details font-mono text-sm mt-[20px]">Experienced in building complex web applications using popular JavaScript frameworks and libraries like React and Next.js.</div>
          </div>

          <div className="service-card ">
            <div className="service-card-bg"></div>
            <div className="service-card-blob"></div>
            <div className="z-50 ml-[-70px] ">
              <IconBrandGit stroke={1} size={100} color="#05081c"  className=" mt-[10px]"/>
            </div>
            <div className="title font-extrabold text-xl">Tools</div>
            <div className="description font-semibold text-xs">Git, Tailwind CSS</div>
            <div className="details font-mono text-sm mt-[20px]">Proficient in using various development tools and technologies to streamline the development process and create visually appealing designs.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTab;
