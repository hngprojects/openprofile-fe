"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const socials = [
  {
    label: "GitHub",
    sub: "Projects",
    bg: "#171717",
    icon: "/impression/icon-github.svg",
  },
  {
    label: "Behance",
    sub: "Portfolio",
    bg: "#548BF1",
    icon: "/impression/icon-github.svg",
  },
  {
    label: "LinkedIn",
    sub: "Experience",
    bg: "#548BF1",
    icon: "/impression/icon-github.svg",
  },
  {
    label: "X",
    sub: "Thoughts",
    bg: "#171717",
    icon: "/impression/icon-github.svg",
  },
];

export default function Impression() {
  return (
    <div className="font-afacad text-primary flex items-center justify-between w-full gap-20">
      {/* left visual */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 min-w-132 h-105 relative flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center">
          {/* user */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-4 h-18 bg-[#FEFEFE] border-2 border-white rounded-full w-fit absolute z-10"
          >
            <Image
              src="/impression/icon-user.svg"
              alt="user"
              width={40}
              height={40}
            />
            <div className="bg-[#FF4D4D] flex items-center justify-center w-7 h-7 border-2 border-white rounded-full absolute right-[1.3px] bottom-[-8.74px]">
              <Image
                src="/impression/icon-question.svg"
                alt="user"
                width={12}
                height={12}
              />
            </div>
          </motion.div>

          {/* dashes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-[363px] h-[274px]"
          >
            <svg
              width="363"
              height="274"
              viewBox="0 0 363 274"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0"
            >
              <line
                x1="0"
                y1="0"
                x2="181.5"
                y2="137"
                stroke="#ABABAB"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <line
                x1="363"
                y1="0"
                x2="181.5"
                y2="137"
                stroke="#ABABAB"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <line
                x1="0"
                y1="274"
                x2="181.5"
                y2="137"
                stroke="#ABABAB"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <line
                x1="363"
                y1="274"
                x2="181.5"
                y2="137"
                stroke="#ABABAB"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
            </svg>
          </motion.div>
        </div>

        {/* social cards */}
        <div className="absolute h-full w-full flex flex-col items-center justify-between">
          <div className="flex items-center justify-between w-full pl-[19px]">
            {socials.slice(0, 2).map(({ label, sub, bg, icon }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="w-[143px] h-18 bg-[#FEFEFE] border border-[#EDEDED] rounded-[16px] flex items-center justify-start gap-2 pl-4 rotate-[0.82deg]"
              >
                <div
                  style={{ backgroundColor: bg }}
                  className="border border-[#EDEDED]"
                >
                  <Image src={icon} alt={label} height={24} width={24} />
                </div>
                <p className="text-[14px] leading-5 flex flex-col">
                  <span>{label}</span>
                  <span>{sub}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between w-full pr-0.5 pb-1.5">
            {socials.slice(2).map(({ label, sub, bg, icon }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="w-[143px] h-18 bg-[#FEFEFE] border border-[#EDEDED] rounded-[16px] flex items-center justify-start gap-2 pl-4 rotate-[0.82deg]"
              >
                <div
                  style={{ backgroundColor: bg }}
                  className="border border-[#EDEDED]"
                >
                  <Image src={icon} alt={label} height={24} width={24} />
                </div>
                <p className="text-[14px] leading-5 flex flex-col">
                  <span>{label}</span>
                  <span>{sub}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* right text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-start gap-6 justify-center w-145.5"
      >
        <div className="space-y-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[40px] leading-12 tracking-[-1px] font-semibold font-sfpror"
          >
            Your Links Are Scattered.{" "}
            <span className="text-[#087583]">
              Your First Impression Should Not Be
            </span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[18px] leading-6.5 min-h-45.5 flex flex-col font-sfpror justify-between gap-6"
          >
            <span>
              Your projects may be on GitHub. Your designs may be on Behance.
              Your thoughts may be on X. Your experience may be on LinkedIn. But
              when someone wants to know who you are, what you do, and whether
              they can trust you, they should not have to piece it together
              across platforms.
            </span>
            <span>
              Open Profile gives you one clear place to be found, understood and
              contacted — a single, clean profile link that represents
              everything about you.
            </span>
          </motion.p>
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-medium text-[#FEFEFE] bg-[#087583] h-12 rounded-[8px] px-4 cursor-pointer"
        >
          Create Your Profile Now
        </motion.button>
      </motion.div>
    </div>
  );
}
