import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  status?: 'live' | 'in-progress' | 'upcoming';
  className?: string;
};

const statusCopy: Record<NonNullable<ProjectCardProps['status']>, string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  upcoming: 'Upcoming'
};

export function ProjectCard({
  title,
  description,
  tech,
  href,
  className,
  status = 'live'
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'glass-card relative flex flex-col gap-6 p-6 transition-transform hover:-translate-y-1.5 hover:shadow-glow',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">
            {statusCopy[status]}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          {tech[0]}
        </span>
      </div>

      <p className="text-sm text-slate-300">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition hover:text-blue-400"
      >
        <Github className="h-4 w-4" />
        View on GitHub
      </Link>
    </motion.article>
  );
}
