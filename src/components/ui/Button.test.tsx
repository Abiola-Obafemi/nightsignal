import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "./Button"

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("applies variant classes", () => {
    render(<Button variant="ghost">ghost</Button>)
    const btn = screen.getByRole("button", { name: /ghost/i })
    expect(btn.className).toContain("bg-transparent")
  })
})
