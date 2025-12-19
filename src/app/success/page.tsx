"use client";

import { Check, FolderOpen, Mail } from "lucide-react";
import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get("checkout_id");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative z-10 text-center px-6">
      <div className="feature-card rounded-2xl p-12 max-w-md mx-auto">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-emerald-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>

        <p className="text-zinc-400 mb-6">
          Thank you for purchasing Filenest. Your license key will be sent to your email shortly.
        </p>

        {checkoutId && (
          <p className="text-xs text-zinc-500 mb-6">
            Order ID: {checkoutId}
          </p>
        )}

        <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
          <FolderOpen className="w-4 h-4 text-blue-400" />
          <span>Redirecting to home in 5 seconds...</span>
        </div>

        <button
          onClick={() => router.push("/home")}
          className="btn-primary mt-6 px-6 py-3 rounded-full text-sm font-medium"
        >
          Go to Home Now
        </button>

        <p className="mt-6 text-xs text-zinc-500 flex items-center justify-center gap-2">
          <Mail className="w-3 h-3" />
          Need help?{" "}
          <a
            href="mailto:support@filenest.tech"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            support@filenest.tech
          </a>
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden flex items-center justify-center">
      {/* Animated background orbs */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      <Suspense fallback={<div className="text-zinc-400">Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
