import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Icons
const StrategyIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-primary-1"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const RevenueIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-primary-1"
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const LaunchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-primary-1"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Strategic Hotel Management",
    description:
      "We evaluate your entire operation and design practical, high-impact strategies that enhance efficiency, elevate service quality, and boost overall profitability.",
    icon: <StrategyIcon />,
  },
  {
    id: 2,
    title: "Revenue Growth & Market Positioning",
    description:
      "Aureus Hospitality applies data-driven revenue techniques, competitive analysis, and modern distribution strategies to help hotels strengthen market presence and achieve consistent revenue growth.",
    icon: <RevenueIcon />,
  },
  {
    id: 3,
    title: "Pre-Opening Advisory & Setup",
    description:
      "For new hotel projects, we provide complete pre-opening support—from concept planning to operational frameworks—ensuring a strong foundation and a seamless launch.",
    icon: <LaunchIcon />,
  },
];

export const WhyHotelsSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  // Get visible cards (current, next, and previous for smooth transition)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + services.length) % services.length;
      cards.push({
        service: services[index],
        position: i,
        index,
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      id="why-hotels"
      aria-labelledby="why-hotels-heading"
      className="relative w-full py-16 sm:py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <div className="opacity-80 inline-flex items-center gap-4 mb-4">
            <img
              className="w-16 h-px object-cover"
              alt="Line"
              src="/line.svg"
            />
            <div className="font-eyebrow text-primary-1 tracking-widest text-sm">
              WHY HOTELS TRUST US
            </div>
            <img
              className="w-16 h-px object-cover"
              alt="Line"
              src="/line.svg"
            />
          </div>

          <h2
            id="why-hotels-heading"
            className="font-heading-3 text-text-heading text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl"
          >
            Why Hotels Trust{" "}
            <span className="text-primary-1 italic">Aureus Hospitality</span>
          </h2>

          <p className="font-body-1 text-neutral-2 mt-6 text-base sm:text-lg max-w-2xl leading-relaxed">
           At Aureus Hospitality, we advise hotels with a refined blend of strategic intelligence, operational mastery, and hands-on hospitality experience. Our work focuses on enhancing performance, elevating guest experience, and unlocking long-term value with discretion and precision. We are trusted by owners and operators who value clarity, rigor, and execution at the highest standard.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Cards Container */}
          <div className="relative w-full h-auto mb-12">
            <div className="perspective" style={{ perspective: "1200px" }}>
              {visibleCards.map((card) => {
                const offset = card.position;
                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;

                let xOffset = 0;
                let yOffset = 0;
                let scale = 0.85;
                let opacity = 0.5;
                let zIndex = 1;
                let rotateY = 0;

                if (isCenter) {
                  xOffset = 0;
                  yOffset = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                  rotateY = 0;
                } else if (isRight) {
                  xOffset = 120;
                  yOffset = 20;
                  scale = 0.85;
                  opacity = 0.5;
                  zIndex = 2;
                  rotateY = -15;
                } else if (isLeft) {
                  xOffset = -120;
                  yOffset = 20;
                  scale = 0.85;
                  opacity = 0.5;
                  zIndex = 2;
                  rotateY = 15;
                }

                return (
                  <motion.div
                    key={card.service.id}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale,
                      opacity,
                      zIndex,
                      rotateY,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="absolute w-full md:w-96 lg:w-[420px]"
                    style={{
                      left: "50%",
                      marginLeft: "-210px",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="bg-white rounded-2xl border border-neutral-4 shadow-lg hover:shadow-xl transition-all p-8 h-full flex flex-col gap-4">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-1/10">
                        {card.service.icon}
                      </div>

                      {/* Title */}
                      <h3 className="font-heading-6 text-text-heading text-lg sm:text-xl font-bold">
                        {card.service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-body-1 text-neutral-2 text-sm sm:text-base leading-relaxed flex-1">
                        {card.service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Empty space for card height */}
            <div className="invisible">
              <div className="bg-white rounded-2xl border border-neutral-4 shadow-lg p-8 h-full w-full md:w-96 lg:w-[420px]">
                <div className="h-64" />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: hoverPrev ? "#6b5326" : "#996830",
              }}
              aria-label="Previous service"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </motion.button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    width: index === activeIndex ? "32px" : "8px",
                    backgroundColor:
                      index === activeIndex ? "#996830" : "#d1d5db",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full transition-all"
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: hoverNext ? "#6b5326" : "#996830",
              }}
              aria-label="Next service"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHotelsSection;
