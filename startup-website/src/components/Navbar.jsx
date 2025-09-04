import { nav } from "../data/content";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(nav.map(item => item.href.substring(1)));

  const getLinkClass = (section) => {
    return activeSection === section.substring(1)
      ? "text-brandPurple dark:text-brandPurple"
      : "text-sm hover:text-brandPurple transition-colors dark:text-gray-300 dark:hover:text-brandPurple";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b dark:bg-gray-900/80 dark:border-gray-800">
      <div className="section flex items-center justify-between h-16">

        {/* Logo with Tilted Ladder Icon */}
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg dark:text-white">
          {/* Tilted Ladder SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-brandPurple rotate-6" // slight tilt
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Two vertical (slanted) ladder sides */}
            <line x1="8" y1="3" x2="6" y2="21" />
            <line x1="20" y1="5" x2="18" y2="23" />
            {/* Ladder steps (slanted) */}
            <line x1="7" y1="7" x2="19" y2="9" />
            <line x1="6.5" y1="11" x2="18.5" y2="13" />
            <line x1="6" y1="15" x2="18" y2="17" />
            <line x1="5.5" y1="19" x2="17.5" y2="21" />
          </svg>

          StandUp
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {nav.map(i => (
            <a
              key={i.href}
              href={i.href}
              className={getLinkClass(i.href)}
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Contact Button */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-brandBlue text-white hover:opacity-90 transition"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2 dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen border-t dark:border-gray-800" : "max-h-0"
        }`}
      >
        <div className="section py-3 flex flex-col">
          {nav.map(i => (
            <a
              key={i.href}
              href={i.href}
              className="py-2 dark:text-gray-300"
              onClick={() => setOpen(false)}
            >
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
