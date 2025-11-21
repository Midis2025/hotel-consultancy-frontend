import { useState, useEffect } from "react";
import { CircularTestimonials } from "../../../../components/ui/circular-testimonials";
import { motion } from "framer-motion";

interface TestimonialPhoto {
  url: string;
}

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  rating: number;
  date: string;
  photo?: TestimonialPhoto;
}

interface TestimonialData {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating?: number;
  date?: string;
}

export const TestimonialsSection = (): JSX.Element => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://fantastic-action-a4994b9fe6.strapiapp.com/api/testimonials?populate=*"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();
        
        // Transform API data to match component format
        const transformedData = data.data.map((item: Testimonial) => ({
          quote: item.testimonial,
          name: item.name,
          designation: `${item.title}, ${item.company}`,
          src: item.photo?.url || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
          rating: item.rating,
          date: item.date,
        }));

        setTestimonials(transformedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials");
        // Fallback to empty array
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);
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
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-20"
          >
            <div className="text-text-heading text-lg">Loading testimonials...</div>
          </motion.div>
        ) : error || testimonials.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-20"
          >
            <div className="text-text-heading text-lg">
              {error || "No testimonials available"}
            </div>
          </motion.div>
        ) : (
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
        )}
      </div>
    </section>
  );
};
