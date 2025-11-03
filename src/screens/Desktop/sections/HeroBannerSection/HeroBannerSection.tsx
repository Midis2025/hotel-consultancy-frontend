import React from "react";
import { motion } from "framer-motion";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-2 pt-32 pb-20 px-8 w-full">
      <div className="max-w-[1216px] w-full flex flex-col items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full font-heading-3 text-[#434343] text-6xl md:text-7xl text-center leading-tight"
        >
          Where{" "}
          <span className="italic text-primary-1">hospitality</span>{" "}
          meets excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[800px] w-full font-body-1 text-neutral-2 text-lg md:text-xl text-center leading-relaxed"
        >
          We unite hotel expertise with genuine care, helping hospitality
          leaders deliver extraordinary guest experiences, operational
          brilliance, and lasting business value.
        </motion.p>
      </div>
    </section>
  );
};
