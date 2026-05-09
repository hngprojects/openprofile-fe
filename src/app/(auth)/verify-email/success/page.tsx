import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";

export default function VerifySuccessPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center gap-5 py-4">
        {/* Badge icon */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <path
            d="M40 4l7.6 5.5 9.3-1.6 4.2 8.5 8.5 4.2-1.6 9.3L73.5 37l-5.5 7.6 1.6 9.3-8.5 4.2-4.2 8.5-9.3-1.6L40 70.5l-7.6-5.5-9.3 1.6-4.2-8.5-8.5-4.2 1.6-9.3L6.5 37l5.5-7.6-1.6-9.3 8.5-4.2 4.2-8.5 9.3 1.6z"
            stroke="#087583" strokeWidth="3" fill="none"
          />
          <path d="M27 40l9 9 17-17" stroke="#087583" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#050505]">Email Verified Successfully</h1>
          <p className="text-sm text-gray-500 mt-2">
            Your account has been successfully created, you can now sign in
          </p>
        </div>

        <Button asChild className="w-full h-11 bg-[#087583] hover:bg-[#065E69] text-white font-semibold rounded-lg shadow-none border-0">
          <Link href="/login">Continue</Link>
        </Button>
      </div>
    </AuthLayout>
  );
}
