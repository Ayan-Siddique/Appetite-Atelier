import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../asset/img/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--bg)] shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="text-[var(--heading)] text-3xl font-bold">
            Appetite Atelier
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[var(--text)]">
          <HashLink smooth to="/#hero">
            Home
          </HashLink>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <HashLink smooth to="/#menu">
            Menu
          </HashLink>
          <HashLink smooth to="/#gallery">
            Gallery
          </HashLink>
        </nav>

        {/* CTA */}
        <Link
          to="/reservation"
          className="hidden md:block text-white border border-[var(--primary)] px-6 py-2 rounded-4xl hover:bg-[var(--primary)] hover:text-white transition"
        >
          Book a Table
        </Link>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[var(--bg)] shadow-lg z-50"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-[var(--text)]">
              <HashLink smooth to="/#hero" onClick={() => setMenuOpen(false)}>
                Home
              </HashLink>
              <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>
                About
              </HashLink>
              <HashLink smooth to="/#menu" onClick={() => setMenuOpen(false)}>
                Menu
              </HashLink>
              <HashLink
                smooth
                to="/#gallery"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </HashLink>
              {/*  onClick={() => setMenuOpen(false)} */}
              <Link
                to="/reservation"
                onClick={() => setMenuOpen(false)}
                className="bg-[var(--primary)] text-white px-5 py-2 rounded"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
