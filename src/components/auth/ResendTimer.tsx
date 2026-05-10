"use client";
import { useState, useEffect } from "react";

type Props = {
  initialSeconds?: number;
  email?: string;
};

export function ResendTimer({ initialSeconds = 98, email }: Props) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(1, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  async function handleResend() {
    if (resending) return;
    setResending(true);
    // TODO: call resend API with email
    setSeconds(initialSeconds);
    setResending(false);
  }

  return (
    <p className="text-center text-sm text-gray-500">
      Didn&apos;t get a code?{" "}
      <button
        onClick={handleResend}
        disabled={resending}
        className="text-[#087583] font-medium hover:underline cursor-pointer disabled:opacity-50"
      >
        Resend Code
      </button>
      {seconds > 0 && (
        <>
          {" "}
          in{" "}
          <span className="font-medium">
            {mm}:{ss}
          </span>
        </>
      )}
    </p>
  );
}
