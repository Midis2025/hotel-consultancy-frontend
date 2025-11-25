import React from "react";

interface ServiceCard {
  title: string;
  description: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Operations & Service Excellence Audits",
    description:
      "In-depth evaluations of hotel operations that enhance guest satisfaction, optimize team performance, and streamline service delivery across all departments.",
  },
  {
    title: "Revenue & Performance Optimization",
    description:
      "Data-driven strategies to maximize occupancy, boost RevPAR, and refine pricing models using market intelligence, competitive analysis, and predictive forecasting.",
  },
  {
    title: "Brand Experience & Guest Journey Design",
    description:
      "Designing distinctive, emotionally engaging guest experiences through brand alignment, service touchpoint mapping, and immersive journey strategies that foster loyalty and lasting impact.",
  },
];

export const OurServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-20 md:py-28 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/untitled-design--20--1.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-14 sm:mb-16 md:mb-20 opacity-0 animate-fade-in">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-14 h-px bg-gradient-to-r from-accent-gold to-accent-gold-light" />
            <span className="tracking-[0.25em] text-sm font-semibold text-accent-gold-light uppercase">
              Our Services
            </span>
            <div className="w-14 h-px bg-gradient-to-l from-accent-gold to-accent-gold-light" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-4xl">
            Elevating{" "}
            <span className="text-primary-1 bg-clip-text italic">
              hospitality standards
            </span>{" "}
            through tailored consultancy
          </h2>

          <p className="text-white mt-5 text-base sm:text-lg max-w-2xl leading-relaxed">
    We empower hotels and resorts with strategic insights, operational excellence, and innovative guest experience design—turning every stay into a memorable, brand-defining moment. 
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 sm:gap-8 md:gap-10 w-full px-4">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="group relative w-full md:w-1/3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              {/* Gradient Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-1 via-accent-gold-light to-primary-1 rounded-2xl blur-sm opacity-0 transition duration-500"></div>

              {/* Card */}
              <div className="relative h-full bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg transition-all duration-300 p-8 text-center group-hover:scale-105">
                <h3 className="text-lg sm:text-xl font-semibold uppercase mb-3 text-primary-1 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed">
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
