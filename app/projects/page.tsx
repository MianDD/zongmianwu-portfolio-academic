import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <Section title="Selected projects" eyebrow="Projects">
        <p>
          This page summarises selected research and engineering projects spanning
          robotics, scientific computing, semiconductor design automation, and
          embedded systems. Further details are available on request.
        </p>
      </Section>

      <Section title="Robotics & embodied intelligence">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="Learning-Based Control for Hexapod Robotics"
            role="Research Assistant · UCL Robot Perception and Learning Lab"
            timeframe="05/2025–Present"
            description="Development of a six-legged robotic platform that combines nonlinear control and learning-based adaptive policies for terrain-aware locomotion."
            bullets={[
              "Modelled full kinematics and dynamics of the hexapod using URDF.",
              "Implemented and evaluated controllers in a ROS-based simulation environment.",
            ]}
            tags={["Hexapod Robotics", "Nonlinear Control", "Learning-Based Control", "URDF", "ROS"]}
          />
          <ProjectCard
            title="Programming-by-Demonstration for Manipulation"
            role="Third-Year Dissertation · UCL"
            timeframe="09/2024–05/2025"
            description="CNN-based programming-by-demonstration framework that uses vision and sensor data to generalise robot motions from human demonstrations."
            bullets={[
              "Applied convolutional neural networks to recognise demonstrated tasks.",
              "Studied task perception, representation, and planning to enable autonomous execution of demonstrated skills.",
            ]}
            tags={["Programming-by-Demonstration", "CNNs", "Computer Vision", "Manipulation"]}
          />
          <ProjectCard
            title="Robotic-Assisted Surgical Workflow for Conformal Bone Tumour Resection"
            role="Research Assistant · UCL"
            timeframe="01/2025–03/2025"
            description="Design of an integrated workflow for robotic-assisted bone tumour resection using high-speed drilling and laser-based soft tissue cutting."
            bullets={[
              "Implemented a tumour-fitting algorithm using BFGS optimisation to approximate tumour geometry.",
              "Generated 3D cutting trajectories and adaptive actuation control for precise, conformal resections.",
            ]}
            tags={["Surgical Robotics", "Optimisation", "BFGS", "Trajectory Planning"]}
          />
        </div>
      </Section>

      <Section title="Scientific computing & high-performance methods">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="Parallel and GPU-Accelerated Simulation Kernels"
            description="Coursework and mini-projects within the MPhil Scientific Computing programme, focusing on parallelisation for high-performance computing and programming with GPUs (CUDA)."
            bullets={[
              "Implemented parallel algorithms using MPI and OpenMP for distributed and shared-memory architectures.",
              "Developed CUDA kernels and analysed performance, memory hierarchy usage, and scaling behaviour.",
            ]}
            tags={["MPI", "OpenMP", "CUDA", "HPC", "Scientific Computing"]}
          />
          <ProjectCard
            title="Control Systems Design and Analysis"
            role="Project Researcher · UCL"
            timeframe="10/2023–11/2023"
            description="Design and analysis of feedback control systems using MATLAB/Simulink for a range of dynamic scenarios."
            bullets={[
              "Constructed models to analyse stability, steady-state error, and settling time under different gains and inputs.",
              "Explored potential deployment paths for embedded platforms, including FPGA-based implementations.",
            ]}
            tags={["Control Systems", "MATLAB", "Simulink", "Feedback Control"]}
          />
        </div>
      </Section>

      <Section title="AI for semiconductors & devices">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="AI-driven TCAD Agent for Semiconductor Device Simulation"
            role="Software & AI Engineer · HKSTP"
            timeframe="07/2025–09/2025"
            description="AI-assisted TCAD workflow that integrates retrieval-augmented generation and program synthesis to automate PSIM-based semiconductor device simulations."
            bullets={[
              "Designed a hybrid dense–sparse retrieval pipeline (Qdrant + Ollama embeddings + BM25) for TCAD documentation and queries.",
              "Implemented natural-language-driven PSIM script generation with self-correction loops, improving both speed and robustness of device simulations.",
            ]}
            tags={["TCAD", "RAG", "LLMs", "PSIM", "Qdrant"]}
          />
        </div>
      </Section>

      <Section title="Human–machine interfaces & embedded systems">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="Bio-signal Based Human–Machine Interface (EMG)"
            role="Team Leader · UCL"
            timeframe="01/2024"
            description="Electromyography-based system for measuring muscle activity and using EMG signals to control external outputs via a microcontroller."
            bullets={[
              "Designed analogue signal conditioning with instrumentation amplification, bandpass filtering, rectification, and integration stages.",
              "Implemented analogue-to-digital conversion and created audio/visual displays to represent muscle activity and strength.",
            ]}
            tags={["EMG", "Analogue Electronics", "Signal Processing", "Human–Machine Interface"]}
          />
          <ProjectCard
            title="FPGA Audio Descrambler"
            role="Lab Researcher · UCL"
            timeframe="12/2023–02/2024"
            description="FPGA-based system for descrambling audio messages, combining digital filtering and mixed-signal design."
            bullets={[
              "Integrated analogue front-end circuits with a digital system designed in Quartus Prime.",
              "Developed a custom digital notch filter and used MATLAB for analysis and validation.",
            ]}
            tags={["FPGA", "DSP", "Verilog", "MATLAB"]}
          />
        </div>
      </Section>

      <Section title="Robotics & industrial systems">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="Industrial Robotic System for Battery Dismantling"
            role="Electrical Design Engineer Intern · Manfred Automation"
            timeframe="07/2023–08/2023"
            description="Electrical design for an industrial robotic system used in battery dismantling, including schematic design and integration with mechanical subsystems."
            bullets={[
              "Produced electrical drawings in EPLAN Electric P8 and collaborated closely with mechanical design using SolidWorks CAD.",
              "Refined the robotic system structure with additional actuation to improve loading and prevent cargo stacking.",
            ]}
            tags={["Industrial Robotics", "EPLAN", "CAD", "Electrical Design"]}
          />
          <ProjectCard
            title="Robot Maze Navigation Project"
            role="Team Leader · UCL"
            timeframe="05/2023–06/2023"
            description="Design and implementation of circuits and control algorithms for a robot capable of completing a maze using sensor feedback."
            bullets={[
              "Built subsystems enabling two-dimensional motion and obstacle detection.",
              "Developed and iteratively refined Arduino-based algorithms for efficient and robust maze navigation.",
            ]}
            tags={["Robotics", "Embedded Systems", "Arduino", "Sensors"]}
          />
        </div>
      </Section>
    </div>
  );
}
