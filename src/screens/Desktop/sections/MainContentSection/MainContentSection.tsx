import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "EXCEPTIONAL GUEST EXPERIENCES",
    description:
      "We guide hotels and resorts to deliver thoughtful, memorable service — raising every moment above expectations.",
    icon: "/star.png",
    iconAlt: "Star",
  },
  {
    title: "OPERATIONAL PRECISION",
    description:
      "Our consultants unlock reliable workflows and productivity, empowering your team to excel at every guest touchpoint.",
    icon: "/settings.png",
    iconAlt: "Settings",
  },
  {
    title: "DEFINING SERVICE STANDARDS",
    description:
      "We help you build a hospitality culture of consistency and quality, turning your brand promise into reality.",
    icon: "/warranty.png",
    iconAlt: "Warranty",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1314px] mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-0 shadow-none bg-transparent hover:transform hover:scale-105 transition-transform duration-300">
                <CardContent className="flex flex-col items-center text-center p-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-[86px] h-[86px] bg-primary-3 rounded-full flex items-center justify-center mb-8 shadow-md"
                  >
                    <img
                      className="w-[42px] h-[41px] object-contain"
                      alt={feature.iconAlt}
                      src={feature.icon}
                    />
                  </motion.div>

                  <h3 className="font-label-1 text-text-heading text-base tracking-wider leading-8 mb-6">
                    {feature.title}
                  </h3>

                  <p className="font-body-1 text-neutral-2 text-base leading-7 max-w-[403px]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
