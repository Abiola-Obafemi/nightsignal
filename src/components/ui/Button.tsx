import type { ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/utils"

type Variant = "primary" | "ghost" | "outline"
type Size = "sm" | "md" | "lg"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const base =
  "inline-flex items-center justify-center rounded-[10px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed"

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[#041018] hover:bg-[var(--accent-strong)] shadow-[0_0_20px_rgba(92,230,255,0.25)]",
  ghost: "bg-transparent text-[var(--text)] hover:bg-[var(--bg-surface)]",
  outline:
    "bg-transparent text-[var(--text-strong)] border border-[var(--border-strong)] hover:bg-[var(--bg-surface)]",
}

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-6 text-base",
}

export function Button({ variant = "primary", size = "md", className, ...props }: Props) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}
