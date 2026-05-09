import { TestimonialCard } from "./TestimonialCard";

export function Proof() {
  const testimonials = [
    {
      name: "David",
      role: "Product Designer",
      quote: "Before using Open Profile, I had my work scattered across different platforms—my portfolio on one site, links in my bio, and social media everywhere else. It was always a struggle sending everything to clients without overwhelming them.\n\nWith Open Profile, I was able to bring everything together into one clean, professional page. Now when someone wants to know about me, I just send a single link and they can see my work.",
      avatarSrc: "/testimonials/david.png",
      className: "lg:col-span-2",
    },
    {
      name: "Amaka",
      role: "Content Creator",
      quote: "Having everything in one place makes me look more professional, especially with the verification badge.",
      avatarSrc: "/testimonials/amaka.png",
      className: "lg:col-span-1",
    },
    {
      name: "Tunde",
      role: "Frontend Developer",
      quote: "I like that people can actually find my profile instead of me always sharing it first.",
      avatarSrc: "/testimonials/tunde.png",
      className: "lg:col-span-1",
    },
    {
      name: "Linda",
      role: "Content Creator",
      quote: "I like that people can actually find my profile instead of me always sharing it first.",
      avatarSrc: "/testimonials/linda.png",
      className: "lg:col-span-1",
    },
    {
      name: "James",
      role: "Backend Developer",
      quote: "I used to send multiple links to clients. Now I just share one profile and everything they need is there.",
      avatarSrc: "/testimonials/james.png",
      className: "lg:col-span-1",
    },
    {
      name: "Chinedu",
      role: "Programmer",
      quote: "What I like most about Open Profile is how simple it is to bring everything together into one clean, professional page. Now, when someone wants to learn more about me, I just share a single link and they can instantly see my work, connect with me, and even verify my profile.\n\nIt's made a big difference in how I present myself online. I feel more organized, more credible, and I've noticed that people take me more seriously when they reach out.",
      avatarSrc: "/testimonials/chinedu.png",
      className: "lg:col-span-2",
    },
  ];

  return (
    <section className="w-full lg:bg-[#FAFAFA] py-24 md:py-32 my-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 md:mb-20">
          <div className="flex items-center gap-1 text-[13px] font-medium tracking-[-0.02em] uppercase text-[#050505]">
            Social Proof
            <div className="w-2 h-2 rounded-full bg-[#FF5C00] ml-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-[46px] font-semibold text-[#050505] leading-[1.1] tracking-tight max-w-3xl">
            Join creators and freelancers building their identity online
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
