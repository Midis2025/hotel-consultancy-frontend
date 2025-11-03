import React from "react";

interface ServiceCard {
  title: string;
  description: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "OPERATIONS & SERVICE EXCELLENCE AUDITS",
    description:
      "Comprehensive evaluations of hotel operations to enhance guest satisfaction, improve team performance, and streamline service delivery across all departments.",
  },
  {
    title: "REVENUE & PERFORMANCE OPTIMIZATION",
    description:
      "Data-driven strategies to maximize occupancy, increase RevPAR, and refine pricing models through competitive market analysis and forecasting insights.",
  },
  {
    title: "BRAND EXPERIENCE & GUEST JOURNEY DESIGN",
    description:
      "Crafting distinctive guest experiences through brand alignment, service touchpoint mapping, and emotional engagement strategies that drive loyalty.",
  },
];

export const OurServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/untitled-design--20--1.png"
          alt="Luxury hotel background"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-14 sm:mb-16 md:mb-20 opacity-0 animate-fade-in">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-14 h-px bg-gradient-to-r from-[#d4af37] to-[#ffcf73]" />
            <span className="tracking-[0.25em] text-sm font-semibold text-[#ffcf73] uppercase">
              Our Services
            </span>
            <div className="w-14 h-px bg-gradient-to-l from-[#d4af37] to-[#ffcf73]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-4xl">
            Elevating{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#ffcf73] bg-clip-text text-transparent italic">
              hospitality standards
            </span>{" "}
            through tailored consultancy
          </h2>

          <p className="text-gray-300 mt-5 text-base sm:text-lg max-w-2xl leading-relaxed">
            Empowering hotels and resorts with strategic insights, operational
            excellence, and innovative guest experience design.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full px-4">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[380px] md:max-w-[400px] lg:max-w-[420px] opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              {/* Gradient Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#d4af37] via-[#ffcf73] to-[#d4af37] rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold uppercase mb-3 text-[#ffcf73] tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-pan {
          0% { transform: scale(1.05) translateY(0); }
          50% { transform: scale(1.08) translateY(-10px); }
          100% { transform: scale(1.05) translateY(0); }
        }

        .animate-fade-in { animation: fade-in 0.9s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slow-pan { animation: slow-pan 20s ease-in-out infinite; }
      `}</style>
    </section>
  );
};
