"use client";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { forgotPassword, type AuthState } from "@/app/actions/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    forgotPassword,
    undefined as AuthState
  );
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValid = EMAIL_RE.test(email);

  useEffect(() => {
    if (state?.redirectTo) router.push(state.redirectTo);
    else if (state?.error) toast.error(state.error);
  }, [state, router]);

  return (
    <AuthLayout>
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-[#050505]">Forgot Password</h1>
        <p className="text-sm text-gray-500 mt-1">
          Enter your email address and we&apos;ll send you a reset code
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#454545]">
            Email Address
          </label>
          <Input
            name="email"
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
          type="submit"
          disabled={!isValid || pending}
          className="w-full h-11 font-semibold rounded-lg shadow-none transition-opacity bg-[#087583] hover:bg-[#065E69] text-white border-0 disabled:opacity-50"
        >
          {pending ? "Sending…" : "Continue"}
        </Button>
      </form>
    </AuthLayout>
  );
}
