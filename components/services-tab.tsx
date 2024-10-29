// path: my-official-website\components\services-tab.tsx
import React, { useState } from "react";
import "./styles/service-card.scss";
import {
  IconBrandGit,
  IconBrandNextjs,
  IconStackFront,
} from "@tabler/icons-react";

const ServiceTab = () => {
  const [selectedService, setSelectedService] = useState(0); // State for mobile view

  const services = [
    {
      icon: <IconBrandGit stroke={1} size={100} color="#05081c" />,
      title: "Development",
      description: "Software, Website, Application",
      details:
        "Proficient in various development such as software development, website development, web and mobile apps development.",
    },
    {
      icon: <IconStackFront stroke={1} size={100} color="#05081c" />,
      title: "Frontend & Backend",
      description: "HTML, CSS, JavaScript, Typescript, PostgreSQL",
      details:
        "Proficient in building responsive and accessible software and web interfaces using modern HTML, SCSS, JavaScript, Typescript and Database backend techniques.",
    },
    {
      icon: <IconBrandNextjs stroke={1} size={100} color="#05081c" />,
      title: "Frameworks and Tools",
      description: "Next.js, React, Git, Tailwind CSS",
      details:
        "Experienced in using React, Next.js and using various development tools and technologies to streamline the development process and create visually appealing designs.",
    },
  ];

  return (
    <>
   
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        {/* Toggle buttons for mobile view */}
        <div className="flex justify-center gap-2 md:hidden mb-4 px-2 ">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className={`toggle-button ${
                selectedService === index ? "active" : ""
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Mobile View: Show only the selected service */}
        <div className="md:hidden">
          <div className="service-card">
            <div className="service-card-bg"></div>
            <div className="service-card-blob"></div>
            <div className="z-50 ml-[-70px] ">
              {services[selectedService].icon}
            </div>
            <div className="title font-extrabold text-xl">
              {services[selectedService].title}
            </div>
            <div className="description font-semibold text-xs">
              {services[selectedService].description}
            </div>
            <div className="details font-mono text-sm mt-[20px]">
              {services[selectedService].details}
            </div>
          </div>
        </div>

        {/* Desktop View: Show all services */}
        <div className="hidden md:flex flex-row gap-10">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-bg"></div>
              <div className="service-card-blob"></div>
              <div className="z-50 ml-[-70px] ">
                {service.icon}
              </div>
              <div className="title font-extrabold text-xl">
                {service.title}
              </div>
              <div className="description font-semibold text-xs">
                {service.description}
              </div>
              <div className="details font-mono text-sm mt-[20px]">
                {service.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceTab;
