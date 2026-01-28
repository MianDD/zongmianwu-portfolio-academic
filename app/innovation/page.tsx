import { Section } from "@/components/Section";

export default function InnovationPage() {
  return (
    <div className="space-y-10">
      <Section title="Innovation & translational interests" eyebrow="Innovation">
        <p>
          In addition to core research and engineering work, I am interested in how
          technical ideas can be translated into practice. I have engaged with several
          innovation and commercialisation initiatives in areas such as energy systems,
          nuclear micro-reactors, and medical technologies.
        </p>
      </Section>

      <Section title="Selected engagements">
        <ul className="space-y-3 text-sm md:text-base text-slate-300 list-disc list-inside">
          <li>
            <strong>SmartShell Tech</strong> — concepts for improving EV battery safety
            and resilience through sensing and protective architectures.
          </li>
          <li>
            <strong>Argon Recycle</strong> — exposure to chemical looping combustion
            approaches for purification of inert purge gases.
          </li>
          <li>
            <strong>CamAtom</strong> — engagement with concepts around transportable
            nuclear micro-reactors for off-grid applications.
          </li>
          <li>
            <strong>PelviSmart</strong> — participation in an EnterpriseTECH project
            exploring commercial pathways for pelvic health technologies.
          </li>
        </ul>
      </Section>
    </div>
  );
}
