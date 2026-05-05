import { clsx } from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search } from "@hugeicons/core-free-icons";

const cn = (...inputs: string[]) => twMerge(clsx(inputs));

const steps = [
  {
    number: 1,
    title: "Build Your Identity",
    description:
      "Sign up in seconds with email, Google, or LinkedIn. Add your photo, craft your bio, and link your work.",
    color: "from-purple-500 to-purple-600",
    textColor: "text-[#087583]",
    lightBg: "bg-purple-50",
    profile: {
      name: "Sarah Charles",
      handle: "@sarahcharles",
      role: "Product Designer specializing in UX/UI and brand identity",
      avatar: "SC",
      avatarBg: "bg-[#FEA360]",
      buttons: ["Portfolio", "LinkedIn", "Contact"],
    },
    imgUrl: "/build.svg",
  },
  {
    number: 2,
    title: "Create Your Badges",
    description:
      "Verify your email and connect social accounts. Build instant credibility with verification badges.",
    color: "from-purple-500 to-purple-600",
    textColor: "text-[#087583]",
    lightBg: "bg-purple-50",
    badges: [
      { label: "Email", icon: "/mail.svg" },
      { label: "LinkedIn", icon: "/linkedin.svg" },
      { label: "Twitter", icon: "/x.svg" },
    ],
    imgUrl: "/create.svg",
  },
  {
    number: 3,
    title: "Get Discovered",
    description:
      "Share your link, appear in searches, and grow your network. Not found? Invite them to join.",
    color: "from-emerald-400 to-emerald-500",
    textColor: "text-[#050505]",
    lightBg: "bg-emerald-50",
    discover: true,
    imgUrl: "/discover.svg",
  },
];

const discoveredProfiles = [
  {
    initials: "SC",
    name: "Sarah Charles",
    role: "UX Designer",
    color: "bg-[#FEA360]",
  },
  {
    initials: "MO",
    name: "Marcus Abiola",
    role: "Software Engineer",
    color: "bg-[#065E69]",
  },
  {
    initials: "ED",
    name: "Emmanuel Davis",
    role: "Content Creator",
    color: "bg-[#FF4D4D]",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-31.25">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <div className="w-5 h-5 rounded-full">
              <Image src="/share.svg" width={80} height={80} alt="" />
            </div>

            <span className="text-sm font-medium">
              Your journey starts here
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>

          <p className="text-lg text-gray-600">
            Steps to establish your verified online presence
          </p>
        </header>

        <div className="grid items-start grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 mt-18">
          {steps.map((step, index) => {
            const isFirstStep = index === 0;
            const isThirdStep = index === 2;

            return (
              <article
                key={index}
                className={cn(
                  "relative shadow-xl px-5 py-10 rounded-4xl flex flex-col items-center",
                  isFirstStep ? "border border-[#087583]" : "",
                )}
              >
                <span
                  className={cn(
                    "absolute -top-7 w-13 h-13 rounded-full font-semibold  text-white flex items-center justify-center z-10 shadow-xl border-[3px] border-white",
                    isThirdStep ? "bg-[#83EFB2]" : "bg-[#8850EE]",
                  )}
                >
                  {step.number}
                </span>

                <div>
                  <figure className="relative w-18 h-18 rounded-xl flex items-center justify-center mb-6 mx-auto mt-3">
                    <Image
                      src={step.imgUrl}
                      className="object-cover"
                      alt=""
                      fill
                    />
                  </figure>

                  <h3
                    className={cn(
                      "text-lg font-semibold text-center mb-3",
                      step.textColor,
                    )}
                  >
                    {step.title}
                  </h3>

                  <p className="text-center text-gray-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div
                    className={cn(
                      "p-3 rounded-2xl",
                      index === 1 ? "border-2 border-[#c9c9c9]" : "",
                    )}
                  >
                    {index === 0 && step.profile && (
                      <div className="py-6 px-4 border border-gray-200 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold",
                              step.profile.avatarBg,
                            )}
                          >
                            {step.profile.avatar}
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-2">
                              {step.profile.name}
                            </h4>

                            <p className="text-xs text-gray-500">
                              {step.profile.handle}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                          {step.profile.role}
                        </p>

                        <div className="flex gap-2">
                          {step.profile.buttons.map((btn, i) => {
                            return (
                              <button
                                key={i}
                                className={cn(
                                  "px-3 py-1.5 text-xs font-medium bg-teal-50 text-teal-700 rounded-full hover:bg-teal-100 transition shadow-sm",
                                  i === 2
                                    ? "bg-white text-[#145B33]"
                                    : "bg-[#DBEFF2] text-[#087583]",
                                )}
                              >
                                {btn}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {index === 1 && step.badges && (
                      <div className="space-y-2">
                        {step.badges.map((badge, i) => {
                          return (
                            <div
                              key={i}
                              className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#C9C9C9]"
                            >
                              <div className="flex items-center gap-3">
                                <Image
                                  src={badge.icon}
                                  width={20}
                                  height={20}
                                  alt=""
                                />

                                <span
                                  className={cn(
                                    "text-sm font-medium",
                                    i === 0 ? "text-[#087583]" : "text-[#333]",
                                  )}
                                >
                                  {badge.label}
                                </span>
                              </div>

                              <Image
                                src="/check.svg"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {index === 2 && (
                      <div className="mt-6">
                        <div className="relative mb-6">
                          <HugeiconsIcon
                            icon={Search}
                            size={18}
                            className="absolute left-3 top-3.5 text-gray-400"
                          />
                          <input
                            type="text"
                            placeholder="Search for Sarah Charles..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            aria-label="Search for a value"
                          />
                        </div>

                        <div className="space-y-2">
                          {discoveredProfiles.map((profile, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                    profile.color,
                                  )}
                                >
                                  {profile.initials}
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm text-gray-900 mb-1">
                                    {profile.name}
                                  </h4>

                                  <p className="text-xs text-gray-500">
                                    {profile.role}
                                  </p>
                                </div>
                              </div>
                              {/* <div className="text-emerald-500">→</div> */}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
