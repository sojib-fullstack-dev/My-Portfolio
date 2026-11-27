"use client";

import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
      <div className="absolute -top-32 right-[6%] -z-10 size-[28rem] rounded-full bg-rose-200/40 blur-[120px] dark:bg-rose-500/12" />
      <div className="absolute -bottom-40 left-[10%] -z-10 size-[30rem] rounded-full bg-emerald-200/40 blur-[130px] dark:bg-emerald-500/12" />

      <div className="glass relative w-full max-w-xl overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-600 shadow-sm backdrop-blur-md dark:border-rose-300/20 dark:bg-white/[0.06] dark:text-rose-300">
          <AlertTriangle className="size-3.5" aria-hidden="true" />
          Something went wrong
        </span>

        <div
          className="mx-auto mt-4 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-500 shadow-lg shadow-rose-500/30"
          aria-hidden="true"
        >
          <AlertTriangle className="size-10 text-white" />
        </div>

        <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
          Page could not load
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          A network or rendering issue interrupted this page. Your connection
          may be unstable — try again in a moment.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:from-emerald-600 hover:to-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:from-emerald-400 dark:to-teal-500 dark:text-emerald-950 dark:hover:from-emerald-300 dark:hover:to-teal-400 dark:focus-visible:outline-emerald-300"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/70 bg-white/60 px-6 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-white/20 dark:bg-white/[0.06] dark:text-white dark:hover:border-emerald-300 dark:hover:bg-white/10"
          >
            <Home className="size-4" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
