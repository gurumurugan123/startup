import { services } from "../data/content";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 dark:text-white" data-aos="fade-up">What We Do</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const Icon = Icons[s.icon] ?? Icons.Code;
          return (
            <div key={s.title} className="p-6 rounded-2xl shadow-soft bg-white hover:shadow-lg transition dark:bg-gray-800 dark:shadow-none" data-aos="fade-up" data-aos-delay={i * 100}>
              <Icon className="w-6 h-6 mb-3 text-brandPurple" />
              <h3 className="font-semibold mb-1 dark:text-white">{s.title}</h3>
              <p className="text-gray-600 text-sm dark:text-gray-300">{s.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

