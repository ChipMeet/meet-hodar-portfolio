import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillRings } from '@/components/SkillRings';
import { SkillCard } from '@/components/SkillCard';
import {
  SiVerilog,
  SiPython,
  SiDocker,
  SiGit,
  SiJupyter,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiLinux,
  SiC
} from 'react-icons/si';
import { LuDatabase } from 'react-icons/lu';
import { TbWaveSine } from 'react-icons/tb';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Explore Meet Hodar’s skillset across hardware design, tooling, and collaboration—blending Verilog fundamentals with modern web and automation practices.'
};

const coreSkills = [
  {
    title: 'RTL Design & Verification',
    description:
      'Writing synthesizable Verilog/SystemVerilog, constructing state machines, and building self-checking testbenches.',
    icon: <SiVerilog className="h-6 w-6" />
  },
  {
    title: 'Simulation & Waveform Debug',
    description:
      'Using Icarus Verilog, ModelSim, and GTKWave to iterate quickly, capture signals, and document findings.',
    icon: <TbWaveSine className="h-6 w-6" />
  },
  {
    title: 'Automation with Python',
    description:
      'Creating scripts for testbenches, regression orchestration, and report parsing to streamline workflows.',
    icon: <SiPython className="h-6 w-6" />
  },
  {
    title: 'Embedded & C Programming',
    description:
      'Implementing algorithms close to hardware, debugging microcontroller logic, and bridging firmware with HDL.',
    icon: <SiC className="h-6 w-6" />
  },
  {
    title: 'Data & Visualization',
    description:
      'Applying SQL, SQLite, and dashboards to interpret simulation metrics and expose insights to collaborators.',
    icon: <LuDatabase className="h-6 w-6" />
  },
  {
    title: 'Frontend for Hardware Tools',
    description:
      'Building React-based dashboards to compare waveforms, annotate bugs, and track experiment progress.',
    icon: <SiReact className="h-6 w-6" />
  }
] as const;

const toolbelt = [
  { name: 'Git & GitHub', icon: <SiGit className="h-5 w-5" /> },
  { name: 'Docker', icon: <SiDocker className="h-5 w-5" /> },
  { name: 'Linux & Shell', icon: <SiLinux className="h-5 w-5" /> },
  { name: 'Jupyter & Notebooks', icon: <SiJupyter className="h-5 w-5" /> },
  { name: 'HTML / CSS / JS', icon: <SiHtml5 className="h-5 w-5" /> },
  { name: 'TypeScript', icon: <SiJavascript className="h-5 w-5" /> }
] as const;

export default function SkillsPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="section-container space-y-12 pt-16">
        <SectionHeader
          eyebrow="Skills"
          title="Engineering skills shaped by experimentation and grit"
          description="My strengths span digital design, simulation tooling, and the collaborative practices required to ship hardware projects. These are the capabilities I bring to every lab, sprint, and open-source contribution."
        />

        <SkillRings />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </section>

      <section className="section-container space-y-8">
        <SectionHeader
          eyebrow="Toolbelt"
          title="Tools & platforms in daily rotation"
          description="Comfortable across modern developer tooling—from version control to visualization—to keep experiments reproducible and collaborative."
        />

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {toolbelt.map((tool) => (
            <div
              key={tool.name}
              className="glass-card flex items-center gap-3 px-6 py-4 text-sm text-slate-200"
            >
              <span className="text-blue-200">{tool.icon}</span>
              {tool.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

