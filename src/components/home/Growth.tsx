"use client";

import { Users, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function Growth() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F7F9] text-[#065E69] text-sm font-medium"
          >
            <Users className="w-4 h-4" />
            Viral Growth
          </motion.div>
          
          <div className="space-y-4">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-[24px] font-semibold text-[#050505] leading-[1.1] tracking-tight"
            >
              Make every share count
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-[16px] md:text-lg text-[#4B5563] max-w-lg leading-relaxed font-medium"
            >
              Send one link that gives people the full picture, not a pile of disconnected platforms
            </motion.p>
          </div>

          <div className="space-y-8 pt-2">
            {[
              { title: "Search triggers invites", desc: "Not found? Invite them instantly" },
              { title: "Email-based claiming", desc: "Invited users claim their profile with one click" },
              { title: "Organic growth", desc: "95% of invites convert to profiles" },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-black" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#050505] text-[17px]">{item.title}</h3>
                  <p className="text-[#4B5563] text-[15px] font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative"
        >
          <div className="bg-white rounded-[16px] border border-[#E5E7EB] p-6 px-2 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBEFF2]/30 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F3E8FF]/30 blur-3xl rounded-full -ml-16 -mb-16"></div>
            
            <div className="flex flex-col items-center text-center space-y-6 relative z-10 py-4">
              <div className="px-4 py-1.5 rounded-full border border-[#FECACA] text-[#EF4444] text-[12px] font-medium bg-white">
                Profile not found
              </div>
              
              <h3 className="text-[20px] font-medium text-[#050505] tracking-tight">
                Can't find who you're looking for?
              </h3>

              <div className="w-full space-y-6 px-4">
                <div className="relative">
                   <Input 
                    placeholder="Enter their email address" 
                    className="bg-white border-[#E5E7EB] h-10 rounded-[12px] px-4 focus:ring-[#087583]/10 focus:border-[#087583] transition-all text-sm placeholder:text-[#4D4A4A]"
                  />
                </div>
                <Button 
                  variant="outline"
                  className="w-full h-10 bg-[#FAFAFA] hover:bg-[#E5E7EB] text-[#087583] border-[#087583] border-[1.2px] rounded-[12px] flex items-center justify-center gap-2 font-medium text-sm transition-all active:scale-[0.98]"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  Send Invite
                </Button>
                <p className="text-[11px] text-[#6B7280] leading-relaxed font-normal px-8 opacity-80">
                  They'll receive an email to claim their profile. You'll be notified when they join!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
