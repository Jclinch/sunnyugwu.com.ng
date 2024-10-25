import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
// import Head from "next/head";
// import Script from "next/script";


export function SocialMedia() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-100 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/sunny_jclinch/",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-100 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sunnyugwu/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-100 dark:text-neutral-300" />
      ),
      href: "https://www.github.com/jclinch",
    },
    
    

    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-100 dark:text-neutral-300" />
      ),
      href: "https://x.com/JclinchSunny",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-100 dark:text-neutral-300" />
      ),
      href: "https://wa.me/+2348102811912",
          },
  ];
  return (
    <>
    
    <div className="flex items-center justify-center h-[35rem] w-full ">
      <FloatingDock
        mobileClassName="translate-y-20" //remove for production
        items={links}
             />
    </div>
    </>
  );
}
