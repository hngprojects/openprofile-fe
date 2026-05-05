import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  FiMapPin,
  FiMail,
  FiArrowRight,
  FiGlobe,
  FiFacebook,
} from "react-icons/fi";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function ProfilePreview() {
  const projects = [
    {
      id: "01",
      title: "Fintech Dashboard",
      category: "Product Design",
      description:
        "A financial analytics dashboard that helps users track and visualize their investments",
      image: "/profile-preview/feature1.jpg",
    },
    {
      id: "02",
      title: "Landing page Design",
      category: "Web Design",
      description: "A minimal landing page design for an e-commerce website",
      image: "/profile-preview/feature2.jpg",
    },
    {
      id: "03",
      title: "Fintech Dashboard",
      category: "Product Design",
      description:
        "A financial analytics dashboard that helps users track and visualize their investments",
      image: "/profile-preview/feature3.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#F7F7F7] rounded-[16px] border-[1.5px] border-[#087583] shadow-[0_4px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col min-h-[400px]">
      <div className="px-[30px] lg:px-[60px] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-start gap-6 text-left">
          <div className="relative shrink-0 mt-1">
            <Avatar className="w-[104px] h-[104px] shadow-[0_2px_15px_rgb(0,0,0,0.08)] bg-[#D3CEFF]">
              <AvatarImage
                src="/profile-preview/avatar.png"
                className="object-cover"
              />
              <AvatarFallback>GP</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-1 right-2 w-[18px] h-[18px] bg-[#31E47F] rounded-full border-[3px] border-white"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-[26px] font-bold flex items-center gap-2">
              Godswill Peter
            </h2>
            <p className="font-bold text-[15px]">Product Designer</p>
            <p className="font-medium text-[15px] max-w-[340px] mt-2 leading-relaxed">
              I create digital screens that are intuitive, meaningful and
              visually engaging
            </p>

            <div className="flex items-center gap-2 mt-4 text-[13px] font-medium text-[#525252]">
              <FiMapPin size={15} />
              Lagos, Nigeria
            </div>

            <div className="flex items-center gap-[14px] mt-4 text-[#525252]">
              <FaLinkedin
                size={18}
                className="cursor-pointer hover:text-black transition-colors"
              />
              <FaXTwitter
                size={18}
                className="cursor-pointer hover:text-black transition-colors"
              />
              <FiFacebook
                size={18}
                className="cursor-pointer hover:text-black transition-colors"
              />
              <FiGlobe
                size={18}
                className="cursor-pointer hover:text-black transition-colors"
              />
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="border-[1.5px] text-[#087583] border-[#087583] hover:bg-[#065E69]/5 font-bold rounded-[8px] h-11 px-5 flex items-center gap-2 text-[15px]"
        >
          <FiMail size={16} />
          Email
        </Button>
      </div>

      <div className="px-[30px] lg:px-[60px] pt-4 pb-6 text-left bg-[#FAFAFA] flex-1 rounded-b-[24px]">
        <div className="w-full flex items-center justify-center gap-[20px] md:gap-[40px] mb-8">
          <span className="pb-2 border-b border-[#3eb4bc] text-[#065E69] font-bold text-sm cursor-pointer">
            Project
          </span>
          <span className="pb-2 border-b border-transparent text-[#4b5563] font-bold text-sm cursor-pointer hover:text-black transition-colors">
            About
          </span>
          <span className="pb-2 border-b border-transparent text-[#4b5563] font-bold text-sm cursor-pointer hover:text-black transition-colors">
            Links
          </span>
          <span className="pb-2 border-b border-transparent text-[#4b5563] font-bold text-sm cursor-pointer hover:text-black transition-colors">
            Contact
          </span>
        </div>
        <h3 className="font-bold text-[18px] tracking-tight text-[#050505] mb-6">
          Featured Project
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-[20px] border border-[#E1D3FB] shadow-[0_2px_15px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all h-full"
            >
              <div className="relative w-full h-[230px] shrink-0 bg-[#f8fafc] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="px-[22px] pt-[22px] pb-[40px] flex flex-col flex-1">
                <div className="flex items-start gap-4">
                  <span className="text-[17px] font-bold leading-tight">
                    {project.id}
                  </span>
                  <div className="flex flex-col">
                    <h4 className="text-[15px] font-bold  leading-tight mt-[1px]">
                      {project.title}
                    </h4>
                    <span className="text-[12px] text-[#454545] font-medium mt-[5px]">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-[#454545] mt-[12px] leading-[1.6] line-clamp-3 ml-[35px]">
                  {project.description}
                </p>
                <div className="mt-[12px] ml-[35px] flex items-center gap-1.5 text-[13px] font-bold text-[#6A24EA] hover:text-[#9333ea] transition-colors w-fit">
                  View Project
                  <FiArrowRight
                    size={14}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
