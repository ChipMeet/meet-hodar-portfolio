import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Download Meet Hodar’s resume and explore the highlights of his VLSI and semiconductor journey.'
};

const experience = [
  {
    role: 'VLSI Research Intern',
    company: 'NanoChip Labs',
    start: new Date('2024-05-01'),
    end: 'Present',
    summary:
      'Developed timing-aware tooling that reduced path analysis runtime by 35% and collaborated on a configurable RISC-V pipeline.',
    highlights: [
      'Automated STA report correlation with Python + Pandas dashboards.',
      'Created reusable SystemVerilog testbench templates with UVM.',
      'Co-authored internal notes on open-source vs commercial flow benchmarks.'
    ]
  },
  {
    role: 'Open Silicon Contributor',
    company: 'FOSSi Foundation',
    start: new Date('2023-09-01'),
    end: new Date('2024-04-01'),
    summary:
      'Contributed to the OpenROAD flow by scripting checks for DRC regressions and improving documentation for new contributors.',
    highlights: [
      'Implemented nightly checklists for Magic/DRC triage.',
      'Built waveform visualizations to debug routing artifacts.',
      'Joined weekly syncs to align community contributors worldwide.'
    ]
  }
];

const skills = [
  { group: 'Design & Verification', items: ['SystemVerilog', 'VHDL', 'Chisel', 'UVM', 'Cocotb'] },
  { group: 'EDA Tools', items: ['PrimeTime', 'Vivado', 'OpenROAD', 'Cadence Innovus', 'Magic VLSI'] },
  { group: 'Programming', items: ['Python', 'Rust', 'TypeScript', 'Tcl', 'Bash'] },
  { group: 'Collaboration', items: ['Git & GitHub', 'Technical Writing', 'Mentorship', 'Public Speaking'] }
];

const achievements = [
  {
    title: 'Chipathon 2024 Finalist',
    description:
      'Led a three-person team to tape-out a sensor fusion accelerator using the SKY130 PDK, ranked in the top 5 submissions.'
  },
  {
    title: 'Best Paper – Institute VLSI Symposium',
    description:
      'Presented a methodology for ML-assisted timing ECOs that reduced manual iterations by 20%.'
  },
  {
    title: 'IEEE Design Contest Winner',
    description:
      'Built a hardware-software co-design for low-power anomaly detection on edge devices.'
  }
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="A snapshot of experience and impact"
        description="You’ll find a blend of hands-on VLSI design, automation scripts, and community collaborations. Download the full PDF for details."
        actions={
          <Button asChild size="lg">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">
              Download PDF
            </Link>
          </Button>
        }
      />

      <section className="section-padding pb-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Experience
              </h2>
              <div className="mt-6 space-y-6">
                {experience.map((item) => (
                  <div
                    key={item.role}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.company}
                        </p>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                        {formatDate(item.start, 'MMM yyyy')} –{' '}
                        {typeof item.end === 'string'
                          ? item.end
                          : formatDate(item.end, 'MMM yyyy')}
                      </p>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                      {item.summary}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Achievements
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="rounded-2xl border border-blue-200 bg-blue-500/5 p-5 text-sm text-blue-900 shadow-sm dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-100"
                  >
                    <h3 className="text-base font-semibold">{achievement.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Skills Snapshot
              </h2>
              <div className="mt-4 space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.group}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                      {skillGroup.group}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                      {skillGroup.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Education
              </h2>
              <p className="mt-3 font-medium text-slate-800 dark:text-slate-100">
                B.Tech Electronics & Communication
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Institute of Semiconductor Innovation · 2021 – 2025
              </p>
              <p className="mt-4 text-xs">
                Coursework: Digital IC Design, Advanced Computer Architecture, Semiconductor
                Fabrication, Analog & Mixed-Signal, Machine Learning for Hardware.
              </p>
              <p className="mt-4 text-xs">
                Activities: VLSI Club Lead, Mentor for junior design projects, Organizer of Open
                Silicon meetups.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Download full resume
              </h2>
              <p className="mt-3">
                Grab the PDF for detailed project breakdowns, academic transcripts, and references.
              </p>
              <Button asChild className="mt-4 w-full">
                <Link href="/resume.pdf" target="_blank" rel="noreferrer">
                  Download PDF
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

