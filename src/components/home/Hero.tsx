import { BsLightningChargeFill, BsCheckLg } from "react-icons/bs";

export function Hero() {
  return (
    <section className="flex flex-col items-center w-full bg-[#FEFEFE]">
      <div className="pt-16 pb-16 text-center relative px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2FDFE] text-[#087583] text-sm font-bold mb-8 shadow-sm">
          <BsLightningChargeFill className="w-3.5 h-3.5" />
          Target Audience
        </div>

        <h1 className="text-[38px] md:text-[52px] lg:text-[56px] font-semibold tracking-tight text-[#050505] mb-6 leading-[1.15]">
          Built for people who need to be
          <br className="hidden md:block" /> discovered early
        </h1>

        <p className="text-[15px] md:text-[17px] text-[#050505] max-w-[680px] mx-auto leading-relaxed mb-16">
          Whether you&apos;re freelancing, creating content, or building
          products, Open
          <br className="hidden md:block" /> Profile helps you stand out.
        </p>

        {/* The 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-2 lg:mt-6">
          {/* Card 1 */}
          <div className="bg-[#EFF6F8] rounded-[16px] p-8">
            <h3 className="text-[22px] font-semibold text-[#050505] mb-3">
              Freelancers
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#454545] mb-6 leading-relaxed min-h-[64px]">
              Designers, developers, writers — win client trust faster with a
              verified profile that shows everything.
            </p>
            <ul className="space-y-3.5 text-[#454545]">
              {[
                "Showcase portfolio & credentials",
                "Get verified for credibility",
                "Be found by new clients",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[13px] sm:text-[14px] text-[#454545] font-medium"
                >
                  <BsCheckLg className="w-5 h-5 text-[#087583] shrink-0 mt-px" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F6F6F6] rounded-[16px] p-8">
            <h3 className="text-[22px] font-semibold text-[#050505] mb-3">
              Creators
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#454545] mb-6 leading-relaxed min-h-[64px]">
              Newsletter writers, podcasters, content makers — build a verified
              home base for your audience.
            </p>
            <ul className="space-y-3.5">
              {[
                "Unify your scattered presence",
                "Attract brand partnerships",
                "Own your identity",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[13px] sm:text-[14px] text-[#454545] font-medium"
                >
                  <BsCheckLg className="w-5 h-5 text-[#454545] shrink-0 mt-px" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FCF2F2] rounded-[16px] p-8">
            <h3 className="text-[22px] font-semibold text-[#050505] mb-3">
              Indie Builders
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#454545] mb-6 leading-relaxed min-h-[64px]">
              Solo founders, makers, hackers — create a persistent identity that
              shows all your projects.
            </p>
            <ul className="space-y-3.5 text-[#454545]">
              {[
                "Showcase your full body of work",
                "Attract collaborators & investors",
                "Build recognition over time",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[13px] sm:text-[14px] text-[#454545] font-medium"
                >
                  <BsCheckLg className="w-5 h-5 text-[#FF9494] shrink-0 mt-px" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
