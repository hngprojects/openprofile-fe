"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Step {
  id: string;
  title: string;
  titleColor: "teal" | "dark";
  description: string;
  icon: string;
  iconStyle: "filled" | "outline";
  ghostIcon: string;
  /** px distance from the top of the content area */
  topOffset: number;
}

const steps: Step[] = [
  {
    id: "create-profile",
    ghostIcon: "/journey/step01.svg",
    title: "Create Your Profile",
    titleColor: "teal",
    description:
      "Sign up in seconds with email, Google, or LinkedIn. Craft your bio, and link your work.",
    icon: "/journey/User.svg",
    iconStyle: "filled",
    topOffset: 40,
  },
  {
    id: "verify-identity",
    ghostIcon: "/journey/step02.svg",
    title: "Verify Your Identity",
    titleColor: "dark",
    description:
      "Verify your email and connect social accounts. Build credibility with verification badges.",
    icon: "/journey/Check.svg",
    iconStyle: "outline",
    topOffset: 180,
  },
  {
    id: "share-link",
    ghostIcon: "/journey/step03.svg",
    title: "Share Your Link And Get Discoverd",
    titleColor: "dark",
    description:
      "Share your link, appear in searches, and grow your network. Not found? Invite them to join.",
    icon: "/journey/Cross.svg",
    iconStyle: "outline",
    topOffset: 130,
  },
];

function StepIcon({ icon }: { icon: string }) {
  return (
    <div className="relative z-10">
      <Image
        src={icon}
        alt="step icon"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="relative max-w-[240px]">
      {/* Ghost number */}
      <div className="absolute opacity-100 pointer-events-none">
        <Image
          src={step.ghostIcon}
          alt="step number"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* Title */}
        <h3
          className={`text-2xl font-bold leading-snug ${
            step.titleColor === "teal" ? "text-teal-700" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {step.description}
        </p>

        {/* Icon */}
        <div className="mt-2">
          <StepIcon icon={step.icon} />
        </div>
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gray-50
    py-24"
      aria-labelledby="open-profile-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-3 text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
    inline-flex items-center gap-1.5
    rounded-full border border-teal-200 bg-teal-50
    px-3 py-1 text-xs font-semibold text-teal-700
  "
          >
            <Image
              src="/journey/bolt.svg"
              alt="bolt icon"
              width={14}
              height={14}
            />
            Your Journey Starts Here
          </motion.span>

          {/* Heading */}
          <motion.h2
            id="open-profile-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
    max-w-4xl text-3xl md:text-5xl
    font-extrabold tracking-tight text-gray-900
  "
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Create the profile people should find first
          </motion.h2>
        </motion.div>

        <div
          className="
    relative mx-auto mt-12
    w-full max-w-7xl
    overflow-visible
    h-[464px]
    rounded-lg
  "
        >
          {/* Wave SVG — fills the container, z-0 so cards sit on top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              width: "816px",
              height: "178px",
              left: "251px",
              top: "106px",
            }}
          >
            <Image
              src="/journey/wave.svg"
              alt="wave background"
              fill
              priority
              className="object-none"
            />
          </motion.div>

          {/* ── Step cards — absolutely positioned ── */}
          <div className="relative z-10 w-full h-full">
            <div className="absolute inset-0 z-10">
              {/* STEP 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute left-[248px] top-[205px]"
              >
                <StepCard step={steps[0]} />
              </motion.div>
              {/* STEP 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute left-[721px] top-[89px]"
              >
                <StepCard step={steps[1]} />
              </motion.div>

              {/* STEP 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute left-[1037px] top-[155px]"
              >
                <StepCard step={steps[2]} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
