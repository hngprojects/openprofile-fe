import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full bg-[#F7F7F7]">
      <nav className="flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#111111]">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              How it works
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              Pricing
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex text-[#065E69] bg-[#F6F6F6] hover:bg-[#E5E7EB] font-semibold rounded-[8px] px-6 h-10 shadow-none">
              Login
            </Button>
            <Button className="bg-[#087583] text-white hover:bg-[#065E69]/90 font-semibold rounded-[8px] px-6 h-10 flex items-center gap-2 shadow-none border border-[#087583]">
              Button CTA
              <div className="w-4 h-4 rounded-full border-2 border-white" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
