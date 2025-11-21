"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating?: number;
  date?: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay && testimonialsLength > 0) {
      // Clear any existing interval
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
      
      // Set new interval for auto-scrolling every 2.5 seconds
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 2500);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    // Clear and restart autoplay
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 2500);
    }
  }, [testimonialsLength, autoplay]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    // Clear and restart autoplay
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 2500);
    }
  }, [testimonialsLength, autoplay]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.7,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.7,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        {/* Content */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="name"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="designation"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              {activeTestimonial.rating && (
                <motion.div 
                  className="rating-container"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="stars-wrapper">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className={`star ${
                          i < (activeTestimonial.rating || 0)
                            ? "star-filled"
                            : "star-empty"
                        }`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 12 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <motion.span 
                    className="rating-text"
                    style={{ color: colorDesignation }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {activeTestimonial.rating}/5
                  </motion.span>
                </motion.div>
              )}
              {activeTestimonial.date && (
                <motion.p 
                  className="date-text"
                  style={{ color: colorDesignation }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {new Date(activeTestimonial.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </motion.p>
              )}
              <motion.p
                className="quote"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colorArrowFg}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colorArrowFg}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className="indicator"
                onClick={() => setActiveIndex(index)}
                animate={{
                  width: index === activeIndex ? "32px" : "8px",
                  opacity: index === activeIndex ? 1 : 0.4,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  backgroundColor: colorArrowHoverBg,
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .testimonial-container {
          width: 100%;
          max-width: 56rem;
          padding: 2rem;
          position: relative;
        }
        .testimonial-container::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .testimonial-container::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -50px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .testimonial-grid {
          display: grid;
          gap: 5rem;
          position: relative;
          z-index: 1;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 24rem;
          perspective: 1200px;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 50%, rgba(212, 175, 55, 0.03) 100%);
          border-radius: 2.5rem;
          overflow: visible;
          border: 2px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .image-container:hover {
          box-shadow: 0 30px 80px rgba(212, 175, 55, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-5px);
        }
        .testimonial-image {
          position: absolute;
          width: calc(100% - 3rem);
          height: calc(100% - 3rem);
          object-fit: contain;
          object-position: center;
          border-radius: 1.75rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25), 0 0 1px rgba(212, 175, 55, 0.5);
          top: 1.5rem;
          left: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: brightness(0.95);
        }
        .testimonial-image:hover {
          filter: brightness(1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), 0 0 2px rgba(212, 175, 55, 0.8);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(212, 175, 55, 0.02) 100%);
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(212, 175, 55, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: slideInUp 0.6s ease-out;
        }
        .testimonial-content:hover {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(212, 175, 55, 0.04) 100%);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.08);
          transform: translateY(-3px);
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .name {
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
          text-transform: none;
          animation: fadeInScale 0.5s ease-out;
          font-size: 1.75rem;
          background: linear-gradient(135deg, var(--text-heading) 0%, var(--primary-1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .designation {
          margin-bottom: 1.5rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          animation: fadeInScale 0.6s ease-out 0.1s both;
          font-size: 1.05rem;
          color: var(--primary-1);
          position: relative;
          padding-left: 1rem;
        }
        .designation::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--primary-1);
          font-size: 0.8rem;
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .quote {
          line-height: 1.8;
          font-weight: 400;
          letter-spacing: 0.2px;
          animation: fadeInScale 0.7s ease-out 0.2s both;
          font-size: 1.05rem;
          position: relative;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          color: var(--neutral-1);
        }
        .quote::before {
          content: '"';
          position: absolute;
          left: 0;
          top: -0.5rem;
          font-size: 2.5rem;
          color: var(--primary-1);
          opacity: 0.3;
          font-weight: bold;
        }
        .quote::after {
          content: '"';
          position: absolute;
          right: 0;
          bottom: -1rem;
          font-size: 2.5rem;
          color: var(--primary-1);
          opacity: 0.3;
          font-weight: bold;
        }

        /* Rating Container */
        .rating-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.04) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 0.75rem;
          backdrop-filter: blur(10px);
          animation: slideInUp 0.6s ease-out 0.3s both;
        }

        .stars-wrapper {
          display: flex;
          gap: 0.4rem;
          align-items: center;
        }

        .star {
          font-size: 1.25rem;
          font-weight: bold;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          display: inline-block;
          text-shadow: 0 2px 4px rgba(212, 175, 55, 0.2);
        }

        .star-filled {
          color: #FFD700;
          filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.4));
        }

        .star-empty {
          color: rgba(212, 175, 55, 0.3);
        }

        .star:hover {
          transform: scale(1.3) rotate(15deg);
          filter: drop-shadow(0 4px 8px rgba(212, 175, 55, 0.4));
        }

        .rating-text {
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, var(--primary-1) 0%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Date Text */
        .date-text {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 0.5rem 1rem;
          background: linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%);
          border-left: 2px solid var(--primary-1);
          margin: 0;
          display: inline-block;
          border-radius: 0.25rem;
          animation: slideInUp 0.6s ease-out 0.4s both;
        }

        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          padding-top: 2rem;
          animation: slideInUp 0.8s ease-out 0.3s both;
          align-items: center;
          justify-content: center;
        }
        .arrow-button {
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid currentColor;
          font-size: 0;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .arrow-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: currentColor;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: -1;
        }
        .arrow-button:hover::before {
          transform: translate(-50%, -50%) scale(1);
        }
        .arrow-button:hover {
          box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
          transform: translateY(-2px) scale(1.1);
          letter-spacing: 1px;
        }
        .arrow-button:active {
          transform: translateY(0) scale(0.95);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .arrow-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2), 0 12px 30px rgba(212, 175, 55, 0.3);
        }

        /* Testimonial Indicators */
        .testimonial-indicators {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          padding-top: 2rem;
          animation: slideInUp 0.8s ease-out 0.4s both;
        }
        .indicator {
          height: 8px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          padding: 0;
          min-width: 8px;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.2);
        }
        .indicator:hover {
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
          transform: scaleY(1.2);
        }
        .indicator:active {
          transform: scaleY(0.8);
        }
        .word {
          display: inline-block;
        }
        @media (max-width: 767px) {
          .testimonial-container {
            padding: 1rem;
          }
          .testimonial-container::before {
            width: 150px;
            height: 150px;
            top: -30px;
            right: -30px;
          }
          .testimonial-container::after {
            width: 120px;
            height: 120px;
            bottom: -50px;
            left: -30px;
          }
          .testimonial-grid {
            gap: 2rem;
          }
          .image-container {
            height: 20rem;
            padding: 1rem;
            border-radius: 1.5rem;
          }
          .testimonial-image {
            width: calc(100% - 2rem);
            height: calc(100% - 2rem);
            top: 1rem;
            left: 1rem;
          }
          .testimonial-content {
            padding: 1.5rem;
          }
          .arrow-button {
            width: 2.8rem;
            height: 2.8rem;
          }
          .arrow-buttons {
            gap: 1rem;
            padding-top: 1.5rem;
          }
          .testimonial-indicators {
            gap: 0.5rem;
            padding-top: 1.5rem;
          }
          .indicator {
            height: 6px;
            min-width: 6px;
          }
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          .arrow-buttons {
            padding-top: 0;
          }
          .testimonial-container {
            max-width: 100%;
            padding: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .testimonial-container {
            max-width: 100%;
            padding: 3rem;
          }
          .image-container {
            height: 26rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
