import { useState } from "react"
import { AppShell } from "./components/layout/AppShell"
import { Badge } from "./components/ui/Badge"
import { Button } from "./components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/Card"
import { Container } from "./components/ui/Container"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <AppShell>
      <Container>
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Foundation · Task 01</Badge>
              <Badge variant="muted">dark · runnable · tested</Badge>
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              NightSignal
              <span className="block text-lg font-normal tracking-wide text-[var(--text-muted)] sm:text-xl">
                A dark immersive signal observatory
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setCount(0)
              }}
            >
              Reset
            </Button>
            <Button
              onClick={() => {
                setCount((c) => c + 1)
              }}
            >
              Ping signal
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Observatory ready</CardTitle>
              <CardDescription>
                Strict TypeScript, linting, Vite + React, Vitest + Testing Library. Dark from the
                first paint.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <div className="text-xs tracking-widest text-[var(--text-muted)]">BUILD</div>
                  <div className="mt-1 text-sm font-medium text-[var(--text-strong)]">
                    tsc -b && vite build
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-muted)]">
                    type-checked, bundled, previewable
                  </div>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <div className="text-xs tracking-widest text-[var(--text-muted)]">
                    SIGNAL COUNT
                  </div>
                  <div className="mt-1 text-2xl font-semibold tabular-nums text-[var(--text-strong)]">
                    {count}
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-muted)]">
                    local state · HMR preserved
                  </div>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <div className="text-xs tracking-widest text-[var(--text-muted)]">STATUS</div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-medium text-[var(--success)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--success)] shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                    Listening
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-muted)]">foundation milestone</div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-[var(--border-strong)] bg-[rgba(14,18,32,0.6)] p-4">
                <div className="text-xs font-medium tracking-widest text-[var(--text-muted)]">
                  NEXT SHELL
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
                  Visual system, responsive shell, signal engine, radar, timeline, persistence,
                  command palette, a11y, performance, and shipping docs. This foundation keeps the
                  UI dark, the build green, and the component library reusable.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <span className="text-xs text-[var(--text-muted)]">
                Edit{" "}
                <code className="rounded bg-[var(--bg-muted)] px-1.5 py-0.5 font-mono text-xs text-[var(--text-strong)]">
                  src/App.tsx
                </code>{" "}
                and save to test HMR.
              </span>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reusable primitives</CardTitle>
              <CardDescription>Clean structure · small, composable UI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Badge</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Live</Badge>
                <Badge variant="muted">Muted</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2">
                  <span className="text-[var(--text-muted)]">src/components/ui</span>
                  <span className="font-mono text-xs text-[var(--text-strong)]">
                    Button · Card · Badge
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2">
                  <span className="text-[var(--text-muted)]">src/components/layout</span>
                  <span className="font-mono text-xs text-[var(--text-strong)]">
                    Header · AppShell
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2">
                  <span className="text-[var(--text-muted)]">src/lib</span>
                  <span className="font-mono text-xs text-[var(--text-strong)]">utils · cn()</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Dark rendered on first paint · color-scheme: dark
          </span>
          <span aria-hidden>·</span>
          <span>Strict TS · ESLint · Oxlint · Prettier · Vitest</span>
        </div>
      </Container>
    </AppShell>
  )
}
