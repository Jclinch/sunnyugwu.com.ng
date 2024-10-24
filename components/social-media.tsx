import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import Head from "next/head";


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
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
                 h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5184105,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
    </Head>
    <div className="flex items-center justify-center h-[35rem] w-full ">
      <FloatingDock
        mobileClassName="translate-y-20" //remove for production
        items={links}
             />
    </div>
    </>
  );
}
