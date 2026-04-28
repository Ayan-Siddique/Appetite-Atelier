import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Premium Ambience",
    desc: "Step into a space designed to impress — warm lighting, aesthetic interiors, and a vibe that makes every moment feel special",
  },
  {
    id: "02",
    title: "Crafted Food & Drinks",
    desc: "Our menu is thoughtfully curated with flavors that comfort and creations that excite, paired perfectly with signature beverages.",
  },
  {
    id: "03",
    title: "Perfect Hangout Spot",
    desc: "Whether it’s a date night, a casual meetup, or a celebration, Appetite Atelier is where great memories are made.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 bg-[var(--bg)]">
      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="text-sm text-[var(--text)] tracking-widest">WHY US</h3>
        <h2 className="text-4xl text-[var(--primary)]">
          Why Choose Our Restaurant
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group bg-[var(--surface)] py-[50px] px-[30px] transition-all duration-300 ease-in-out  rounded-lg shadow-md 
             hover:pt-[30px] hover:px-[30px] hover:pb-[70px] hover:bg-[var(--primary)] 
        "
          >
            <span
              className="text-4xl text-[var(--primary)] font-bold 
                   group-hover:text-black"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.id}
            </span>

            <h4
              className="text-xl text-white font-semibold mt-4 
                 group-hover:text-black"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.title}
            </h4>

            <p
              className="text-gray-600 mt-2 
                group-hover:text-[var(--contrast-color)]"
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
