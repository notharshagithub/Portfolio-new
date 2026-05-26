"use client";

import { navItems } from "@/data";

import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 0.98 : 1
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1] // premium easeOutQuart
        }}
        className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full relative z-10">
          <FloatingNav navItems={navItems} />
          
          {/* Header/Hero Section: Kept exactly as originally designed with its own local grid backdrop */}
          <Hero />
          
          {/* Rest of the Page: Rich, animated background wrapper matching the header styling */}
          <div className="relative w-full rounded-3xl overflow-hidden mt-10 mb-10 py-10 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#02000f]/75 border border-white/5 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            
            {/* The Animated grid matching the header */}
            <div className="absolute inset-0 bg-grid-white/[0.015] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-80 pointer-events-none z-0" />
            
            {/* Pulsing stars background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none z-0" />

            {/* Scanning light sweep beam that travels down the grid */}
            <motion.div
              animate={{
                y: ["-20%", "120%"]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute left-0 w-full h-[400px] bg-[linear-gradient(to_bottom,transparent,rgba(168,85,247,0.025),transparent)] pointer-events-none z-0"
            />
            
            {/* Drifting Spotlights / Auroras matching the header colors */}
            {/* Spotlight 1: Purple (floating in the upper section near Grid) */}
            <motion.div
              animate={{
                x: [-20, 20, -20],
                y: [-30, 30, -30],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0"
            />

            {/* Spotlight 2: Blue (floating in the middle section near Projects) */}
            <motion.div
              animate={{
                x: [30, -30, 30],
                y: [20, -20, 20],
                scale: [1.1, 0.9, 1.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0"
            />

            {/* Spotlight 3: Violet/Pink (floating near Clients/Experience) */}
            <motion.div
              animate={{
                x: [-40, 40, -40],
                y: [-20, 20, -20],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[50%] left-[-10%] w-[550px] h-[550px] bg-pink-500/5 rounded-full blur-[130px] pointer-events-none z-0"
            />

            {/* Spotlight 4: Cyan (floating near Approach) */}
            <motion.div
              animate={{
                x: [20, -20, 20],
                y: [40, -40, 40],
                scale: [1.05, 0.95, 1.05]
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[75%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0"
            />

            {/* Spotlight 5: Pure White (floating at the bottom near Footer) */}
            <motion.div
              animate={{
                x: [-10, 10, -10],
                y: [-10, 10, -10],
                scale: [1, 1.08, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[5%] left-[20%] w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[110px] pointer-events-none z-0"
            />

            {/* Render the sections floating above the animated background */}
            <div className="relative z-10 flex flex-col items-center">
              <Grid />
              <RecentProjects />
              <Clients />
              <Experience />
              <Approach />
              <Footer />
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Home;

