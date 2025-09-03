import { motion } from "framer-motion";
import { Lightbulb, NotebookPen, Star, MessageSquareHeart } from "lucide-react";

const steps = [
  {
    name: "01. Vision & Consultation",
    description:
      "We start by listening. We dive deep into your story, goals, and dreams to build a shared vision for your event.",
    Icon: Lightbulb,
  },
  {
    name: "02. Creative Planning & Design",
    description:
      "Our team crafts a bespoke blueprint, weaving together creative themes, logistics, and technology to design a seamless experience.",
    Icon: NotebookPen,
  },
  {
    name: "03. Meticulous Execution",
    description:
      "With precision and passion, our on-ground team brings every detail to life, ensuring a flawless and memorable occasion.",
    Icon: Star,
  },
  {
    name: "04. Feedback & Follow-Up",
    description:
      "Our partnership doesn't end with the event. We ensure every detail is wrapped up and gather feedback to keep improving.",
    Icon: MessageSquareHeart,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 sm:py-24 bg-gray-50"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2
            id="process-title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Our Blueprint for Unforgettable Moments
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We follow a proven, collaborative process to ensure every event is a
            masterpiece of planning and execution.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <step.Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  {step.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
