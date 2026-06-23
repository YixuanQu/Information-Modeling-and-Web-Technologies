import { Link } from "react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function CoverPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-400">
              Digital Companion
            </p>
            <h1 className="mb-4 font-serif text-6xl tracking-tight text-white md:text-7xl lg:text-8xl">
              LMML
            </h1>
            <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8 text-2xl tracking-wide text-neutral-300 md:text-3xl"
          >
            Rome Cinema Walk
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
          >
            An academic exploration of Rome's cinematic landscape. 
            Journey through 15 iconic locations where cinema and history converge.
          </motion.p>
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link 
            to="/tour/1"
            className="group inline-flex items-center gap-3 border border-neutral-400 bg-black/40 px-8 py-4 backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-neutral-300 transition-colors group-hover:text-white">
              Begin Tour
            </span>
            <ChevronRight className="h-4 w-4 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-white" />
          </Link>
        </motion.div>
        
        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 text-center"
        >
          <p className="text-xs tracking-wider text-neutral-500">
            15 Locations · Academic Research Project · 2026
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            Use ← → arrow keys to navigate between locations
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}