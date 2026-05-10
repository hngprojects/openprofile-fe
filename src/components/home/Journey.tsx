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
  ghostIcon: string;
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
  },
  {
    id: "verify-identity",
    ghostIcon: "/journey/step02.svg",
    title: "Verify Your Identity",
    titleColor: "dark",
    description:
      "Verify your email and connect social accounts. Build credibility with verification badges.",
    icon: "/journey/Check.svg",
  },
  {
    id: "share-link",
    ghostIcon: "/journey/step03.svg",
    title: "Share Your Link And Get Discovered",
    titleColor: "dark",
    description:
      "Share your link, appear in searches, and grow your network. Not found? Invite them to join.",
    icon: "/journey/Cross.svg",
  },
];

function StepIcon({ icon }: { icon: string }) {
  return (
    <div className="relative z-10 mt-6">
      <Image
        src={icon}
        alt="step icon"
        width={54}
        height={54}
        className="object-contain"
      />
    </div>
  );
}

function StepCard({
  step,
  ghostClass,
}: {
  step: Step;
  ghostClass: string;
}) {
  return (
    <div className="relative w-full max-w-[290px]">
      {/* Ghost Number */}
      <div
        className={`absolute pointer-events-none opacity-100 ${ghostClass}`}
      >
        <Image
          src={step.ghostIcon}
          alt="step number"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <h3
          className={`text-[28px] md:text-[38px] font-bold leading-[1.1] tracking-tight ${
            step.titleColor === "teal"
              ? "text-teal-700"
              : "text-gray-900"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {step.title}
        </h3>

        <p className="mt-5 text-base md:text-lg leading-8 text-gray-500">
          {step.description}
        </p>

        <StepIcon icon={step.icon} />
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gray-50 py-20 lg:py-28"
      aria-labelledby="open-profile-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2
              rounded-full border border-teal-200
              bg-teal-50
              px-4 py-2
              text-sm font-semibold text-teal-700
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
              mt-6
              max-w-[780px]
              text-center
              text-[28px]
              md:text-[40px]
              lg:text-[56px]
              font-extrabold
              tracking-[-0.03em]
              text-gray-900
              leading-[1.05]
            "
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Create the profile people should find first
          </motion.h2>
        </motion.div>

        {/* DESKTOP */}
        <div className="relative hidden lg:block mx-auto mt-28 h-[520px] w-full">
          {/* Wave */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              absolute
              left-1/2
              top-[155px]
              z-0
              h-[220px]
              w-[980px]
              -translate-x-1/2
            "
          >
            <Image
              src="/journey/wave.svg"
              alt="wave background"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* STEP 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-[160px] top-[50px] z-10"
          >
            <StepCard
              step={steps[0]}
              ghostClass="-top-[70px] left-[170px]"
            />
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-1/2 top-[300px] z-10 -translate-x-1/2"
          >
            <StepCard
              step={steps[1]}
              ghostClass="-top-[70px] left-[140px]"
            />
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute right-[70px] top-[250px] z-10"
          >
            <StepCard
              step={steps[2]}
              ghostClass="-top-[40px] right-[-100px]"
            />
          </motion.div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="flex flex-col gap-20 lg:hidden mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <StepCard
                step={step}
                ghostClass="-top-[80px] left-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}