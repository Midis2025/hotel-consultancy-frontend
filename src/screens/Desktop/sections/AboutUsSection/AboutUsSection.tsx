import React from "react";
import { motion } from "framer-motion";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about" className="flex flex-col items-center gap-2 py-24 px-8 w-full scroll-mt-20">
      <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-[1216px]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full md:w-1/2 items-start gap-6"
        >
          <div className="opacity-80 inline-flex items-center gap-4">
            <img
              className="w-16 h-px object-cover"
              alt="Line"
              src="/line.svg"
            />
            <div className="font-eyebrow text-primary-1 tracking-widest">
              ABOUT US
            </div>
          </div>

          <h2 className="font-heading-3 text-[#434343] text-4xl md:text-5xl leading-tight">
            We help turn your{" "}
            <span className="italic text-primary-1">hospitality</span>{" "}
            vision into reality
          </h2>

          <p className="font-body-1 text-neutral-2 text-lg leading-relaxed">
            As a trusted partner to hotels and resorts worldwide, we blend
            insight, creativity, and operational discipline. Each project is
            shaped by collaboration, transparency, and a focus on results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[560px] relative"
        >
          <div className="relative h-full">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute w-[47.30%] h-[85.71%] top-[14.29%] left-[51.35%] object-cover rounded-lg shadow-xl"
              alt="Image"
              src="/image.png"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute w-[47.30%] h-[85.71%] top-0 left-0 object-cover rounded-lg shadow-xl"
              alt="Image"
              src="/image-1.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
