import { motion } from "framer-motion";

import g1 from "../asset/img/gallery/gallery-1.png";
import g2 from "../asset/img/gallery/gallery-2.png";
import g3 from "../asset/img/gallery/gallery-3.png";
import g4 from "../asset/img/gallery/gallery-4.png";
import g5 from "../asset/img/gallery/gallery-5.png";
import g6 from "../asset/img/gallery/gallery-6.png";
import g7 from "../asset/img/gallery/gallery-7.png";
import g8 from "../asset/img/gallery/gallery-8.png";

const images = [g1, g2, g3, g4, g5, g6, g7, g8];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-[var(--bg)]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-sm text-[var(--text)] tracking-widest">GALLERY</h2>
        <p
          className="text-4xl  text-[var(--primary)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Some photos from Our Restaurant
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
