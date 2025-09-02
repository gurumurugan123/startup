import { team } from "../data/content";

export default function Team() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Meet Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map(m => (
          <div key={m.name} className="p-6 rounded-2xl bg-white shadow-soft text-center">
            <img src={m.avatar} alt={m.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"/>
            <div className="font-semibold">{m.name}</div>
            <div className="text-gray-600 text-sm">{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
