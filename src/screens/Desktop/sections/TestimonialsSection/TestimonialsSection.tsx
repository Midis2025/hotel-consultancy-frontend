import React from "react";
import { CircularTestimonials } from "../../../../components/ui/circular-testimonials";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The consultancy team transformed our hotel operations completely. Their expertise in service standards helped us achieve a 40% increase in guest satisfaction scores. Highly recommend their services!",
    name: "Sarah Mitchell",
    designation: "General Manager, Grand Plaza Hotel",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
  },
  {
    quote:
      "Working with this consultancy was a game-changer for our boutique resort. They helped us refine our guest experience strategy and boost revenue by 35%. Their professionalism is unmatched.",
    name: "Michael Chen",
    designation: "Owner, Seaside Luxury Resort",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
  },
  {
    quote:
      "The operational excellence audit revealed insights we never knew existed. Our team's performance improved dramatically, and our guests notice the difference. Thank you for your exceptional guidance!",
    name: "Emma Rodriguez",
    designation: "Director of Operations, Mountain View Inn",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full mb-4  bg-bg-warm">
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
              TESTIMONIALS
            </div>
            <img
              className="w-16 h-px object-cover"
              alt="Line"
              src="/line.svg"
            />
          </div>

          <h2 className="font-heading-3 text-text-heading text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl">
            What our <span className="italic text-primary-1">clients</span> say
            about us
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "var(--text-heading)",
              designation: "var(--neutral-2)",
              testimony: "var(--neutral-1)",
              arrowBackground: "var(--primary-1)",
              arrowForeground: "var(--white)",
              arrowHoverBackground: "var(--accent-gold)",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "18px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
