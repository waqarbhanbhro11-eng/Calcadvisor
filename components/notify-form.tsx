import { NotifyForm } from "@/components/notify-form";
"use client";

import { FormEvent, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStatus("loading");

    try {
      // Store locally until the server-side waitlist API is ready
      if (typeof window !== "undefined") {
        localStorage.setItem("ca_waitlist", trimmedEmail);
      }
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      setStatus("success");
    } catch (caught) {
      console.error(caught);
      setError("Unable to save your email. Please try again.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-5 text-white shadow-lg">
        <div className="flex items-center gap-3 font-semibold">
          <span className="text-xl">✅</span>
          <span>You&apos;re on the list!</span>
        </div>
        <p className="mt-2 text-sm text-white/90">
          We&apos;ll notify you when AI Advisor launches.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-5 text-white shadow-xl">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">🤖</span>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.15em] text-white/90">
            AI Advisor — Coming Soon
          </div>
          <p className="mt-0.5 text-sm text-white/75">
            Get personalized AI-powered insights on your results. Join the waitlist.
          </p>
        </div>
      </div>

      <form className="mt-4 flex gap-2" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor="ai-waitlist-email">
          Email address
        </label>
        <input
          id="ai-waitlist-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          className="min-w-0 flex-1 rounded-xl border border-white/30 bg-white/20 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/60 transition focus:border-white focus:bg-white/30"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-purple-600 transition hover:bg-purple-50 disabled:opacity-60"
        >
          {status === "loading" ? "..." : "Notify me"}
        </button>
      </form>

      {error && <p className="mt-2 text-xs text-red-200">{error}</p>}

      <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe any time.</p>
    </div>
  );
}
