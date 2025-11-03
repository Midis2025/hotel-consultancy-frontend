import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

const serviceCards = [
  {
    title: "SERVICE AUDITS & ASSESSMENTS",
    description:
      "Detailed operational reviews. Full guest journey mapping. Pinpointing strengths and actionable opportunities.",
  },
  {
    title: "SERVICE AUDITS & ASSESSMENTS",
    description:
      "Detailed operational reviews. Full guest journey mapping. Pinpointing strengths and actionable opportunities.",
  },
  {
    title: "SERVICE AUDITS & ASSESSMENTS",
    description:
      "Detailed operational reviews. Full guest journey mapping. Pinpointing strengths and actionable opportunities.",
  },
];

export const OurServicesSection = (): JSX.Element => {
  return (
    <section id="services" className="flex flex-col items-center gap-20 px-8 py-28 w-full scroll-mt-20">
      <div className="relative max-w-[1216px] w-full">
        <div className="relative w-full h-[938px]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Untitled design"
            src="/untitled-design--20--1.png"
          />

          <div className="absolute inset-0 w-full h-full bg-[linear-gradient(270deg,rgba(0,0,0,0.75)_0%,rgba(21,21,21,0.39)_65%,rgba(126,126,126,0)_100%)]" />

          <div className="absolute top-0 left-0 w-full h-[305px] bg-[linear-gradient(180deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0)_100%)]" />

          <div className="absolute top-11 left-4 right-4 md:left-28 md:right-28 flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col max-w-[495px] items-start gap-8"
            >
              <div className="opacity-80 inline-flex items-center gap-4">
                <img
                  className="w-16 h-px object-cover"
                  alt="Line"
                  src="/line.svg"
                />

                <div className="font-eyebrow text-primary-1 tracking-widest">
                  OUR SERVICES
                </div>
              </div>

              <h2 className="font-heading-3 text-white text-4xl md:text-5xl leading-tight">
                We provide tailored{" "}
                <span className="italic text-primary-3">solutions</span> for every
                hotel journey
              </h2>
            </motion.div>

            <div className="flex flex-col gap-8 max-w-[568px] w-full lg:mt-[93px]">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="bg-[#ffffff2e] border-[#ffffff54] backdrop-blur-[12.2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.2px)_brightness(100%)] rounded-[15px] hover:bg-[#ffffff40] transition-all hover:shadow-2xl">
                    <CardContent className="flex flex-col gap-6 p-8">
                      <h3 className="font-heading-6 text-white text-lg text-center">
                        {service.title}
                      </h3>

                      <p className="font-body-1 text-white/90 text-base text-center leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
