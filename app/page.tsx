import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillRings } from '@/components/SkillRings';
import { SkillCard } from '@/components/SkillCard';
import { ProjectCard } from '@/components/ProjectCard';
import { PostPreview } from '@/components/PostPreview';
import { ContactForm } from '@/components/ContactForm';
import { getAllPosts } from '@/lib/posts';
import { SiVerilog, SiPython, SiDocker, SiGit, SiLinux, SiReact, SiJavascript, SiHtml5, SiCss3, SiC, SiTensorflow } from 'react-icons/si';
import { TbCircuitCapacitor } from 'react-icons/tb';
import { LuCpu } from 'react-icons/lu';
import { HiOutlineAcademicCap } from 'react-icons/hi2';

const PROJECTS = [
  {
    title: 'hdl-learning',
    description:
      'Collection of HDL experiments—from basic gates to intermediate digital blocks—built while learning Verilog and SystemVerilog.',
    tech: ['Verilog', 'Icarus', 'GTKWave'],
    href: 'https://github.com/ChipMeet/hdl-learning'
  },
  {
    title: 'Traffic Light FSM',
    description:
      'Finite state machine controlling a four-way junction with configurable timing slots and simulation waveforms.',
    tech: ['SystemVerilog', 'FSM', 'Testbench'],
    href: 'https://github.com/ChipMeet/hdl-learning/tree/main/Intermediate_Projects/traffic_light_fsm',
    status: 'in-progress' as const
  },
  {
    title: 'Waveform Visualizer',
    description:
      'React-powered viewer to inspect GTKWave dumps quickly, with bookmarking and note-taking for debugging sessions.',
    tech: ['React', 'TypeScript', 'Electron'],
    href: 'https://github.com/ChipMeet/hdl-learning/tree/main/Intermediate_Projects/waveform-viewer',
    status: 'upcoming' as const
  }
] as const;

export default async function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <Hero />

      <section id="about" className="section-container space-y-12 py-16 lg:py-20">
        <SectionHeader
          eyebrow="About"
          title="Aspiring VLSI engineer bridging ideas and silicon"
          description="I’m a B.Tech ICT student focused on digital design, verification, and the tooling that powers modern chip development. I love building things from first principles and sharing the lessons through blogs and open-source projects."
        />

        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-sm text-slate-300">
              My current mission: master RTL design, understand semiconductor flows, and
              contribute to the next wave of efficient hardware systems. I work across the
              stack—from Verilog modules and FPGA experiments to React dashboards that
              visualise simulation data.
            </p>
            <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                  Email
                </p>
                <Link
                  href="mailto:hodarmeet99010@gmail.com"
                  className="mt-1 block text-slate-100"
                >
                  hodarmeet99010@gmail.com
                </Link>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                  LinkedIn
                </p>
                <Link
                  href="https://www.linkedin.com/in/meet-hodar-2200b1284"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-slate-100"
                >
                  meet-hodar-2200b1284
                </Link>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                  GitHub
                </p>
                <Link
                  href="https://github.com/ChipMeet/hdl-learning"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-slate-100"
                >
                  ChipMeet/hdl-learning
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <LuCpu className="h-6 w-6 text-blue-300" />
              RTL design &amp; verification workflows for ASIC-ready modules.
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <TbCircuitCapacitor className="h-6 w-6 text-blue-300" />
              Building simulation benches with Icarus Verilog and GTKWave to iterate fast.
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <HiOutlineAcademicCap className="h-6 w-6 text-blue-300" />
              Documenting every learning via blogs to help peers enter VLSI.
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-container space-y-12 py-16 lg:py-20">
        <SectionHeader
          eyebrow="Skills"
          title="Balancing technical depth with collaborative energy"
          description="Skill rings capture the traits I bring to every team, while the cards highlight tools and technologies I practice daily."
        />

        <SkillRings />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Verilog & Digital Design"
            description="RTL modules, finite state machines, and structural design patterns verified via thorough testbenches."
            icon={<SiVerilog className="h-6 w-6" />}
          />
          <SkillCard
            title="Python & Tooling"
            description="Automation scripts that accelerate regression setups, waveform analysis, and data processing."
            icon={<SiPython className="h-6 w-6" />}
          />
          <SkillCard
            title="C & Embedded Logic"
            description="Low-level programming fundamentals that translate logic specs into efficient implementations."
            icon={<SiC className="h-6 w-6" />}
          />
          <SkillCard
            title="React Dashboards"
            description="Designing intuitive UIs to monitor simulations, track experiments, and surface insights."
            icon={<SiReact className="h-6 w-6" />}
          />
          <SkillCard
            title="Linux, Git & DevOps"
            description="Version control hygiene, shell automation, and containerization for reproducible FPGA and ASIC flows."
            icon={<SiLinux className="h-6 w-6" />}
          />
          <SkillCard
            title="FPGA & Prototyping"
            description="Configuring boards, mapping HDL designs, and validating ideas before silicon."
            icon={<SiTensorflow className="h-6 w-6 rotate-12" />}
          />
        </div>

        <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          {[SiGit, SiDocker, SiJavascript, SiHtml5, SiCss3].map((Icon, index) => (
            <div
              key={index}
              className="glass-card flex items-center justify-center gap-2 px-6 py-4 text-center"
            >
              <Icon className="h-5 w-5 text-blue-300" />
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-container space-y-12 py-16 lg:py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Learning by building silicon-ready experiments"
          description="A snapshot of the projects powering my VLSI journey. Each one blends theory with simulation, tooling, and documentation."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href="/projects"
            className="text-sm font-semibold text-brand-primary transition hover:text-blue-400"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <section id="posts" className="section-container space-y-12 py-16 lg:py-20">
        <SectionHeader
          eyebrow="Latest Posts"
          title="Documenting the semiconductor learning curve"
          description="Long-form notes, tutorials, and takeaways from building VLSI projects. Every article is written in markdown and rendered with syntax highlighting."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length ? (
            posts.map((post) => <PostPreview key={post.slug} {...post} />)
          ) : (
            <p className="text-slate-300">
              Posts coming soon. Subscribe on LinkedIn to get notified.
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Link
            href="/posts"
            className="text-sm font-semibold text-brand-primary transition hover:text-blue-400"
          >
            Read all posts →
          </Link>
        </div>
      </section>

      <section id="contact" className="section-container space-y-12 py-16 pb-20 lg:py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s collaborate on silicon, tooling, or research"
          description="Whether you’re exploring a design sprint, need support with FPGA prototyping, or want to co-author a blog, drop a message and I’ll get back within a day."
        />
        <ContactForm />
      </section>
    </div>
  );
}

