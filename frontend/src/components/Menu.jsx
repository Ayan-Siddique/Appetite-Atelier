import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../asset/img/menu/lobster-bisque.jpg";
import img2 from "../asset/img/menu/bread-barrel.jpg";
import img3 from "../asset/img/menu/cake.jpg";
import img4 from "../asset/img/menu/caesar.jpg";
import img5 from "../asset/img/menu/tuscan-grilled.jpg";
import img6 from "../asset/img/menu/mozzarella.jpg";
import img7 from "../asset/img/menu/greek-salad.jpg";
import img8 from "../asset/img/menu/spinach-salad.jpg";
import img9 from "../asset/img/menu/lobster-roll.jpg";

const menuData = [
  { name: "Lobster Bisque", price: "$5.95", category: "starters", img: img1 },
  { name: "Bread Barrel", price: "$6.95", category: "specialty", img: img2 },
  { name: "Crab Cake", price: "$7.95", category: "starters", img: img3 },
  { name: "Caesar Salad", price: "$8.95", category: "salads", img: img4 },
  { name: "Tuscan Grilled", price: "$9.95", category: "specialty", img: img5 },
  { name: "Mozzarella", price: "$4.95", category: "starters", img: img6 },
  { name: "Greek Salad", price: "$9.95", category: "salads", img: img7 },
  { name: "Spinach Salad", price: "$9.95", category: "salads", img: img8 },
  { name: "Lobster Roll", price: "$12.95", category: "specialty", img: img9 },
];

export default function Menu() {
  const [filter, setFilter] = useState("all");

  const filteredMenu =
    filter === "all"
      ? menuData
      : menuData.filter((item) => item.category === filter);

  return (
    <section id="menu" className="py-16 bg-[var(--surface)]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-sm text-[var(--text)] tracking-widest">MENU</h2>
        <p
          className="text-4xl text-[var(--primary)] "
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Check Our Tasty Menu
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {["all", "starters", "salads", "specialty"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded capitalize ${
              filter === cat
                ? "bg-[var(--primary)] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="wait">
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4 items-start"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full object-center"
              />

              <div className="w-full">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <div className="flex-grow border-b border-dotted border-gray-500 opacity-50"></div>

                  <span className="text-[var(--primary)]">{item.price}</span>
                </div>

                <p className="text-gray-500 text-sm">
                  Delicious and freshly prepared dish.
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
