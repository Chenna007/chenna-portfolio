"use client";
import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-[100000]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative flex justify-center items-center overflow-hidden select-none font-black uppercase text-white w-[7.3em] h-[1em] drop-shadow-[0_0_0.05em_rgba(255,255,255,0.25)] text-[4em]">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="absolute flex items-center justify-center text-center whitespace-nowrap overflow-hidden"
              style={{
                clipPath: `polygon(${i * 11.11}% 0%, ${(i + 1) * 11.11}% 0%, ${(i + 1) * 11.11}% 100%, ${i * 11.11}% 100%)`,
                fontSize: `calc(4em / ${20 - Math.abs(4 - i) * 2.5})`,
                marginLeft: `${(i - 4) * 0.5}em`,
                opacity: 1 - Math.abs(4 - i) * 0.1
              }}
            >
              <span className="animate-[scrolling_2s_cubic-bezier(0.1,0.6,0.9,0.4)_infinite] bg-gradient-to-r from-white via-white/50 to-white bg-[length:200%_auto] bg-clip-text text-transparent">
                Loading
              </span>
            </div>
          ))}
          <div className="relative flex items-center justify-center overflow-hidden h-[0.05em] w-[2em] mt-[0.9em] rounded-[0.05em]">
            <div className="absolute h-full w-full bg-white opacity-30" />
            <div className="absolute h-full w-full bg-white rounded-[0.05em] -translate-x-[90%] animate-[wobble_2s_cubic-bezier(0.5,0.8,0.5,0.2)_infinite]" />
          </div>
        </div>
        <div className="font-mono text-white text-2xl font-light tracking-[0.2em] opacity-80">
          {progress}%
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wobble {
          0%, 100% { transform: translateX(-90%); }
          50% { transform: translateX(90%); }
        }
        @keyframes scrolling {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}

export default Loader;
