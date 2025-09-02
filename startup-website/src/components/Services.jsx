import { services } from "../data/content";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">What We Do</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(s => {
          const Icon = Icons[s.icon] ?? Icons.Code;
          return (
            <div key={s.title} className="p-6 rounded-2xl shadow-soft bg-white hover:shadow-lg transition">
              <Icon className="w-6 h-6 mb-3" />
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
