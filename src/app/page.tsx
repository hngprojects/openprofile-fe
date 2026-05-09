import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
// import { ProfilePreview } from "@/components/home/ProfilePreview";
import { Opportunities } from "@/components/home/Opportunities";
import { Proof } from "@/components/home/Proof";
import { FAQ } from "@/components/home/FAQ";
import { Pricing } from "@/components/home/Pricing";
import { CTA } from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Impression from "@/components/home/Impression";
import Target from "@/components/home/Target";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#065E69] selection:text-white overflow-hidden text-[#050505]">
      <div className="w-full bg-[#FAFAFA] pb-20">
        <Navbar />
        <main className="w-full relative mx-auto">
          <Hero />
        </main>
      </div>

      {/* impression */}
      <section className="w-full mx-auto flex justify-center px-31.25 py-16 bg-[#FAFAFA]">
        <Impression />
      </section>

      {/* target */}
      <section className="w-full mx-auto flex justify-center px-18 py-16 bg-[#FEFEFE]">
        <Target />
      </section>

      {/* <section className="w-full max-w-6xl mx-auto flex justify-center -mt-16 md:-mt-45 relative z-10 px-4 md:px-8 pb-20">
        <ProfilePreview />
      </section> */}

      <Opportunities />
      <Proof />

      <FAQ />

      <Pricing />

      <CTA />
      <Footer />
    </div>
  );
}
