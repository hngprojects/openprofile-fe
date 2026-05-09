"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();

  const isValid = EMAIL_RE.test(email);

  function handleContinue() {
    // TODO: call backend to send OTP
    toast.success("Check your email for the OTP code");
    router.push("/forgot-password/verify");
  }

  return (
    <AuthLayout>
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-[#050505]">Forgot Password</h1>
        <p className="text-sm text-gray-500 mt-1">
          Enter your email address and we&apos;ll send you a reset code
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#454545]">
          Email Address
        </label>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() =>
            setEmailError(
              email && !EMAIL_RE.test(email) ? "Incorrect email" : ""
            )
          }
          className={`h-11 bg-[#FAFAFA] border border-[#EDEDED] shadow-none placeholder:text-[#747474] ${emailError ? "border-red-400" : ""}`}
        />
        {emailError && <p className="text-xs text-red-500">{emailError}</p>}
      </div>

      <Button
        onClick={handleContinue}
        disabled={!isValid}
        className="w-full h-11 font-semibold rounded-lg shadow-none transition-opacity bg-[#087583] hover:bg-[#065E69] text-white border-0 disabled:opacity-50"
      >
        Continue
      </Button>
    </AuthLayout>
  );
}
