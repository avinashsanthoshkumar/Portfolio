import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm text-white py-6 md:py-8 px-4 transition-colors duration-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base"
        >
          Built with <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
          >
            <Heart size={16} className="text-red-500 fill-red-500" />
          </motion.span> by Avinash Santosh Kumar
        </motion.p>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}