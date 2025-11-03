import React from "react";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    image: "/image-3.png",
    title: "Boutique Resort Transformation",
    description:
      "From service redesign to revenue growth, we helped a coastal boutique hotel achieve exceptional guest loyalty scores.",
    column: "left",
  },
  {
    id: 2,
    image: "/image-4.png",
    title: "Luxury Urban Hotel Revitalization",
    description:
      "A major city property partnered with us to revamp guest experience and boost brand reputation, resulting in award-winning reviews.",
    column: "right",
  },
  {
    id: 3,
    image: "/image-2.png",
    title: "Luxury Urban Hotel Revitalization",
    description:
      "A major city property partnered with us to revamp guest experience and boost brand reputation, resulting in award-winning reviews.",
    column: "right",
  },
];

export const PortfolioSection = (): JSX.Element => {
  const leftItem = portfolioItems.find((item) => item.column === "left");
  const rightItems = portfolioItems.filter((item) => item.column === "right");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="portfolio" className="relative w-full py-28 px-8 md:px-28 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="flex flex-col gap-24">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="opacity-80 inline-flex items-center gap-4">
              <img
                className="w-16 h-px object-cover"
                alt="Line"
                src="/line.svg"
              />
              <div className="font-eyebrow text-primary-1 tracking-widest">
                RECENT WORKS
              </div>
            </div>

            <h2 className="font-heading-3 text-[#434343] text-4xl md:text-5xl leading-tight">
              Some of{" "}
              <span className="italic text-primary-1">our crafts</span>{" "}
              made with love
            </h2>
          </motion.header>

          {leftItem && (
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[426px] object-cover rounded-lg shadow-lg"
                alt={leftItem.title}
                src={leftItem.image}
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-heading-4 text-[#434343] text-2xl md:text-3xl">
                  {leftItem.title}
                </h3>
                <p className="font-body-1 text-neutral-2 text-base leading-relaxed">
                  {leftItem.description}
                </p>
              </div>
            </motion.article>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="h-auto px-6 py-4 bg-primary-1 hover:bg-primary-1/90 w-fit transition-all hover:shadow-lg"
            >
              <span className="font-label-1">
                CONTACT US
              </span>
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col gap-20">
          {rightItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col gap-6"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                alt={item.title}
                src={item.image}
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-heading-4 text-[#434343] text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="font-body-1 text-neutral-2 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
