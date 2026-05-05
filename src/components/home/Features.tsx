"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const MailIcon = ({ stroke = "#6b7280" }: { stroke?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect
      x="1.5"
      y="3.5"
      width="15"
      height="11"
      rx="2"
      stroke={stroke}
      strokeWidth="1.5"
    />
    <path d="M1.5 6.5l7.5 5 7.5-5" stroke={stroke} strokeWidth="1.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect
      x="1.5"
      y="1.5"
      width="15"
      height="15"
      rx="3"
      stroke="#0077b5"
      strokeWidth="1.5"
    />
    <path
      d="M5 7v6M5 5v.5M8.5 13V9.5c0-1 .8-2 2-2s2 1 2 2V13"
      stroke="#0077b5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="5" cy="5" r="0.5" fill="#0077b5" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M2 2l14 14M2 16L16 2"
      stroke="#111"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const PROFILES = [
  {
    initials: "SC",
    bg: "#FEA360",
    name: "Sarah Charles",
    role: "UX Designer",
    online: true,
  },
  {
    initials: "MO",
    bg: "#065E69",
    name: "Marcus Abiola",
    role: "Software Engineer",
    online: true,
  },
  {
    initials: "ED",
    bg: "#FF4D4D",
    name: "Emmanuel Davis",
    role: "Content Creator",
    online: false,
  },
];

const VERIFY_ROWS = [
  { icon: <MailIcon />, label: "Email" },
  { icon: <LinkedInIcon />, label: "LinkedIn" },
  { icon: <XIcon />, label: "Twitter" },
];

const TESTIMONIALS = [
  {
    text: "Before using Open Profile, I had my work scattered across different platforms—my portfolio on one site, links in my bio, and social media everywhere else. It was always a struggle sending everything to clients without overwhelming them.\n\nWith Open Profile, I was able to bring everything together into one clean, professional page. Now when someone wants to know about me, I just send a single link and they can see my work, connect with me, and even verify my profile instantly",
    name: "David",
    role: "Product Designer",
    imgUrl: "/person-1.png",
  },
  {
    text: "Having everything in one place makes me look more professional, especially with the verification badge.",
    name: "Amaka",
    role: "Content Creator",
    imgUrl: "/person-2.png",
  },
  {
    text: "I like that people can actually find my profile instead of me always sharing it first.",
    name: "Tunde",
    role: "Frontend Developer",
    imgUrl: "/person-3.png",
  },
];

function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

function Badge({
  icon,
  children,
  className = "",
}: {
  icon?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[#2a2d33]",
        "bg-[#1a1c20] px-3 py-1 text-xs text-gray-400",
        className,
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
}

function Avatar({
  initials,
  bg,
  size = "md",
}: {
  initials: string;
  bg: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-9 w-9 text-sm",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-lg",
  };

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-bold text-white",
        sizes[size],
      )}
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
}

function FeatureSection({
  badge,
  title,
  description,
  features,
  card,
  reverse = false,
}: {
  badge: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  card: React.ReactElement;
  reverse?: Boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex flex-wrap items-center gap-12 pb-16 mt-10",
        reverse && "flex-row-reverse",
      )}
    >
      <div className="flex-1 min-w-65 space-y-5">
        <Badge>{badge}</Badge>

        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          {title}
        </h2>

        <p className="text-sm leading-relaxed text-[#747474]">{description}</p>

        <div className="space-y-3.5">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <svg
                className="shrink-0 mt-0.5"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="9" stroke="#fff" strokeWidth="1.5" />
                <path
                  d="M6.5 10l2.5 2.5 4-4"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <p className="text-sm font-semibold text-gray-200">{title}</p>
                <p className="text-xs text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">{card}</div>
    </div>
  );
}

