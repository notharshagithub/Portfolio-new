"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const socialProfiles = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/notharshagithub",
    icon: FaGithub,
    hoverClass: "hover:border-[#CBACF9]/50 hover:shadow-[0_0_20px_rgba(203,172,249,0.25)] hover:text-[#CBACF9]",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harsha-shetty-16b020314/",
    icon: FaLinkedin,
    hoverClass: "hover:border-[#0077b5]/50 hover:shadow-[0_0_20px_rgba(0,119,181,0.25)] hover:text-[#0077b5]",
  },
  {
    id: 3,
    name: "X",
    url: "https://x.com/harshashetty01",
    icon: FaXTwitter,
    hoverClass: "hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:text-white",
  },
  {
    id: 4,
    name: "LeetCode",
    url: "https://leetcode.com/u/bdvktoLDNu/",
    icon: SiLeetcode,
    hoverClass: "hover:border-[#ffa116]/50 hover:shadow-[0_0_20px_rgba(255,161,22,0.25)] hover:text-[#ffa116]",
  },
  {
    id: 5,
    name: "Codeforces",
    url: "https://codeforces.com/profile/_harsha",
    icon: SiCodeforces,
    hoverClass: "hover:border-[#FF5656]/50 hover:shadow-[0_0_20px_rgba(255,86,86,0.25)] hover:text-[#FF5656]",
  },
];

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Work experience shared by
        <span className="text-purple"> collaborated teammates</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-14 max-w-5xl px-4">
          {socialProfiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/[0.05] group ${profile.hoverClass}`}
              >
                <Icon className="w-6 h-6 text-white-100 transition-colors duration-300 group-hover:text-inherit" />
                <span className="text-white-200 font-semibold text-sm md:text-base tracking-wide transition-colors duration-300 group-hover:text-white">
                  {profile.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;

