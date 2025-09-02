import { projects } from "../data/content";

export default function Portfolio() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Our Work</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.name} className="rounded-2xl overflow-hidden bg-white shadow-soft">
            <img src={p.image} alt={p.name} className="w-full h-44 object-cover hover:scale-105 transition-transform" />
            <div className="p-5 flex items-center justify-between">
              <h3 className="font-semibold text-sm pr-2">{p.name}</h3>
              <a href={p.live} target="_blank" rel="noreferrer"
                 className="text-brandBlue text-sm hover:text-brandPurple">View Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
