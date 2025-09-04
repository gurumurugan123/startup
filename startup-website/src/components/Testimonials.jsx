import { testimonials } from "../data/content";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="section text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        What Our <span className="text-brandPurple">Clients Say</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={t.name}
            className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Quote icon */}
            <FaQuoteLeft className="absolute top-4 left-4 text-brandPurple/30 text-2xl" />

            {/* Client Avatar (if available) */}
            {t.avatar && (
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full mx-auto mb-4 object-cover border-2 border-brandPurple"
              />
            )}

            {/* Testimonial Text */}
            <p className="italic text-gray-700 leading-relaxed">“{t.quote}”</p>

            {/* Star Ratings */}
            <div className="flex justify-center mt-4 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < (t.rating || 5) ? "" : "text-gray-300"} />
              ))}
            </div>

            {/* Client Name */}
            <div className="mt-4 font-semibold text-gray-900">— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
