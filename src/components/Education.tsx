import { motion } from 'framer-motion';

const education = [
  { 
    degree: "MSc Cyber Security and Emerging Threats", 
    institution: "Middlesex University Dubai", 
    duration: "2025 – 2026", 
    description: "Focused on advanced cybersecurity concepts, emerging threats, and secure system design.", 
    icon: "🎓" 
  },
  { 
    degree: "Certified Penetration Tester", 
    institution: "RedTeam Hacker Academy", 
    duration: "2024 – 2025", 
    description: "Hands-on training in ethical hacking, penetration testing, and vulnerability exploitation.", 
    icon: "🛡️" 
  },
  { 
    degree: "BCA – Computer Science", 
    institution: "IZEE College of Management & Information Science", 
    duration: "2021 – 2024", 
    description: "Built strong foundations in programming, systems, and software development.", 
    icon: "💻" 
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
        <p className="text-white/40 text-lg">Academic foundation and specialized certifications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group glass p-8 relative overflow-hidden"
          >
            <div className="text-4xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.degree}</h3>
            <p className="text-blue-400/80 text-sm font-medium mb-4">{item.institution}</p>
            <p className="text-white/40 text-xs font-bold mb-4 uppercase tracking-widest">{item.duration}</p>
            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            
            {/* Subtle Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
