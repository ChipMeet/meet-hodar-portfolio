import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillRings } from '@/components/SkillRings';
import { SkillCard } from '@/components/SkillCard';
import {
  SiVercel,
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
    icon: <TbWaveSine className="h-6 w-6" /> // replaced invalid SiVerilog icon
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
