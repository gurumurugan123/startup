import { about } from "../data/content";

export default function About() {
  return (
    <div
      className="section"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 dark:text-white" data-aos="fade-up">{about.title}</h2>
      <p className="text-gray-600 max-w-3xl mb-8 dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">{about.paragraph}</p>
      
    </div>
  );
}
