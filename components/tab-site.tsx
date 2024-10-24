// path: my-official-website\components\tab-site.tsx

"use client";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import {
  IconHome,
  IconSettingsCode,
  IconBriefcase,
  IconMail,
  IconBrandWechat,
  IconMenu2,
  IconX,
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
// import { Tools } from "./tools";

export function TabSite() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false); // Close menu on tab click
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const tabs = [
    {
      title: "Home",
      value: "home",
      content: <HomeContent onTabClick={handleTabClick} />,
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
      title: "Social Media",
      value: "social-media",
      content: <SocialMediaContent title="Get in Touch" />,
      icon: <IconBrandWechat stroke={1} />,
    },
  ];

  return (
    <div className="h-full md:h-screen flex flex-col md:flex-row relative">
      {/* Hamburger menu for mobile */}
      <div className="md:hidden absolute top-4 left-4 z-20">
        <button
          className="p-2 text-white bg-gray-800 rounded"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Side navigation for mobile */}
      <nav
        ref={navRef}
        className={`fixed top-0 pt-[100px] left-0 z-30 h-screen bg-gray-900 text-white transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        style={{ width: "200px" }}
      >
        <button
          className="absolute top-4 right-4 p-2 text-white"
          onClick={toggleMobileMenu}
        >
          <IconX size={24} />
        </button>
        <ul className="flex flex-col items-start p-4">
          {tabs.map((tab) => (
            <li key={tab.value} className="my-2 w-full">
              <button
                className={`cta nav-item ${tab.value}-btn w-full text-left ${
                  activeTab === tab.value ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab.value)}
              >
                {tab.icon}
                <span className="ml-2">{tab.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Left side navigation for desktop */}
      <nav className="hidden md:flex md:flex-col items-center justify-center md:w-auto w-auto md:h-full h-auto nav-container fixed left-0 md:static">
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
                    className="w-screen md:w-full h-screen md:h-screen flex items-center justify-center text-xl md:text-4xl font-bold text-white"
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
    <div className="flex flex-row gap-[2rem] ">
      <div className="ml-[-5rem] mt-[-3rem] hidden md:block">
        <Image src="/images/sunnyUgwu.png" alt="" width={400} height={400} />
      </div>
      <div className="flex flex-col w-screen md:w-[600px] md:mt-[50px] px-8 md:px-2 text-sm md:text-4xl ">
        <h1 className="text-lg md:text-4xl font-bold text-center mt-6 md:mt-0">
          -- Hello, I&apos;m{" "}
          <Highlight className="text-[#F0F0F0] dark:text-[#F0F0F0] text-lg md:text-4xl ">
            SUNNY UGWU
          </Highlight>
        </h1>
        <h2 className="text-2xl md:text-5xl mt-2 text-center">A Software Developer</h2>
        <p className="mt-6 text-base md:text-lg text-justify md:text-justify">
          I&apos;m a developer who is well-versed in both front and back end
          technologies. Having skills in HTML, CSS, JS, React/Next.js, Go,
          Node.js and PostgreSQL. I develop, maintain and integrate Restful
          APIs for Web applications and also have experience in managing
          databases and exceptional problem-solving skills with a spirit
          of collegiality and growth within the profession.
        </p>
        <div className="md:mt-6 flex flex-col justify-center md:flex-row md:gap-[6rem] items-center gap-4 w-full md:w-auto">
          <div className="w-[50%] h-[50%] md:w-auto ml-[-210px] md:ml-[-160px] mt-5 md:mt-0">
            <ResumeButtonCopy />
          </div>
          <div className="w-[50%] md:w-auto md:mt-5">
            <ContactButton onClick={() => onTabClick("contact")} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceContent = ({ title }: { title: string }) => {
  return (
        <div className="bg-[#0F172ACC] w-screen h-screen flex items-center justify-center">
          <div className="text-center ">
            <h1 className="text-5xl font-bold  text-[#007BFF]">
              {title}
            </h1>
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
        <div className="text-center ">
          <div className="mt-4">
            <PortfilioContent />
          </div>
          <div className="mt-6"></div>
        </div>
      );
    };

const ContactContent = ({ title }: { title: string }) => {
  return (
        <div className=" bg-[#0F172ACC] w-screen h-screen ">
          <h1 className="text-5xl font-bold text-center mt-[80px] md:mt-[30px] text-[#007BFF]">
            {title}
          </h1>
          <div className="mt-[38px]">
            <ContactForm />
          </div>
        </div>
      );
    };

const SocialMediaContent = ({ title }: { title: string }) => {
  return (
        <div className="bg-[#0F172ACC] w-screen h-screen ">
          <div className="text-5xl font-bold text-center sticky z-10  text-[#007BFF] mt-[80px] md:mt-[30px]">
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



//==================================


