import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';
import type { PostMeta } from '@/types/blog';

type PostPreviewProps = PostMeta & {
  href?: string;
};

export function PostPreview({
  slug,
  title,
  date,
  description,
  readingTime,
  href
}: PostPreviewProps) {
  const destination = href ?? `/posts/${slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="glass-card flex flex-col gap-4 p-6 transition-transform hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-blue-200">
        <span>{formatDate(date, 'MMM dd, yyyy')}</span>
        <span className="h-px flex-1 bg-white/15" />
        <span>{readingTime}</span>
      </div>
      <Link href={destination} className="group space-y-3">
        <h3 className="text-2xl font-semibold text-white transition group-hover:text-brand-primary">
          {title}
        </h3>
        <p className="text-sm text-slate-300">{description}</p>
        <span className="text-sm font-semibold text-brand-primary">
          Read More →
        </span>
      </Link>
    </motion.article>
  );
}

