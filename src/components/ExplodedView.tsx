import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Cloud, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExplodedView() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(aiRef.current, { x: -300, y: -150, opacity: 1, scale: 1.2, duration: 1 }, 0)
        .to(securityRef.current, { x: 300, y: -150, opacity: 1, scale: 1.2, duration: 1 }, 0)
        .to(cloudRef.current, { y: 200, opacity: 1, scale: 1.2, duration: 1 }, 0)
        .fromTo(textRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5 }, 0.5);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full flex items-center justify-center bg-mesh relative overflow-hidden">
      <div ref={containerRef} className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        
        {/* Central Hub */}
        <div className="z-20 w-32 h-32 glass flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse" />
        </div>

        {/* Exploding Components */}
        <div ref={aiRef} className="absolute opacity-0 z-30 p-8 glass flex flex-col items-center gap-4">
          <Cpu size={48} className="text-blue-400" />
          <span className="font-bold text-xl">AI Core</span>
          <p className="text-xs text-white/40 text-center">Neural Networks &<br/>Automation</p>
        </div>

        <div ref={securityRef} className="absolute opacity-0 z-30 p-8 glass flex flex-col items-center gap-4">
          <Shield size={48} className="text-emerald-400" />
          <span className="font-bold text-xl">Security</span>
          <p className="text-xs text-white/40 text-center">VAPT &<br/>DevSecOps</p>
        </div>

        <div ref={cloudRef} className="absolute opacity-0 z-30 p-8 glass flex flex-col items-center gap-4">
          <Cloud size={48} className="text-purple-400" />
          <span className="font-bold text-xl">Cloud</span>
          <p className="text-xs text-white/40 text-center">Kubernetes &<br/>Scalable Infra</p>
        </div>

        {/* Final Text Overlay */}
        <div ref={textRef} className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none opacity-0">
          <h3 className="text-4xl md:text-6xl font-bold text-center leading-tight">
            “I engineer systems,<br/>not just websites.”
          </h3>
        </div>

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
          {/* These lines will be static or we could animate them with GSAP too */}
        </svg>
      </div>
    </section>
  );
}
