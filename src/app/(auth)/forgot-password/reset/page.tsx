"use client";
import { useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordField, allPasswordRulesMet } from "@/components/auth/PasswordField";
import { resetPassword, type AuthState } from "@/app/actions/auth";

export default function ResetPasswordPage() {
  const [state, formAction, pending] = useActionState(resetPassword, undefined as AuthState);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const isValid =
    allPasswordRulesMet(password) && confirm.length > 0 && password === confirm;

  useEffect(() => {
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <AuthLayout>
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-[#050505]">Reset Password</h1>
        <p className="text-sm text-gray-500 mt-1">Choose a new password for your account</p>
      </div>

      <form action={formAction} className="flex flex-col gap-4">
        <input type="hidden" name="token" value={token} />

        <PasswordField
          value={password}
          onChange={setPassword}
          showRules
          autoComplete="new-password"
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#454545]">Confirm Password</label>
          <Input
            name="confirm"
            type="password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => { setConfirm(e.target.value); if (confirmError) setConfirmError(""); }}
            onBlur={() => setConfirmError(confirm && password !== confirm ? "Passwords do not match" : "")}
            className={`h-11 bg-[#FAFAFA] border border-[#EDEDED] shadow-none placeholder:text-[#747474] ${confirmError ? "border-red-400" : ""}`}
          />
          {confirmError && <p className="text-xs text-red-500">{confirmError}</p>}
        </div>

        <Button
          type="submit"
          disabled={!isValid || pending}
          className="w-full h-11 font-semibold rounded-lg shadow-none transition-opacity bg-[#087583] hover:bg-[#065E69] text-white border-0 disabled:opacity-50"
        >
          {pending ? "Resetting…" : "Continue"}
        </Button>
      </form>
    </AuthLayout>
  );
}
