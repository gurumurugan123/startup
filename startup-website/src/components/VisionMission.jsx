import { visionMission } from "../data/visionMission";

export default function VisionMission() {
  return (
    <div
      className="section"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 dark:text-white" data-aos="fade-up">{visionMission.title}</h2>
      <p className="text-gray-600 max-w-3xl mb-8 dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">{visionMission.paragraph}</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {visionMission.cards.map((c, index) => (
          <div
            key={c.title}
            className="p-6 rounded-2xl shadow-soft bg-white hover:-translate-y-0.5 transition dark:bg-gray-800 dark:shadow-none"
            data-aos="fade-up" data-aos-delay={index * 100}
          >
            <h3 className="font-semibold mb-2 dark:text-white">{c.title}</h3>
            <p className="text-gray-600 text-sm dark:text-gray-300">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
