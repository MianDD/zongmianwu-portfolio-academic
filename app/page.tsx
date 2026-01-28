import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700">
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  meta,
  bullets,
  tags,
  href,
}: {
  title: string;
  subtitle: string;
  meta?: string;
  bullets: string[];
  tags?: string[];
  href?: string;
}) {
  const inner = (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-[1px] hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#0b1f3b] transition">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>

          {tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          ) : null}
        </div>

        {meta ? (
          <span className="shrink-0 text-xs text-slate-500">{meta}</span>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b1f3b]/20"
    >
      {inner}
    </Link>
  ) : (
    inner
  );
}

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO (single-column, academic) */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-slate-500">
            MPHIL SCIENTIFIC COMPUTING · ROBOTICS · AI FOR ENGINEERING
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-slate-900 tracking-tight">
            Zongmian Wu
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            University of Cambridge · Cavendish Laboratory
          </p>

          <p className="mt-6 text-base leading-relaxed text-slate-700">
            I work on performance-aware scientific computing and learning-enabled
            robotics. I hold the first-class BEng Electronic and Electrical Engineering degree at University College London.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-[#0b1f3b] border-b border-slate-200 pb-2">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-slate-600 hover:text-[#0b1f3b] transition"
          >
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card
            title="GPU Acceleration for Scientific Workloads"
            subtitle="MPhil · Scientific Computing (HPC)"
            meta="2025–Present"
            tags={["CUDA", "Performance", "Numerics"]}
            bullets={[
              "Focus on performance profiling, bottleneck analysis, and kernel-level optimisation.",
              "Aim for reproducible benchmarking and clean engineering documentation.",
            ]}
            href="/research"
          />

          <Card
            title="AI-driven TCAD Agent for Semiconductor Device Simulation"
            subtitle="Software & AI Engineer · Hong Kong Science and Technology Park"
            meta="07/2025–09/2025"
            tags={["RAG", "Simulation", "Agent Systems"]}
            bullets={[
              "Developed an agent workflow for device simulation automation with retrieval + self-correction loops.",
              "Benchmarked retrieval strategies to improve accuracy and efficiency in engineering workflows.",
            ]}
            href="/experience"
          />
        </div>
      </section>

      {/* Short academic-style footer block */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="max-w-3xl">
          <h3 className="text-base font-semibold text-slate-900">
            Academic interests
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            High-performance computing (MPI/OpenMP/CUDA), scientific machine
            learning, robust perception-and-control pipelines in robotics, and
            AI-assisted engineering workflows for simulation and design.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/research"
              className="text-sm font-medium text-[#0b1f3b] hover:underline"
            >
              Read research statement →
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 hover:text-[#0b1f3b] transition"
            >
              Contact →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}