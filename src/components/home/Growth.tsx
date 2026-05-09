import { Users, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Growth() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F7F9] text-[#065E69] text-sm font-medium">
            <Users className="w-4 h-4" />
            Viral Growth
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-[46px] font-bold text-[#050505] leading-[1.1] tracking-tight">
              Make every share count
            </h2>
            <p className="text-[16px] md:text-lg text-[#4B5563] max-w-lg leading-relaxed font-medium">
              Send one link that gives people the full picture, not a pile of disconnected platforms
            </p>
          </div>

          <div className="space-y-8 pt-2">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-[#050505]" />
              </div>
              <div>
                <h3 className="font-bold text-[#050505] text-[17px]">Search triggers invites</h3>
                <p className="text-[#4B5563] text-[15px] font-medium">Not found? Invite them instantly</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-[#050505]" />
              </div>
              <div>
                <h3 className="font-bold text-[#050505] text-[17px]">Email-based claiming</h3>
                <p className="text-[#4B5563] text-[15px] font-medium">Invited users claim their profile with one click</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-[#050505]" />
              </div>
              <div>
                <h3 className="font-bold text-[#050505] text-[17px]">Organic growth</h3>
                <p className="text-[#4B5563] text-[15px] font-medium">95% of invites convert to profiles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Mockup */}
        <div className="relative animate-in fade-in slide-in-from-right duration-700">
          <div className="bg-white rounded-[32px] border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 md:p-12 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBEFF2]/30 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F3E8FF]/30 blur-3xl rounded-full -ml-16 -mb-16"></div>
            
            <div className="flex flex-col items-center text-center space-y-8 relative z-10">
              <div className="px-4 py-1.5 rounded-full border border-[#FECACA] text-[#EF4444] text-[13px] font-semibold bg-white shadow-sm">
                Profile not found
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#050505] tracking-tight">
                Can't find who you're looking for?
              </h3>

              <div className="w-full max-w-sm space-y-5">
                <div className="relative">
                   <Input 
                    placeholder="Enter their email address" 
                    className="bg-[#FAFAFA] border-[#E5E7EB] h-14 rounded-2xl px-6 focus:ring-[#087583]/10 focus:border-[#087583] transition-all text-base placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  variant="outline"
                  className="w-full h-14 bg-white hover:bg-[#F9FAFB] text-[#087583] border-[#087583] border-2 rounded-2xl flex items-center justify-center gap-2.5 font-bold text-base transition-all active:scale-[0.98]"
                >
                  <Mail className="w-5 h-5" />
                  Send Invite
                </Button>
                <p className="text-[12px] text-[#6B7280] leading-relaxed font-medium px-4">
                  They'll receive an email to claim their profile. You'll be notified when they join!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
