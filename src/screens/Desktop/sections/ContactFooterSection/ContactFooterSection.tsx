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
}

const contactInfoData: ContactInfo[] = [
  {
    label: "Brooklyn, New York",
    value: "ABC street, XYZ",
  },
  {
    label: "Email us at",
    value: "hello@abcdef.com",
  },
  {
    label: "If you're in a hurry, quick call for us",
    value: "0006664544",
  },
];

const socialIcons: SocialIcon[] = [
  { src: "/social-icons-3.svg", alt: "Social icons" },
  { src: "/social-icons-2.svg", alt: "Social icons" },
  { src: "/social-icons-1.svg", alt: "Social icons" },
  { src: "/social-icons.svg", alt: "Social icons" },
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
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 flex-1"
          >
            <h2 className="font-heading-3 text-text-heading text-3xl md:text-4xl leading-tight">
              Kick-start your dream hospitality project with us
            </h2>

            <p className="font-heading-3 text-primary-1 text-3xl md:text-4xl italic">
              Send us a hi
            </p>

            <div className="flex flex-col items-start gap-6 mt-4">
              {contactInfoData.map((info, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="font-body-2 text-neutral-2 text-sm">
                    {info.label}
                  </div>
                  <div className="font-heading-6 text-primary-1 text-xl">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

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

        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <p className="flex items-center justify-center flex-1 font-body-1 text-neutral-2 text-base">
            <span className="text-neutral-2">© 2025  </span>
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
              <motion.img
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 cursor-pointer"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
