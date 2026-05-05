import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Is OpenProfile free to Use ?",
    answer:
      "Yes! Creating your profile and getting verified is completely free. There are no hidden fees or credit card requirements.",
  },
  {
    question: "How does verification work ?",
    answer:
      "Verification is a seamless process. We verify your identity through your connected social accounts and professional credentials to ensure every profile on our platform is authentic and trusted.",
  },
  {
    question: "Can people find me if I don't share my profile link ?",
    answer:
      "By default, your profile is accessible via your unique link. However, you can choose to be discoverable in our global directory, allowing others to find you based on your skills and profession.",
  },
  {
    question: "What happens when someone invites me ?",
    answer:
      "When someone invites you, you'll receive an instant notification. This allows you to connect, collaborate, and explore new opportunities within the OpenProfile ecosystem.",
  },
  {
    question: "Can I customize my profile",
    answer:
      "Absolutely! You can personalize your profile with your own branding, featured projects, social links, and bio to truly make it your own.",
  },
];

export function FAQ() {
  return (
    <section className="w-full bg-[#FEFEFE] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-[32px] md:text-[48px] font-semibold tracking-tight text-[#050505] leading-tight">
            FAQ
          </h2>
          <p className="text-[16px] md:text-[20px] text-[#454545] font-normal max-w-2xl mx-auto">
            Everything you need to know about creating your verified profile
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-1">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-[#ABABAB]/30 data-[state=open]:border-[#087583]/60 rounded-[12px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all duration-300"
              >
                <AccordionTrigger 
                  className="text-[15px] md:text-[16px] font-semibold text-[#050505] hover:no-underline py-6 px-8 md:px-10 flex items-center justify-between transition-all"
                >
                  <span className="text-left leading-tight font-normal pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[13px] md:text-[14px] text-[#525252] font-medium leading-normal px-8 md:px-10 pb-7">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
