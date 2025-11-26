import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-md" : "bg-black/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="logo text-white">
          Niveditha Unni
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-4">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  className="px-4 py-2 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:block contact-btn text-white group"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        {/* Mobile Hamburger / Close Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-black z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside menu */}
        {/* <button
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button> */}

        <ul className="flex flex-col mt-20 space-y-6 px-6">
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 text-center transition-all duration-300"
              >
                {name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="contact-btn w-full flex justify-center mt-4"
            >
              <div className="inner">
                <span>Contact me</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
