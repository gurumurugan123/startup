import { about } from "../data/content";

export default function About() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{about.title}</h2>
      <p className="text-gray-600 max-w-3xl mb-8">{about.paragraph}</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {about.cards.map(c => (
          <div key={c.title} className="p-6 rounded-2xl shadow-soft bg-white hover:-translate-y-0.5 transition">
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-600 text-sm">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
