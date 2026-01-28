import { Section } from "@/components/Section";

export default function ResearchPage() {
  return (
    <div className="space-y-10">
      <Section title="Research overview" eyebrow="Research">
        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          My research focuses on embodied robotics, scientific computing, and
          AI-assisted engineering, with an emphasis on building physically grounded,
          reliable systems that integrate perception, optimisation, and efficient
          computation. I am particularly interested in learning-based robotic control,
          programming by demonstration, and algorithmic frameworks that connect
          data-driven methods with principled models.
        </p>
      </Section>

      <Section title="Research experience" eyebrow="Selected projects">
        <div className="space-y-6">
          {/* Surgical robotics */}
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
                University College London
              </h3>
              <span className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                UK, 01/2025 – 03/2025
              </span>
            </div>

            <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Developed an innovative robotic-assisted surgical workflow for conformal
              bone tumour resection。
            </p>
          </div>


          {/* PbD dissertation */}
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
                University College London
              </h3>
              <span className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                UK, 09/2024 – 05/2025
              </span>
            </div>

            <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Developed a robot programming by demonstration (PbD) framework that
              generalises manipulation skills from multiple human demonstrations.
            </p>
          </div>

          {/* EMG HMI */}
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
                University College London
              </h3>
              <span className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                UK, 01/2024
              </span>
            </div>

            <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Bio-signal Based Human–Machine Interface. Designed an EMG-based human–machine interface for measuring muscle
              activity and enabling control of external devices.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Technical skills" eyebrow="IT & research tools">
        <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <strong>Programming:</strong> Python, C++, C, MATLAB, SQL, JavaScript <br />
          <strong>Robotics & simulation:</strong> ROS, URDF, robot kinematics and
          dynamics, motion planning, sensor fusion <br />
          <strong>Machine learning:</strong> Convolutional neural networks,
          probabilistic learning, optimisation (BFGS), learning-based control <br />
          <strong>Scientific computing:</strong> Numerical methods for PDEs, HRSC
          schemes, MPI, OpenMP, CUDA <br />
          <strong>Hardware & systems:</strong> Analogue and digital circuit design,
          FPGA (Quartus), ADC/DAC, EMG signal processing <br />
          <strong>Tools:</strong> Linux, Git, SolidWorks, EPLAN Electric P8
        </p>
      </Section>
    </div>
  );
}