import React from "react";
import { motion } from "framer-motion";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 w-full scroll-mt-20 bg-[#f9f9f9]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 w-full max-w-7xl">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full md:w-1/2 items-start gap-4 sm:gap-6"
        >
          <div className="opacity-80 inline-flex items-center gap-4">
            <img
              className="w-12 sm:w-16 h-px object-cover"
              alt="Line"
              src="/line.svg"
            />
            <div className="font-eyebrow text-primary-1 tracking-widest text-sm sm:text-base">
              ABOUT US
            </div>
          </div>

          <h2 className="font-heading-3 text-[#434343] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight">
            We help turn your{" "}
            <span className="italic text-primary-1">hospitality</span>{" "}
            vision into reality
          </h2>

          <p className="font-body-1 text-neutral-2 text-base sm:text-lg leading-relaxed">
            As a trusted partner to hotels and resorts worldwide, we blend
            insight, creativity, and operational discipline. Each project is
            shaped by collaboration, transparency, and a focus on results.
          </p>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-[480px] lg:h-[560px] flex justify-center"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Background Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute w-[65%] sm:w-[55%] md:w-[47%] h-[75%] sm:h-[85%] top-0 left-0 object-cover rounded-lg shadow-xl"
              alt="Hotel interior"
              src="/image-1.png"
            />
            {/* Overlay Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute w-[65%] sm:w-[55%] md:w-[47%] h-[75%] sm:h-[85%] top-[20%] sm:top-[14%] left-[30%] sm:left-[51%] object-cover rounded-lg shadow-xl"
              alt="Hotel team"
              src="/image.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
