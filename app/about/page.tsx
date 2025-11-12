import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Discover Meet Hodar’s journey into VLSI and semiconductor engineering—how curiosity about digital systems grew into a mission to design silicon-ready hardware.'
};

const highlights = [
  {
    title: 'Bridging RTL and hardware',
    description:
      'Designing Verilog modules, state machines, and verification benches that move ideas closer to silicon.'
  },
  {
    title: 'Learning by teaching',
    description:
      'Writing tutorials, documenting HDL projects, and mentoring juniors to make VLSI concepts approachable.'
  },
  {
    title: 'Tooling to go faster',
    description:
      'Automating simulation flows with Python, building React dashboards for waveform analysis, and experimenting with DevOps for FPGA pipelines.'
  }
];

const traits = [
  'Curiosity over complacency',
  'Documentation-first mindset',
  'Rigorous testing and verification',
  'Collaborative team player',
  'Design thinking applied to hardware',
  'Deep love for open-source silicon'
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="section-container space-y-12 pt-16">
        <SectionHeader
          eyebrow="About Meet"
          title="From tinkering with logic gates to architecting VLSI futures"
          description="Hi! I’m Meet Hodar, a B.Tech student in Information and Communication Technology. My journey started with curiosity for how processors think; today, I’m building Verilog projects, exploring FPGA flows, and documenting what it takes to become a semiconductor engineer."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass-card space-y-6 p-8"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/images/profile.jpg"
                alt="Meet Hodar portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <p>
                I’m currently at the Institute of Technology, Nirma University (ICT, 2022–2026),
                specialising in digital systems, embedded programming, and semiconductor fundamentals.
                Hands-on labs, hackathons, and personal experiments fuel my growth.
              </p>
              <p>
                Outside class, you’ll find me dissecting RTL codebases, sketching verification plans,
                or translating lessons into blogs. My mission is simple: become the engineer who can
                speak both design and fabrication fluently.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Connect</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full border-white/10">
                  <Link href="mailto:hodarmeet99010@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/10"
                >
                  <Link
                    href="https://github.com/ChipMeet/hdl-learning"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/10"
                >
                  <Link
                    href="https://www.linkedin.com/in/meet-hodar-2200b1284"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="space-y-10"
          >
            <div className="glass-card space-y-6 p-8">
              <p className="text-sm text-slate-300">
                Problem-solving is my favourite part of engineering. I love starting from first
                principles, mapping truth tables, crafting RTL, and finally seeing clean waveforms on
                screen. The satisfaction of verifying a design after debugging for hours keeps me going.
              </p>

              <p className="text-sm text-slate-300">
                I’m currently exploring: pipelined datapaths, low-power design techniques, and how
                automation scripts can shrink verification cycles. When I’m not in front of VS Code,
                I’m reading semiconductor blogs or sketching ideas for future blog posts.
              </p>

              <Button
                asChild
                size="lg"
                className="rounded-full bg-brand-primary px-8 py-3 text-base font-semibold shadow-soft-lg hover:bg-blue-500"
              >
                <Link href="/resume">Download Resume</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="glass-card space-y-3 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                    {highlight.title}
                  </p>
                  <p className="text-sm text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-card space-y-4 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">What drives me</p>
              <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                {traits.map((trait) => (
                  <li
                    key={trait}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-primary" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
