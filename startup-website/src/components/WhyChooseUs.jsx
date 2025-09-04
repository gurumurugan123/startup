import { whyChooseUs } from "../data/content";
import { Star, ShieldCheck, Headphones, Rocket } from "lucide-react"; // Example icons

const icons = [Star, ShieldCheck, Headphones, Rocket]; // cycle through

export default function WhyChooseUs() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 dark:text-white" data-aos="fade-up">Why Choose Us?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUs.map((item, index) => {
          const Icon = icons[index % icons.length]; // pick icon
          return (
            <div
              key={item}
              className="p-6 rounded-2xl bg-white shadow-soft transform transition duration-500 hover:-translate-y-2 hover:shadow-lg hover:scale-105 dark:bg-gray-800 dark:shadow-none"
              data-aos="fade-up" data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-6 h-6 text-brandPurple" />
                <span className="text-brandPurple font-semibold">{item}</span>
              </div>
              <p className="text-gray-600 text-sm dark:text-gray-300">We focus on results, quality, and support.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
