import { motion } from "framer-motion";
import { Briefcase, Heart, School } from "lucide-react";

const services = [
  {
    title: "Corporate & Expos",
    description:
      "From high-impact product launches to large-scale expositions, we deliver professional, tech-forward events that elevate your brand.",
    imageUrl: "/images/zoro-company.webp",
    Icon: Briefcase,
  },
  {
    title: "Weddings & Celebrations",
    description:
      "Creating timeless memories with bespoke planning for weddings, baptisms, and every personal milestone you cherish.",
    imageUrl: "/images/zoro-wedding.webp",
    Icon: Heart,
  },
  {
    title: "College & Campus Fests",
    description:
      "We bring unmatched energy and scale to college tech fests, arts festivals, and campus celebrations that students will never forget.",
    imageUrl: "/images/zoro-campus.webp",
    Icon: School,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-white"
      aria-labelledby="services-title"
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
            id="services-title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Events for Every Occasion
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We specialize in crafting unique experiences across a wide spectrum
            of events. Whatever your story, we have the stage.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <service.Icon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-200">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
