# Portfolio CV — Matteo

Portfolio personale costruito con [Next.js](https://nextjs.org) (App Router), TypeScript e Tailwind CSS.

## Struttura

```
src/
├── app/           → routing e pagine (/, /about, /projects)
├── components/    → UI riutilizzabile (navbar, footer, …)
├── data/          → contenuti statici (progetti, skills, bio)
├── types/         → tipi TypeScript condivisi
└── lib/           → utility pure (quando servono)
```

## Comandi

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Git hooks

- **pre-commit** — lint-staged (ESLint + Prettier)
- **commit-msg** — commitlint (Conventional Commits)

Formato commit: `feat: add project card`, `fix: navbar active link`, ecc.
