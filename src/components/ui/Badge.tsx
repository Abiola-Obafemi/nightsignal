import type { HTMLAttributes } from "react"
import { cn } from "../../lib/utils"

type Variant = "default" | "accent" | "muted" | "success"

const variants: Record<Variant, string> = {
  default: "bg-[var(--bg-muted)] text-[var(--text)] border-[var(--border)]",
  accent: "bg-[rgba(92,230,255,0.12)] text-[var(--accent)] border-[rgba(92,230,255,0.25)]",
  muted: "bg-transparent text-[var(--text-muted)] border-[var(--border)]",
  success: "bg-[rgba(52,211,153,0.12)] text-[var(--success)] border-[rgba(52,211,153,0.25)]",
}

interface Props extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

export function Badge({ variant = "default", className, ...props }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
