import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meet-hodar.vercel.app'),
  title: {
    default: 'Meet Hodar | VLSI & Semiconductor Engineer',
    template: '%s | Meet Hodar'
  },
  description:
    'Portfolio of Meet Hodar, an aspiring VLSI and semiconductor engineer focused on digital design, RTL development, and silicon-ready solutions.',
  openGraph: {
    title: 'Meet Hodar | VLSI & Semiconductor Engineer',
    description:
      'Explore Meet Hodar’s projects, writing, and journey into the semiconductor industry.',
    url: 'https://meet-hodar.vercel.app',
    siteName: 'Meet Hodar Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Hodar | VLSI & Semiconductor Engineer',
    description:
      'Explore Meet Hodar’s projects, writing, and journey into the semiconductor industry.'
  },
  keywords: [
    'Meet Hodar',
    'VLSI',
    'Semiconductor',
    'Digital Design',
    'Verilog',
    'RTL Design',
    'FPGA',
    'Hardware Engineering'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },
  authors: [{ name: 'Meet Hodar' }],
  creator: 'Meet Hodar',
  publisher: 'Meet Hodar',
  viewport: 'width=device-width, initial-scale=1'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-[#0b1120] text-slate-100 antialiased',
          inter.variable,
          poppins.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0b1120]">
            <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
            <Navbar />
            <main className="relative flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
