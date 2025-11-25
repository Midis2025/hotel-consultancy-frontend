import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Aureus Hospitality – Elevating Every Guest Experience",
    description:
      "We help hotels and resorts deliver service that goes beyond expectation. By combining operational expertise, strategic guidance, and tailored training, we transform every guest interaction into a thoughtful, memorable experience that inspires loyalty and sets your property apart.",
    icon: "/star.png",
    iconAlt: "Star",
  },
  {
    title: "Operational Precision – Excellence in Every Detail",
    description:
      "We empower hotels and resorts to run seamlessly. Through streamlined workflows, actionable insights, and targeted guidance, our consultants enable your team to deliver flawless service at every guest touchpoint.",
    icon: "/settings.png",
    iconAlt: "Settings",
  },
  {
    title: "Defining Service Standards – Consistency That Inspires",
    description:
      "We help hotels and resorts cultivate a culture of excellence, ensuring every interaction reflects your brand promise and delivers unwavering quality and memorable experiences.",
    icon: "/warranty.png",
    iconAlt: "Warranty",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1314px] mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex"
            >
              <Card
                className="
                  flex flex-col justify-between items-center text-center
                  bg-white border border-neutral-200 shadow-md
                  rounded-2xl p-8 w-full 
                  h-[380px]  /* equal height */
                  transition-all duration-300 transform
                  hover:shadow-[0px_20px_40px_rgba(0,0,0,0.12)]
                  hover:-translate-y-3 hover:border-primary-1/40
                "
              >
                <CardContent className="flex flex-col items-center text-center p-0 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                    className="
                      w-[82px] h-[82px] bg-primary-3 rounded-full 
                      flex items-center justify-center mb-6 shadow-lg
                      border border-primary-1/40
                    "
                  >
                    <img
                      className="w-[40px] h-[40px] object-contain"
                      alt={feature.iconAlt}
                      src={feature.icon}
                    />
                  </motion.div>

                  <h3 className="font-semibold text-lg tracking-wide text-neutral-900 mb-4 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-6 mt-auto">
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