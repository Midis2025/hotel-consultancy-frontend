import React from "react";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

const navigationItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const NavigationBarSection = (): JSX.Element => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center px-8 py-5 w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="flex max-w-[1216px] items-center justify-between w-full">
        <img
          className="w-[100px] h-14"
          alt="Elegant simple"
          src="/elegant-simple-aesthetic-real-estate-logo-1.png"
        />

        <div className="flex items-center gap-4">
          {navigationItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 cursor-pointer bg-transparent border-none transition-colors hover:text-primary-1"
            >
              <span className="text-neutral-1 hover:text-primary-1 text-[length:var(--label-1-font-size)] leading-[var(--label-1-line-height)] font-label-1 font-[number:var(--label-1-font-weight)] tracking-[var(--label-1-letter-spacing)] whitespace-nowrap [font-style:var(--label-1-font-style)] transition-colors">
                {item.label}
              </span>
            </motion.button>
          ))}

          <Button
            onClick={() => scrollToSection("#contact")}
            className="h-auto justify-center px-5 py-3 bg-primary-1 hover:bg-primary-1/90 transition-all hover:shadow-lg"
          >
            <span className="text-white text-[length:var(--label-2-font-size)] text-center leading-[var(--label-2-line-height)] font-label-2 font-[number:var(--label-2-font-weight)] tracking-[var(--label-2-letter-spacing)] whitespace-nowrap [font-style:var(--label-2-font-style)]">
              CONTACT US
            </span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
