
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Update active card based on scroll breakpoints
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgba(0, 28, 54, 0.8)", // slate-950
    "rgba(15, 23, 42, 0.8)", // slate-900
    "rgba(0, 0, 0, 0.8)", // black
    "rgba(38, 38, 38, 0.8)", // neutral-900
  ];

  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, rgba(6, 182, 212, 0.8), rgba(16, 185, 129, 0.8))",
      "linear-gradient(to bottom right, rgba(236, 72, 153, 0.8), rgba(102, 126, 234, 0.8))",
      "linear-gradient(to bottom right, rgba(251, 146, 60, 0.8), rgba(234, 179, 8, 0.8))",
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-full h-screen md:h-screen overflow-y-auto md:overflow-y-auto flex flex-col md:flex-row justify-center relative space-y-4 md:space-y-0 md:space-x-16 rounded-md p-5"
      ref={ref}
    >
      {/* Add overflow-y-scroll specifically for mobile */}
      <div className="flex-1 px-4 h-full md:h-auto overflow-y-scroll md:overflow-visible">
        <h1 className="text-4xl md:text-5xl font-bold text-[#007BFF] text-center ">
          Portfolio
        </h1>
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            // left side text container
            className="my-8 md:my-20 text-center md:w-[80%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
          >
            {/* title */}
            <h2 className="text-2xl md:text-4xl font-bold text-[#00BFA6]">
              {item.title}
            </h2>
            {/* description */}
            <div className="text-base md:text-lg text-slate-300 mt-4">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ensure this is hidden on mobile */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-[20rem] w-[20rem] md:w-[25rem] md:h-[25rem] border pt-10 rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
