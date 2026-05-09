import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  className?: string;
}

export function TestimonialCard({ quote, name, role, avatarSrc, className = "" }: TestimonialProps) {
  return (
    <div className={`bg-[#FAFAFA] lg:bg-white p-6 rounded-[16px] flex flex-col justify-between h-full  ${className}`}>
      <div className="space-y-4">
        <p className="text-[#4B5563] text-[15px]  whitespace-pre-line">
          "{quote}"
        </p>
      </div>
      <div className="flex items-center justify-between pt-4 ">
        <div className="flex flex-col">
          <span className="font-semibold text-[#050505] text-[16px] leading-tight">{name}</span>
          <span className="text-[#929292] text-[13px] mt-1">{role}</span>
        </div>
        <div className="relative">
          <Avatar className="h-11 w-11">
            <AvatarImage src={avatarSrc} alt={name} className="object-cover" />
            <AvatarFallback className="bg-gray-100 text-[#050505]">{name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
