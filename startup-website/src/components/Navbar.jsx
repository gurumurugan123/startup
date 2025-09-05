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
      ? "text-primary"
      : "text-sm hover:text-primary transition-colors text-muted-foreground";
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="section flex items-center justify-between h-16">

        {/* Logo with Abstract Shape */}
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-background rounded-sm transform rotate-45"></div>
          </div>
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
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen border-t" : "max-h-0"}`}>
        <div className="section py-3 flex flex-col">
          {nav.map(i => (
            <a
              key={i.href}
              href={i.href}
              className="py-2 text-muted-foreground"
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
