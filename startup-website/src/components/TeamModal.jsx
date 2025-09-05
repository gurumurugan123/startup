
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-auto text-center p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brandPurple shadow-lg"
          />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
          <p className="text-brandPurple font-semibold mb-4">{member.role}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
