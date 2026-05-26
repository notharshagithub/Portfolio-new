"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Properties for the premium visual preloader component.
 */
interface LoaderProps {
  /**
   * Callback function triggered once loading progress reaches 100%
   * and the exit animation transition completes.
   */
  onComplete?: () => void;
}

/**
 * Loader component that provides a full-screen, high-end simulated loading sequence.
 * Features a dynamic non-linear rate simulation, ambient backlighting auroras, 
 * star grids, and scrolling system activation logs.
 *
 * @param onComplete Callback invoked upon completing loading and hold duration.
 */
export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Core System...");

  useEffect(() => {
    // Lock scroll on mount
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let timeoutId: NodeJS.Timeout;
    let currentProgress = 0;

    const updateProgress = () => {
      let increment = 1;
      
      // Simulating a high-end non-linear loading behavior
      if (currentProgress < 30) {
        increment = Math.floor(Math.random() * 6) + 3; // fast start
      } else if (currentProgress < 75) {
        increment = Math.floor(Math.random() * 4) + 1; // medium pace
      } else if (currentProgress < 95) {
        increment = Math.floor(Math.random() * 2) + 1; // slow down at heavy assets
      } else {
        increment = 1; // final crawl
      }

      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      // Dynamically select status text based on progress
      if (currentProgress < 20) {
        setStatusText("Awakening creative consciousness...");
      } else if (currentProgress < 40) {
        setStatusText("Assembling spatial grid structures...");
      } else if (currentProgress < 60) {
        setStatusText("Loading 3D globe coordinates...");
      } else if (currentProgress < 80) {
        setStatusText("Fetching dynamic experiences...");
      } else if (currentProgress < 95) {
        setStatusText("Synthesizing ambient light networks...");
      } else if (currentProgress < 100) {
        setStatusText("Perfecting layout alignments...");
      } else {
        setStatusText("Welcome to the Portfolio!");
      }

      if (currentProgress < 100) {
        // Variable delay for premium realistic pacing
        const delay = currentProgress > 75 && currentProgress < 90
          ? Math.floor(Math.random() * 180) + 70 // slow down specifically during heavy rendering
          : Math.floor(Math.random() * 60) + 30;

        timeoutId = setTimeout(updateProgress, delay);
      } else {
        // Hold on 100% briefly so the user sees completion, then finish
        timeoutId = setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
          // Restore body scrolling
          document.body.style.overflow = originalOverflow || "unset";
        }, 800);
      }
    };

    // Small delay to start
    timeoutId = setTimeout(updateProgress, 100);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        opacity: 0,
        transition: {
          y: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          opacity: { duration: 0.6, ease: "easeInOut" }
        }
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden select-none"
    >
      {/* Premium background ambient glowing blobs */}
      <div className="absolute top-[20%] left-[20%] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[140px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/10 rounded-full blur-[120px] md:blur-[160px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* Core Loader Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Large digital percentage counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-8xl md:text-[11rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 select-none font-mono leading-none"
        >
          {progress}
          <span className="text-3xl md:text-5xl text-purple-400 font-sans font-light ml-1">%</span>
        </motion.div>

        {/* Progress bar container */}
        <div className="relative w-64 md:w-96 mt-6 md:mt-8">
          {/* Track background with subtle glassmorphism */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative border border-white/5">
            {/* Animated Loading Slide Bar */}
            <div
              className="h-full bg-gradient-to-r from-violet-500 via-purple to-pink-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(168,85,247,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Premium neon bottom-glow reflection */}
          <div
            className="absolute -inset-1 h-3 bg-gradient-to-r from-violet-500 via-purple to-pink-500 rounded-full blur-md opacity-25 transition-all duration-100 ease-out pointer-events-none"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status update display with micro-animations */}
        <div className="h-8 mt-6 overflow-hidden flex items-center justify-center">
          <motion.p
            key={statusText}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-xs md:text-sm text-white-200 font-medium tracking-widest uppercase"
          >
            {statusText}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
