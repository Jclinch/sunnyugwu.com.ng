
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
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

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
    "rgba(0, 28, 54, 0.8)", // --slate-950 with 0.8 opacity
    "rgba(15, 23, 42, 0.8)", // --slate-950 with 0.8 opacity
    "rgba(0, 0, 0, 0.8)", // black with 0.8 opacity
    "rgba(38, 38, 38, 0.8)", // --neutral-900 with 0.8 opacity
  ];

  // Memoize linearGradients so it only gets recalculated if dependencies change
  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, rgba(6, 182, 212, 0.8), rgba(16, 185, 129, 0.8))", // cyan-500, emerald-500 with 0.8 opacity
    "linear-gradient(to bottom right, rgba(6, 182, 212, 0.8), rgba(16, 185, 129, 0.8))", // cyan-500, emerald-500 with 0.8 opacity
    "linear-gradient(to bottom right, rgba(236, 72, 153, 0.8), rgba(102, 126, 234, 0.8))", // pink-500, indigo-500 with 0.8 opacity
    "linear-gradient(to bottom right, rgba(251, 146, 60, 0.8), rgba(234, 179, 8, 0.8))", // orange-500, yellow-500 with 0.8 opacity
  ], []); // Empty dependency array since the gradients don’t change

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]); // linearGradients is now stable and won’t change on every render

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-screen  overflow-y-auto flex justify-center relative space-x-[20rem] w-lvw rounded-md p-5"
      ref={ref}
    >
      <div className="div relative flex items-start justify-center px-4">
        <div className="max-w-xl">
          <div className="ml-[550px] mt-[25px] text-5xl text-[#007BFF]">
            Portfolio
          </div>
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-[80px] ml-[150px] w-full  "
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-4xl w-full  text-center font-bold text-[#00BFA6]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-slate-300 max-w-sm mt-10 ml-[70px]"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          // "image-box hidden lg:block h-[30rem] w-[30rem] md:pr-[300px] border border-red-700 pt-[160px] rounded-md bg-white sticky top-10 overflow-hidden",
          "image-box hidden lg:block h-[30rem] w-[30rem] md:pr-[300px] border border-red-700 pt-[160px] rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName

        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
