import { Section } from "@/components/Section";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <Section title="Experience" eyebrow="Industry & research">
        <p>
          My experience spans academic research in robotics, machine learning, and investment
          banking.
        </p>
      </Section>

      <Section title="Industry roles" eyebrow="Selected">
        <div className="space-y-5">
          {/* HKSTP */}
          <div className="rounded-2xl border border-slate-200 border-opacity-10 bg-white bg-opacity-5 p-5 md:p-6 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  Software & AI Engineer
                </h3>
                <p className="mt-1 text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Hong Kong Science and Technology Park (HKSTP)
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="inline-flex items-center rounded-full border border-slate-200 border-opacity-20 bg-slate-100 bg-opacity-60 px-3 py-1 text-sm md:text-base text-slate-800 dark:bg-white dark:bg-opacity-10 dark:text-slate-100">
                  07/2025 – 09/2025
                </span>
                <span className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  Hong Kong
                </span>
              </div>
            </div>
          </div>

          {/* Barclays */}
          <div className="rounded-2xl border border-slate-200 border-opacity-10 bg-white bg-opacity-5 p-5 md:p-6 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  Technology Analyst
                </h3>
                <p className="mt-1 text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Barclays PLC
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="inline-flex items-center rounded-full border border-slate-200 border-opacity-20 bg-slate-100 bg-opacity-60 px-3 py-1 text-sm md:text-base text-slate-800 dark:bg-white dark:bg-opacity-10 dark:text-slate-100">
                  06/2024 – 08/2024
                </span>
                <span className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  London, UK
                </span>
              </div>
            </div>
          </div>

          {/* Manfred */}
          <div className="rounded-2xl border border-slate-200 border-opacity-10 bg-white bg-opacity-5 p-5 md:p-6 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  Electrical Design Engineer Intern
                </h3>
                <p className="mt-1 text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Manfred Automation Co., Ltd
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="inline-flex items-center rounded-full border border-slate-200 border-opacity-20 bg-slate-100 bg-opacity-60 px-3 py-1 text-sm md:text-base text-slate-800 dark:bg-white dark:bg-opacity-10 dark:text-slate-100">
                  07/2023 – 08/2023
                </span>
                <span className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  China
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}