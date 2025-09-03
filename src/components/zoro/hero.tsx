import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      aria-labelledby="hero-title"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://placehold.co/1920x1080/000000/FFFFFF?text=ZORO+EVENTS"
      >
        {/* Provide WebM first for modern browsers */}
        <source src="/videos/showreel.webm" type="video/webm" />
        {/* MP4 as a fallback */}
        <source src="/videos/showreel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-pretty"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Story, Our Stage.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          From spectacular corporate launches to intimate personal celebrations,
          ZORO brings every vision to life with passion, precision, and
          creativity.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="#gallery"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg hover:bg-gray-200 transition-colors"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Plan Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
