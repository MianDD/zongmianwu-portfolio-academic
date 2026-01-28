import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Section title="Contact" eyebrow="Get in touch">
        <p>
          For enquiries related to research, collaboration, or opportunities in jobs, please contact me
          via email.
        </p>
      </Section>

      <ul className="space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
  <li>
    <span className="font-semibold text-slate-800 dark:text-slate-100">
      Location:&nbsp;
    </span>
    <span>University of Cambridge, Cambridge, UK</span>
  </li>

  <li>
    <span className="font-semibold text-slate-800 dark:text-slate-100">
      LinkedIn:&nbsp;
    </span>
    <a
      href="https://www.linkedin.com/in/zongmian-wu/"
      target="_blank"
      rel="noreferrer"
      className="underline hover:text-slate-800 dark:hover:text-slate-100"
    >
      linkedin.com/in/zongmian-wu
    </a>
  </li>
</ul>
    </div>
  );
}
