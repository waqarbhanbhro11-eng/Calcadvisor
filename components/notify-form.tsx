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
      setStatus("idle");
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      setStatus("idle");
      return;
    }

    setError("");
    setStatus("loading");

    try {
      localStorage.setItem("ca_waitlist", trimmedEmail);
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      setStatus("success");
    } catch (caught) {
      console.error(caught);
      setError("Unable to save your email. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-6 text-white shadow-xl">
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
          <span className="text-2xl">🤖</span>
          AI Advisor — Coming Soon
        </div>
        <p className="max-w-xl text-sm text-white/90">
          Get AI-powered insights personalized to your results
        </p>
      </div>

      <form className="mt-6 space-y-3" onSubmit={handleSubmit} noValidate>
        <label className="block">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-base text-white placeholder:text-white/60 outline-none transition focus:border-white focus:bg-white/30"
          />
        </label>

        {error ? (
          <p className="text-sm text-red-200">{error}</p>
        ) : null}

        <button
          type="submit"
          className="w-full rounded-xl bg-white py-3 text-base font-bold text-purple-600 transition hover:bg-purple-50"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Saving..." : "Notify Me 🚀"}
        </button>
      </form>

      <p className="mt-3 text-sm text-white/80">Join 1,000+ users on the waitlist</p>

      {status === "success" ? (
        <div className="mt-5 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 p-4 text-white shadow-lg">
          <div className="flex items-center gap-3 font-semibold">
            <span className="text-xl">✅</span>
            <span>You&apos;re on the list!</span>
          </div>
          <p className="mt-2 text-sm text-white/90">
            We&apos;ll notify you when AI Advisor launches.
          </p>
        </div>
      ) : null}
    </div>
  );
}
