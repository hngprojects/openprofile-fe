import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { FAQ } from "@/components/home/FAQ";
import { Pricing } from "@/components/home/Pricing";
import { CTA } from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#065E69] selection:text-white overflow-hidden text-[#050505]">
      <div className="w-full bg-[#FAFAFA]">
        <Navbar />
        <main className="w-full relative mx-auto">
          <Hero />
        </main>
      </div>

      <Proof />

      <FAQ />

      <Pricing />

      <CTA />
      <Footer />
    </div>
  );
}
