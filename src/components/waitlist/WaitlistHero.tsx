"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

export function WaitlistHero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full min-h-screen md:min-h-[700px] md:h-[700px] bg-[#FAFAFA] overflow-hidden flex flex-col items-center pt-8 md:pt-12 px-6">
      {/* Background Images */}
      <div className="absolute -left-0 bottom-0 hidden lg:block select-none pointer-events-none">
        <Image
          src="/waitlist/image-left.svg"
          alt=""
          width={400}
          height={600}
          priority
          className="w-auto h-[500px]"
        />
      </div>
      <div className="absolute -right-0 -top-[5px] hidden lg:block select-none pointer-events-none">
        <Image
          src="/waitlist/image-right.svg"
          alt=""
          width={400}
          height={600}
          priority
          className="w-auto h-[500px]"
        />
      </div>

      {/* Logo */}
      <motion.div {...fadeUp(0)} className="mb-16 md:mb-24 z-10 mt-10">
        <Image
          src="/logo.png"
          alt="Open Profile"
          width={170}
          height={32}
          className="h-[32px] w-auto"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-[800px] w-full text-center flex flex-col items-center z-10">
        <motion.h1
          {...fadeUp(0.1)}
          className="text-[40px] md:text-[60px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#050505] mb-6"
          style={{ fontFamily: "'Afacad', sans-serif" }}
        >
          Join the waitlist for <br className="hidden md:block" />
          <span className="text-[#087583]">Openprofile</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-[16px] md:text-[18px] leading-[26px] text-[#454545] max-w-[740px] mb-10"
          style={{ fontFamily: "'Afacad', sans-serif" }}
        >
          Stop losing clients to identity doubt. Open Profile is the first
          searchable identity platform with built-in verification, designed to
          turn your online presence into a professional powerhouse.
        </motion.p>

        {/* Form */}
        <motion.div
          {...fadeUp(0.3)}
          className="w-full max-w-[580px] flex flex-col md:flex-row gap-2.5 mb-8 px-0"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-[2.5] h-[50px] px-4 rounded-[8px] border border-[#E5E5E5] bg-[#FAFAFA] text-[#050505] placeholder:text-[#999] outline-none focus:border-[#087583] transition-colors"
            style={{ fontFamily: "'Afacad', sans-serif" }}
          />
          <button
            className="w-full md:w-auto h-[50px] px-8 bg-[#262626] text-white rounded-[8px] font-medium hover:bg-[#333] transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Afacad', sans-serif" }}
          >
            Join the Waitlist
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div {...fadeUp(0.4)} className="flex items-center gap-1">
          <div className="relative w-[60px] h-8">
            <Image
              src="/waitlist/users.svg"
              alt="Users"
              fill
              className="object-contain object-left"
            />
          </div>
          <p
            className="text-[14px] md:text-[15px] text-[#454545]"
            style={{ fontFamily: "'Afacad', sans-serif" }}
          >
            <span className="hidden md:inline">
              Join the waitlist to secure your verified badge and unique URL
            </span>
            <span className="inline md:hidden">
              Join over 2000+ creators and freelancers that trusts us all over
              the world.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
