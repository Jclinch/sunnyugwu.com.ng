// path: official-website\components\tab-site.tsx

"use client";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import {
  IconHome,
  IconSettingsCode,
  IconBriefcase,
  IconMail,
  IconBrandWechat,
} from "@tabler/icons-react";
import Image from "next/image";
import "./styles/nav-buttons.scss";
import ResumeButtonCopy from "./ui/resume-button-copy";
import ContactButton from "./ui/contact-btn";
import ServiceTab from "./services-tab";
import { PortfilioContent } from "./portfolio";
import ContactForm from "./contact-form";
import { SocialMedia } from "./social-media";
import { Tools } from "./tools";

export function TabSite() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      title: "Home",
      value: "home",
      content: <HomeContent onTabClick={handleTabClick} />, // Pass the function as a prop
      icon: <IconHome stroke={1} />,
    },
    {
      title: "Services",
      value: "services",
      content: <ServiceContent title="Services" />,
      icon: <IconSettingsCode stroke={1} />,
    },
    {
      title: "Portfolio",
      value: "portfolio",
      content: <PortfolioContent />,
      icon: <IconBriefcase stroke={1} />,
    },
    {
      title: "Contact",
      value: "contact",
      content: <ContactContent title="Contact Me" />,
      icon: <IconMail stroke={1} />,
    },
    {
      title: "Social media",
      value: "social-media",
      content: <SocialMediaContent title="Get in touch" />,

      icon: <IconBrandWechat stroke={1} />,
    },
  ];

  return (
    <div className="h-screen flex relative">
      {/* Left side navigation */}
      <nav className="flex items-center justify-center nav-container">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`cta nav-item ${tab.value}-btn ${
              activeTab === tab.value ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </nav>

      {/* Main content */}
      <div className="flex-grow overflow-hidden relative">
        <BackgroundGradientAnimation>
          <HeroHighlight containerClassName="absolute inset-0 z-10">
            {/* Hero Content */}
            <div className="relative z-20 flex items-center justify-center">
              {tabs
                .filter((tab) => tab.value === activeTab)
                .map((tab) => (
                  <div
                    key={tab.value}
                    className="w-full h-screen flex items-center justify-center text-xl md:text-4xl font-bold text-white"
                  >
                    {tab.content}
                  </div>
                ))}
            </div>
          </HeroHighlight>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}

// HomeContent component
const HomeContent = ({ onTabClick }: { onTabClick: (tab: string) => void }) => {
  return (
    <div className="flex flex-row gap-[2rem]">
      <div className="ml-[-5rem] mt-[-3rem]">
        <Image src="/images/sunnyUgwu.png" alt="" width={400} height={400} />
      </div>
      <div className="flex flex-col w-[600px] mt-[50px]">
        <h1 className="text-4xl font-bold">
          -- Hello, I&apos;m{" "}
          <Highlight className="text-[orangered] dark:text-white">
            SUNNY UGWU
          </Highlight>
        </h1>
        <h2 className="text-5xl mt-2">A Software Developer</h2>
        <p className="mt-6 text-base">
          I&apos;m a developer that is well-versed in both front and back end
          technologies. Having skills in HTML/CSS/JS, React/Next.js frontend
          stack, Python/Node.js and PostgreSQL backend stack. Develop,
          maintaining and integrating Restful APIs for Web applications and also
          having experience in managing database and an exceptional
          problem-solving skills with a spirit of collegiality and growth within
          the profession.
        </p>
        <div className="mt-6 ml-[-160px] flex flex-row gap-[6rem] justify-center">
          <ResumeButtonCopy />
          <ContactButton onClick={() => onTabClick("contact")} />
        </div>
      </div>
    </div>
  );
};

const ServiceContent = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#0F172ACC] p-[40rem]">
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-[-40px] text-[orangered]">
          {title}
        </h1>
        {/* <h2 className="text-2xl">Content Header</h2> */}
        <div className="mt-4 ">
          <ServiceTab />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
const PortfolioContent = () => {
  return (
    <div className="text-center">
      {/* <h1 className="text-5xl font-bold mt-[100px] text-[white] ">{title}</h1> */}
      <div className="mt-4">
        <PortfilioContent />
      </div>
      <div className="mt-6"></div>
    </div>
  );
};
const ContactContent = ({ title }: { title: string }) => {
  return (
    <div className=" bg-[#0F172ACC] p-[40rem]">
      <h1 className="text-5xl font-bold text-center mt-[-20px] text-[orangered]">
        {title}
      </h1>
      <div className="mt-[38px]">
        <ContactForm />
      </div>
    </div>
  );
};
// const SocialMediaContent = ({ title }: { title: string }) => {
//   return (
//     <div className=" bg-[#0F172ACC] p-[40rem]">
//       <div className="text-5xl font-bold text-center  relative text-[orangered]  mt-[100px]">
//         {title}
//       </div>
//       <div className="text-2xl">
//         <SocialMedia />
//       </div>
//       <p className="mt-4">This is the content body.</p>
//       <div className="mt-6">
//         <button className="btn">Button</button>
//       </div>
//     </div>
//   );
// };

const SocialMediaContent = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#0F172ACC] p-[40rem]">
      <div className="text-5xl font-bold text-center sticky z-10  text-[orangered] mt-[20px]">
        {title}
      </div>
      <div className="text-2xl mt-[-70px]">
        <SocialMedia />
      </div>
      <div className="mt-[-100px]">
        <Tools />
      </div>
      
    </div>
  );
};
