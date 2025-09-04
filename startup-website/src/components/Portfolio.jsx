import { projects } from "../data/content";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Portfolio() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Our Work
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
          >
            <HoverSlideshow images={p.images} alt={p.name} />

            {/* Info */}
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base">{p.name}</h3>
                <span className="text-xs text-gray-500">{p.tag}</span>
              </div>
              <div className="flex space-x-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brandBlue hover:text-brandPurple transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// 🖼️ Slideshow with sliding effect on hover
function HoverSlideshow({ images, alt }) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (hovering) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 1500); // change every 1.5s
    } else {
      setIndex(0); // reset to first image
    }
    return () => clearInterval(interval);
  }, [hovering, images.length]);

  return (
    <div
      className="relative w-full h-48 overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="flex h-48 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={alt}
            className="w-full h-48 object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
