import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  query?: Record<string, string>;
};

const MAX_PAGE_LINKS = 5;

/**
 * Reusable pagination component generating next/previous links with preserved query params.
 */
export function Pagination({
  currentPage,
  totalPages,
  basePath,
  query
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const searchParams = new URLSearchParams(query);

  const startPage = Math.max(
    1,
    currentPage - Math.floor(MAX_PAGE_LINKS / 2)
  );
  const endPage = Math.min(totalPages, startPage + MAX_PAGE_LINKS - 1);

  const pages = [];
  for (let page = startPage; page <= endPage; page += 1) {
    pages.push(page);
  }

  const buildHref = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${basePath}?${params.toString()}`;
  };

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <Link
        aria-label="Previous page"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-primary hover:text-brand-primary dark:border-slate-800 dark:text-slate-300',
          currentPage <= 1 && 'pointer-events-none opacity-40'
        )}
        href={buildHref(Math.max(1, currentPage - 1))}
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          className={cn(
            'inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full border text-sm font-semibold transition-colors',
            page === currentPage
              ? 'border-brand-primary bg-brand-primary text-white shadow-soft-lg'
              : 'border-slate-200 text-slate-600 hover:border-brand-primary hover:text-brand-primary dark:border-slate-800 dark:text-slate-300'
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        aria-label="Next page"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-primary hover:text-brand-primary dark:border-slate-800 dark:text-slate-300',
          currentPage >= totalPages && 'pointer-events-none opacity-40'
        )}
        href={buildHref(Math.min(totalPages, currentPage + 1))}
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}

