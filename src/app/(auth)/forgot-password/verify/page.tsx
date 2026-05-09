"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";

const CODE_LENGTH = 6;
const RESEND_SECONDS = 98;

export default function ForgotPasswordVerifyPage() {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  function handleChange(i: number, val: string) {
    const char = val.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[i] = char;
    setCode(next);
    if (char && i < CODE_LENGTH - 1) inputs.current[i + 1]?.focus();
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace" && !code[i] && i > 0) inputs.current[i - 1]?.focus();
  }

  function handlePaste(e: React.ClipboardEvent) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    if (!pasted) return;
    e.preventDefault();
    const next = [...code];
    pasted.split("").forEach((c, i) => { next[i] = c; });
    setCode(next);
    inputs.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus();
  }

  const isComplete = code.every(Boolean);
  const mm = String(Math.floor(seconds / 60)).padStart(1, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <AuthLayout>
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-[#050505]">Forgot Password</h1>
        <p className="text-sm text-gray-500 mt-1">
          Enter the code we sent to your email address
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-[#454545]">Enter code</label>
        <div className="flex gap-6" onPaste={handlePaste}>
          {code.map((val, i) => (
            <input
              key={i}
              ref={(el) => { inputs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={val}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-full h-10 text-center text-lg font-semibold bg-[#FAFAFA] border border-[#EDEDED] rounded-lg outline-none focus:border-[#087583] transition-colors"
            />
          ))}
        </div>

        <Button
          onClick={() => router.push("/forgot-password/reset")}
          disabled={!isComplete}
          className="w-full h-11 font-semibold rounded-lg shadow-none transition-opacity bg-[#087583] hover:bg-[#065E69] text-white border-0 disabled:opacity-50"
        >
          Continue
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500">
        Didn&apos;t get a code?{" "}
        {seconds > 0 ? (
          <>
            <span className="text-[#087583] font-medium">Resend Code</span>
            {" "}in <span className="font-medium">{mm}:{ss}</span>
          </>
        ) : (
          <button
            onClick={() => setSeconds(RESEND_SECONDS)}
            className="text-[#087583] font-medium hover:underline cursor-pointer"
          >
            Resend Code
          </button>
        )}
      </p>
    </AuthLayout>
  );
}
