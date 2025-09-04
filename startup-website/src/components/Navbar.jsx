import { nav } from "../data/content";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="section flex items-center justify-between h-16">

        {/* Logo with Tilted Ladder Icon */}
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
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
              className="text-sm hover:text-brandPurple transition-colors"
            >
              {i.label}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 rounded-xl bg-brandBlue text-white hover:opacity-90 transition"
        >
          Contact
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="section py-3 flex flex-col">
            {nav.map(i => (
              <a
                key={i.href}
                href={i.href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
