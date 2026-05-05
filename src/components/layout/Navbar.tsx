import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex ">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>

      <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-foreground">
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
        <Button className="hidden sm:flex text-[#065E69] bg-white font-bold hover:bg-white/90 hover:opacity-80 rounded-[8px] px-6 h-10">
          Login
        </Button>
        <Button className="bg-[#065E69] text-white hover:bg-[#065E69]/90 font-bold rounded-[8px] px-6 h-10">
          Get started
        </Button>
      </div>
    </nav>
  );
}
