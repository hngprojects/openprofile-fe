import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1D1F] rounded-t-[24px] md:rounded-t-[32px] pt-16 pb-10 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute left-0 -bottom-16 w-[300px] md:w-[450px] h-[300px] md:h-[450px] pointer-events-none select-none hidden md:block opacity-40 md:opacity-80 z-0">
        <Image 
          src="/footer/footer.svg" 
          alt="Decorative footer graphic" 
          fill
          className="object-contain object-left-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 pb-16">
          <div className="flex-1 space-y-6 md:pt-10">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <Image src="/footer/Logo.svg" alt="OpenProfile" fill className="object-contain" />
              </div>
              <span className="text-white font-normal text-base tracking-tight uppercase opacity-80">OpenProfile</span>
            </div>
            <p className="text-[#929292] text-[15px] md:text-[16px] font-normal max-w-[200px] leading-snug">
              Your verified identity, discoverable everywhere.
            </p>
          </div>

          <div className="flex-[1.5] grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="space-y-6">
              <h4 className="text-white font-normal text-[14px]">Products</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">How it works</Link></li>
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">Features</Link></li>
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">Pricing</Link></li>
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-normal text-[14px]">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">About</Link></li>
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">Blog</Link></li>
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">Careers</Link></li>
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-normal text-[14px]">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">Privacy Policy</Link></li>
                <li><Link href="#" className="text-[#929292] hover:text-white transition-colors text-[13px] font-normal">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex items-center justify-center">
          <p className="text-[#626262] text-[11px] font-normal text-center tracking-wide">
            © {new Date().getFullYear()} Open Profile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
