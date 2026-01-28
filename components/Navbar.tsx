"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Left: name + descriptor */}
        <div className="flex items-baseline gap-4">
          <Link href="/" className="text-sm font-semibold text-slate-900">
            Zongmian Wu
          </Link>
          <span className="hidden text-sm text-slate-500 md:inline">
            Scientific Computing · Robotics · AI for Engineering
          </span>
        </div>

        {/* Right: nav */}
        <nav className="flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-md px-3 py-2 text-sm transition",
                  active
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}