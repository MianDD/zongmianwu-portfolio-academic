export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-400 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Zongmian Wu. All rights reserved.</p>
        <p>
          Built with Next.js & Tailwind CSS. Hosted on Vercel.
        </p>
      </div>
    </footer>
  );
}
