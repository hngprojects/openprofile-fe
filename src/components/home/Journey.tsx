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
    icon: "/journey/check.svg",
  },
  {
    id: "share-link",
    ghostIcon: "/journey/step03.svg",
    title: "Share Your Link And Get Discovered",
    titleColor: "dark",
    description:
      "Share your link, appear in searches, and grow your network. Not found? Invite them to join.",
    icon: "/journey/cross.svg",
  },
];

function StepIcon({
  icon,
  stepId,
  className,
}: {
  icon: string;
  stepId: string;
  className?: string;
}) {
  return (
    <div className="relative z-20 mb-10 w-[78px] h-[78px] flex items-center justify-center">
      <Image
        src={icon}
        alt="step icon"
        width={78}
        height={78}
        className={`
          object-contain
          ${stepId === "create-profile" ? "scale-[0.78]" : "scale-[1.15]"}
          ${className}
        `}
      />
    </div>
  );
}

function StepCard({
  step,
  ghostClass,
  align,
}: {
  step: Step;
  ghostClass: string;
  align?: "left" | "center" | "right";
}) {
  return (
    <div
      className={`
        relative
        w-full
        lg:max-w-[330px]
        ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}
      `}
    >
      {/* Ghost Number */}
      <div className={`absolute pointer-events-none opacity-100 ${ghostClass}`}>
        <Image
          src={step.ghostIcon}
          alt="step number"
          width={170}
          height={170}
          className="object-contain scale-100 min-w-[170px]"
        />
      </div>

      {/* Icon */}
      <StepIcon
        icon={step.icon}
        stepId={step.id}
        className={`hidden md:block
          step.id === "create-profile"
            ? "lg:ml-[160px] lg:mt-[220px]"
            : step.id === "verify-identity"
              ? "lg:ml-[480px] lg:-mt-[300px]"
              : "lg:ml-[190px] lg:-mt-[30px]"`}
      />

      {/* Content */}
      <div
        className={`
          relative
          z-10
          ${
            step.id === "create-profile"
              ? "lg:-mt-[120px] lg:-ml-[160px]"
              : step.id === "verify-identity"
                ? "lg:-mt-[40px] lg:-ml-[10px]"
                : step.id === "share-link"
                  ? "lg:-mt[-10px] lg:ml-[-60px]"
                  : ""
          }
        `}
      >
        <h3
          className={`
            text-[34px]
            leading-[1.1]
            font-bold
            tracking-[-0.03em]
            ${step.titleColor === "teal" ? "text-[#00798C]" : "text-[#202020]"}
          `}
        >
          {step.title}
        </h3>

        <p className="mt-5 text-[18px] leading-[34px] text-[#6B7280] mb-7">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F7] py-18 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="flex items-center gap-2">
            <Image src="/journey/Bolt.svg" alt="bolt" width={14} height={14} />

            <span className="text-sm font-semibold text-[#00798C]">
              Your Journey Starts Here
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-6
              max-w-[900px]
              text-[34px]
              md:text-[58px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.04em]
              text-[#111111]
            "
          >
            Create the profile people should find first
          </h2>
        </motion.div>

        {/* DESKTOP */}
        <div className="relative hidden lg:block h-[620px] mt-28">
          {/* WAVE */}
          <div className="absolute left-1/2 top-[120px] -translate-x-1/2 w-[980px] h-[240px]">
            <Image
              src="/journey/Wave.svg"
              alt="wave"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* STEP 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-[80px] top-[120px]"
          >
            <StepCard
              step={steps[0]}
              ghostClass="-top-[95px] left-[120px]"
              align="left"
            />
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-[260px] -translate-x-1/2"
          >
            <StepCard
              step={steps[1]}
              ghostClass="top-[10px] left-[265px]"
              align="center"
            />
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute right-[-10px] top-[220px]"
          >
            <StepCard
              step={steps[2]}
              ghostClass="-top[-10px] right-[-70px]"
              align="right"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-20 lg:hidden mt-28">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <StepCard
                step={step}
                ghostClass="-top-[80px] right-0 mt-10 lg:mt-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
