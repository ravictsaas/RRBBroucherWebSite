import { motion } from 'motion/react';
import { Bell, ArrowRight } from 'lucide-react';

export default function LiveUpdatesBanner() {
  return (
    <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Bell className="w-4 h-4 text-blue-200" />
        </motion.div>
        <span className="hidden sm:inline">
          <strong className="font-bold">Latest Update (March 2026):</strong> The Renters' Rights Act implementation date is confirmed for May 1, 2026.
        </span>
        <span className="sm:hidden">
          <strong>Update:</strong> Implementation confirmed for May 1, 2026.
        </span>
        <a href="#timeline" className="inline-flex items-center gap-1 text-blue-200 hover:text-white underline decoration-blue-400 underline-offset-2 transition-colors">
          View Timeline <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
