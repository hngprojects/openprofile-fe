"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { PasswordField, allPasswordRulesMet } from "@/components/auth/PasswordField";
import { Input } from "@/components/ui/input";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const router = useRouter();

  const isValid = allPasswordRulesMet(password) && confirm.length > 0 && password === confirm;

  function handleConfirmBlur() {
    setConfirmError(confirm && password !== confirm ? "Passwords do not match" : "");
  }

  function handleContinue() {
    // TODO: call backend to reset password
    router.push("/forgot-password/success");
  }

  return (
    <AuthLayout>
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-[#050505]">Reset Password</h1>
        <p className="text-sm text-gray-500 mt-1">
          Choose a new password for your account
        </p>
      </div>

      <PasswordField
        value={password}
        onChange={setPassword}
        showRules
        autoComplete="new-password"
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#454545]">Confirm Password</label>
        <Input
          type="password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => { setConfirm(e.target.value); if (confirmError) setConfirmError(""); }}
          onBlur={handleConfirmBlur}
          className={`h-11 bg-[#FAFAFA] border border-[#EDEDED] shadow-none placeholder:text-[#747474] ${confirmError ? "border-red-400" : ""}`}
        />
        {confirmError && <p className="text-xs text-red-500">{confirmError}</p>}
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
