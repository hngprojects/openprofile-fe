import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col items-center pt-24 pb-20 text-center relative px-4 w-full">
      <div className="max-w-4xl mx-auto space-y-4 w-full">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-foreground">
          Your{" "}
          <span className="text-[#065E69] relative inline-block">
            identity
            {/* lines */}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-4 w-full justify-center">
              <span className="w-[2px] h-6 bg-[#6A24EA] rotate-[-25deg] transform -translate-x-2 translate-y-2"></span>
              <span className="w-[2px] h-6 bg-[#6A24EA] transform -translate-y-1"></span>
              <span className="w-[2px] h-6 bg-[#6A24EA] rotate-[25deg] transform translate-x-2 translate-y-2"></span>
            </span>
          </span>
          , one link away.
        </h1>

        <p className="text-lg md:text-[15px] text-foreground font-medium max-w-2xl mx-auto leading-relaxed">
          Build a public profile that shows who you are, what you do, and how to
          reach you, Be found. Be trusted. Be you — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 w-full max-w-lg mx-auto">
          <Input
            type="text"
            placeholder="open.profile/"
            className="h-12 md:h-14 text-base font-medium rounded-[8px] border border-[#999595] focus-visible:border-[#065E69] bg-[#FAFAFA] shadow-sm flex-1 placeholder:text-[#B3B0B0]"
          />
          <Button className="h-12 md:h-14 px-8 rounded-[8px] bg-[#065E69] text-white hover:bg-[#065E69]/90 font-bold shrink-0 shadow-sm text-base">
            Get started for free
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[5.5px] pt-6 pb-20">
          <div className="flex items-center relative">
            <Image
              src="/hero/avatar.png"
              alt="Trusting Creators"
              width={96}
              height={48}
              className="h-9 w-auto"
            />
          </div>
          <p className="text-sm text-[#050505] text-left leading-tight">
            Over <span className="font-medium text-base">2000+</span> Creators
            and freelancers trust us all over the world
          </p>
        </div>
      </div>
    </div>
  );
}
