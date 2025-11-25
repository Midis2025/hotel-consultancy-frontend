import React from "react";
import { motion } from "framer-motion";

interface HeroBannerSectionProps {
  onGetInTouchClick?: () => void;
}

export const HeroBannerSection = ({ onGetInTouchClick }: HeroBannerSectionProps): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[100vh] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-white text-center flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <motion.h1
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="font-heading-3 leading-tight font-bold 
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
    tracking-tight"
>
  Luxury{" "}
  <span className="italic text-primary-1 indent-4">Hospitality</span>
  <span className="inline-block w-8"></span>
  Perfected.
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="max-w-[850px] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-100"
>
  We elevate hotels from exceptional to unforgettable—crafting extraordinary
  guest experiences, refining operations with precision, and unlocking lasting
  commercial success.
</motion.p>


        {/* Optional CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={onGetInTouchClick}
          className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-primary-1 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:opacity-90 transition-all cursor-pointer"
        >
          Get in Touch
        </motion.button>
      </div>
    </section>
  );
};
