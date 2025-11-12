# Meet Hodar – VLSI Portfolio

Production-ready personal website for Meet Hodar, an aspiring VLSI & semiconductor engineer. Built with Next.js (App Router), Tailwind CSS, shadcn/ui, Prisma, and SQLite – ready for one-click deployment to Vercel.

## ✨ Features

- Modern responsive UI with dark/light mode and Framer Motion animations
- Dynamic blog powered by Prisma with Markdown rendering & syntax highlighting
- Contact form persisting messages to the database
- Projects showcase with category filters
- Resume hub with downloadable PDF
- SEO essentials: metadata, Open Graph, sitemap, robots.txt

## 🛠 Tech Stack

- Framework: [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- Styling: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Icons: [lucide-react](https://lucide.dev/)
- Markdown: [react-markdown](https://github.com/remarkjs/react-markdown) + `rehype-highlight`
- ORM: [Prisma](https://www.prisma.io/) with SQLite
- Hosting: [Vercel](https://vercel.com/)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Generate the Prisma client
npm run prisma:generate

# Run database migrations (optional for future changes)
npm run prisma:migrate

# Seed the database with demo blog posts
npm run db:seed

# Start the dev server
npm run dev
```

Visit `http://localhost:3000` to explore the site.

### Environment Variables

```
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

> Copy these values into `.env.local`. The SQLite database file will be created automatically at `prisma/dev.db`.

## 📚 Prisma & Database

- `npx prisma studio` opens a UI to inspect the database.
- `npm run db:seed` adds sample blog posts.
- API routes:
  - `POST /api/contact` – stores contact form submissions.
  - `GET/POST /api/blog` – list or create blog posts.
  - `GET/PUT/DELETE /api/blog/:slug` – fetch, update, or delete a post.
  - `POST /api/blog/seed` – reseed demo content (development only).

## 🧱 Project Structure

```
app/         # App Router pages & API routes
components/  # UI components (shared + shadcn/ui)
lib/         # Prisma client, utilities, validation
prisma/      # Prisma schema & seed script
public/      # Static assets (images, resume, favicon)
styles/      # Global Tailwind styles
types/       # Shared TypeScript types
```

## 🧼 Formatting & Linting

```bash
npm run lint      # ESLint
npm run format    # Prettier
```

## ☁️ Deploying to Vercel

1. Push the repository to GitHub.
2. Create a new Vercel project and import the repo.
3. Add environment variables (`DATABASE_URL`, `NEXT_PUBLIC_SITE_URL`).
4. Trigger the deployment – Vercel will run `prisma generate` and `next build` automatically.

> Tip: Because SQLite is file-based, consider using Prisma Accelerate, Vercel Postgres, or Neon for persistent production data. Update `DATABASE_URL` accordingly.

---

Made with ❤️ for Meet Hodar — let’s design the chips of tomorrow. ***!

