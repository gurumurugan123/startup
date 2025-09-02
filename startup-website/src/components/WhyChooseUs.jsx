import { whyChooseUs } from "../data/content";

export default function WhyChooseUs() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose Us?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUs.map(item => (
          <div key={item} className="p-6 rounded-2xl bg-white shadow-soft hover:-translate-y-0.5 transition">
            <div className="text-brandPurple font-semibold">{item}</div>
            <p className="text-gray-600 text-sm mt-1">We focus on results, quality, and support.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
