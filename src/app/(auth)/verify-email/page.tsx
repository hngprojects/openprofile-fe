"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthPageHeader } from "@/components/auth/AuthPageHeader";
import { OtpInput } from "@/components/auth/OtpInput";
import { ResendTimer } from "@/components/auth/ResendTimer";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  const [code, setCode] = useState<string[]>([]);
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") ?? "";

  const isComplete = code.length === 6 && code.every(Boolean);

  return (
    <AuthLayout>
      <AuthPageHeader
        title="Email Verification"
        subtitle={`We sent a temporary code to ${email}`}
      />

      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-[#454545]">Enter code</label>
        <OtpInput onChange={setCode} />
        <Button
          onClick={() => router.push("/verify-email/success")}
          disabled={!isComplete}
          className="w-full h-11 font-semibold rounded-lg shadow-none transition-opacity bg-[#087583] hover:bg-[#065E69] text-white border-0 disabled:opacity-50"
        >
          Continue
        </Button>
      </div>

      <ResendTimer email={email} />
    </AuthLayout>
  );
}
