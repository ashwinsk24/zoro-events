import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for combining Tailwind classes
function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

// Define the categories for filtering
const filters = ["All", "Corporate", "Weddings", "College"];

// Sample gallery items. Replace these with your actual event photos.
const items = [
  {
    id: 1,
    category: "Weddings",
    imageUrl: "/images/zoro1.webp",
    title: "Lakeside Union",
  },
  {
    id: 2,
    category: "Corporate",
    imageUrl: "/images/zoro2.webp",
    title: "Tech Summit 2025",
  },
  {
    id: 3,
    category: "College",
    imageUrl: "/images/zoro3.webp",
    title: "Vibrations '25",
  },
  {
    id: 4,
    category: "Weddings",
    imageUrl: "/images/zoro4.webp",
    title: "Garden Vows",
  },
  {
    id: 5,
    category: "Corporate",
    imageUrl: "/images/zoro5.webp",
    title: "Future Innovations Expo",
  },
  {
    id: 6,
    category: "College",
    imageUrl: "/images/zoro6.webp",
    title: "Canvas & Beats",
  },
  {
    id: 7,
    category: "Weddings",
    imageUrl: "/images/zoro7.webp",
    title: "Twilight Celebration",
  },
  {
    id: 8,
    category: "Corporate",
    imageUrl: "/images/zoro8.webp",
    title: "Global Marketers Meet",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-24 bg-white"
      aria-labelledby="gallery-title"
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
            id="gallery-title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Our Stage, Your Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Explore a curated collection of moments we've helped create. See the
            diversity and quality of our work firsthand.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="mt-10 flex justify-center flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md aspect-w-3 aspect-h-4"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
