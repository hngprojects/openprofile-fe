import Image from "next/image";

const audiences = [
  {
    bg: "#EFF6F8",
    icon: "/target_assets/icon-code.svg",
    checkIcon: "/target_assets/icon-check.svg",
    title: "Freelancers",
    description:
      "Designers, developers, writers — win client trust faster with a verified profile that shows everything.",
    items: [
      "Showcase portfolio & credentials",
      "Get verified for credibility",
      "Be found by new clients",
    ],
  },
  {
    bg: "#FFF6EF",
    icon: "/target_assets/icon-pencil.svg",
    checkIcon: "/target_assets/icon-orange-check.svg",
    title: "Creators",
    description:
      "Newsletter writers, podcasters, content makers — build a verified home base for your audience.",
    items: [
      "Unify your scattered presence",
      "Attract brand partnerships",
      "Own your identity",
    ],
  },
  {
    bg: "#F3FEF7",
    icon: "/target_assets/icon-artboard.svg",
    checkIcon: "/target_assets/icon-green-check.svg",
    title: "Indie Builders",
    description:
      "Solo founders, makers, hackers — create a persistent identity that shows all your projects.",
    items: [
      "Showcase your full body of work",
      "Attract collaborators & investors",
      "Build recognition over time",
    ],
  },
];

export default function Target() {
  return (
    <div className="text-primary font-sfpror">
      <div>
        <div className="rounded-[24px] bg-[#F2FDFE] pl-3.5 pr-5.5 w-fit flex items-center gap-1 mx-auto h-7.5">
          <Image
            src="/target_assets/icon-flash.svg"
            alt="target"
            width={16}
            height={16}
          />
          <p className="font-medium text-[12px] leading-4">Target Audience</p>
        </div>

        <p className="font-afacad font-semibold text-[48px] leading-14 mt-2 text-center">
          Built for people who need to be discovered early
        </p>
      </div>

      <div className="mt-10 grid gap-6 grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center justify-center">
        {audiences.map(({ bg, icon, checkIcon, title, description, items }) => (
          <div
            key={title}
            style={{ backgroundColor: bg }}
            className="px-6 pt-20 pb-6 space-y-4 rounded-[16px] relative h-full flex flex-col"
          >
            <div className="absolute top-0 right-0">
              <Image
                src={icon}
                alt={title}
                width={100}
                height={75}
                className="w-25 h-[75px]"
              />
            </div>

            <p className="font-afacad font-semibold text-[24px] leading-8 tracking-[-0.5px]">
              {title}
            </p>

            <p className="font-afacad text-[#454545]">{description}</p>

            <div className="space-y-2 mt-auto">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Image src={checkIcon} alt="check" width={16} height={16} />
                  <p className="font-afacad text-[#454545]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
