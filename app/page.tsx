import Link from "next/link";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Tag } from "@/components/Tag";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent mb-2">
            MPhil Scientific Computing · Robotics · AI for Engineering
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-3">
            Zongmian Wu
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mb-3">
            I am an MPhil candidate in Scientific Computing (High Performance
            Computing stream) at the University of Cambridge, based at the
            Cavendish Laboratory. My background is in Electronic and Electrical
            Engineering from University College London, where I graduated in the
            top 5% of my cohort. I work at the interface of robotics, scientific
            computing, and AI-assisted engineering workflows.
          </p>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
            My recent work includes learning-based control for a hexapod
            locomotion platform, programming-by-demonstration for manipulation,
            robotic-assisted surgical workflows for conformal bone tumour
            resection, and an AI-driven TCAD agent for semiconductor device
            simulation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            <Tag label="MPhil Scientific Computing · Cambridge" />
            <Tag label="BEng EEE · UCL (First Class, top 5%)" />
            <Tag label="Robotics & Embodied Intelligence" />
            <Tag label="HPC · CUDA · Parallelisation" />
            <Tag label="AI for Semiconductors & Devices" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm">
            <Link
              href="/research"
              className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 font-medium text-white"
            >
              Research
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 font-medium text-slate-100 hover:border-accent/70"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 font-medium text-slate-100 hover:border-accent/70"
            >
              Experience
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 md:p-5 text-xs md:text-sm text-slate-300 space-y-3">
          <h2 className="text-sm md:text-base font-semibold text-slate-50">
            Snapshot
          </h2>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>
              MPhil Scientific Computing, High Performance Computing stream,
              University of Cambridge (Cavendish Laboratory).
            </li>
            <li>
              BEng Electronic and Electrical Engineering, UCL — First Class
              Honours, GPA 3.98/4.0, ranked in the top 5% of the cohort.
            </li>
            <li>
              Research experience in learning-based control for hexapod
              robotics, programming-by-demonstration, surgical robotics, and
              bio-signal driven human–machine interfaces.
            </li>
            <li>
              Industrial experience in AI-driven semiconductor device
              simulation (HKSTP) and technology infrastructure and automation in
              banking (Barclays).
            </li>
            <li>
              Active in student representation and community building at both
              Cambridge and UCL.
            </li>
          </ul>
        </div>
      </section>

      <Section title="Selected work" eyebrow="Highlights">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="Learning-Based Control for Hexapod Robotics"
            role="Research Assistant · UCL Robot Perception and Learning Lab"
            timeframe="05/2025–Present"
            description="Design and implementation of a six-legged robotic platform that integrates nonlinear control and learning-based adaptive policies for terrain-aware gait optimisation."
            bullets={[
              "Modelled full kinematics and dynamics of the hexapod using URDF and validated controllers in ROS-based simulation.",
              "Formulated dynamic locomotion models with learning-augmented policies to maintain stability across uneven surfaces.",
            ]}
            tags={[
              "Hexapod Robotics",
              "Nonlinear Control",
              "Learning-Based Control",
              "URDF",
              "ROS",
            ]}
          />
          <ProjectCard
            title="AI-driven TCAD Agent for Semiconductor Device Simulation"
            role="Software & AI Engineer · Hong Kong Science and Technology Park"
            timeframe="07/2025–09/2025"
            description="Development of an AI-driven TCAD agent that combines retrieval-augmented generation and large language models to automate semiconductor device simulation and optimisation."
            bullets={[
              "Constructed a hybrid dense–sparse retrieval pipeline (Qdrant + Ollama embeddings + BM25) for TCAD documentation and query understanding.",
              "Implemented automated PSIM script generation and self-correction loops from natural-language prompts for MOSFET and nanoscale device simulations.",
            ]}
            tags={["RAG", "LLMs", "TCAD", "PSIM", "Qdrant"]}
          />
        </div>
      </Section>

      <Section title="Current interests" eyebrow="Research focus">
        <p>
          I am broadly interested in embodied intelligence, high-performance
          scientific computing, and AI for engineering design. Specific
          directions include:
        </p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>
            Learning-based control and programming-by-demonstration for robotic
            manipulation and locomotion.
          </li>
          <li>
            Numerical methods and parallel algorithms for large-scale
            simulations, particularly hyperbolic PDEs and high-resolution
            shock-capturing schemes.
          </li>
          <li>
            AI-assisted workflows for complex engineering tasks, including
            semiconductor device modelling and technical-debt management.
          </li>
          <li>
            Human–machine interfaces based on bio-signals and multimodal
            sensing.
          </li>
        </ul>
      </Section>
    </div>
  );
}
