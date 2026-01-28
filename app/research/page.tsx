import { Section } from "@/components/Section";

export default function ResearchPage() {
  return (
    <div className="space-y-10">
      <Section title="Research overview" eyebrow="Research">
        <p>
          My research lies at the intersection of robotics, scientific computing,
          and AI-assisted engineering. I am interested in how physically grounded
          models and data-driven methods can be combined to enable reliable
          perception, prediction, and control in complex environments.
        </p>
      </Section>

      <Section title="Embodied intelligence & robotics">
        <p>
          I work on robotic systems that must coordinate perception, dynamics, and
          control under uncertainty. Representative projects include:
        </p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>
            <strong>Learning-based control for hexapod robotics</strong> — design
            of a six-legged locomotion platform that integrates nonlinear control
            and adaptive learning policies for terrain-aware gait optimisation,
            with kinematics and dynamics modelled in URDF and validated in
            ROS-based simulation.
          </li>
          <li>
            <strong>Programming-by-demonstration (PbD) for manipulation</strong>{" "}
            — application of convolutional neural networks and multimodal sensing
            (vision, force, IMU) to generalise robot motion from human
            demonstrations, reducing the need for manual programming.
          </li>
          <li>
            <strong>Robotic-assisted surgical workflows</strong> — development of
            tumour-fitting algorithms (using BFGS optimisation) and adaptive
            actuation control for conformal bone tumour resection, integrating
            high-speed drilling and laser-based soft tissue cutting.
          </li>
        </ul>
      </Section>

      <Section title="Scientific computing & high-performance algorithms">
        <p>
          As part of the MPhil in Scientific Computing, I study numerical methods
          and algorithms for large-scale simulation, with a focus on:
        </p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>
            High-resolution shock-capturing (HRSC) schemes for hyperbolic PDEs
            arising in compressible flows.
          </li>
          <li>
            Parallelisation strategies using MPI, OpenMP, and CUDA for modern
            heterogeneous architectures.
          </li>
          <li>
            Scientific programming in C++ and research computing workflows for
            reproducible, performance-aware simulations.
          </li>
        </ul>
        <p className="mt-2">
          I am particularly interested in how these techniques can be used to
          support real-time or near-real-time reasoning for robotic systems and
          engineering design tasks.
        </p>
      </Section>

      <Section title="AI for engineering and semiconductor design">
        <p>
          I develop AI-assisted workflows that support complex engineering tasks,
          with a current emphasis on semiconductor device simulation:
        </p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>
            <strong>AI-driven TCAD agent</strong> — integration of
            retrieval-augmented generation, large language models, and program
            synthesis to automate PSIM-based device simulation pipelines for
            MOSFET and nanoscale devices.
          </li>
          <li>
            Hybrid dense–sparse retrieval (Qdrant-based vector search combined
            with BM25) to interpret TCAD manuals and user queries and provide
            accurate, context-aware instructions.
          </li>
          <li>
            Systematic benchmarking and tuning of embedding strategies to trade
            off accuracy and computational efficiency across TCAD tasks.
          </li>
        </ul>
      </Section>

      <Section title="Human–machine interfaces & bio-signals">
        <p>
          Earlier work explored bio-signal driven interfaces, including an EMG-based
          system that measures muscle activity for controlling external devices.
          This involved analogue signal conditioning, bandpass filtering,
          rectification, and analogue-to-digital conversion, as well as the design
          of audio and visual feedback for muscle activation levels.
        </p>
      </Section>
    </div>
  );
}
