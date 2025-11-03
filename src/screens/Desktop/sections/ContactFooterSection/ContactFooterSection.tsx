import React, { useState } from "react";
import { motion } from "framer-motion";

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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
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
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (): Promise<void> => {
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields (First name, Email, Message).");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://authentic-butterfly-cae2bbac6b.strapiapp.com/api/Contact-uses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      alert("Thank you for your message! We'll get back to you soon.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
            <h2 className="font-heading-3 text-[#434343] text-3xl md:text-4xl leading-tight">
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
            <div className="w-full space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-body-2 text-neutral-2 text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-neutral-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body-2 text-neutral-2 text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-neutral-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body-2 text-neutral-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 border border-neutral-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body-2 text-neutral-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 border border-neutral-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body-2 text-neutral-2 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="px-4 py-3 border border-neutral-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: !loading ? 1.02 : 1 }}
                whileTap={{ scale: !loading ? 0.98 : 1 }}
                onClick={!loading ? handleSubmit : undefined}
                disabled={loading}
                className={`w-full px-6 py-4 text-white text-[length:var(--label-2-font-size)] text-center leading-[var(--label-2-line-height)] font-label-2 rounded-lg transition-opacity shadow-lg cursor-pointer ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-1 hover:opacity-90"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-neutral-4" />

        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <p className="flex items-center justify-center flex-1 font-body-1 text-neutral-2 text-base">
            <span className="text-neutral-2">© 2025 Inteo. Template by </span>
            <span className="text-primary-1 ml-1">Framerize</span>
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
