import { Container } from "../ui/Container"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] py-6">
      <Container className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
        <span>NightSignal · after-midnight visual instrument</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" />
          Vite + React + TypeScript
        </span>
      </Container>
    </footer>
  )
}
