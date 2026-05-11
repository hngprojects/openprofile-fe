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
    mobileImg: "/hero/mobile-profilei.jpg",
  },
  {
    name: "David Mensah",
    role: "Indie Hacker • Solo Founder",
    img: "/hero/large-profile2.jpg",
    mobileImg: "/hero/mobile-profileii.jpg",
  },
  {
    name: "Emmanuel Imoh",
    role: "Content Creator",
    img: "/hero/large-profile3.jpg",
    mobileImg: "/hero/mobile-profileiii.jpg",
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-[80px] pb-[40px] flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-4 relative">
        {/* ───────────────── LEFT COLUMN ───────────────── */}
        <div className="flex flex-col gap-4 w-full lg:max-w-[500px] shrink-0 z-10">
          {/* Heading */}
          <motion.h1
            {...fadeUp(0.05)}
            className="font-semibold text-[42px] sm:text-[50px] md:text-[56px] leading-[1.12] tracking-[-1px] text-[#050505]"
            style={{ fontFamily: "'Afacad', sans-serif" }}
          >
            Create{" "}
            <span className="relative inline-block mx-2">
              {/* \ | / above One */}
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#087583] text-xl leading-none tracking-wider whitespace-nowrap">
                \ | /
              </span>
              <span
                className="italic text-[#087583]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                One
              </span>
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

          {/* Search */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col sm:flex-row items-stretch gap-[6.73px] w-full max-w-[512px]"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="open.profile/"
              className="w-full flex-1 h-[48px] py-3 px-[12px] bg-[#FAFAFA] border border-[#C9C9C9] rounded-[5.57px] text-[16px] leading-[24px] text-[#454545] placeholder:text-[#454545] outline-none focus:ring-2 focus:ring-[#087583]/40 transition"
              style={{ fontFamily: "'Afacad', sans-serif" }}
            />
            <button
              className="h-[48px] px-[16px] bg-[#087583] hover:bg-[#065E69] rounded-[8px] text-white text-[16px] leading-[24px] whitespace-nowrap transition-colors"
              style={{ fontFamily: "'Afacad', sans-serif" }}
            >
              Search a Profile
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            {...fadeUp(0.28)}
            className="flex flex-row items-center gap-3"
          >
            {/* Mini avatars */}
            <div
              className="flex items-center relative flex-shrink-0"
              style={{ height: "35px", width: "69px" }}
            >
              {miniAvatars.map((src, i) => (
                <div
                  key={i}
                  className="absolute rounded-full overflow-hidden border-[2.52px] border-white"
                  style={{
                    width: "35px",
                    height: "35px",
                    left: `${i * 17}px`,
                    zIndex: i + 1,
                  }}
                >
                  <Image
                    src={src}
                    alt={`User ${i + 1}`}
                    fill
                    sizes="42px"
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
              {/* <span className="font-semibold text-[#050505]">2000+</span>{" "} */}
              Creators and freelancers that trusts us all over the world.
            </p>
          </motion.div>
        </div>

        {/* ───────────────── MOBILE CARDS ───────────────── */}
        <div className="relative flex lg:hidden gap-3 w-full overflow-hidden">
          {/* LEFT fade */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to right, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0) 100%)", zIndex: 20, pointerEvents: "none" }} />
          {/* RIGHT fade */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to left, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0) 100%)", zIndex: 20, pointerEvents: "none" }} />
          {profiles.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              className="relative flex flex-col justify-end rounded-[9px] overflow-hidden shrink-0"
              style={{
                width: i === 1 ? "38%" : "28%",
                aspectRatio: "0.57",
              }}
            >
              <Image
                src={p.mobileImg}
                alt={p.name}
                fill
                priority
                quality={100}
                unoptimized
                sizes="38vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(360deg, rgba(0,0,0,0.9) 19.96%, rgba(102,102,102,0) 42.85%)",
                }}
              />
              <div className="relative z-10 p-[10px_12px] flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span
                    className="font-bold text-[12px] leading-[16px] text-[#FEFEFE] whitespace-nowrap"
                    style={{ fontFamily: "'Afacad', sans-serif" }}
                  >
                    {p.name}
                  </span>
                  <CircleCheck className="w-3 h-3 shrink-0" style={{ color: "#98FAC3" }} />
                </div>
                <span
                  className="font-medium text-[10px] leading-[14px] text-[#E6E6E6] whitespace-nowrap"
                  style={{ fontFamily: "'Afacad', sans-serif" }}
                >
                  {p.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ───────────────── RIGHT COLUMN ───────────────── */}
        <div className="relative hidden lg:flex flex-1 w-full overflow-visible -ml-[10px]">
          {/* LEFT fade */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: "-20px",
              width: "160px",
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0) 100%)",
              zIndex: 20,
              pointerEvents: "none",
            }}
          />

          {/* RIGHT fade */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: "-20px",
              width: "160px",
              background:
                "linear-gradient(to left, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0) 100%)",
              zIndex: 20,
              pointerEvents: "none",
            }}
          />

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex gap-4 items-start justify-center w-full translate-x-[8px]"
          >
            {profiles.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                className="relative flex flex-col justify-end shrink-0 rounded-[9px] overflow-hidden"
                style={{ width: "210px", height: "365px" }}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  priority
                  quality={100}
                  unoptimized
                  sizes="246px"
                  className="object-cover object-center"
                />

                {/* Dark overlay */}
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
      </div>

   
      <div className="hidden lg:block max-w-7xl mx-auto px-4 md:px-8 pt-[40px] pb-[80px]">
        <div className="border-t border-[#C9C9C9]" />
      </div>
    </section>
  );
}
