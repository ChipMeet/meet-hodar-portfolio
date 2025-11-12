"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/resume', label: 'Resume' }
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/70 backdrop-blur-xl">
      <nav className="section-container flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium uppercase tracking-wide text-blue-200">
            MH
          </span>
          Meet Hodar
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                pathname === item.href
                  ? 'text-brand-primary'
                  : 'text-slate-300 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="section-container pb-4 md:hidden">
          <div className="glass-card flex flex-col gap-4 p-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  'text-sm font-medium',
                  pathname === item.href
                    ? 'text-brand-primary'
                    : 'text-slate-200 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
