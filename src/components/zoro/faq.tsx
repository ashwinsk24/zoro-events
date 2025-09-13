import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of events do you handle?",
    answer:
      "We handle a wide spectrum of events! Our expertise covers corporate events like product launches and expos, personal celebrations such as weddings and baptisms, and high-energy college fests.",
  },
  {
    question: "Can you work with a specific theme or concept?",
    answer:
      "Absolutely. We love bringing creative visions to life. We work closely with you to understand your theme and design a bespoke experience, from decor and lighting to entertainment and tech integration.",
  },
  {
    question: "What is your process for planning an event?",
    answer:
      "Our process is collaborative and transparent. It begins with a deep dive into your vision, followed by creative planning, meticulous execution by our on-ground team, and post-event follow-up to ensure every detail is perfect.",
  },
  {
    question: "Do you operate outside of Ernakulam?",
    answer:
      "While we are based in Angamaly, Ernakulam, we have the capability and network to manage events across Kerala and other parts of South India. Let's discuss your location and requirements!",
  },
];

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex h-7 items-center">
          {isOpen ? (
            <Minus className="h-6 w-6" />
          ) : (
            <Plus className="h-6 w-6" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-base text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-20 sm:py-24 bg-gray-50"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2
              id="faq-title"
              className="text-4xl font-bold tracking-tight text-gray-900"
            >
              Have Questions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find quick answers to common questions below. If you don't see
              what you're looking for, feel free to reach out to us directly.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 lg:col-span-7 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
