export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="glass w-full max-w-sm rounded-3xl px-8 py-10 text-center">
        <p className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Sojib
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            .dev
          </span>
        </p>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/70 dark:bg-white/10">
          <div className="h-full w-1/3 animate-[loading-slide_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 motion-reduce:animate-none" />
        </div>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
          Loading
        </p>
      </div>
    </div>
  );
}
