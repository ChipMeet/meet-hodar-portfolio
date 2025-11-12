import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/resume', label: 'Resume' }
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#070b16] py-12">
      <div className="section-container grid gap-10 md:grid-cols-[1.5fr,1fr]">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-white">Meet Hodar</p>
          <p className="max-w-md text-sm text-slate-300">
            B.Tech ICT student exploring the semiconductor universe—designing with
            Verilog, experimenting on FPGAs, and dreaming in silicon.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <Link
              href="mailto:hodarmeet99010@gmail.com"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-4 w-4" />
              hodarmeet99010@gmail.com
            </Link>
            <Link
              href="https://github.com/ChipMeet/hdl-learning"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/meet-hodar-2200b1284"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="grid gap-6 text-sm text-slate-300 sm:grid-cols-2 md:text-right">
          <div className="space-y-2 md:space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Navigate
            </p>
            <div className="flex flex-col gap-2 md:items-end">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Download
            </p>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-end gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Meet Hodar. All rights reserved.</p>
        <p className="text-slate-400">
          Powered by Next.js and Vercel · Designed for aspiring VLSI engineers.
        </p>
      </div>
    </footer>
  );
}
