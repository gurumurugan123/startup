import { team } from "../data/content";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Meet Our Team
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            className="p-6 rounded-2xl bg-white shadow-soft text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.img
              src={m.avatar}
              alt={m.name}
              className="w-20 h-20 rounded-full mx-auto mb-3 object-cover shadow-md"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <div className="font-semibold text-lg">{m.name}</div>
            <div className="text-gray-600 text-sm mb-3">{m.role}</div>

            <motion.div
              className="flex justify-center gap-4 text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="hover:text-brandBlue" />
              </a>
              <a href={m.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className="hover:text-black" />
              </a>
              <a href={`mailto:${m.email}`}>
                <FaEnvelope size={20} className="hover:text-red-500" />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