function SearchCard() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="relative mb-4">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <circle cx="8" cy="8" r="5.5" stroke="#9ca3af" strokeWidth="1.5" />
          <path
            d="M12.5 12.5l3 3"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <input
          type="text"
          placeholder="Search for anyone..."
          className="w-full border-b-2 border-gray-200 bg-white py-3 pl-10 pr-4 text-gray-400 outline-none"
          readOnly
        />
      </div>

      <div className="flex flex-col gap-4">
        {PROFILES.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 py-3 border border-[#c9c9c9] px-2 rounded-2xl"
          >
            <Avatar initials={p.initials} bg={p.bg} />
            <div className="flex-1 min-w-0">
              <p className="flex items-center gap-1.5 font-semibold text-gray-900 text-sm truncate">
                {p.name}

                <span className="bg-gray-50 inline-block h-2 w-2 rounded-full0">
                  {p.online}
                </span>
              </p>

              <p className="text-xs text-gray-500">{p.role}</p>
            </div>

            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function VerificationCard() {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-[0_8px_40px_rgba(0,0,0,0.18)] w-full">
      <div className="mb-5 flex flex-col items-center gap-2 text-center">
        <Avatar initials="SC" bg="#f97316" size="lg" />
        <div className="flex items-center gap-1.5 font-bold text-gray-900">
          Sarah Charles
        </div>

        <p className="text-xs text-gray-400">@sarahcharles</p>
      </div>

      <div className="space-y-2 mb-3">
        {VERIFY_ROWS.map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
          >
            {icon}

            <span className="flex-1 text-sm font-medium text-gray-700">
              {label}
            </span>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="9"
                stroke="#2dd4bf"
                strokeWidth="1.5"
              />
              <path
                d="M6.5 10l2.5 2.5 4-4"
                stroke="#2dd4bf"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 rounded-xl border border-teal-400 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-700">
        ⭐ Fully Verified Profile
      </div>
    </div>
  );
}

function InviteCard() {
  const [email, setEmail] = useState("");

  return (
    <div className="rounded-2xl bg-white p-7 shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
      <div className="mb-5 flex flex-col items-center gap-3 text-center">
        <span className="rounded-full border-2 border-[#fd6c01] bg-orange-50 px-4 py-2 text-xs font-medium text-[#ff4d4d]">
          Profile not found
        </span>

        <p className="text-sm text-[#050505]">
          Can't find who you're looking for?
        </p>
      </div>

      <input
        type="email"
        className={cn(
          "mb-3 w-full rounded-xl border border-[#c9c9c9] bg-white",
          "px-4 py-3.5 text-sm text-[#4D4A4A] outline-none",
          "placeholder:text-[#4D4A4A] focus:border-teal-400 transition-colors",
        )}
        placeholder="Enter their email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-xl cursor-pointer",
          "bg-[#087583] px-4 py-3.5 text-sm font-semibold text-white",
          "transition-all",
        )}
      >
        <MailIcon stroke="#fff" />
        Send Invite
      </button>

      <p className="mt-3 text-center text-xs text-[#747474]">
        They'll receive an email to claim their profile. You'll be notified when
        they join!
      </p>
    </div>
  );
}

function TestimonialCard({
  text,
  name,
  role,
  imgUrl,
  className = "",
}: {
  text: string;
  name: string;
  role: string;
  imgUrl: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#1e2024] p-5 flex flex-col justify-between",
        className,
      )}
    >
      <p className="text-sm leading-7 text-[#a2a2a2] whitespace-pre-line">
        {text}
      </p>

      <div className="flex flex-row-reverse items-center justify-between gap-2.5 mt-4">
        <Image src={imgUrl} width={35} height={35} alt="" />

        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="min-h-screen bg-[#25272b] text-white px-4 sm:px-6 lg:px-31.25">
      <div className="pt-16 text-center">
        <Badge className="mb-4 mx-auto bg-[#F0E9FD] text-[#6A24EA]">
          <Image src="/share.svg" width={20} height={20} alt="" />{" "}
          <span className="text-[14px] font-semibold py-2 px-2">
            Powerful features{" "}
          </span>
        </Badge>

        <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Built for the way you work
        </h2>

        <p className="mx-auto text-base text-[#747474]">
          Everything you need to establish, verify, and grow your professional
          identity online
        </p>
      </div>

      <FeatureSection
        badge="Discovery"
        title="Searchable by default"
        description="Your profile is instantly discoverable. When someone searches for you, they find a verified source of truth about who you are and what you do."
        features={[
          {
            title: "Search by name or username",
            description: "Make it easy for people to find you",
          },
          {
            title: "Real-time results",
            description: "Instant profile discovery and access",
          },
        ]}
        card={<SearchCard />}
      />

      <FeatureSection
        badge="Trust & Safety"
        title="Verification that builds trust"
        description="Stand out with verification badges. Connect your email and social accounts to prove your identity and build credibility."
        features={[
          {
            title: "Email verification",
            description: "Required for all users",
          },
          {
            title: "Social account linking",
            description: "Connect LinkedIn or Twitter for enhanced trust",
          },
          {
            title: "Visible verification badges",
            description: "Show visitors you're the real deal",
          },
        ]}
        card={<VerificationCard />}
        reverse
      />

      <FeatureSection
        badge="Viral Growth"
        title="Built-in invite loop"
        description="Can't find someone? Invite them! Our viral invite system turns every search into a growth opportunity."
        features={[
          {
            title: "Search triggers invites",
            description: "Not found? Invite them instantly",
          },
          {
            title: "Email-based claiming",
            description: "Invited users claim their profile with one click",
          },
          {
            title: "Organic growth",
            description: "95% of invites convert to profiles",
          },
        ]}
        card={<InviteCard />}
      />

      <div className="pb-16">
        <div className="mb-10 text-center">
          <p className="mb-4 font-semibold uppercase tracking-widest text-[#a2a2a2]">
            Social Proof <span className="text-[#fd6c01] text-lg">●</span>
          </p>

          <div className="mb-4 flex justify-center gap-1 text-[#83e5b2] text-xl">
            {"★★★★".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>

          <h2
            className="text-3xl font-extrabold tracking-tight text-white md:text-4xl"
            style={{
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Join 2,000+ creators building their identity online
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <TestimonialCard {...TESTIMONIALS[0]} className="xl:col-span-3" />
          <TestimonialCard {...TESTIMONIALS[1]} />
          <TestimonialCard {...TESTIMONIALS[2]} />
          <TestimonialCard {...TESTIMONIALS[1]} />
          <TestimonialCard {...TESTIMONIALS[2]} />
          <TestimonialCard {...TESTIMONIALS[0]} className="xl:col-span-3" />
        </div>
      </div>
    </section>
  );
}
