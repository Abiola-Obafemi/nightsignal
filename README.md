# NightSignal

**Program:** 3AM

A dark immersive signal observatory and after-midnight visual instrument.

Hackatime project name is pinned by .wakatime-project.

OpenCode activity must remain transparent. Never manipulate time tracking or submit overlapping hours to multiple programs.

---

## Stack

Vite + React 19 + TypeScript (strict) · ESLint + oxlint · Prettier · Vitest + Testing Library · dark-first UI

## Requirements

- Node.js >= 18
- npm >= 9

## Commands

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm install`           | Install dependencies                     |
| `npm run dev`           | Start dev server (http://localhost:5173) |
| `npm run build`         | Type-check (`tsc -b`) + production build |
| `npm run preview`       | Preview production build                 |
| `npm run typecheck`     | Type-check without emitting              |
| `npm run lint`          | ESLint (strict type-checked)             |
| `npm run lint:fix`      | ESLint with auto-fix                     |
| `npx oxlint`            | Oxlint (react + typescript + oxc)        |
| `npm test`              | Run tests once (Vitest + jsdom)          |
| `npm run test:watch`    | Run tests in watch mode                  |
| `npm run test:coverage` | Run tests with coverage                  |
| `npm run format`        | Prettier write                           |
| `npm run format:check`  | Prettier check                           |

## Project structure

```
src/
  components/
    ui/          # Button, Card, Badge, Container — reusable, composable
    layout/      # Header, Footer, AppShell
  lib/           # utils (cn)
  test/          # setup.ts (jest-dom)
  App.tsx
  main.tsx
  index.css      # dark design tokens, first-paint dark background
public/
  favicon.svg
index.html       # color-scheme: dark, theme-color, inline dark bg to avoid FOUC
vite.config.ts   # + vitest (jsdom, setupFiles)
tsconfig.*       # strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes …
eslint.config.js # typescript-eslint strictTypeChecked + react-hooks
.oxlintrc.json
.prettierrc
```

## Dark UI

The UI is dark from the first render: `index.html` inlines `background:#070A12` and `color-scheme:dark`, `theme-color` is set, and `src/index.css` defines the dark token palette. No light flash on load.

## Tests

- `src/App.test.tsx` — renders heading, status, and Ping/Reset interaction
- `src/components/ui/Button.test.tsx` — reusable Button primitive
- Setup in `src/test/setup.ts` via `@testing-library/jest-dom/vitest`

Run `npm test` to verify.
