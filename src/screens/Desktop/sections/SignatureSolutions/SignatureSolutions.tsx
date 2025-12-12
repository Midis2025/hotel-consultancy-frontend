import { motion } from "framer-motion";

interface SolutionCard {
  id: number;
  title: string;
  summary: string;
  detail: string;
}

const solutions: SolutionCard[] = [
  {
    id: 1,
    title: "Operational Excellence & Performance Improvement",
    summary: "Deep operational audit and a clear action roadmap.",
    detail:
      "We refine hotel operations by optimizing workflows, reducing inefficiencies, and strengthening service delivery across all guest touchpoints.",
  },
  {
    id: 2,
    title: "Revenue Growth & Market Strategy",
    summary: "We develop data-driven pricing, competitive positioning, and distribution strategies that maximise occupancy, increase RevPAR, and strengthen overall market presence.",
    detail:
      "We develop data-driven pricing, competitive positioning, and distribution strategies that maximise occupancy, increase RevPAR, and strengthen overall market presence.",
  },
  {
    id: 3,
    title: "Guest Experience & Service Design",
    summary: "We elevate guest satisfaction through experience mapping, service refinement, and staff training programs that deliver exceptional hospitality at every interaction.",
    detail:
      "We elevate guest satisfaction through experience mapping, service refinement, and staff training programs that deliver exceptional hospitality at every interaction.",
  },
  {
    id: 4,
    title: "Brand Positioning & Digital Transformation",
    summary: "Strengthen brand voice and digital guest journey.",
    detail:
      "Brand architecture, website & OTA positioning, guest experience mapping, and digital tools roadmaps to capture modern travellers.",
  },
  {
    id: 5,
    title: "Workforce Training & Leadership Coaching",
    summary: "Practical training programs that raise service standards.",
    detail:
      "Modular training, leadership coaching, and on-the-job mentoring to build high-performing teams and reduce turnover.",
  },
  {
    id: 6,
    title: "Sustainability & Cost Optimisation",
    summary: "Reduce costs while building sustainable operations.",
    detail:
      "Energy and procurement audits, waste-reduction strategies, and sustainable operational design that cut costs and enhance brand value.",
  },
];

// Inline SVG Icons are no longer needed for this layout

export const SignatureSolutions = (): JSX.Element => {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
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
              OUR SIGNATURE SOLUTIONS
            </div>
            <img 
              className="w-16 h-px object-cover"
              alt="Line"
              src="/line.svg"
            />
          </div>

          <h2
            id="solutions-heading"
            className="font-heading-3 text-text-heading text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl"
          >
            Our{" "}
            <span className="text-primary-1 italic">Signature Solutions</span>{" "}
            / What We Deliver
          </h2>

          <p className="font-body-1 text-neutral-2 mt-6 text-base sm:text-lg max-w-2xl leading-relaxed">
            At Aureus Hospitality, we deliver practical, measurable solutions
            that transform hotel operations, optimise revenue, and elevate guest
            experiences. These signature offerings are the backbone of our
            consulting work — designed to be outcome-focused and ready for
            immediate implementation.
          </p>
        </motion.div>

        {/* Content Layout - Portfolio Style Like Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 lg:justify-center lg:items-center"
          >
            {/* Card 1 - Left Column */}
            <div className="flex flex-col gap-4 max-w-md w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-neutral-4"
              > 
                <img
                  src="/images/1.png"
                  alt={solutions[0].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h3 className="font-heading-6 text-text-heading mb-3">
                  {solutions[0].title}
                </h3>
                <p className="font-body-2 text-neutral-2 text-sm leading-relaxed mb-4">
                  {solutions[0].detail}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-1 text-white font-semibold rounded-lg hover:shadow-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 group font-label-1 tracking-wide"
                >
                  Contact Us
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 group-hover:translate-x-1 transition-all duration-200"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Card 2 - Right Column (Top) */}
            <div className="flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-neutral-4"
              >
                <img
                  src="/images/2.png"
                  alt={solutions[1].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h3 className="font-heading-6 text-text-heading mb-3">
                  {solutions[1].title}
                </h3>
                <p className="font-body-2 text-primary-1 text-sm leading-relaxed mb-4">
                  {solutions[1].summary}
                </p>
              </div>
            </div>

            {/* Card 3 - Right Column (Bottom) */}
            <div className="flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-neutral-4"
              >
                <img
                  src="/images/3.png"
                  alt={solutions[2].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h3 className="font-heading-6 text-text-heading mb-3">
                  {solutions[2].title}
                </h3>
                <p className="font-body-2 text-primary-1 text-sm leading-relaxed mb-4">
                  {solutions[2].summary}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% {
            background-position: -1000px 0;
          }
          50% {
            background-position: 1000px 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .solution-card-hover:hover {
          border-color: rgba(153, 104, 48, 0.3);
        }
      `}</style>
    </section>
  );
};
