import React from "react";
import { motion } from "framer-motion";
import { ContactFormSlider } from "../../../../components/ContactFormSlider";

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className }) => (
  <div className={`w-full h-px ${className}`} />
);

interface ContactInfo {
  label: string;
  value: string;
}

interface SocialIcon {
  src: string;
  alt: string;
  href: string;
}

const contactInfoData: ContactInfo[] = [
  {
    label: "Our Office",
    value: "News Building, 3 London Bridge Street, London SE1 9SG",
  },
  {
    label: "Email Us",
    value: "aureushospitality2@gmail.com",
  },
  {
    label: "Call Us",
    value: "(+44) 02070960125",
  },
];

const socialIcons: SocialIcon[] = [
  { src: "/social-icons-3.svg", alt: "Instagram", href: "https://www.instagram.com/aureushospitality/" },
  { src: "/social-icons-2.svg", alt: "Facebook", href: "https://www.facebook.com/people/Aureus-Hospitality/61585948814708/" },
  { src: "/social-icons.svg", alt: "X", href: "https://x.com/Aureus0001" },
];

export const ContactFooterSection = (): JSX.Element => {
  return (
    <footer
      id="contact"
      className="flex flex-col w-full items-center gap-20 pt-2 pb-20 px-8 bg-transparent scroll-mt-20"
    >
      <div className="flex flex-col max-w-[1216px] items-start gap-20 w-full">
        
        <Separator className="bg-neutral-4" />

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 w-full">
          
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 flex-1"
          >
            <h2 className="font-heading-3 text-text-heading text-3xl md:text-4xl leading-tight">
              Let’s Elevate Your Hospitality Experience
            </h2>

            <p className="font-heading-3 text-primary-1 text-3xl md:text-4xl italic">
              Talk to our team
            </p>

            <div className="flex flex-col items-start gap-6 mt-4">
              {contactInfoData.map((info, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="font-body-2 text-neutral-2 text-sm">
                    {info.label}
                  </div>
                  <div className="font-heading-6 text-primary-1 text-xl max-w-xs">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>



            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <img
                className="h-60 object-contain"
                alt="Aureus Hospitality Logo"
                src="/logo1.png"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 flex-1 w-full"
          >
            <ContactFormSlider isOpen={true} onClose={() => {}} inline={true} />
          </motion.div>

        </div>

        <Separator className="bg-neutral-4" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <p className="flex items-center justify-center flex-1 font-body-1 text-neutral-2 text-base">
            <span className="text-neutral-2">© 2025 </span>
            <span className="text-primary-1 ml-1">Aureus Hospitality</span>
          </p>

          <div className="items-center justify-end gap-6 flex-1 flex">
            <div className="opacity-70 inline-flex items-center gap-4">
              <div className="font-eyebrow text-neutral-3 tracking-widest">
                CONNECT
              </div>
              <img
                className="w-16 h-px object-cover"
                alt="Line"
                src="/line.svg"
              />
            </div>

            {socialIcons.map((icon, index) => (
              <motion.a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-10 h-10 cursor-pointer"
                  alt={icon.alt}
                  src={icon.src}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

