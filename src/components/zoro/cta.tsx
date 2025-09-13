import { motion } from "framer-motion";

// **IMPORTANT**: Replace with your actual business WhatsApp number.
const whatsappUrl =
  "https://wa.me/918606693695?text=Hello!%20I'm%20interested%20in%20ZORO%20Events%20and%20would%20like%20to%20get%20a%20quote.";

export default function CallToAction() {
  return (
    <section id="contact" className="relative bg-gray-900 py-20 sm:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="/images/zoro-banner.webp"
          alt="A vibrant event managed by ZORO"
        />
        <div
          className="absolute inset-0 bg-black/60 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <motion.div
        className="relative mx-auto max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let's Create Something Unforgettable
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-100">
          Have an idea for your next corporate summit, dream wedding, or college
          fest? Our team is ready to bring your story to the stage.
        </p>
        <div className="mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-5 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
