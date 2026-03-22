import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Globe } from 'lucide-react';
import { SplineScene } from "@/src/components/ui/splite";
import { Spotlight } from "@/src/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-black">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full opacity-60"
          />
        </Suspense>
      </div>

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Background Mesh Overlay */}
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none z-[1]" />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-blue-400 border-blue-500/20"
        >
          <Shield size={16} />
          <span>Secure. Scalable. Intelligent.</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient leading-[1.1]">
          Chenna Keshava R
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          DevSecOps Engineer | AI Automation Developer | Full Stack Developer
          <span className="block mt-4 text-white font-medium italic">
            “I build secure, AI-powered digital systems that scale.”
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#projects" className="group relative px-8 py-4 bg-white text-black rounded-2xl font-semibold flex items-center gap-2 overflow-hidden focus:outline-none scroll-smooth">
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>

          <a href="#contact" className="px-8 py-4 glass hover:bg-white/10 transition-colors rounded-2xl font-semibold border-white/10 focus:outline-none scroll-smooth">
            Contact
          </a>
        </div>
      </motion.div>

      {/* Floating UI Cards */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
        <FloatingCard 
          icon={<Cpu className="text-blue-400" />} 
          title="AI Automation" 
          delay={0.5} 
          className="top-[20%] left-[10%]" 
        />
        <FloatingCard 
          icon={<Shield className="text-emerald-400" />} 
          title="DevSecOps" 
          delay={0.7} 
          className="bottom-[25%] left-[15%]" 
        />
        <FloatingCard 
          icon={<Globe className="text-purple-400" />} 
          title="Full Stack" 
          delay={0.9} 
          className="top-[25%] right-[10%]" 
        />
      </div>
    </section>
  );
}

function FloatingCard({ icon, title, delay, className }: { icon: React.ReactNode, title: string, delay: number, className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: 1, 
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
      }}
      className={`absolute p-6 glass flex items-center gap-4 ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-white/90">{title}</p>
        <div className="h-1 w-12 bg-blue-500/30 rounded-full mt-2 overflow-hidden">
          <motion.div 
            animate={{ x: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-full w-full bg-blue-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
