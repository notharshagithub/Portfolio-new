"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white relative overflow-hidden select-none px-4">
      {/* Premium ambient glows */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Stars Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Animated 404 text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[9rem] md:text-[12rem] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20"
        >
          404
        </motion.div>

        {/* Dynamic header and message */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold tracking-wide mt-4 uppercase text-purple-300"
        >
          Lost in Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="text-sm md:text-base text-white-200 mt-4 leading-relaxed font-light"
        >
          The coordinate you are searching for has drifted out of orbit or never existed. Let&apos;s guide you back to safe harbor.
        </motion.p>

        {/* Pulsing button to return home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-10"
        >
          <Link href="/">
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="inline-flex h-full w-48 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-sm font-semibold text-white backdrop-blur-3xl gap-2 transition-all duration-300 group-hover:bg-slate-950/80">
                <FaHome className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                Return Home
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
