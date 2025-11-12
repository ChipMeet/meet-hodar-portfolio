import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Meet Hodar’s Verilog experiments, FPGA explorations, and supporting tooling—documented with code, waveforms, and writeups.'
};

const projects = [
  {
    title: 'hdl-learning',
    description:
      'A structured repository of Verilog practice projects ranging from basic logic gates to counters, multiplexers, and testbenches. Includes waveform captures and markdown notes for each lesson.',
    tech: ['Verilog', 'Icarus', 'GTKWave'],
    href: 'https://github.com/ChipMeet/hdl-learning',
    status: 'live' as const
  },
  {
    title: 'Half & Full Adders',
    description:
      'Built gate-level implementations of half and full adders with exhaustive testbenches. Captured simulation waveforms and wrote companion blog posts to explain truth tables.',
    tech: ['Verilog', 'Simulation', 'Logic Design'],
    href: 'https://github.com/ChipMeet/hdl-learning/tree/main/basic_projects/adders',
    status: 'live' as const
  },
  {
    title: '4:1 Multiplexer + Demux Set',
    description:
      'Designed mux/demux blocks with parameterised data widths. Validated using self-checking benches and compared behavioural vs structural styles.',
    tech: ['Verilog', 'Mux/Demux', 'Testbench'],
    href: 'https://github.com/ChipMeet/hdl-learning/tree/main/basic_projects/multiplexers',
    status: 'live' as const
  },
  {
    title: 'Sequential Logic Playground',
    description:
      'D flip-flop, counters, and shift registers built as part of sequential circuit studies. Currently expanding coverage to include enable signals and reset strategies.',
    tech: ['SystemVerilog', 'Counters', 'FPGA'],
    href: 'https://github.com/ChipMeet/hdl-learning/tree/main/Intermediate_Projects',
    status: 'in-progress' as const
  },
  {
    title: 'Traffic Light FSM',
    description:
      'State machine controlling an intersection with configurable timing parameters. Visualised behaviour using GTKWave and documented state transitions.',
    tech: ['FSM', 'SystemVerilog', 'GTKWave'],
    href: 'https://github.com/ChipMeet/hdl-learning/tree/main/Intermediate_Projects/traffic_light_fsm',
    status: 'in-progress' as const
  },
  {
    title: 'Waveform Companion (UI Prototype)',
    description:
      'React-based interface concept for reviewing simulation dumps, annotating signals, and sharing notes with teammates. Currently under design iterations.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/ChipMeet/hdl-learning/tree/main/Intermediate_Projects/waveform-viewer',
    status: 'upcoming' as const
  }
] as const;

export default function ProjectsPage() {
  return (
    <div className="section-container space-y-12 pt-16 pb-20">
      <SectionHeader
        eyebrow="Projects"
        title="Building a silicon-ready portfolio one experiment at a time"
        description="Hands-on practice is how I sharpen my VLSI intuition. These projects capture the journey—complete with code, tests, and learnings."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
