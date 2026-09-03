import { Badge } from "../ui/Badge"
import { Container } from "../ui/Container"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[rgba(7,10,18,0.8)] backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--bg-surface)] border border-[var(--border-strong)]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(92,230,255,0.8)]" />
          </span>
          <span className="text-sm font-semibold tracking-widest text-[var(--text-strong)]">
            NIGHTSIGNAL
          </span>
          <Badge variant="accent">3AM</Badge>
        </div>
        <nav
          aria-label="Primary"
          className="hidden sm:flex items-center gap-1 text-sm text-[var(--text-muted)]"
        >
          <span className="rounded-md px-3 py-1.5 text-[var(--text-strong)] bg-[var(--bg-surface)] border border-[var(--border)]">
            Observatory
          </span>
          <span className="px-3 py-1.5">Signals</span>
          <span className="px-3 py-1.5">Timeline</span>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex h-2 w-2 rounded-full bg-[var(--success)] shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
          <span className="text-xs text-[var(--text-muted)]">live</span>
        </div>
      </Container>
    </header>
  )
}
