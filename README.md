# FBI AI — Classified Dossier Landing Page

A cinematic, dossier-styled marketing page for an AI investigation agent, built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below — start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_0wNmu0j0XGP7g6HcUekTXROhBznG)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui, base-ui
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Language:** TypeScript

## Prerequisites

- **Node.js** 20 or later (Node 24 is used in development)
- **pnpm** 9 or later (this repo uses a `pnpm-lock.yaml` lockfile — using `npm` or `yarn` will work but will create a second, conflicting lockfile, so pnpm is recommended)

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

## Getting Started Locally

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Fbi-FrontEnd-Test
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files (Fast Refresh / HMR).

## Available Scripts

| Command       | Description                                             |
| ------------- | -------------------------------------------------------- |
| `pnpm dev`    | Starts the local development server with hot reload      |
| `pnpm build`  | Creates an optimized production build in `.next/`         |
| `pnpm start`  | Serves the production build (run `pnpm build` first)      |
| `pnpm lint`   | Runs ESLint over the project                              |

Example production run:

```bash
pnpm build
pnpm start
```

The app will be available at [http://localhost:3000](http://localhost:3000) by default. Set the `PORT` environment variable to use a different port, e.g. `PORT=4000 pnpm start`.

## Environment Variables

No environment variables are required to run this project locally — it is a static marketing page with no backend, database, or third-party API calls.

If you connect an integration (auth, database, analytics, etc.) through v0 later, any required variables will be added automatically to `.env.local` / your Vercel project settings.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, and metadata
  page.tsx            # Assembles all landing page sections
  globals.css         # Design tokens, theme, and global styles
components/
  fbi/                # All landing page sections and effects
    nav.tsx
    hero.tsx
    about.tsx
    workflow.tsx
    capabilities.tsx
    dashboard.tsx
    dossier-preview.tsx
    features.tsx
    comparison.tsx
    testimonials.tsx
    faq.tsx
    cta-footer.tsx
    background-effects.tsx
    mouse-glow.tsx
    primitives.tsx
  ui/                  # shadcn/ui primitives
public/
  dossier-subject.png       # Generated surveillance photo asset
  dossier-fingerprint.png   # Generated fingerprint asset
```

You can start editing the page by modifying `app/page.tsx` and the section components inside `components/fbi/`.

## Notes on Local Hosting

- `next.config.mjs` sets `images.unoptimized: true` so images work out of the box on any host (including static/self-hosted environments) without requiring the Next.js Image Optimization API.
- Baseline security response headers (`X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`) are set in `next.config.mjs` and apply to both local production runs (`pnpm build && pnpm start`) and any deployment.
- TypeScript build errors are set to non-blocking (`typescript.ignoreBuildErrors: true`) so the dev/build process won't fail on type issues — remove this in `next.config.mjs` if you want strict type-checking to block builds.

## Deploying

The recommended way to deploy is via [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to `main` on the connected GitHub repository to trigger an automatic deployment.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) — learn about Tailwind CSS v4.
- [Framer Motion Documentation](https://motion.dev) — learn about the animation library used throughout the page.
- [v0 Documentation](https://v0.app/docs) — learn about v0 and how to use it.
