import { nav } from "../data/content";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="section flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-lg">Startup<span className="text-brandBlue">.</span></a>
        <nav className="hidden md:flex gap-6">
          {nav.map(i => (
            <a key={i.href} href={i.href} className="text-sm hover:text-brandPurple">{i.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-xl bg-brandBlue text-white hover:opacity-90">Contact</a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="section py-3 flex flex-col">
            {nav.map(i => (
              <a key={i.href} href={i.href} className="py-2" onClick={() => setOpen(false)}>{i.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
