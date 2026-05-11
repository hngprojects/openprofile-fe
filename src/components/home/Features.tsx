"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    iconBg: "bg-green-100",
    icon: "/features/User.svg",
    title: "Be found by your name",
    description:
      "Ensure your brand or profile is easily discoverable across the ecosystem. Use a unique identifier that resonates with your community and makes identification seamless and professional.",
  },
  {
    id: 2,
    iconBg: "bg-pink-100",
    icon: "/features/Badge.svg",
    title: "Build trust faster",
    description:
      "Leverage social proof and our secure, invitation-only system to expand your network. Trust is the foundation of every successful digital interaction, helping you convert visitors into loyal advocates.",
  },
  {
    id: 3,
    iconBg: "bg-yellow-100",
    icon: "/features/Share.svg",
    title: "Make every share count",
    description:
      "Maximize the impact of your communication. Every link shared carries your brand's integrity, ensuring that engagement is tracked and every touchpoint provides measurable value for your audience.",
  },
  {
    id: 4,
    iconBg: "bg-purple-100",
    icon: "/features/Message.svg",
    title: "Dedicated support",
    description:
      "Our team is always here to help you navigate your journey. From setup to scale, we provide the tools and guidance needed to ensure your continued success on our platform.",
  },
];

function FeatureCard({
  feature,
  delay,
}: {
  feature: (typeof features)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay / 1000,
      }}
      className="
  flex flex-col gap-4
  rounded-2xl
  p-6
"
    >
      <div className="flex-shrink-0">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={50}
          height={50}
          className="
      object-contain
    "
        />
      </div>

      <h3
        className="text-white text-xl font-bold leading-snug"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {feature.title}
      </h3>

      <p className="text-teal-100/70 text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export function Features() {
  return (
    <section
      className="relative w-full overflow-hidden py-24"
      style={{ backgroundColor: "#0d3d3a" }}
      aria-labelledby="features-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 mb-16 text-center"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-white rounded-full px-4 py-1.5">
          <Image
            src="/features/Bolt.svg"
            alt="bolt icon"
            width={13}
            height={13}
          />
          Powerful Features
        </span>

        <h2
          id="features-heading"
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          One link, clear Proof, faster opportunities
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              delay={200 + i * 120}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center mt-20"
      >
        <button
          className="
      rounded-lg bg-white
      px-8 py-3.5
      text-sm font-semibold text-teal-700
      transition-all duration-200
      hover:bg-teal-50
      hover:scale-105
      active:scale-95
      cursor-pointer
    "
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Create Your Profile Now
        </button>
      </motion.div>
    </section>
  );
}
