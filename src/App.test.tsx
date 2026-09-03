import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("App", () => {
  it("renders NightSignal heading", () => {
    render(<App />)
    expect(screen.getByText("NightSignal")).toBeInTheDocument()
  })

  it("renders observatory status", () => {
    render(<App />)
    expect(screen.getByText("Observatory ready")).toBeInTheDocument()
    expect(screen.getByText("Listening")).toBeInTheDocument()
  })

  it("increments signal count on ping", async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole("button", { name: /ping signal/i })
    expect(button).toBeInTheDocument()
    await user.click(button)
    // count becomes 1 and is displayed as tabular number inside card
    expect(screen.getByText("1")).toBeInTheDocument()
  })

  it("resets count", async () => {
    const user = userEvent.setup()
    render(<App />)
    const ping = screen.getByRole("button", { name: /ping signal/i })
    const reset = screen.getByRole("button", { name: /reset/i })
    await user.click(ping)
    await user.click(ping)
    expect(screen.getByText("2")).toBeInTheDocument()
    await user.click(reset)
    expect(screen.getByText("0")).toBeInTheDocument()
  })
})
