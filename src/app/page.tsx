import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { ProfilePreview } from "@/components/home/ProfilePreview";
import { Opportunities } from "@/components/home/Opportunities";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { Journey } from "@/components/home/Journey";
import { Features } from "@/components/home/Features";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#065E69] selection:text-white overflow-hidden text-[#050505]">
      <div className="w-full bg-[#DBEFF2] pb-24 md:pb-40">
        <Navbar />
        <main className="w-full relative mx-auto">
          <Hero />
        </main>
      </div>

      <section className="w-full max-w-6xl mx-auto flex justify-center -mt-16 md:-mt-45 relative z-10 px-4 md:px-8 pb-20">
        <ProfilePreview />
      </section>

      <Opportunities />

      <Journey />

      <Features />

      <FAQ />

      <CTA />
      <Footer />
    </div>
  );
}
