import { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="mb-4">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent mb-1">
            {eyebrow}
          </p>
        )}
        <h2 className="section-heading">{title}</h2>
      </div>
      <div className="text-sm md:text-base text-slate-300 space-y-3">
        {children}
      </div>
    </section>
  );
}
