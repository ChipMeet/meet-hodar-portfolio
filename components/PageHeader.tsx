import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

/**
 * Animated page heading used across secondary routes for consistency.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className
}: PageHeaderProps) {
  return (
    <div className={cn('section-padding pt-16 md:pt-20', className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              {eyebrow}
            </p>
          ) : null}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {actions ? <div className="flex-shrink-0">{actions}</div> : null}
      </motion.div>
    </div>
  );
}

