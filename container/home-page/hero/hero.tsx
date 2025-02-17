// components/AnimatedText.tsx

"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextHover from "@/animation/TextHover";
import SvgIcon from "../../public/SVG/MEGH.svg";
import Image from "next/image";
import TextHoverSingle from "@/animation/TextHoverSingle";
import Link from "next/link";
import SvgContainer from "../svg-section/svg-container";

const texts: string[] = [
  "Best For E-commerce",
  "Targeted Website Redesign",
  "Effective Web Development",
];

const variants = {
  enter: {
    y: 10,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};
const navItems = [
  { title: "Case Studies", href: "/case-studies", id: 1 },
  { title: "Services", href: "/services", id: 2 },
  { title: "Contact Us", href: "/contact-us", id: 3 },
];

const AnimatedText: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div
      className="bg-gradient-to-b from-[#96b9c6] to-[#ffffff]
    h-screen"
    >
      <div className="sm:hidden">
        <div
          className="absolute bottom-[7%] left-[-10%] md:left-[-15%]
        sm:left-[-45%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="257"
            height="257"
            viewBox="0 0 257 257"
          >
            <g
              id="Ellipse_3"
              data-name="Ellipse 3"
              fill="none"
              stroke="#18afe8"
              strokeWidth="4"
              strokeDasharray="10"
            >
              <circle cx="128.5" cy="128.5" r="128.5" stroke="none" />
              <circle cx="128.5" cy="128.5" r="126.5" fill="none" />
            </g>
          </svg>
        </div>

        <div
          className="absolute bottom-[1%] left-[-8%] md:left-[-13%]
        sm:left-[-40%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="257"
            height="257"
            viewBox="0 0 257 257"
          >
            <g
              id="Ellipse_3"
              data-name="Ellipse 3"
              fill="none"
              stroke="#18afe8"
              strokeWidth="4"
              strokeDasharray="10"
            >
              <circle cx="128.5" cy="128.5" r="128.5" stroke="none" />
              <circle cx="128.5" cy="128.5" r="126.5" fill="none" />
            </g>
          </svg>
        </div>
      </div>

      <div
        className=" sm:pt-[15rem] md:pt-[17rem] lg:pt-[17rem] w-full
      sm:h-[30rem] md:h-screen lg:h-screen md:px-10"
      >
        <div
          className="w-full flex justify-center
       md:ml-[-1rem]  lg:ml-[-3rem] text-[25px]  md:text-[50px] lg:text-[55px]
             font-[700]"
        >
          <div>
            <div className="font-gvf ">
              <h2
                className="text-gray-800 text-[28px] md:text-[45px] 
              sm:tracking-tighter  lg:text-[50px]"
              >
                Your Trusted Partner For
              </h2>
              <AnimatePresence>
                <motion.span
                  className=" text-btn_clr md:ml-2 w-fit
                 text-[26px] md:text-[50px]  lg:text-[55px]
              sm:tracking-tighter"
                  style={{ position: "absolute" }}
                  variants={variants}
                  key={index}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 400, damping: 100 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div
              className=" mt-[5rem] md:mt-[7rem] lg:mt-[8rem]
             text-[16px] md:text-[25px]
            lg:text-[25px]
            sm:ml-2  md:ml-[10px]  lg:ml-[8px]
           flex items-center md:space-x-8  lg:space-x-8 sm:space-x-2
           small-text text-justify font-[500] font-NeueMontreal "
            >
              {navItems.map((item, i) => (
                <div key={item.id} className="flex items-center text-gray-700">
                  <Link className="w-fit hover" href={item.href}>
                    <TextHoverSingle
                      classname="text-gray-700"
                      subTitle1=""
                      subTitle2=""
                      title1={item.title}
                      title2={item.title}
                    />
                  </Link>
                  {/* Add a dot after the second and third items */}
                  {i < 2 && (
                    <span className="w-2 h-2 bg-current rounded-full md:ml-5 lg:ml-8 sm:ml-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SvgContainer></SvgContainer>
    </div>
  );
};

export default AnimatedText;
