import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1216px] mx-auto px-4 sm:px-6 md:px-8 py-4">
        {/* Logo */}
        <img
          className="w-[90px] sm:w-[100px] h-12 sm:h-14 cursor-pointer brightness-0 invert"
          alt="Elegant simple"
          src="/elegant-simple-aesthetic-real-estate-logo-1.png"
          onClick={() => scrollToSection("#hero")}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navigationItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 text-white hover:text-primary-1 text-sm lg:text-base font-medium transition-colors"
            >
              {item.label}
            </motion.button>
          ))}

          <Button
            onClick={() => scrollToSection("#contact")}
            className="h-auto justify-center px-5 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all hover:shadow-lg text-sm lg:text-base"
          >
            CONTACT US
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="p-2 rounded-md text-white hover:text-primary-1 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-neutral-800 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.href);
                    closeMenu();
                  }}
                  className="w-full text-center text-white hover:text-primary-1 py-2 text-lg font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <Button
                onClick={() => {
                  scrollToSection("#contact");
                  closeMenu();
                }}
                className="px-8 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all text-base"
              >
                CONTACT US
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
