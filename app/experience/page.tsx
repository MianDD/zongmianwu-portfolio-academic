import { Section } from "@/components/Section";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <Section title="Experience" eyebrow="Industry & research">
        <p>
          My experience spans academic research in robotics and scientific computing,
          and industry roles in AI-assisted semiconductor design and technology
          infrastructure in banking, as well as engineering internships in industrial
          automation.
        </p>
      </Section>

      <Section title="Industry roles">
        <div className="space-y-4 text-sm md:text-base">
          <div>
            <h3 className="font-semibold text-slate-50 text-sm md:text-base">
              Software & AI Engineer — Hong Kong Science and Technology Park (HKSTP)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Hong Kong · 07/2025–09/2025
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-300 text-xs md:text-sm">
              <li>
                Developed an AI-driven TCAD agent that integrates
                retrieval-augmented generation and large language models to automate
                semiconductor device simulation and optimisation.
              </li>
              <li>
                Constructed a hybrid dense–sparse retrieval pipeline (Qdrant +
                Ollama embeddings + BM25) for TCAD documentation and user queries.
              </li>
              <li>
                Implemented an AI pipeline for natural-language-driven PSIM script
                generation and self-correction, enabling faster and more reliable
                MOSFET and nanoscale device simulations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 text-sm md:text-base">
              Technology Analyst — Barclays PLC
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              London, UK · 06/2024–08/2024
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-300 text-xs md:text-sm">
              <li>
                Worked within Technology Infrastructure Services reviewing the Tech
                Debt Exception process and developing an automated system for
                tracking technical debt.
              </li>
              <li>
                Used PowerApps, Power Automate, and SQL to streamline workflows,
                improve data filtering from the ELF database, and enhance reporting
                and visualisation.
              </li>
              <li>
                Contributed to AI-driven trading model exploration, including the use
                of LLMs and GenAI for order detection and technical-debt document
                summarisation.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 text-sm md:text-base">
              Electrical Design Engineer Intern — Manfred Automation Co., Ltd
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              China · 07/2023–08/2023
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-300 text-xs md:text-sm">
              <li>
                Designed electrical systems for an industrial robotic battery
                dismantling system using EPLAN Electric P8 and SolidWorks CAD.
              </li>
              <li>
                Collaborated with mechanical engineers to refine the system
                structure and improve loading behaviour.
              </li>
              <li>
                Maintained close communication with clients and performed component
                selection and supplier research.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Academic research">
        <div className="space-y-4 text-sm md:text-base">
          <div>
            <h3 className="font-semibold text-slate-50 text-sm md:text-base">
              Research Assistant — UCL Robot Perception and Learning Lab
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              London, UK · 05/2025–Present
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-300 text-xs md:text-sm">
              <li>
                Designed and implemented a hexapod locomotion platform with
                learning-based adaptive control for operation on uneven terrain.
              </li>
              <li>
                Modelled robot kinematics and dynamics in URDF and evaluated control
                policies in ROS-based simulations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 text-sm md:text-base">
              Research Assistant — Robotic-Assisted Surgical Workflow Project
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              London, UK · 01/2025–03/2025
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-300 text-xs md:text-sm">
              <li>
                Developed an integrated workflow for conformal bone tumour resection
                using high-speed drilling and laser-based soft tissue cutting.
              </li>
              <li>
                Implemented tumour-fitting algorithms with BFGS optimisation and
                generated 3D cutting trajectories for robotic execution.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 text-sm md:text-base">
              Third-Year Dissertation — Robot Programming by Demonstration
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              London, UK · 09/2024–05/2025
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-300 text-xs md:text-sm">
              <li>
                Developed a programming-by-demonstration framework using CNNs,
                vision sensors, and other modalities to generalise robot motion
                from demonstrations.
              </li>
              <li>
                Studied probabilistic learning, task representation, and planning to
                enhance autonomous execution of demonstrated skills.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
