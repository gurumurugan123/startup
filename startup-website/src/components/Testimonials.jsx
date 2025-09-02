import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.name} className="p-6 rounded-2xl bg-white shadow-soft">
            <p className="italic text-gray-700">“{t.quote}”</p>
            <div className="mt-3 font-semibold">— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
