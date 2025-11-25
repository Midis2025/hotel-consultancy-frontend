import React from "react";
import { motion } from "framer-motion";

export const OurApproachSection = (): JSX.Element => {
  const steps = [
    {
      title: "Comprehensive Operational Diagnostics",
      description:
        "We begin with a deep evaluation of your property's current operations—from service flow and team performance to guest journey gaps and brand alignment. This helps us identify opportunities for high-impact improvement.",
    },
    {
      title: "Strategic Blueprint & Transformation Roadmap",
      description:
        "Using our findings, we create a tailored strategy that aligns your operational realities with brand goals and guest expectations. This roadmap outlines prioritized actions for measurable and sustainable growth.",
    },
    {
      title: "Team Empowerment, Coaching & Service Culture Development",
      description:
        "We collaborate closely with your teams through workshops, coaching, and hands-on training to build a culture of service excellence, brand consistency, and performance-driven hospitality.",
    },
    {
      title: "Guest Experience Re-Engineering",
      description:
        "We elevate every stage of the guest journey—enhancing touchpoints, sensory elements, emotional engagement, and service rituals to create memorable and loyalty-driven experiences.",
    },
    {
      title: "Continuous Monitoring & Performance Optimization",
      description:
        "After implementation, we monitor results, analyze feedback, refine strategies, and provide ongoing support, ensuring your property continues to deliver operational precision and exceptional guest satisfaction.",
    },
  ];

  return (
    <section
      id="approach"
      className="flex flex-col items-center w-full py-20 px-6 md:px-12 lg:px-20 scroll-mt-20 bg-white"
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center gap-12">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="opacity-80 inline-flex items-center gap-3"
        >
          <img className="w-14 h-px" src="/line.svg" alt="Line" />
          <span className="font-eyebrow text-primary-1 tracking-widest uppercase text-xs sm:text-sm">
            Our Approach
          </span>
          <img className="w-14 h-px" src="/line.svg" alt="Line" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading-3 text-text-heading text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl"
        >
          Our Approach to{" "}
          <span className="italic text-primary-1">Hospitality Excellence</span>
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex flex-col items-start text-left gap-3 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-heading-3 text-xl text-primary-1">
                {step.title}
              </h3>
              <p className="font-body-1 text-neutral-600 text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
