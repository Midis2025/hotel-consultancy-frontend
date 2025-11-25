import React from "react";
import { motion } from "framer-motion";

export const LeadershipSection = (): JSX.Element => {
  return (
    <section
      id="leadership"
      className="flex flex-col items-center py-20 px-6 md:px-12 lg:px-20 w-full scroll-mt-20 bg-white"
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-10">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="opacity-80 inline-flex items-center gap-4">
            <img className="w-14 h-px" src="/line.svg" alt="Line" />
            <span className="font-eyebrow tracking-widest text-primary-1 text-xs sm:text-sm uppercase">
              Leadership
            </span>
            <img className="w-14 h-px" src="/line.svg" alt="Line" />
          </div>

          {/* Page Heading */}
          <h2 className="font-heading-3 text-text-heading text-3xl sm:text-4xl md:text-5xl leading-tight">
            Leadership That{" "}
            <span className="italic text-primary-1">Elevates Hospitality</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-center text-center gap-6 max-w-3xl"
        >
          <p className="font-body-1 text-neutral-2 text-base sm:text-lg leading-relaxed">
            At Aureus Hospitality, our leadership team brings decades of combined
            experience in hotel operations, guest experience design, and strategic
            consultancy. We combine industry expertise with a hands-on approach,
            guiding hotels and resorts to deliver exceptional service, operational
            precision, and unforgettable guest experiences.
          </p>

          <p className="font-body-1 text-neutral-2 text-base sm:text-lg leading-relaxed">
            Our commitment to collaboration, innovation, and results ensures that
            every property we work with reaches its full potential.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
