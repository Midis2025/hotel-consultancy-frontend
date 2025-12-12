import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
}

interface ExpertiseItem {
  title: string;
  description: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Strategic Hotel Management",
    description:
      "We evaluate your entire operation and design practical, high-impact strategies that enhance efficiency, elevate service quality, and boost overall profitability.",
  },
  {
    title: "Revenue Growth & Market Positioning",
    description:
      "Aureus Hospitality applies data-driven revenue techniques, competitive analysis, and modern distribution strategies to help hotels strengthen market presence and achieve consistent revenue growth.",
  },
  {
    title: "Pre-Opening Advisory & Setup",
    description:
      "For new hotel projects, we provide complete pre-opening support—from concept planning to operational frameworks—ensuring a strong foundation and a seamless launch.",
  },
];

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Operational Excellence",
    description:
      "streamline workflows, optimise staff performance, implement sustainable systems.",
  },
  {
    title: "Branding & Digital Presence",
    description:
      "shape a strong identity and enhance visibility for today's digital guest.",
  },
  {
    title: "Staff Training & Skill Enhancement",
    description:
      "practical training modules to deliver refined service and better communication.",
  },
  {
    title: "End-to-End Support",
    description:
      "planning, execution, and optimisation across every phase.",
  },
];

// Inline SVG Icons
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
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-primary-1"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ExpertiseSection = (): JSX.Element => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative w-full py-16 sm:py-20 md:py-28 bg-bg-light"
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
            id="expertise-heading"
            className="font-heading-3 text-text-heading text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl"
          >
            Why Hotels Trust{" "}
            <span className="text-primary-1 italic">Aureus Hospitality</span>
          </h2>

          <p className="font-body-1 text-neutral-2 mt-6 text-base sm:text-lg max-w-2xl leading-relaxed">
            At Aureus Hospitality, we combine industry expertise, strategic
            insight, and hands-on experience to help hotels operate smarter,
            grow faster, and deliver exceptional guest experiences. We don't
            rely on testimonials—our results, processes, and professionalism
            earn the trust of every hotel we work with.
          </p>
        </motion.div>

        {/* Content Grid - Two Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-12"
        >
          {/* Left Column - Feature Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {featureCards.map((card, index) => {
              const icons = [StrategyIcon, RevenueIcon, LaunchIcon];
              const IconComponent = icons[index];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex gap-4 items-start border border-neutral-4"
                >
                  <div className="flex-shrink-0 mt-1 text-primary-1">
                    <IconComponent />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading-6 text-text-heading mb-2">
                      {card.title}
                    </h3>
                    <p className="font-body-1 text-neutral-2 text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Expertise List */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col sticky top-6 border border-neutral-4">
              <h3 className="font-heading-6 text-text-heading mb-6">
                Our Expertise
              </h3>

              <ul className="space-y-4 flex-1">
                {expertiseItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex gap-3 items-start"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="font-label-1 text-text-heading text-sm">
                        {item.title}
                      </p>
                      <p className="font-body-2 text-neutral-2 text-xs sm:text-sm leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                variants={itemVariants}
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-primary-1 text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 w-full"
              >
                Work With Us
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
