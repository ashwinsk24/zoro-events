import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Asha & Rohan",
    handle: "Wedding Client",
    text: "ZORO didn't just plan our wedding; they orchestrated a dream. Every detail was flawless, and they handled everything with such grace. Our guests are still talking about it!",
    stars: 5,
  },
  {
    name: "Sunil Kumar",
    handle: "Marketing Director, Nexus Innovations",
    text: "For our annual tech summit, the execution was impeccable. The ZORO team's professionalism and tech integration capabilities are second to none. A truly seamless experience.",
    stars: 5,
  },
  {
    name: "St. Teresa's College",
    handle: "Arts Festival Committee",
    text: "They took our college fest to a whole new level! The stage, sound, and lighting were epic. ZORO understood our vision and brought an incredible energy to the campus.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 bg-white"
      aria-labelledby="testimonials-title"
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
            id="testimonials-title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Stories We've Helped Write
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with ZORO Events.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-1 sm:gap-6 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center text-yellow-500">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 text-gray-700">
                <p>{`“${testimonial.text}”`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600">{`@${testimonial.handle}`}</div>
                </div>
              </figcaption>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
