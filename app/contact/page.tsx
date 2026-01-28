import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Section title="Contact" eyebrow="Get in touch">
        <p>
          For enquiries related to research, collaboration, or opportunities in
          robotics, scientific computing, and AI for engineering, please contact me
          via email. I am also happy to discuss related areas such as semiconductor
          design automation, control systems, and human–machine interfaces.
        </p>
      </Section>

      <Section title="Details">
        <ul className="space-y-2 text-sm md:text-base text-slate-300">
          <li>
            <span className="font-semibold text-slate-100">Email:&nbsp;</span>
            <span>wuzongmian@gmail.com</span>
          </li>
          <li>
            <span className="font-semibold text-slate-100">Location:&nbsp;</span>
            <span>Girton College, University of Cambridge, UK</span>
          </li>
          <li>
            <span className="font-semibold text-slate-100">GitHub:&nbsp;</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              https://github.com/your-username (to be updated)
            </a>
          </li>
          <li>
            <span className="font-semibold text-slate-100">LinkedIn:&nbsp;</span>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              https://linkedin.com/in/your-profile (to be updated)
            </a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
