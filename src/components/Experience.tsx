import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const experience = [
  { 
    role: "VAPT Engineer", 
    company: "CyberPact Solutions Pvt. Ltd.", 
    duration: "May 2023 – April 2025", 
    type: "Full-Time", 
    icon: "🛡️", 
    responsibilities: [
      "Vulnerability assessments/pentesting for web & mobile", 
      "Automated security scanning in CI/CD", 
      "Cloud configuration security"
    ] 
  },
  { 
    role: "DevOps Engineer", 
    company: "Google Developer Student Clubs", 
    duration: "Oct 2022 – March 2023", 
    type: "Internship", 
    icon: "⚙️", 
    responsibilities: [
      "CI/CD pipelines via GitHub Actions", 
      "Docker containerization & Kubernetes deployment", 
      "DevSecOps integration"
    ] 
  },
  { 
    role: "Web Developer", 
    company: "Keyas Cosmetics", 
    duration: "Project-Based", 
    type: "Freelance", 
    icon: "🌐", 
    responsibilities: [
      "Business website design & development", 
      "Modern UI/UX brand presence", 
      "Social media strategy"
    ] 
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
        <p className="text-white/40 text-lg">My evolution in DevSecOps and Engineering.</p>
      </div>

      <div ref={containerRef} className="relative">
        {/* Timeline Line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top hidden md:block"
        />

        <div className="space-y-24">
          {experience.map((item, index) => (
            <ExperienceItem key={item.role} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-[45%] glass p-8 relative group"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{item.role}</h3>
            <p className="text-white/40 text-sm">{item.company}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 uppercase tracking-widest border border-blue-500/20">
            {item.type}
          </span>
          <span className="text-white/20 text-xs font-medium">{item.duration}</span>
        </div>

        <ul className="space-y-3">
          {item.responsibilities.map((resp: string) => (
            <li key={resp} className="text-sm text-white/60 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
              {resp}
            </li>
          ))}
        </ul>

        {/* Connector Dot */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] hidden md:block
          ${isEven ? '-left-[2.6rem]' : '-right-[2.6rem]'}
        `} />
      </motion.div>

      {/* Spacer for Desktop */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}
