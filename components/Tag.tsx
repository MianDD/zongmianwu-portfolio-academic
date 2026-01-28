export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-[11px] font-medium text-slate-300">
      {label}
    </span>
  );
}
