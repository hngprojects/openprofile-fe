import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 md:py-26 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-[#087583] rounded-[24px] md:rounded-[32px] overflow-hidden flex items-center min-h-[300px] md:min-h-[340px] px-8 md:px-16 py-12">
          
          <div className="absolute top-10 bottom-0 right-0 w-full md:w-[45%] lg:w-[60%] h-full pointer-events-none hidden md:block">
            <Image
              src="/cta/cta.svg"
              alt="Decorative background"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>

          <div className="relative z-10 max-w-[420px] space-y-4">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-white leading-[1.2] tracking-tight md:whitespace-nowrap">
              Create your public profile today
            </h2>
            
            <p className="text-[14px] md:text-[15px] text-white/90 font-normal leading-relaxed">
              Start building a profile that people can find, trust, and connect with
            </p>
            
            <div className="pt-3">
              <Button
                size="lg"
                className="bg-white text-[#050505] hover:bg-white/95 rounded-[12px] px-8 py-6 text-[15px] font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Get started for free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}