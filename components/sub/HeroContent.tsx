"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
<motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 sm:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center sm:text-start px-4 sm:px-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm">
            Fullstack Developer & Data Analyst
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-full sm:max-w-[600px] w-full"
        >
          <span className="text-center sm:text-left">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-full sm:max-w-[600px] text-center sm:text-left"
        >
          I&apos;m <b className="text-white opacity-60">Harsha G</b>, a Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-full sm:max-w-[200px]"
          href="https://harshag.vercel.app/"
          target="_blank"
        >
          Know More!
        </motion.a>
      </div>
    
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={400}
          width={400}
          className="w-full md:w-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;