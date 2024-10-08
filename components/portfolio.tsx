//path: official-website\components\portfolio.tsx

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import "./styles/explore-btn.scss";

const content = [
  {
    title: "Carhesy",
    description: (
      <div>
        <div className=" w-full">
          Experience worry-free Driving! <br />
          Our skilled auto maintenance services guarantee peak performance for
          your vehicle, ensuring you hit the road with confidence.
        </div>
        <div>
          <a
            href="https://carhesy-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button ml-[135px] mt-8">
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full md:flex items-center justify-center text-white hidden ">
        <Image src="/images/carhesy.png" alt="" width={450} height={450} />
      </div>
    ),
  },
  {
    title: "Total Scope Marketing Solutions",
    description: (
      <div>
        <div className=" w-full">
          A Fintech Marketing Consulting Firm that help Fintechs and Financial
          Services Organizations across all markets achieve their strategic
          objectives. Meticulously analyzing your business strategy, market
          dynamics, industry landscape, and competitive context. This enables us
          to craft a bespoke marketing strategy aligned with your core business
          objectives.
        </div>
        <div>
          <a
            href="https://www.tsmsconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button ml-[135px] mt-8">
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src="/images/tsms.avif" alt="" width={450} height={450} />
      </div>
    ),
  },
  {
    title: "Nigerian Fintech Festival",
    description: (
      <div>
        <div className=" w-full">
          Nigeria Fintech Festival is an all-inclusive festival for players
          within the Fintech Industry. It is a unique platform for the leading
          and emerging drivers of Nigeria&apos;s fintech industry to converge,
          connect, collaborate and unwind. Leveraging a perfectly blended fusion
          of finance, technology and performing arts, Nigeria Fintech Festival
          is driving collaboration and innovation in Nigeria&apos;s fintech
          industry with insightful conversations and entertaining performances.
        </div>
        <div>
          <a
            href="https://www.nigerianfintechfestival.tsmsconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button ml-[130px] mt-8">
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src="/images/nff.avif" alt="" width={450} height={450} />
      </div>
    ),
  },
  {
    title: "Youths For Fintech",
    description: (
      <div>
        <div className=" w-full">
          Empowering young individuals to shape the future of finance and
          technology through Youths for Fintech, organizing engaging workshops
          and seminars led by industry experts. These sessions cover a wide
          range of fintech topics, including blockchain technology, digital
          payments, artificial intelligence, cybersecurity, and more.
        </div>
        <div>
          <a
            href="https://www.youthsforfintech.tsmsconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button ml-[130px] mt-8">
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src="/images/yff.avif" alt="" width={450} height={450} />
      </div>
    ),
  },
  {
    title: "Rock-Paper-Scissors game",
    description: (
      <div>
        <div className=" w-full">
          The familiar game of Rock, Paper, Scissors is played like this: at the
          same time, two players display one of three symbols: a rock, paper, or
          scissors. A rock beats scissors, scissors beat paper by cutting it,
          and paper beats rock by covering it.
        </div>
        <div>
          <a
            href="https://rock-paper-scissors-next-js-chi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button ml-[130px] mt-8">
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
  <Image
    src="/images/RPS.avif"
    alt=""
    width={500} 
    height={450} 
    className="w-full h-full object-cover" 
  />
</div>

    ),
  },
];

export function PortfilioContent() {
  return (
    <div className="p-10 ">
      <StickyScroll content={content} />
    </div>
  );
}
