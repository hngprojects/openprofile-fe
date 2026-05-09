"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

const profiles = [
  {
    name: "James Smith",
    role: "Junior Product Designer",
    img: "/hero/large-profile1.jpg",
  },
  {
    name: "David Mensah",
    role: "Indie Hacker • Solo Founder",
    img: "/hero/large-profile2.jpg",
  },
  {
    name: "Emmanuel Imoh",
    role: "Content Creator",
    img: "/hero/large-profile3.jpg",
  },
];

const miniAvatars = [
  "/hero/mini-profile1.png",
  "/hero/mini-profile2.jpg",
  "/hero/mini-profile3.jpg",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

export function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[125px] pt-[60px] pb-[60px] flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-8 relative min-h-[685px]">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-6 w-full md:w-[602px] shrink-0 z-10">

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.05)}
            className="font-semibold text-[48px] sm:text-[56px] md:text-[64px] leading-[1.12] tracking-[-1px] text-[#050505] relative"
            style={{ fontFamily: "'Afacad', sans-serif" }}
          >
            {/* Decorative lines above "One" */}
            Create{" "}
            <span className="absolute -top-14 left-0 text-[#087583] text-2xl leading-none tracking-wider">
              \ | /
            </span>
            <span
              className="italic text-[#087583]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              One
            </span>{" "}
            Searchable Profile People Can Find And Trust
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.12)}
            className="font-normal text-[18px] leading-[26px] text-[#050505] max-w-[538px]"
            style={{ fontFamily: "'Afacad', sans-serif" }}
          >
            Turn your scattered online presence into one searchable profile that
            can show who you are, what you do, and why people should trust you.
          </motion.p>

          {/* Search row */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col sm:flex-row items-stretch gap-[6.73px] w-full max-w-[512px]"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="open.profile/"
              className="flex-1 h-[48px] px-[8px] bg-[#FAFAFA] border border-[#C9C9C9] rounded-[5.57px] text-[16px] leading-[24px] text-[#454545] placeholder:text-[#454545] outline-none focus:ring-2 focus:ring-[#087583]/40 transition"
              style={{ fontFamily: "'Afacad', sans-serif" }}
            />
            <button
              className="h-[48px] px-[16px] bg-[#087583] hover:bg-[#065E69] rounded-[8px] text-white text-[16px] leading-[24px] whitespace-nowrap transition-colors"
              style={{ fontFamily: "'Afacad', sans-serif" }}
            >
              Search a Profile
            </button>
          </motion.div>

          {/* Social proof — mini avatars */}
          <motion.div {...fadeUp(0.28)} className="flex items-center gap-3">
            <div className="flex items-center" style={{ position: "relative", height: "38px", width: "76px" }}>
              {miniAvatars.map((src, i) => (
                <div
                  key={i}
                  className="absolute rounded-full overflow-hidden border-[2.52px] border-white"
                  style={{
                    width: "38px",
                    height: "38px",
                    // order: 1=leftmost behind, 3=rightmost in front
                    left: `${i * 17}px`,
                    zIndex: i + 1,
                  }}
                >
                  <Image
                    src={src}
                    alt={`User ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <p
              className="font-normal text-[16px] leading-[24px] text-[#454545]"
              style={{ fontFamily: "'Afacad', sans-serif" }}
            >
              Join over{" "}
              <span className="font-semibold text-[#050505]">2000+</span>{" "}
              Creators and freelancers that trusts us all over the world.
            </p>
          </motion.div>
        </div>

        {/* ── Right column — 3 profile cards ── */}
        <div className="relative flex-1 w-full md:flex-none">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex gap-[17px] items-center"
            style={{ width: "fit-content" }}
          >
            {profiles.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                className="relative flex flex-col justify-end shrink-0 rounded-[9px] overflow-hidden"
                style={{ width: "246px", height: "400px" }}
              >
                {/* Real profile photo */}
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover object-top"
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(360deg, rgba(0,0,0,0.9) 19.96%, rgba(102,102,102,0) 42.85%)",
                  }}
                />

                {/* Name + role */}
                <div className="relative z-10 p-[15px_18px] flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <span
                      className="font-bold text-[20px] leading-[26px] text-[#FEFEFE]"
                      style={{ fontFamily: "'Afacad', sans-serif" }}
                    >
                      {p.name}
                    </span>
                    {/* li:circle-check equivalent */}
                    <CircleCheck
                      className="w-5 h-5 shrink-0"
                      style={{ color: "#98FAC3" }}
                    />
                  </div>
                  <span
                    className="font-medium text-[14px] leading-[24px] text-[#E6E6E6]"
                    style={{ fontFamily: "'Afacad', sans-serif" }}
                  >
                    {p.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-[125px] right-[125px] border-t border-[#C9C9C9] hidden md:block" />
      </div>
    </section>
  );
}