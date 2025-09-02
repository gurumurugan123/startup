export default function Footer() {
  return (
    <footer className="border-t">
      <div className="section py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <nav className="flex gap-4">
          {["Home","About","Services","Work","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brandPurple">{l}</a>
          ))}
        </nav>
        <div className="text-gray-600">Copyright © Startup 2025. All rights reserved.</div>
      </div>
    </footer>
  );
}
