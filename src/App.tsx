import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect, Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import SystemCore3D from './components/SystemCore3D';
import ExplodedView from './components/ExplodedView';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
// import { SplineSceneBasic } from './components/SplineDemo';
import Loader from './components/ui/Loader';

// Framer Components (Commented out due to runtime errors)
// // @ts-ignore
// const CircularCarousel = lazy(() => import("https://framer.com/m/MakeCircularCrousel-0Wpc.js@5WTkQftZc1xUStiK426y"));
// // @ts-ignore
// const Dock = lazy(() => import("https://framer.com/m/Dock-tc8R.js@cS363DtFAgtMtAbRC5P4"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-bg min-h-screen">
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 z-[10000] origin-left"
            style={{ scaleX }}
          />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Sections */}
          <div className="relative z-10">
            <Suspense fallback={<div className="h-screen bg-black" />}>
              <Hero />
            </Suspense>
            
            {/* <div className="py-24">
              <SystemCore3D />
            </div> */}

            <ExplodedView />

            <div className="py-24">
              <Experience />
            </div>

            <div className="py-24">
              <Education />
            </div>

            {/*
            <section className="py-24 px-6 max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Digital Ecosystem</h2>
                <p className="text-white/40 text-lg">Exploring the interconnected layers of modern engineering.</p>
              </div>
              <div className="h-[600px] w-full glass rounded-3xl overflow-hidden relative">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/20">Loading Ecosystem...</div>}>
                  <CircularCarousel />
                </Suspense>
              </div>
            </section>
            */}

            {/*
            <div className="py-24 px-6 max-w-7xl mx-auto">
              <Suspense fallback={<div className="h-[500px] glass animate-pulse" />}>
                <SplineSceneBasic />
              </Suspense>
            </div>
            */}


            {/* Projects Section Anchor */}
            <div id="projects" className="py-24 scroll-mt-24">
              <Projects />
            </div>

            {/* Contact Section Anchor */}
            <div id="contact" className="scroll-mt-24">
              <ContactSection />
            </div>

            {/* Footer - Refined Layout */}
            <footer className="relative bg-black border-t border-white/10 px-6 pt-20 pb-10 mt-24">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-10">
                <div className="mb-8 md:mb-0 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 bg-white rounded-full inline-block" />
                    <span className="text-lg font-medium text-white">Ready to elevate your brand?</span>
                  </div>
                  <div className="text-white/70 text-base leading-tight max-w-xs">
                    Drop me a message, and let’s start building something amazing together.
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                  <a href="mailto:ckrstudiodesign@gmail.com" className="text-white/80 hover:text-white font-semibold text-lg transition-colors">ckrstudiodesign@gmail.com</a>
                  <a href="https://www.linkedin.com/in/chenna-keshava-10may2002/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white font-semibold text-lg transition-colors">LinkedIn</a>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <a href="#top" className="flex items-center gap-2 text-white/80 hover:text-white font-bold text-lg transition-colors">
                    BACK TO TOP
                    <span className="inline-block w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/30 text-xs">
                Design by Keshava. &copy; {new Date().getFullYear()} All rights reserved.
              </div>
            </footer>
          </div>

          {/* Dock (Commented out due to runtime errors) */}
          {/**
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000]">
            <Suspense fallback={null}>
              <Dock />
            </Suspense>
          </div>
          */}

          {/* Global Background Elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20" />
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
          </div>
        </>
      )}
    </main>
  );
}
