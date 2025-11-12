import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './styles/**/*.css',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2563EB',
          secondary: '#0EA5E9'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heading: ['var(--font-poppins)', ...fontFamily.sans]
      },
      boxShadow: {
        'soft-lg': '0 30px 60px -15px rgba(37, 99, 235, 0.35)',
        glow: '0 0 40px rgba(37, 99, 235, 0.4)'
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top left, rgba(59,130,246,0.35), transparent 60%), radial-gradient(circle at bottom right, rgba(14,165,233,0.35), transparent 55%)'
      },
      borderRadius: {
        glass: '1.75rem'
      }
    }
  },
  plugins: [typography]
};

export default config;

