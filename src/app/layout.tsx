import type { Metadata } from "next";
import { Afacad, Dancing_Script } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { env } from "@/env/client";

const afacad = Afacad({ subsets: ["latin"], variable: "--font-afacad" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: env.NEXT_PUBLIC_APP_NAME,
    template: `%s · ${env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: `${env.NEXT_PUBLIC_APP_NAME} — a Next.js 16 starter.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-afacad", afacad.variable)}
    >
      <body className={`min-h-full flex flex-col ${afacad.variable} ${dancing.variable}`}>{children}</body>
    </html>
  );
}
