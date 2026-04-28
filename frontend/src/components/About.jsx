import { motion } from "framer-motion";
import aboutImg from "../asset/img/gallery/gallery-3.png";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src={aboutImg}
              alt="about"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl text-[var(--primary)] font-bold mb-4">
              Where Taste Meets Vibe
            </h3>

            <p className="italic text-gray-600 mb-4">
              Welcome to Appetite Atelier Café & Bar — a place where great food
              meets unforgettable vibes. Designed with a unique blend of vintage
              charm and modern aesthetics, our space creates the perfect
              atmosphere for every occasion.
            </p>

            <ul className="text-white space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span>
                <span>Aesthetic interiors designed for comfort and style</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span>
                <span>
                  Carefully crafted menu with signature dishes and drinks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span>
                <span>Perfect space for dates, hangouts, and celebrations</span>
              </li>
            </ul>

            <p className="text-[var(--text)]">
              Whether you're planning a relaxed evening, a special date, or a
              casual meetup with friends, Appetite Atelier offers an experience
              that goes beyond just dining.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
