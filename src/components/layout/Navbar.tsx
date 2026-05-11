"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="w-full bg-white border-b border-[#EDEDED]"
      style={{ opacity: 0.8 }}
    >
      <nav className="flex items-center justify-between pl-[20px] pr-[20px] md:pl-[112px] md:pr-[112px] h-[76px] max-w-[1440px] mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <Image
            src="/logo.svg"
            alt="Open Profile"
            width={170}
            height={32}
            className="h-[32px] w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#how-it-works"
            className="text-primary font-medium text-[17px] leading-[26px] font-[Afacad] hover:text-brand transition-colors"
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            className="text-primary font-medium text-[16px] leading-[24px] font-[Afacad] hover:text-brand transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-primary font-medium text-[16px] leading-[24px] font-[Afacad] hover:text-brand transition-colors"
          >
            FAQ
          </Link>
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login */}
          <Link
            href="/login"
            className="flex items-center justify-center px-[14px] py-[8px] h-[36px] bg-[#FAFAFA] rounded-[8px] text-brand font-semibold text-[13px] leading-[18px] font-[Inter] hover:bg-[#E5F4F6] transition-colors"
          >
            Login
          </Link>

          {/* Get Started */}
          <Link
            href="/signup"
            className="flex items-center justify-center px-[16px] py-[12px] h-[44px] bg-brand rounded-[8px] text-[#FEFEFE] font-medium text-[15px] leading-[22px] font-[Afacad] hover:bg-[#065E69] transition-colors whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-primary transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-primary transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-primary transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-[#EDEDED]"
          >
            <div className="flex flex-col px-6 py-5 gap-5">
              {["How it works", "Pricing", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary font-medium text-[16px] font-[Afacad] hover:text-[#087583] transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="flex gap-3 pt-1">
                <Link
                  href="/login"
                  className="flex-1 h-10 bg-[#FAFAFA] rounded-[8px] text-brand font-semibold text-sm border border-[#EDEDED] flex items-center justify-center"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="flex-1 h-10 bg-brand rounded-[8px] text-white font-medium text-sm flex items-center justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
