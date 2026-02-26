import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-teal-600 to-black opacity-90"></div>

      {/* Animated Glow Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-teal-500 rounded-full blur-[150px] opacity-20 animate-pulse top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-20 animate-pulse bottom-[-150px] right-[-150px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } }
        }}
        className="relative z-10 text-center max-w-4xl px-4 sm:px-6"
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight"
        >
          Nova Scotia’s Most
          <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
            {" "}Premium Cleaning
          </span>
          Service
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white"
        >
          Luxury-level residential & commercial cleaning with unmatched attention to detail.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-2xl text-sm sm:text-base md:text-lg font-semibold"
        >
          Get a Free Quote
        </motion.button>
      </motion.div>
    </section>
  );
}