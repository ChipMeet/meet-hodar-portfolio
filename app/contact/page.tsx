import type { Metadata } from 'next';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to Meet Hodar for collaborations, mentorship, or semiconductor deep dives.'
};

const directLinks = [
  {
    label: 'Email',
    value: 'meet.hodar@example.com',
    href: 'mailto:meet.hodar@example.com',
    icon: Mail
  },
  {
    label: 'GitHub',
    value: 'github.com/meethodar',
    href: 'https://github.com/meethodar',
    icon: Github
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/meet-hodar',
    href: 'https://www.linkedin.com/in/meet-hodar',
    icon: Linkedin
  }
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build the next breakthrough together"
        description="Whether you have a design challenge, need a fresh perspective on flows, or want to jam on open silicon, I’m ready to chat."
      />

      <section className="section-padding pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr,360px]">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Prefer a direct route?
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                I respond fastest via email, but you can also find me on GitHub and LinkedIn.
                I’m always excited to connect with fellow builders.
              </p>
              <div className="mt-6 space-y-4">
                {directLinks.map(({ label, value, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel={label === 'Email' ? undefined : 'noreferrer'}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors hover:border-brand-primary hover:text-brand-primary dark:border-slate-700 dark:text-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/20 dark:text-blue-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-semibold">{label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{value}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 group-hover:text-white">
                      Reach out
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-blue-400/60 bg-blue-500/5 p-6 text-sm leading-relaxed text-blue-900 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-100">
              <p>
                <strong className="font-semibold">Availability:</strong> Open for 2025 summer internships
                in RTL design, verification, or tooling. Remote collaborations welcome.
              </p>
              <p className="mt-3">
                I typically respond within 48 hours. If you don’t hear back, feel free to follow up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

