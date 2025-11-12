import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlanetCanvas = dynamic(
  () => import('@/components/PlanetCanvas').then((mod) => mod.PlanetCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="section-container relative grid items-center gap-14 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-blue-200 shadow-glow">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            VLSI · RTL Design · Semiconductor Systems
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-[3.4rem] md:leading-[1.1]">
            Hi, I am <span className="text-brand-primary">Meet Hodar</span>
          </h1>

          <p className="max-w-xl text-lg text-slate-300">
            B.Tech ICT student obsessed with turning digital logic into silicon-ready
            designs. I prototype with Verilog &amp; SystemVerilog, explore FPGA flows, and
            document every learning along the way.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-primary px-8 py-3 text-base font-semibold shadow-soft-lg hover:bg-blue-500"
            >
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 px-8 py-3 text-base font-semibold text-white hover:border-brand-primary hover:text-brand-primary"
            >
              <Link href="/resume" prefetch={false}>
                View Resume
              </Link>
            </Button>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/profile.jpg"
                width={64}
                height={64}
                alt="Meet Hodar headshot"
                className="h-16 w-16 rounded-2xl border border-white/10 object-cover"
                priority
              />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-blue-200">
                  Current Focus
                </p>
                <p className="text-base text-slate-200">
                  Verilog practice · FPGA prototyping · ASIC design flows
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/10 bg-white/5 text-white hover:border-brand-primary hover:text-brand-primary"
              >
                <Link
                  href="https://github.com/ChipMeet/hdl-learning"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/10 bg-white/5 text-white hover:border-brand-primary hover:text-brand-primary"
              >
                <Link
                  href="https://www.linkedin.com/in/meet-hodar-2200b1284"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b1120] shadow-[0px_50px_120px_-40px_rgba(59,130,246,0.35)]"
        >
          <PlanetCanvas />
        </motion.div>
      </div>
    </section>
  );
}
