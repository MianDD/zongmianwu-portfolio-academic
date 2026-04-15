"use client";

import { useState } from "react";

export default function UnlockPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password === "my-secret-portfolio-2026") {
      document.cookie = "site_unlocked=true; path=/";
      window.location.href = "/";
    } else {
      setError("Wrong password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm"
      >
        <h1 className="text-2xl font-semibold">Private site</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Enter the password to access this portfolio.
        </p>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none"
        />

        {error ? <p className="text-sm text-red-500">{error}</p> : null}

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-3"
        >
          Enter
        </button>
      </form>
    </div>
  );
}