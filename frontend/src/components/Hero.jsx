import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "../asset/img/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden" id="hero">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay Content */}
      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              Welcome to{" "}
              <span className="text-[var(--primary)]">Appetite Atelier</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-lg"
            >
              When Vintage charm meets modern taste!
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="border border-[var(--primary)] px-6 py-2 rounded-4xl hover:bg-[var(--primary)] hover:text-white transition"
              >
                Our Menu
              </a>

              <Link
                to="/reservation"
                className="border border-[var(--primary)] px-6 py-2 rounded-4xl hover:bg-[var(--primary)] hover:text-white transition"
              >
                Book a Table
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
