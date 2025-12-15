import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-40 flex items-center justify-center bg-white/70 backdrop-blur-sm z-[9999]">
      <div className="flex flex-col items-center space-y-4">
        
        {/* Spinning Circle */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="w-14 h-14 border-4 border-gray-300 border-t-blue-600 rounded-full"
        />

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="text-gray-800 font-medium text-lg tracking-wide"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
