import { Tag } from "./Tag";

interface ProjectCardProps {
  title: string;
  role?: string;
  timeframe?: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  linkLabel?: string;
  linkHref?: string;
}

export function ProjectCard(props: ProjectCardProps) {
  const { title, role, timeframe, description, bullets, tags, linkHref, linkLabel } =
    props;

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 md:p-5 hover:border-accent/60 transition-colors">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm md:text-base font-semibold text-slate-50">
            {title}
          </h3>
          {role && (
            <p className="text-xs text-slate-400 mt-0.5">
              {role}
            </p>
          )}
        </div>
        {timeframe && (
          <p className="text-[11px] uppercase tracking-wide text-slate-400">
            {timeframe}
          </p>
        )}
      </div>
      <p className="mt-3 text-xs md:text-sm text-slate-300">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-1 text-xs md:text-sm text-slate-300 list-disc list-inside">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {(tags?.length || 0) > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags!.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
      {linkHref && (
        <a
          href={linkHref}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-xs text-accent hover:underline"
        >
          {linkLabel ?? "View more"}
        </a>
      )}
    </article>
  );
}
