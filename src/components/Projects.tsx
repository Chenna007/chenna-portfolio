import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Cpu, Globe, ShoppingCart, Users } from 'lucide-react';
import { ContainerScroll } from "@/src/components/ui/container-scroll-animation";

const projects = [
  {
    title: "QuantumShield AI Platform for Quantum Cybersecurity Risk Detection",
    description: "QuantumShield is an AI-powered cybersecurity platform that scans websites for cryptographic vulnerabilities exposed by future quantum computing.",
    features: [
      "Domain TLS scan",
      "Quantum risk scoring",
      "3D cyber threat globe",
      "AI-based risk prediction",
      "Basic & advanced reports",
      "Expert consulting"
    ],
    tags: ["AI", "Cybersecurity", "Quantum", "Visualization"],
    liveDemoUrl: "#", // Replace with actual URL if available
    githubUrl: "#", // Replace with actual URL if available
    caseStudyUrl: "",
    badge: "Quantum-Safe",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    icon: <Shield className="text-emerald-400" size={32} />
  },
  { 
    title: "Teamup AI", 
    description: "Location-based AI platform finding activities/teammates via real-time maps and intelligent matching.", 
    features: ["Map discovery", "AI recommendations", "Real-time join", "User messaging"], 
    tags: ["AI", "Startup", "Social App"], 
    liveDemoUrl: "https://teamup-demo.vercel.app", 
    githubUrl: "https://github.com/yourname/teamup-ai", 
    caseStudyUrl: "", 
    badge: "AI-Powered",
    image: "teamup.png",
    icon: <Users className="text-blue-400" size={32} />
  },
  { 
    title: "AI Voice Cold Calling Agent", 
    description: "AI voice system automating outbound calls, interacting naturally, and qualifying prospects.", 
    features: ["Voice conversations", "Lead qualification", "CRM integration", "Analytics"], 
    tags: ["AI", "Automation", "SaaS"], 
    liveDemoUrl: "https://ai-calling-agent.vercel.app", 
    githubUrl: "https://github.com/yourname/ai-calling-agent", 
    caseStudyUrl: "", 
    badge: "Automation",
    image: "real estate.png",
    icon: <Cpu className="text-purple-400" size={32} />
  },
  { 
    title: " BUYME E-commerce Platform", 
    description: "Full-stack system with product management, cart, payment gateway, and admin dashboard.", 
    features: ["Cart & checkout", "Payments", "Order tracking", "Admin dashboard"], 
    tags: ["Web", "Full Stack", "Business"], 
    liveDemoUrl: "https://ecommerce-demo.vercel.app", 
    githubUrl: "https://github.com/yourname/ecommerce-platform", 
    caseStudyUrl: "", 
    badge: "Full Stack",
    image: "buyme.png",
    icon: <ShoppingCart className="text-emerald-400" size={32} />
  },
  { 
    title: "FindMyCoach - Fitness Trainer Marketplace", 
    description: "Fitness trainer marketplace with profiles and subscription booking.", 
    features: ["Trainer profiles", "Booking", "Subscriptions", "Messaging"], 
    tags: ["Marketplace", "SaaS"], 
    liveDemoUrl: "https://letsfitclub.vercel.app", 
    githubUrl: "https://github.com/yourname/letsfitclub", 
    caseStudyUrl: "", 
    badge: "Marketplace",
    image: "findmycoach.png",
    icon: <Globe className="text-blue-400" size={32} />
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-white/40 text-lg">Scroll to explore my engineering portfolio.</p>
      </div>

      <div className="flex flex-col gap-0">
        {projects.map((project, index) => (
          <ContainerScroll
            key={project.title}
            titleComponent={
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 glass rounded-2xl"
                >
                  {project.icon}
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
                  {project.title}
                </h1>
                <p className="text-white/60 max-w-2xl mx-auto text-lg mb-8">
                  {project.description}
                </p>
                <div className="flex gap-4 justify-center mb-12">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="glass p-3 hover:bg-white/10 transition-colors">
                      <Github size={24} />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="glass p-3 hover:bg-white/10 transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            }
          >
            <div className="relative w-full h-full group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="glass p-6 max-w-md">
                  <h4 className="font-bold text-xl mb-4">Core Features</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {project.features.map(f => (
                      <li key={f} className="text-sm text-white/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ContainerScroll>
        ))}
      </div>
    </section>
  );
}
